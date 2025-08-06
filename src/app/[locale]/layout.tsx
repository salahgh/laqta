import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/src/i18n/routing";
import type { Metadata } from "next";
import React from "react";
import "../../../styles/globals.css";

export const metadata: Metadata = {
    title: "Laqta Design System",
    description: "Starter with modern App Router",
};
export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    // Ensure that the incoming `locale` is valid
    const { locale } = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    return (
        <html lang={locale}>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Gotham:wght@100;200;300;400;500;600;700;800;900&display=swap"
                    rel="stylesheet"
                />
                <title>dfef</title>
            </head>
            <body className="min-h-screen font-sans antialiased bg-black flex flex-col items-center">
                <main className="flex-1 w-full xl:max-w-[1514px]">
                    <NextIntlClientProvider>{children}</NextIntlClientProvider>
                </main>
            </body>
        </html>
    );
}
