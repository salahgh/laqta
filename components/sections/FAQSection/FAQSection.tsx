import React from "react";
import { faqsApi } from "@/lib/strapi";
import { FAQSectionClient } from "./FAQSectionClient";
import { defaultFAQs } from "@/components/sections/FAQSection/DefaultFAQs";

const FAQSection = async () => {
    // let faqs = defaultFAQs;
    let faqs = null;

    try {
        const response = await faqsApi.getAll({
            sort: "order:asc",
            pageSize: 20,
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
