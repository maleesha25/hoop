
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const messageRoutes = require("./routes/message");

const app = express();

app.use(
    cors({
        origin: process.env.FRONTEND_URL || "http://localhost:3000",
    })
);

app.use(express.json({ limit: "100kb" }));

// Reuse the connection within this server instance.
let connectionPromise;

async function connectDB() {
    if (!process.env.MONGODB_URI) {
        throw new Error("MONGODB_URI is not configured");
    }

    if (!connectionPromise) {
        connectionPromise = mongoose
            .connect(process.env.MONGODB_URI, {
                serverSelectionTimeoutMS: 10000,
                maxPoolSize: 5,
            })
            .catch((error) => {
                connectionPromise = undefined;
                throw error;
            });
    }

    return connectionPromise;
}

// Checks the API and database connection.
app.get("/api/health", async (req, res) => {
    try {
        await connectDB();

        res.json({
            status: "ok",
            database: "connected",
        });
    } catch (error) {
        console.error("Database health check failed:", error.message);

        res.status(503).json({
            status: "error",
            message: "Database unavailable",
        });
    }
});

// Wait for MongoDB before processing message requests.
app.use(
    "/api/messages",
    async (req, res, next) => {
        try {
            await connectDB();
            next();
        } catch (error) {
            console.error("Database connection failed:", error.message);

            res.status(503).json({
                message: "Service temporarily unavailable. Please try again.",
            });
        }
    },
    messageRoutes
);

// Run a local server when started with `node server.js`.
if (require.main === module) {
    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

// Vercel uses this exported Express app.
module.exports = app;