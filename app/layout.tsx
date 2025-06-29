import "@/styles/globals.css";
import type { Metadata } from "next";
import React from "react";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Laqta Design System",
  description: "Starter with modern App Router",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
              rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Gotham:wght@100;200;300;400;500;600;700;800;900&display=swap"
              rel="stylesheet"/>
      </head>
      <body className="min-h-screen flex flex-col items-center font-sans antialiased bg-gray-400">
        <main className="flex-1 w-full " style={{maxWidth: 1514}}>
          {children}
        </main>
      </body>
    </html>
  );
}
