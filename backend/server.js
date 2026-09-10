const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const messageRoutes = require("./routes/message");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect("mongodb://localhost:27017/hoop")
    .then(() => { console.log("Connected to MongoDB"); })
    .catch((error) => { console.error("Error connecting to MongoDB:", error); });

app.use(
    cors({
        origin: process.env.FRONTEND_URL || "http://localhost:3000",
    })
);

app.use(express.json());

app.use("/api/messages", messageRoutes);


app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`); });