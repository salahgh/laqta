import React, { Suspense } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { HeroSection } from "@/app/about/heroSection";
import MissionVisionCards from "@/app/about/MissionVisionCards";
import Footer from "@/components/sections/Footer";
import { CompetitiveEdge } from "@/app/about/competitiveEdge";

// Main Homepage Component - Make it async to handle async components
export default async function AboutPage() {
    return (
        <div className="bg-gradient-to-br from-blue-950 via-blue-900 to-purple-900">
            <Navigation />
            <HeroSection />
            {/* @ts-expect-error Server Component */}
            <MissionVisionCards />
            <CompetitiveEdge />
            <Footer />
        </div>
    );
}
