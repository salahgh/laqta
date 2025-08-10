"use client";

import React, { useState } from "react";
import { FAQ } from "@/lib/strapi";
import { FAQItem } from "@/components/sections/FAQSection/FAQItem";
import { Badge } from "@/components/ui/Badge";
import { useTranslations } from "next-intl";

interface FAQSectionClientProps {
    faqs: FAQ[] | null;
}

export const FAQSectionClient: React.FC<FAQSectionClientProps> = ({ faqs }) => {
    const [openIndex, setOpenIndex] = useState(0);
    const t = useTranslations('faq');

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section className="bg-white py-8 md:py-24">
            <div className="container mx-auto px-6 space-y-4">
                <div className="text-center space-y-4">
                    <Badge variant="default" className="">
                        {t('badge')}
                    </Badge>
                    <h2 className="font-bold text-gray-900 mx-auto max-w-2xl">
                        {t('title')}
                    </h2>
                    <p className="text-secondary-gray text-responsive-lg max-w-3xl md:max-w-xl mx-auto">
                        {t('description')}
                    </p>
                    {faqs?.map((faq, index) => (
                        <FAQItem
                            key={faq.id}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onToggle={() => handleToggle(index)}
                            isLast={index === faqs?.length - 1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
