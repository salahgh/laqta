import { Rocket } from "lucide-react";
import { Button } from "@/components/ui/Button";

// Main About Section Component
const AboutSection = ({
    badge = "About Leqta",
    title = "We are LEQTA",
    description = "A content marketing & film production agency based in Algiers. We serve brands, businesses, and changemakers with purposeful video content that blends creativity and strategy.",
    primaryButtonText = "Get Started",
    primaryButtonIcon = <Rocket className="w-4 h-4 ml-2" />,
    secondaryButtonText = "Learn more",
    illustration,
    className = "",
}) => {
    // @ts-ignore
    // @ts-ignore
    return (
        <div
            className={`bg-gradient-to-br from-gray-50 to-white rounded-2xl md:rounded-3xl shadow-2xl ${className} p-4 pt-8
            md:p-24 md:flex 
            `}
        >
            {/* Content Section */}
            <div className="space-y-6">
                {/* Badge */}
                <div className="items-center justify-center md:text-display-xl">
                    <span
                        className="p-4 py-2 rounded-full bg-gray-800 text-body-xl"
                        style={{
                            color: "#54B3F1",
                            backgroundColor: "#e9f0fc",
                        }}
                    >
                        {badge}
                    </span>
                </div>
                <h2 className="text-black md:text-[56px] text-[40 px] leading-tight">
                    {title.split(" ").map((word, index) => (
                        <span
                            key={index}
                            style={{
                                fontWeight: word === "LEQTA" ? "700" : "500",
                            }}
                            className={
                                word === "LEQTA"
                                    ? "bg-gradient-to-b from-[#1370AD] to-[#ABDEFF] bg-clip-text text-transparent"
                                    : ""
                            }
                        >
                            {word}{" "}
                        </span>
                    ))}
                </h2>
                {/* Description */}
                <p className="md:text-display-xs text-secondary-gray leading-relaxed">
                    {description}
                </p>
                {/*Buttons*/}
                <div className="flex gap-4" style={{ height: 61 }}>
                    <div className={"h-12 md:h-16"}>
                        <Button
                            variant="primary"
                            className=""
                            rightIcon={<Rocket className="w-4 h-4 ml-2" />}
                        >
                            {primaryButtonText}
                        </Button>
                    </div>
                    <div className={"h-12 md:h-16"}>
                        <Button variant="secondary" className="">
                            {secondaryButtonText}
                        </Button>
                    </div>
                </div>
            </div>
            {/* Illustration Section */}
            <div className="">
                <div
                    className="flex justify-center items-center lg:justify-endrelative z-10 md:w-[474px]
                ml-4 md:ml-32 mt-[-15px] md:mt-0"
                >
                    {illustration || (
                        // Fallback illustration if none provided
                        <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8 aspect-square flex items-center justify-center">
                            <div className="text-6xl text-blue-500">🎬</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
