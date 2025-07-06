import { GradientText } from "@/components/ui/GradientText";
import { Button } from "@/components/ui/Button";
import { Avatar } from "@/components/ui/Avatar";
import { Rocket } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

const ArrowIcon = () => (
    <svg
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
    </svg>
);

export const HeroSection = () => {
    return (
        <div className="relative flex flex-col items-center justify-center bg-primary text-center p-4 sm:p-12 md:pb-24 lg:pb-36">
            <div className={"pt-8 md:pt-0"}>
                <Logo className={"md:hidden"} />
            </div>

            <img
                src="/images/wherecreativitymeetsstrategy.svg"
                alt="Logo"
                className={"padding-responsive-lg "}
            />
            <p
                className="text-responsive-lg font-medium text-secondary-gray padding-responsive-lg
            text-justify
             sm:text-center md:px-12 md:text-justify lg:text-center xl:px-40"
            >
                Leqta is a full-service content marketing & production company
                based in Algiers. We combine storytelling, strategy, and visual
                excellence to empower your brand with impactful video content.
            </p>

            <div className={"h-8 md:h-[56px]"}></div>

            <div className="flex w-full flex-col items-center justify-center gap-4 md:w-auto md:flex-row">
                <div className={"h-12 w-full md:h-16 md:w-auto"}>
                    <Button rightIcon={<Rocket className="ml-2 h-10 w-4" />}>
                        Get Started
                    </Button>
                </div>
                <div className={"h-12 w-full md:h-16 md:w-auto"}>
                    <Button variant="secondary">Contact Us</Button>
                </div>
            </div>
        </div>
    );
};
