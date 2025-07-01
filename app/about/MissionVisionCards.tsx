import React from "react";
import { Telescope, Users, Wand2 } from "lucide-react";
import { Card } from "@/app/about/card";

const MissionVisionCards = () => {
    const cards = [
        {
            id: "mission",
            icon: Users,
            iconSrc: null, // Replace with your PNG path: "/path/to/mission-icon.png"
            title: "Mission",
            description:
                "Empowering businesses through innovative content and filmmaking",
        },
        {
            id: "vision",
            icon: Telescope,
            iconSrc: null, // Replace with your PNG path: "/path/to/vision-icon.png"
            title: "Vision",
            description:
                "Leading Algeria's creative industry with impactful video content",
        },
        {
            id: "signature",
            icon: Wand2,
            iconSrc: null, // Replace with your PNG path: "/path/to/signature-icon.png"
            title: "Signature",
            description: "Where creativity meets strategy",
        },
    ];

    return (
        <div className=" p-8 flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:px-16 px-2">
                {cards.map((card, index) => (
                    <Card
                        key={card.id}
                        icon={card.icon}
                        iconSrc={card.iconSrc}
                        title={card.title}
                        description={card.description}
                        className="hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-3xl"
                    />
                ))}
            </div>
        </div>
    );
};

export default MissionVisionCards;
