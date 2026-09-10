import "../../globals.css";

export const metadata = {
  title: "HOOP — Digital Experiences",
  description: "A responsive digital agency portfolio built with Next.js.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}





