import {GradientText} from "@/components/ui/GradientText";
import {Button} from "@/components/ui/Button";
import {Avatar} from "@/components/ui/Avatar";
import {Rocket} from "lucide-react";

const ArrowIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
    </svg>
);

export const HeroSection = () => {
    return (
        <div className="text-center relative flex flex-col items-center justify-center ">
            <div className="flex flex-col" style={{height: 420, width: 1011}}>
                {/*<h1 className="text-display-xl text-white mb-8 leading-tight">*/}
                {/*    Where{' '}*/}
                {/*    <GradientText>Creativity</GradientText>*/}
                {/*    <br />*/}
                {/*    Meets Strategy*/}
                {/*</h1>*/}

                <img src="/images/wherecreativitymeetsstrategy.svg" alt="Logo"
                     style={{marginTop : '-20px'}}
                />

                <p className="text-display-xs text-gray-500 font-medium" style={{marginTop: -55}}>
                    Leqta is a full-service content marketing & production company based in
                    Algiers. We combine storytelling, strategy,
                    and visual excellence to
                    empower your brand with impactful video content.
                </p>

                <div className={'flex-1'}></div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button rightIcon={<Rocket className="w-4 h-10 ml-2"/>}>
                        Get Started
                    </Button>
                    <Button variant="secondary">
                        Contact Us
                    </Button>
                </div>
            </div>

        </div>
    );
};