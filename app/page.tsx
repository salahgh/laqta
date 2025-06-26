// components/ui/Button.jsx
// components/ui/Logo.jsx
// components/ui/LanguageSelector.jsx
// components/ui/Navigation.jsx
// components/ui/GradientText.jsx
// components/ui/Avatar.jsx
// components/sections/HeroSection.jsx
// components/ui/WaveBackground.jsx
// Main page component


import {HeroSection} from "@/components/sections/HeroSection";
import {Navigation} from "@/components/layout/Navigation";
import AboutSection from "@/components/sections/aboutLaqta";
import {CustomIllustration} from "@/components/ui/CustomIllustration";
import {ServicesSection} from "@/components/sections/ServicesSection";
import OurWorks from "@/components/sections/OurWorksSection";
import YourPerfectPartner from "@/components/sections/YourPerfectPartner";
import TestimonialsSection from "@/components/sections/SuccessStories";
import LetsStartProjectSection from "@/components/sections/LetsStartProjectSection";
import FAQSection from "@/components/sections/FAQSection";

export const metadata = {
    title: "Leqta | Where Creativity Meets Strategy",
};

// todo adujust the size of the navigation bar all items should have the same height

export default function Home() {
    return (
        <div className=" relative">
            <div className={'bg-background flex flex-col justify-between'} style={{height: 920}}>
                <Navigation/>
                <HeroSection/>
                <div className={'h-[105px]'}></div>
            </div>

            <AboutSection illustration={<CustomIllustration/>}/>
            {/*<ServicesSection/>*/}
            {/*<OurWorks/>*/}
            {/*<YourPerfectPartner/>*/}
            {/*<TestimonialsSection/>*/}
            {/*<LetsStartProjectSection/>*/}
            {/*<FAQSection/>*/}
        </div>
    );
}