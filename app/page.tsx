import { HeroSection } from "@/components/sections/HeroSection";
import { Navigation } from "@/components/layout/Navigation";
import AboutSection from "@/components/sections/aboutLaqta";
import { CustomIllustration } from "@/components/ui/CustomIllustration";
import ServicesSection from "@/components/sections/ServicesSection";
import OurWorks from "@/components/sections/OurWorksSection";
import YourPerfectPartner from "@/components/sections/YourPerfectPartner";
import ContactUs from "@/components/sections/ContactUs";
import Footer from "@/components/sections/Footer";
import React from "react";
import { TestimonialsSectionWrapper } from "@/components/sections/successStories/TestimonialSectionWrapper";
import FAQSectionWrapper from "@/components/sections/FAQSection/FAQSectionWrapper";

export const metadata = {
    title: "Leqta | Where Creativity Meets Strategy",
};

export default async function Home() {
    return (
        <div className="w-full">
            {/*<LayoutInfo></LayoutInfo>*/}
            <div className="w-full xl:max-w-[1514px] xl:mx-auto">
                <HeroSection />
                <AboutSection illustration={<CustomIllustration />} />
                <ServicesSection />
                <OurWorks />
                <YourPerfectPartner />
                <TestimonialsSectionWrapper />
                <FAQSectionWrapper />
                <ContactUs />
            </div>
            {/*<Footer />*/}
        </div>
    );
}
