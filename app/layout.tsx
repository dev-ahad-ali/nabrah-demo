import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Nabrah",
    description: "Nabrah AI",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`antialiased dark bg-background`}>{children}</body>
        </html>
    );
}
