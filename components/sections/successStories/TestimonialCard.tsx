import { StarRating } from "@/components/sections/successStories/StarRating";
import React from "react";

export const TestimonialCard = ({ testimonial, author, role, avatar }) => {
    return (
        <div className="flex flex-col justify-center items-center max-w-4xl mx-auto">
            <StarRating />

            <blockquote className="text-secondary-gray leading-relaxed text-body-md md:text-display-xs text-center">
                "{testimonial}"
            </blockquote>

            <div
                className="bg-gray-100 gap-4 border rounded-full flex items-center justify-center  pr-4 pl-2 pt-2 pb-2 mt-8"
                // style={{ maxWidth: 300 }}
            >
                <div className="md:w-14 md:h-14 w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                    <img
                        src="/images/avatar.png"
                        alt="Logo"
                        className="w-full h-full"
                    />
                </div>
                <div className="text-left text-body-xs md:text-body-xl">
                    <div className="font-semibold text-gray-900">{author}</div>
                    <div className="text-gray-500 text-body-xs md:text-body-xl">
                        {role}
                    </div>
                </div>
            </div>
        </div>
    );
};