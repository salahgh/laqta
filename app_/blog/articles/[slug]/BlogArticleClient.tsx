"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Blog } from "@/lib/strapi";
import { BlogCard } from "../../BlogCard";
import { SocialShare } from "../../SocialShare";
import { ReadingProgress } from "./ReadingProgress";

interface BlogArticleClientProps {
    blog: Blog;
    relatedBlogs: Blog[];
}

export const BlogArticleClient: React.FC<BlogArticleClientProps> = ({
    blog,
    relatedBlogs,
}) => {
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    return (
        <>
            <ReadingProgress />
            <main className="container mx-auto px-4 py-8 max-w-4xl ">
                {/* Article Header */}
                <article className="rounded-lg shadow-lg overflow-hidden mb-8 bg-gray-200">
                    {/* Featured Image */}
                    {blog.featured_image && (
                        <div className="relative h-64 md:h-96">
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
                        </div>
                    )}

                    <div className="p-6 md:p-8">
                        {/* Category and Meta Info */}
                        <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600">
                            {blog.category && (
                                <Link
                                    href={`/blog?category=${blog.category.slug}`}
                                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium"
                                    style={{
                                        backgroundColor:
                                            blog.category.color || "#3B82F6",
                                        color: "white",
                                    }}
                                >
                                    {blog.category.name}
                                </Link>
                            )}
                            <span>{formatDate(blog.publishedAt)}</span>
                            {blog.read_time && (
                                <span>{blog.read_time} min read</span>
                            )}
                            {blog.views && <span>{blog.views} views</span>}
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            {blog.title}
                        </h1>

                        {/* Author Info */}
                        {blog.author && (
                            <div className="flex items-center mb-6">
                                {blog.author.avatar && (
                                    <div className="relative w-12 h-12 mr-4">
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${blog.author.avatar.url}`}
                                            alt={blog.author.name}
                                            fill
                                            className="rounded-full object-cover"
                                        />
                                    </div>
                                )}
                                <div>
                                    <p className="font-medium text-gray-900">
                                        {blog.author.name}
                                    </p>
                                    {blog.author.bio && (
                                        <p className="text-sm text-gray-600">
                                            {blog.author.bio}
                                        </p>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Excerpt - Fixed conditional rendering */}
                        {blog.excerpt && (
                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                {blog.excerpt}
                            </p>
                        )}

                        {/* Social Share */}
                        <div className="border-t border-b border-gray-200 py-4 mb-6">
                            <SocialShare
                                url={`${process.env.NEXT_PUBLIC_SITE_URL}/blog/articles/${blog.slug}`}
                                title={blog.title}
                            />
                        </div>

                        {/* Content */}
                        <div
                            className="prose prose-lg max-w-none text-black"
                            dangerouslySetInnerHTML={{ __html: blog.content }}
                        />

                        {/* Tags */}
                        {blog.tags && blog.tags.length > 0 && (
                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <h3 className="text-sm font-medium text-gray-900 mb-3">
                                    Tags:
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {blog.tags.map((tag) => (
                                        <Link
                                            key={tag.id}
                                            href={`/blog?tag=${tag.slug}`}
                                            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium hover:bg-gray-200 transition-colors"
                                        >
                                            #{tag.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </article>

                {/* Related Articles */}
                {relatedBlogs.length > 0 && (
                    <section className="mt-12">
                        <h2 className="text-2xl font-bold text-white mb-6">
                            Related Articles
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
                    </section>
                )}
            </main>
        </>
    );
};
