"use client";

import React, { useState } from 'react';

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 mb-4 overflow-hidden">
            <button
                onClick={onToggle}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
        <span className="text-lg font-semibold text-gray-900 pr-4">
          {question}
        </span>
                <div className="flex-shrink-0">
                    <svg
                        className={`w-6 h-6 text-gray-400 transition-transform duration-200 ${
                            isOpen ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </div>
            </button>

            {isOpen && (
                <div className="px-8 pb-6">
                    <div className="text-gray-600 leading-relaxed">
                        {answer}
                    </div>
                </div>
            )}
        </div>
    );
};

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "How does a subscription-based marketing service work?",
            answer: "With our model, you pay a flat monthly fee for continuous marketing support. No contracts, no hidden fees—just expert marketing services tailored to your business needs."
        },
        {
            question: "What's included in the subscription?",
            answer: "Our subscription includes comprehensive marketing strategy development, content creation, social media management, email marketing campaigns, SEO optimization, performance analytics, and dedicated account management. You'll have access to our full team of marketing experts."
        },
        {
            question: "Can I upgrade or change my plan?",
            answer: "Absolutely! You can upgrade, downgrade, or modify your plan at any time. Changes take effect at the start of your next billing cycle, and we'll work with you to ensure a smooth transition that meets your evolving business needs."
        },
        {
            question: "How soon will I see results?",
            answer: "While every business is different, most clients start seeing initial improvements within 30-60 days. Significant results typically become apparent within 90 days. We provide regular reporting so you can track progress and see the impact of our work on your business growth."
        },
        {
            question: "How do I get started?",
            answer: "Getting started is simple! Schedule a free consultation call where we'll discuss your business goals and challenges. After that, we'll create a customized marketing strategy and you can choose the subscription plan that best fits your needs. We can have you up and running within a week."
        },
        {
            question: "Can I change plans later?",
            answer: "Yes, you have complete flexibility to change your plan whenever needed. Whether you want to scale up during busy seasons or adjust your services based on business growth, we make it easy to modify your subscription without any penalties or long-term commitments."
        }
    ];

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-20">
            <div className="max-w-4xl mx-auto px-8">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="mb-6">
            <span className="inline-block px-6 py-2 bg-blue-50 text-blue-600 text-sm font-medium rounded-full border border-blue-100">
              Questions ?
            </span>
                    </div>

                    <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                        Answers to Your Top Questions
                    </h1>

                    <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto">
                        Check out our frequently asked questions to learn more about our process, services
                        and what to expect
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="space-y-0">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onToggle={() => handleToggle(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQSection;