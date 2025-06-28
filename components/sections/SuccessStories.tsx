"use client";
import React, { useState } from "react";
import LetsStartProjectSection from "@/components/sections/LetsStartProjectSection";

const ProfileAvatar = ({ position }) => {
    return (
        <div className={`absolute ${position}`}>
            <div className="w-12 h-12 bg-white rounded-full p-1 shadow-lg">
                <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                    {/* Person avatar */}
                    <div className="w-6 h-6 bg-orange-300 rounded-full"></div>
                    {/* Dog avatar */}
                    <div className="w-6 h-6 bg-gray-600 rounded-full ml-1"></div>
                </div>
            </div>
        </div>
    );
};

const StarRating = () => {
    return (
        <div className="flex justify-center gap-1 mb-8">
            <img src="/images/five_start_rating.png" alt="Logo" />
        </div>
    );
};

const TestimonialCard = ({ testimonial, author, role, avatar }) => {
    return (
        <div className="flex flex-col justify-center items-center max-w-4xl mx-auto">
            <StarRating />

            <blockquote
                className="leading-relaxed text-display-xs text-center"
                style={{ color: "#38383A", marginBottom: 64 }}
            >
                "{testimonial}"
            </blockquote>

            <div
                className="bg-gray-100 gap-4 border rounded-full flex items-center justify-center  pr-4 pl-2 pt-2 pb-2"
                // style={{ maxWidth: 300 }}
            >
                <div className="w-14 h-14 bg-gray-800 rounded-full flex items-center justify-center">
                    <img
                        src="/images/avatar.png"
                        alt="Logo"
                        className="w-full h-full"
                    />
                </div>
                <div className="text-left">
                    <div className="font-semibold text-gray-900 text-lg">
                        {author}
                    </div>
                    <div className="text-gray-500 text-sm">{role}</div>
                </div>
            </div>
        </div>
    );
};

const PaginationDots = ({ total, current, onChange }) => {
    return (
        <div className="flex justify-center gap-4 mt-16" style={{ gap: 19 }}>
            {[...Array(total)].map((_, i) => (
                <button
                    key={i}
                    onClick={() => onChange(i)}
                    className={`w-4 h-4 rounded-full transition-colors ${
                        i === current ? "bg-blue-500" : "bg-gray-300"
                    }`}
                    style={{
                        backgroundColor: i === current ? "#136fac" : "#d6dff2",
                    }}
                    aria-label={`Go to testimonial ${i + 1}`}
                />
            ))}
        </div>
    );
};

const TestimonialsSection = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const testimonials = [
        {
            testimonial:
                "Before subscribing to this service, our marketing was all over the place. We struggled with social media, our website traffic was low, and email campaigns barely got any response. Since joining, we've seen a 250% increase in organic traffic and our customer engagement has never been better.",
            author: "Lyes OUAZZI",
            role: "Digital Agency Owner",
            avatar: "LO",
        },
        {
            testimonial:
                "The transformation has been incredible. Their strategic approach helped us identify our target audience better and create content that actually converts. Our ROI has improved by 180% in just 6 months.",
            author: "Sarah Johnson",
            role: "Marketing Director",
            avatar: "SJ",
        },
        {
            testimonial:
                "Working with this team has been a game-changer for our startup. They helped us build a solid marketing foundation from scratch and our user acquisition costs dropped by 40%.",
            author: "Mike Chen",
            role: "Startup Founder",
            avatar: "MC",
        },
        {
            testimonial:
                "Their data-driven approach and attention to detail is unmatched. We've seen consistent growth month over month, and their reporting keeps us informed every step of the way.",
            author: "Emma Williams",
            role: "E-commerce Owner",
            avatar: "EW",
        },
        {
            testimonial:
                "The best investment we've made for our business. Their team understands our industry and delivered results that exceeded our expectations. Highly recommended!",
            author: "David Rodriguez",
            role: "CEO",
            avatar: "DR",
        },
    ];

    return (
        <div className="bg-amber-100" style={{ height: 1573.47 }}>
            <div
                className="z-10  "
                style={{
                    height: 1003.47,
                    paddingTop: 128,
                    paddingLeft: 82,
                    paddingRight: 82,
                    paddingBottom: 128,
                    backgroundColor: "#FDFDFD",
                }}
            >
                {/* Header section */}
                <div className="text-center mb-16">
                    <div className="mb-8">
                        <span
                            className="inline-block border px-6 py-4 rounded-full shadow-lg"
                            style={{
                                color: "#54B3F1",
                                borderColor: "#54B3F1",
                                fontSize: 20,
                            }}
                        >
                            Testimonials
                        </span>
                    </div>

                    <h1
                        className="mb-8 leading-tight"
                        style={{ fontSize: 56, fontWeight: "500" }}
                    >
                        Success Stories From Our
                        <br />
                        Happy Clients
                    </h1>
                </div>

                {/* Testimonial content */}
                <div className="mb-8">
                    <TestimonialCard
                        testimonial={
                            testimonials[currentTestimonial].testimonial
                        }
                        author={testimonials[currentTestimonial].author}
                        role={testimonials[currentTestimonial].role}
                        avatar={testimonials[currentTestimonial].avatar}
                    />
                </div>

                {/* Pagination dots */}
                <PaginationDots
                    total={testimonials.length}
                    current={currentTestimonial}
                    onChange={setCurrentTestimonial}
                />
            </div>
            <LetsStartProjectSection />
        </div>
    );
};

export default TestimonialsSection;
