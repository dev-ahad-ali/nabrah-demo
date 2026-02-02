import type { Metadata } from "next";
import "./globals.css";
import MainNavbar from "@/components/shared/Navbar";

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
            <body className={`antialiased dark bg-background`}>
                <MainNavbar />
                {children}
            </body>
        </html>
    );
}
