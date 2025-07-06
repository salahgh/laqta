import { HeroSection } from "@/components/sections/HeroSection";
import { Navigation } from "@/components/layout/Navigation";
import AboutSection from "@/components/sections/aboutLaqta";
import { CustomIllustration } from "@/components/ui/CustomIllustration";
import { ServicesSection } from "@/components/sections/ServicesSection";
import OurWorks from "@/components/sections/OurWorksSection";
import YourPerfectPartner from "@/components/sections/YourPerfectPartner";
import TestimonialsSection from "@/components/sections/successStories/SuccessStories";
import ContactUs from "@/components/sections/ContactUs";
import Footer from "@/components/sections/Footer";
import React from "react";
import FAQSection from "@/components/sections/FAQSection";

export const metadata = {
    title: "Leqta | Where Creativity Meets Strategy",
};

// todo adujust the size of the navigation bar all items should have the same height

export default function Home() {
    return (
        <div className="w-full">
            {/*<LayoutInfo></LayoutInfo>*/}
            <Navigation />
            <div className="w-full xl:max-w-[1514px] xl:mx-auto">
                <HeroSection />
                <AboutSection illustration={<CustomIllustration />} />
                <ServicesSection />
                <OurWorks />
                <YourPerfectPartner />
                <TestimonialsSection />
                <FAQSection />
                <ContactUs />
            </div>
            <Footer />
        </div>
    );
}
