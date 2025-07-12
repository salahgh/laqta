import React from "react";
import { Navigation } from "@/components/layout/Navigation";
import Footer from "@/components/sections/Footer";
import { BlogsClient } from "../BlogsClient";
import { Blog, blogsApi, categoriesApi, Category } from "@/lib/strapi";

export const revalidate = 1800; // 30 minutes

export const metadata = {
    title: "All Articles - LAQTA",
    description: "Browse all our articles with search and filter options",
};

const AllBlogsPage = async () => {
    let latestBlogs: Blog[] = [];
    let categories: Category[] = [];

    try {
        // Fetch initial blogs
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
            
            {/* Page Header */}
            <section className="px-4 md:px-8 pt-8 md:pt-16 pb-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            All Articles
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300">
                            Explore our complete collection of insights and stories
                        </p>
                    </div>
                </div>
            </section>
            
            <BlogsClient
                initialLatestBlogs={latestBlogs}
                categories={categories}
            />
            <Footer />
        </div>
    );
};

export default AllBlogsPage;