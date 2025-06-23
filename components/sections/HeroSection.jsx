import {GradientText} from "@/components/ui/GradientText";
import {Button} from "@/components/ui/Button";
import {Avatar} from "@/components/ui/Avatar";
import {Rocket} from "lucide-react";

const ArrowIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
);

export const HeroSection = () => {
    return (
        <main className="px-8 py-20 text-center relative">
            <div className="max-w-4xl mx-auto">
                {/*<h1 className="text-display-xl text-white mb-8 leading-tight">*/}
                {/*    Where{' '}*/}
                {/*    <GradientText>Creativity</GradientText>*/}
                {/*    <br />*/}
                {/*    Meets Strategy*/}
                {/*</h1>*/}

                <img src="/images/wherecreativitymeetsstrategy.svg" alt="Logo" className=""/>

                <p className="text-display-xs text mb-12 max-w-3xl mx-auto leading-relaxed text-gray-500">
                    Leqta is a full-service content marketing & production company based in
                    Algiers. We combine storytelling, strategy,
                    and visual excellence to
                    empower your brand with impactful video content.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button rightIcon={<Rocket className="w-4 h-4 ml-2"/>} >
                        Get Started
                    </Button>
                    <Button variant="secondary">
                        Contact Us
                    </Button>
                </div>
            </div>

        </main>
    );
};