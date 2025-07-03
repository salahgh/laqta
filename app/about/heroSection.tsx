// Hero Section Component
import { ArrowRight, Rocket } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

const title = "We are LEQTA";

export const HeroSection = () => (
    <section className="flex md:flex-row flex-col items-center md:px-16 px-8 py-16">
        <div className="flex-1 ">
            <Badge>About Leqta</Badge>

            <h2 className="text-gray-200 md:text-[56px] text-[40px] leading-tight">
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

            <p className="leading-relaxed text-secondary-gray text-body-md md:text-display-xs mt-4">
                A content marketing & film production agency based in Algiers.s
                We serve brands, businesses, and changemakers with purposeful
                video content that blends creativity and strategy.
            </p>

            <div className="flex md:flex-row flex-col md:gap-4 gap-2 md:h-16 md:mt-12 mt-4 ">
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

        <div className="flex-1 mt-12">
            <img
                src="/images/hero_section_2.png"
                alt="Logo"
                // style={{ marginTop: "-20px" }}
            />
        </div>
    </section>
);
