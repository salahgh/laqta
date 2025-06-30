"use client";

import React, { useState } from "react";
import { FAQItem } from "@/components/sections/FAQItem";

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "How does a subscription-based marketing service work?",
            answer:
                "With our model, you pay a flat monthly fee for continuous marketing support. " +
                "No contracts, no hidden fees—just expert marketing services tailored to your business needs.",
        },
        {
            question: "What's included in the subscription?",
            answer:
                "Our subscription includes comprehensive marketing strategy development, content creation," +
                " social media management, email marketing campaigns, SEO optimization, performance analytics," +
                " and dedicated account management. You'll have access to our full team of marketing experts.",
        },
        {
            question: "Can I upgrade or change my plan?",
            answer:
                "Absolutely! You can upgrade, downgrade, or modify your plan at any time. Changes take " +
                "effect at the start of your next billing cycle, and we'll work with you to ensure a smooth " +
                "transition that meets your evolving business needs.",
        },
        {
            question: "How soon will I see results?",
            answer:
                "While every business is different, most clients start seeing initial improvements " +
                "within 30-60 days. Significant results typically become apparent within 90 days." +
                " We provide regular reporting so you can track progress and see the impact of our " +
                "work on your business growth.",
        },
        {
            question: "How do I get started?",
            answer:
                "Getting started is simple! Schedule a free consultation call where we'll" +
                " discuss your business goals and challenges. After that, we'll create a customized" +
                "marketing strategy and you can choose the subscription plan that best fits your needs. " +
                "We can have you up and running within a week.",
        },
        {
            question: "Can I change plans later?",
            answer:
                "Yes, you have complete flexibility to change your plan whenever needed. Whether you want" +
                " to scale up during busy seasons or adjust your services based on business growth, we make it " +
                "easy to modify your subscription without any penalties or long-term commitments.",
        },
    ];

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <div className="w-full bg-gray-100 md:p-32 p-2 pt-12">
            {/* Header Section */}
            <div className="text-center mb-16 flex justify-center flex-col items-center">
                <div className="mb-8">
                    <span
                        className="inline-block border md:px-6 md:py-4 px-4 py-2 rounded-full shadow-lg"
                        style={{
                            color: "#54B3F1",
                            borderColor: "#54B3F1",
                        }}
                    >
                        Questions?
                    </span>
                </div>

                <h1 className="md:text-[56px] text-[40px] font-semibold text-gray-900 mb-6 leading-tight ">
                    Answers to Your Top Questions
                </h1>

                <p
                    className="md:text-display-xs text-body-md leading-relaxed"
                    style={{ color: "#A0A1B3", maxWidth: 982 }}
                >
                    Check out our frequently asked questions to learn more about
                    our process, services and what to expect
                </p>
            </div>

            {/* FAQ Items */}
            <div className="space-y-0 border-4 md:p-8 p-0 border-gray-200 md:rounded-3xl rounded-2xl shadow-sm">
                {faqs.map((faq, index) => (
                    <FAQItem
                        key={index}
                        question={faq.question}
                        answer={faq.answer}
                        isOpen={openIndex === index}
                        onToggle={() => handleToggle(index)}
                        isLast={index === faqs.length - 1}
                    />
                ))}
            </div>
        </div>
    );
};

export default FAQSection;
