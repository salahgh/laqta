import React from "react";
import { FAQ, faqsApi } from "@/lib/strapi";
import { FAQSectionClient } from "./FAQSectionClient";

const FAQSection = async ({ locale }: { locale: string }) => {
    let faqs: FAQ[] | null = null;

    try {
        const response = await faqsApi.getAll({
            sort: "order:asc",
            pageSize: 20,
            locale: locale,
        });

        if (response.data && response.data.length > 0) {
            faqs = response.data;
        }
    } catch (error) {
        console.warn(
            "Failed to fetch FAQs from Strapi, using default data:",
            error,
        );
    }

    return <FAQSectionClient faqs={faqs} />;
};

export default FAQSection;
