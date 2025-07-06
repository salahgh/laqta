// Hero Section Component
import { ArrowRight, Rocket } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

const title = "We are LEQTA";

export const HeroSection = () => (
    <section className="flex lg:flex-row flex-col items-center md:px-8 px-4 py-16 space-y-6 md:space-y-8">
        <div className="flex-1 space-y-4 md:space-y-6">
            <Badge>About Leqta</Badge>

            <h2 className="text-gray-200 leading-tight py-2">
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

            <p className="leading-relaxed text-secondary-gray text-responsive-lg">
                A content marketing & film production agency based in Algiers.s
                We serve brands, businesses, and changemakers with purposeful
                video content that blends creativity and strategy.
            </p>

            <div className="flex flex-col md:flex-row md:gap-4 gap-2 h-24 md:h-16 ">
                <Button
                    variant={"primary"}
                    rightIcon={<Rocket />}
                    // style={{ width: 300 }}
                >
                    Get Started
                </Button>
                <Button
                    variant={"secondary"}
                    // style={{ width: 300 }}
                    rightIcon={<ArrowRight />}
                >
                    Contact Us
                </Button>
            </div>
        </div>

        <div className="flex-1">
            <img
                src="/images/hero_section_2.png"
                alt="Logo"
                // style={{ marginTop: "-20px" }}
            />
        </div>
    </section>
);
