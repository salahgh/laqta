import React, { Suspense } from "react";
import { Testimonial } from "@/lib/strapi";
import TestimonialsSection from "@/components/sections/successStories/SuccessStories";

interface TestimonialsSectionWrapperProps {
    testimonials?: Testimonial[];
    loadingComponent?: React.ReactNode;
}

// Sync wrapper component
export const TestimonialsSectionWrapper: React.FC<
    TestimonialsSectionWrapperProps
> = ({ testimonials, loadingComponent }) => {
    const defaultLoadingComponent = (
        <div className="py-16 flex justify-center items-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
            <span className="ml-2 text-gray-600">Loading testimonials...</span>
        </div>
    );

    return (
        <Suspense fallback={loadingComponent || defaultLoadingComponent}>
            {/* @ts-expect-error Server Component */}
            <TestimonialsSection testimonials={testimonials} />
        </Suspense>
    );
};
