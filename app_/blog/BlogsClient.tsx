"use client";

import React, { useState, useEffect } from "react";
import { BlogCard } from "./BlogCard";
import { SearchAndFilter } from "./SearchAndFilter";
import { Pagination } from "./Pagination";
import { NewsletterSubscription } from "./NewsletterSubscription";
import { Blog, Category, blogsApi } from "@/lib/strapi";

interface BlogsClientProps {
    // initialFeaturedBlogs: Blog[];
    initialLatestBlogs: Blog[];
    categories: Category[];
}

export const BlogsClient: React.FC<BlogsClientProps> = ({
    // initialFeaturedBlogs,
    initialLatestBlogs,
    categories,
}) => {
    const [blogs, setBlogs] = useState<Blog[]>(initialLatestBlogs);
    // const [featuredBlogs] = useState<Blog[]>(initialFeaturedBlogs);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedTag, setSelectedTag] = useState("");
    const [sortBy, setSortBy] = useState("publishedAt:desc");

    const pageSize = 6;

    const fetchBlogs = async () => {
        setLoading(true);
        try {
            const response = await blogsApi.getAll({
                page: currentPage,
                pageSize,
                search: searchQuery || undefined,
                category: selectedCategory || undefined,
                tag: selectedTag || undefined,
                sort: sortBy,
            });

            setBlogs(response.data);
            if (response.meta?.pagination) {
                setTotalPages(response.meta.pagination.pageCount);
            }
        } catch (error) {
            console.error("Failed to fetch blogs:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBlogs();
    }, [currentPage, searchQuery, selectedCategory, selectedTag, sortBy]);

    const handleSearch = (query: string) => {
        setSearchQuery(query);
        setCurrentPage(1);
    };

    const handleCategoryFilter = (category: string) => {
        setSelectedCategory(category);
        setCurrentPage(1);
    };

    const handleTagFilter = (tag: string) => {
        setSelectedTag(tag);
        setCurrentPage(1);
    };

    const handleSort = (sort: string) => {
        setSortBy(sort);
        setCurrentPage(1);
    };

    const clearFilters = () => {
        setSearchQuery("");
        setSelectedCategory("");
        setSelectedTag("");
        setSortBy("publishedAt:desc");
        setCurrentPage(1);
    };

    return (
        <>
            {/* Hero Section */}
            <section className="px-4 md:px-8 pt-8 md:pt-16 pb-12 md:pb-20">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center md:text-left mb-12">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Insights & Stories
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
                            Discover how storytelling transforms brands and
                            connects with audiences on a deeper level
                        </p>
                    </div>

                    {/* Featured Blogs */}
                    {/*{featuredBlogs.length > 0 && (*/}
                    {/*    <div className="mb-16">*/}
                    {/*        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Featured Stories</h2>*/}
                    {/*        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">*/}
                    {/*            {featuredBlogs.map((blog) => (*/}
                    {/*                <BlogCard key={blog.id} blog={blog} variant="featured" />*/}
                    {/*            ))}*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*)}*/}
                </div>
            </section>

            {/* Search and Filter Section */}
            {/*<section className="px-4 md:px-8 pb-8">*/}
            {/*    <div className="max-w-7xl mx-auto">*/}
            {/*        <SearchAndFilter*/}
            {/*            onSearch={handleSearch}*/}
            {/*            onCategoryFilter={handleCategoryFilter}*/}
            {/*            onTagFilter={handleTagFilter}*/}
            {/*            onSort={handleSort}*/}
            {/*            onClearFilters={clearFilters}*/}
            {/*            categories={categories}*/}
            {/*            searchQuery={searchQuery}*/}
            {/*            selectedCategory={selectedCategory}*/}
            {/*            selectedTag={selectedTag}*/}
            {/*            sortBy={sortBy}*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*</section>*/}

            {/* Blog Grid */}
            <section className="px-4 md:px-8 pb-16">
                <div className="max-w-7xl mx-auto">
                    {loading ? (
                        <div className="flex justify-center items-center py-12">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                        </div>
                    ) : blogs.length > 0 ? (
                        <>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                                {blogs.map((blog) => (
                                    <BlogCard key={blog.id} blog={blog} />
                                ))}
                            </div>

                            {/* Pagination */}
                            <Pagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={setCurrentPage}
                            />
                        </>
                    ) : (
                        <div className="text-center py-12">
                            <p className="text-gray-300 text-lg">
                                No blogs found. Try adjusting your search or
                                filters.
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* Newsletter Subscription */}
            <NewsletterSubscription />
        </>
    );
};
