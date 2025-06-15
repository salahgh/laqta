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
      <body className="min-h-screen flex flex-col font-sans antialiased bg-neutral-50">
        <Navbar />
        <main className="flex-1 mx-auto w-full max-w-7xl px-4 py-lg">
          {children}
        </main>
      </body>
    </html>
  );
}
