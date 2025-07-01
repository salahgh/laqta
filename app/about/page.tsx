import React from "react";
import { Navigation } from "@/components/layout/Navigation";
import { HeroSection } from "@/app/about/heroSection";
import MissionVisionCards from "@/app/about/MissionVisionCards";
import Footer from "@/components/sections/Footer";
import { CompetitiveEdge } from "@/app/about/competitiveEdge";

// Main Homepage Component
const LeqtaHomepage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-purple-900">
        <Navigation />
        <HeroSection />
        <MissionVisionCards />
        <CompetitiveEdge />
        <Footer />
    </div>
);

export default LeqtaHomepage;
