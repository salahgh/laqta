import React from "react";
import { notFound } from "next/navigation";
import { Navigation } from "@/components/layout/Navigation";
import Footer from "@/components/sections/Footer";
import { BlogArticleClient } from "./BlogArticleClient";

import { Blog, blogsApi } from "@/lib/strapi";

interface BlogPageProps {
    params: Promise<{ slug: string }>;
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
    const { slug } = await params;
    const blog = await fetchBlogBySlug(slug);

    if (!blog) {
        return {
            title: "Article not found - LAQTA",
            description: "The requested article could not be found.",
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
            <BlogArticleClient blog={blog} relatedBlogs={relatedBlogs} />
            <Footer />
        </div>
    );
};

export default BlogArticlePage;
