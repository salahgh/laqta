import React from "react";
import { Navigation } from "@/components/layout/Navigation";
import Footer from "@/components/sections/Footer";
import { BlogsClient } from "./BlogsClient";
import { Blog, blogsApi, categoriesApi, Category } from "@/lib/strapi";

export const revalidate = 3600;

export const metadata = {
    title: "Insights & Stories - LAQTA",
    description:
        "Discover how storytelling transforms brands and connects with audiences on a deeper level",
};

const BlogPage = async () => {
    // let featuredBlogs: Blog[] = [];
    let latestBlogs: Blog[] = [];
    let categories: Category[] = [];

    try {
        // Fetch featured blogs
        // const featuredResponse = await blogsApi.getFeatured({ pageSize: 3 });
        // featuredBlogs = featuredResponse.data;

        // Fetch latest blogs
        const latestResponse = await blogsApi.getAll({
            pageSize: 6,
            sort: "publishedAt:desc",
        });
        latestBlogs = latestResponse.data;

        // Fetch categories
        const categoriesResponse = await categoriesApi.getAll();
        categories = categoriesResponse.data;
    } catch (error) {
        console.error("Failed to fetch blog data:", error);
    }

    return (
        <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 min-h-screen">
            <Navigation />
            <BlogsClient
                // initialFeaturedBlogs={featuredBlogs}
                initialLatestBlogs={latestBlogs}
                categories={categories}
            />
            <Footer />
        </div>
    );
};

export default BlogPage;
