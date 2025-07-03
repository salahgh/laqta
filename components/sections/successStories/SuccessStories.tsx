"use client";
import React, { useState, useEffect } from "react";
import LetsStartProjectSection from "@/components/sections/LetsStartProjectSection";
import { TestimonialCard } from "@/components/sections/successStories/TestimonialCard";
import { PaginationDots } from "@/components/sections/successStories/PaginationDots";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

const TestimonialsSection = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

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

    // Navigation functions
    const goToPrevious = () => {
        setCurrentTestimonial((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1,
        );
    };

    const goToNext = () => {
        setCurrentTestimonial((prev) =>
            prev === testimonials.length - 1 ? 0 : prev + 1,
        );
    };

    // Touch handlers for mobile swipe
    const handleTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) {
            goToNext();
        } else if (isRightSwipe) {
            goToPrevious();
        }
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.key === "ArrowLeft") {
                goToPrevious();
            } else if (e.key === "ArrowRight") {
                goToNext();
            }
        };

        window.addEventListener("keydown", handleKeyPress);
        return () => window.removeEventListener("keydown", handleKeyPress);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            goToNext();
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [currentTestimonial]);

    return (
        <div className="bg-gray-100 md:pt-20 pt-8">
            {/* Header section */}
            <div className="text-center mb-16 px-3">
                <Badge>Testimonials</Badge>

                <h1 className="mb-8 leading-tight text-display-md md:text-display-xl">
                    Success Stories From Our
                    <br />
                    Happy Clients
                </h1>
            </div>

            {/* Testimonial carousel container */}
            <div className="relative px-3 mb-8">
                {/* Navigation buttons - Desktop */}
                <button
                    onClick={goToPrevious}
                    className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center hover:bg-gray-50 transition-colors"
                    aria-label="Previous testimonial"
                >
                    <ChevronLeft className="w-6 h-6 text-gray-600" />
                </button>

                <button
                    onClick={goToNext}
                    className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center hover:bg-gray-50 transition-colors"
                    aria-label="Next testimonial"
                >
                    <ChevronRight className="w-6 h-6 text-gray-600" />
                </button>

                {/* Testimonial content with touch handlers */}
                <div
                    className="overflow-hidden"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <div
                        className="flex transition-transform duration-300 ease-in-out"
                        style={{
                            transform: `translateX(-${currentTestimonial * 100}%)`,
                        }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="w-full flex-shrink-0">
                                <TestimonialCard
                                    testimonial={testimonial.testimonial}
                                    author={testimonial.author}
                                    role={testimonial.role}
                                    avatar={testimonial.avatar}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile navigation buttons */}
                <div className="md:hidden flex justify-center gap-4 mt-6">
                    <button
                        onClick={goToPrevious}
                        className="flex w-10 h-10 bg-white rounded-full shadow-lg items-center justify-center hover:bg-gray-50 transition-colors"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="w-5 h-5 text-gray-600" />
                    </button>

                    <button
                        onClick={goToNext}
                        className="flex w-10 h-10 bg-white rounded-full shadow-lg items-center justify-center hover:bg-gray-50 transition-colors"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="w-5 h-5 text-gray-600" />
                    </button>
                </div>
            </div>

            {/* Pagination dots */}
            <PaginationDots
                total={testimonials.length}
                current={currentTestimonial}
                onChange={setCurrentTestimonial}
            />

            {/* Swipe indicator for mobile */}
            <div className="md:hidden text-center text-sm text-gray-500 mb-8">
                ← Swipe to navigate →
            </div>

            <LetsStartProjectSection />
        </div>
    );
};

export default TestimonialsSection;
