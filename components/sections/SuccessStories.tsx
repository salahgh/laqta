"use client";
import React, { useState } from 'react';

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
            {[...Array(5)].map((_, i) => (
                <svg
                    key={i}
                    className="w-6 h-6 text-yellow-400 fill-current"
                    viewBox="0 0 24 24"
                >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
            ))}
        </div>
    );
};

const TestimonialCard = ({ testimonial, author, role, avatar }) => {
    return (
        <div className="text-center max-w-4xl mx-auto">
            <StarRating />

            <blockquote className="text-gray-700 text-lg leading-relaxed mb-12 font-medium">
                "{testimonial}"
            </blockquote>

            <div className="flex items-center justify-center gap-4">
                <div className="w-14 h-14 bg-gray-800 rounded-full flex items-center justify-center">
          <span className="text-white text-lg font-semibold">
            {author.split(' ').map(n => n[0]).join('')}
          </span>
                </div>
                <div className="text-left">
                    <div className="font-semibold text-gray-900 text-lg">
                        {author}
                    </div>
                    <div className="text-gray-500 text-sm">
                        {role}
                    </div>
                </div>
            </div>
        </div>
    );
};

const PaginationDots = ({ total, current, onChange }) => {
    return (
        <div className="flex justify-center gap-2 mt-16">
            {[...Array(total)].map((_, i) => (
                <button
                    key={i}
                    onClick={() => onChange(i)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                        i === current ? 'bg-blue-500' : 'bg-gray-300'
                    }`}
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
            testimonial: "Before subscribing to this service, our marketing was all over the place. We struggled with social media, our website traffic was low, and email campaigns barely got any response. Since joining, we've seen a 250% increase in organic traffic and our customer engagement has never been better.",
            author: "Lyes OUAZZI",
            role: "Digital Agency Owner",
            avatar: "LO"
        },
        {
            testimonial: "The transformation has been incredible. Their strategic approach helped us identify our target audience better and create content that actually converts. Our ROI has improved by 180% in just 6 months.",
            author: "Sarah Johnson",
            role: "Marketing Director",
            avatar: "SJ"
        },
        {
            testimonial: "Working with this team has been a game-changer for our startup. They helped us build a solid marketing foundation from scratch and our user acquisition costs dropped by 40%.",
            author: "Mike Chen",
            role: "Startup Founder",
            avatar: "MC"
        },
        {
            testimonial: "Their data-driven approach and attention to detail is unmatched. We've seen consistent growth month over month, and their reporting keeps us informed every step of the way.",
            author: "Emma Williams",
            role: "E-commerce Owner",
            avatar: "EW"
        },
        {
            testimonial: "The best investment we've made for our business. Their team understands our industry and delivered results that exceeded our expectations. Highly recommended!",
            author: "David Rodriguez",
            role: "CEO",
            avatar: "DR"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0">
                {/* Subtle geometric shapes */}
                <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100/30 rounded-full blur-2xl"></div>
                <div className="absolute bottom-32 right-16 w-24 h-24 bg-purple-100/40 rounded-full blur-xl"></div>
                <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-pink-100/50 rounded-full blur-lg"></div>
                <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-yellow-100/30 rounded-full blur-xl"></div>
            </div>

            {/* Profile avatars */}
            <ProfileAvatar position="top-4 left-4" />
            <ProfileAvatar position="bottom-4 right-4" />

            <div className="relative z-10 max-w-7xl mx-auto px-8 py-20">
                {/* Header section */}
                <div className="text-center mb-16">
                    <div className="mb-6">
            <span className="inline-block px-6 py-2 bg-white/80 backdrop-blur-sm border border-blue-200 text-blue-600 text-sm font-medium rounded-full shadow-sm">
              Testimonials
            </span>
                    </div>

                    <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        Success Stories From Our<br />
                        Happy Clients
                    </h1>
                </div>

                {/* Testimonial content */}
                <div className="mb-8">
                    <TestimonialCard
                        testimonial={testimonials[currentTestimonial].testimonial}
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
        </div>
    );
};

export default TestimonialsSection;