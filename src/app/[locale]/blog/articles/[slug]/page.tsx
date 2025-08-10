import React from "react";
import { notFound } from "next/navigation";
import { Navigation } from "@/components/layout/Navigation";
import Footer from "@/components/sections/Footer";
import { BlogArticle } from "./BlogArticle";

import { Blog, blogsApi } from "@/lib/strapi";
import { getTranslations } from "next-intl/server";

// Add static generation with revalidation
export const revalidate = 3600; // 1 hour

interface BlogPageProps {
    params: Promise<{ slug: string }>;
}

// Add this function to generate static params for all blog articles
export async function generateStaticParams({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    
    try {
        // Fetch all blog slugs for static generation
        const response = await blogsApi.getAll({
            locale,
            pageSize: 1000, // Get all articles
            fields: ['slug'],
        });
        
        return response.data.map((blog: any) => ({
            slug: blog.slug,
        }));
    } catch (error) {
        console.error('Error generating static params for blog articles:', error);
        return [];
    }
}

async function fetchBlogBySlug(slug: string): Promise<Blog | null> {
    try {
        const response = await blogsApi.getBySlug(slug);
        return response.data[0] || null;
    } catch (error) {
        return null;
    }
}

export async function generateMetadata({ params }: BlogPageProps) {
    const { slug, locale } = await params;
    const blog = await fetchBlogBySlug(slug);
    const t = await getTranslations({ locale, namespace: "blog" });

    if (!blog) {
        return {
            title: t("articleNotFound"),
            description: t("articleNotFoundDescription"),
        };
    }

    return {
        title: `${blog.title} - LAQTA`,
        description: blog.excerpt,
        openGraph: {
            title: blog.title,
            description: blog.excerpt,
            images: blog.featured_image
                ? [
                      `${process.env.NEXT_PUBLIC_STRAPI_URL}${blog.featured_image.url}`,
                  ]
                : [],
        },
    };
}

const BlogArticlePage = async ({ params }: BlogPageProps) => {
    const { slug } = await params;

    const blog = await fetchBlogBySlug(slug);

    if (!blog) {
        notFound();
    }

    // Fetch related blogs
    let relatedBlogs: Blog[] = [];
    try {
        const relatedResponse = await blogsApi.getRelated(blog.id, 3);
        relatedBlogs = relatedResponse.data;
    } catch (error) {
        console.error("Failed to fetch related blogs:", error);
    }

    return (
        <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 min-h-screen">
            <Navigation />
            <BlogArticle blog={blog} relatedBlogs={relatedBlogs} />
            <Footer />
        </div>
    );
};

export default BlogArticlePage;
