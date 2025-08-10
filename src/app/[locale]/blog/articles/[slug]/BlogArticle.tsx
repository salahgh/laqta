"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Blog } from "@/lib/strapi";
import { BlogCard } from "../../BlogCard";
import { SocialShare } from "../../SocialShare";
import { ReadingProgress } from "./ReadingProgress";
import { useTranslations } from "next-intl";

interface BlogArticleClientProps {
    blog: Blog;
    relatedBlogs: Blog[];
}

export const BlogArticle: React.FC<BlogArticleClientProps> = ({
    blog,
    relatedBlogs,
}) => {
    const t = useTranslations("blog");

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    return (
        <div className={"px-40 rounded-2xl space-y-8"}>
            <ReadingProgress />
            {/*/!* Reduced top padding and optimized container *!/*/}
            <div className="text-gray-800 bg-gray-100 rounded-2xl">
                {/* Article Header with enhanced styling */}
                <div className="">
                    {blog.featured_image && (
                        <div className="relative h-56 sm:h-72 md:h-80 lg:h-96">
                            <Image
                                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${blog.featured_image.url}`}
                                alt={
                                    blog.featured_image.alternativeText ||
                                    blog.title
                                }
                                fill
                                className="object-cover"
                                priority
                            />
                            {/* Gradient overlay for better text readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                        </div>
                    )}
                    {/* Reduced padding and improved spacing */}
                    <div className="p-4 sm:p-6 lg:p-8">
                        {/* Category and Meta Info with better spacing */}
                        <div className="flex flex-wrap items-center gap-3 mb-4 text-sm">
                            {blog.category && (
                                <Link
                                    href={`/blog?category=${blog.category.slug}`}
                                    className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold text-white hover:opacity-90 transition-opacity"
                                    style={{
                                        backgroundColor:
                                            blog.category.color || "#3B82F6",
                                    }}
                                >
                                    {blog.category.name}
                                </Link>
                            )}
                            <div className="flex items-center text-gray-600 space-x-3">
                                <div className="flex items-center space-x-1">
                                    <svg
                                        className="w-4 h-4"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>{formatDate(blog.publishedAt)}</span>
                                </div>
                                {blog.read_time && (
                                    <div className="flex items-center space-x-1">
                                        <svg
                                            className="w-4 h-4"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span>
                                            {blog.read_time} {t("minRead")}
                                        </span>
                                    </div>
                                )}
                                {blog.views && (
                                    <div className="flex items-center space-x-1">
                                        <svg
                                            className="w-4 h-4"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                            <path
                                                fillRule="evenodd"
                                                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span>
                                            {blog.views} {t("views")}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                            {blog.title}
                        </h1>
                        {blog.author && (
                            <div className="flex items-center mb-6 p-4 bg-gray-50 rounded-xl border border-gray-100">
                                {blog.author.avatar && (
                                    <div className="relative w-12 h-12 mr-4">
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${blog.author.avatar.url}`}
                                            alt={blog.author.name}
                                            fill
                                            className="rounded-full object-cover ring-2 ring-white shadow-md"
                                        />
                                    </div>
                                )}
                                <div className="flex-1">
                                    <p className="font-semibold text-gray-900 text-lg">
                                        {blog.author.name}
                                    </p>
                                    {blog.author.bio && (
                                        <p className="text-sm text-gray-600 mt-1">
                                            {blog.author.bio}
                                        </p>
                                    )}
                                </div>
                            </div>
                        )}
                        {blog.excerpt && (
                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6 rounded-r-lg">
                                <p className="text-lg text-gray-800 leading-relaxed font-medium italic">
                                    {blog.excerpt}
                                </p>
                            </div>
                        )}
                        {/* Enhanced Social Share */}
                        <div className="flex items-center justify-between border-t border-b border-gray-200 py-4 mb-6">
                            <span className="text-sm font-medium text-gray-700">
                                Share this article:
                            </span>
                            <SocialShare
                                url={`${process.env.NEXT_PUBLIC_SITE_URL}/blog/articles/${blog.slug}`}
                                title={blog.title}
                            />
                        </div>
                        {/* Enhanced Content with better typography */}
                        <div className="prose prose-lg prose-blue max-w-none">
                            <div
                                className="text-gray-800 leading-relaxed"
                                dangerouslySetInnerHTML={{
                                    __html: blog.content,
                                }}
                            />
                        </div>
                        {blog.tags && blog.tags.length > 0 && (
                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                    <svg
                                        className="w-5 h-5 mr-2"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Tags
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {blog.tags.map((tag) => (
                                        <Link
                                            key={tag.id}
                                            href={`/blog?tag=${tag.slug}`}
                                            className="inline-flex items-center px-3 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200 border border-gray-200 hover:border-blue-300"
                                        >
                                            #{tag.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {relatedBlogs.length > 0 && (
                <section className="mt-8">
                    <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 flex items-center">
                            <svg
                                className="w-6 h-6 mr-3 text-blue-600"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {t("relatedArticles")}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {relatedBlogs.map((relatedBlog) => (
                                <BlogCard
                                    key={relatedBlog.id}
                                    blog={relatedBlog}
                                    variant="default"
                                />
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
};
