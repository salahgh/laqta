// Hero Section Component
import { ArrowRight, Rocket } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/Button";

export const HeroSection = () => (
    <section className="flex items-center justify-between px-6 py-16 max-w-7xl mx-auto">
        <div className="flex-1 max-w-xl">
            <div className="mb-8">
                <span
                    className="inline-block border px-6 py-4 rounded-full shadow-lg"
                    style={{
                        color: "#54B3F1",
                        borderColor: "#54B3F1",
                        fontSize: 20,
                    }}
                >
                    About Leqta
                </span>
            </div>

            <h1
                className="text-white mb-6 leading-tight"
                style={{ fontSize: 56, lineHeight: "1.2" }}
            >
                We are{" "}
                <span className="font-semibold" style={{ color: "#54B3F1" }}>
                    LEQTA
                </span>
            </h1>

            <p
                className="mb-8 leading-relaxed"
                style={{ fontSize: 28, color: "#C6BBBB" }}
            >
                A content marketing & film production agency based in Algiers.s
                We serve brands, businesses, and changemakers with purposeful
                video content that blends creativity and strategy.
            </p>

            <div className="flex gap-4">
                <div className={"flex h-16 gap-4"} style={{ maxWidth: 500 }}>
                    <Button
                        variant={"primary"}
                        rightIcon={<Rocket />}
                        style={{ width: 300 }}
                    >
                        Get Started
                    </Button>
                    <Button
                        variant={"secondary"}
                        style={{ width: 300 }}
                        rightIcon={<ArrowRight />}
                    >
                        Contact Us
                    </Button>
                </div>
            </div>
        </div>

        <div className="flex-1 flex justify-end">
            <div className="relative">
                <div className="">
                    <img
                        src="/images/hero_section_2.png"
                        alt="Logo"
                        // style={{ marginTop: "-20px" }}
                    />
                </div>
            </div>
        </div>
    </section>
);
