import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Blog } from "@/lib/strapi";
import { SocialShare } from "./SocialShare";

interface BlogCardProps {
    blog: Blog;
    variant?: "default" | "featured" | "horizontal";
}

export const BlogCard: React.FC<BlogCardProps> = ({
    blog,
    variant = "default",
}) => {
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
        });
    };

    const blogUrl = `/blog/articles/${blog.slug}`;

    if (variant === "featured") {
        return (
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
                {blog.featured_image && (
                    <div className="relative h-64 md:h-80 w-full overflow-hidden">
                        <Image
                            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${blog.featured_image.url}`}
                            alt={
                                blog.featured_image.alternativeText ||
                                blog.title
                            }
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                            <span
                                className="px-3 py-1 text-sm font-semibold text-white rounded-full"
                                style={{ backgroundColor: blog.category.color }}
                            >
                                {blog.category.name}
                            </span>
                        </div>
                    </div>
                )}
                <div className="p-6 md:p-8">
                    <div className="flex items-center justify-between text-gray-500 text-sm mb-3">
                        <div className="flex items-center">
                            <span>{formatDate(blog.publishedAt)}</span>
                            <span className="mx-2">•</span>
                            <span>{blog.read_time} min read</span>
                            <span className="mx-2">•</span>
                            <span>{blog.views} views</span>
                        </div>
                        <SocialShare url={blogUrl} title={blog.title} />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                        <Link
                            href={blogUrl}
                            className="hover:text-blue-600 transition-colors"
                        >
                            {blog.title}
                        </Link>
                    </h2>
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                        {blog.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            {blog.author.avatar && (
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${blog.author.avatar.url}`}
                                    alt={blog.author.name}
                                    width={32}
                                    height={32}
                                    className="rounded-full mr-3"
                                />
                            )}
                            <span className="text-sm text-gray-600">
                                {blog.author.name}
                            </span>
                        </div>
                        <Link
                            href={blogUrl}
                            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block"
                        >
                            Read Full Article
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    // Default and horizontal variants with similar enhancements...
    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300 group">
            {blog.featured_image && (
                <div className="relative h-48 w-full overflow-hidden">
                    <Image
                        src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${blog.featured_image.url}`}
                        alt={blog.featured_image.alternativeText || blog.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                        <span
                            className="px-3 py-1 text-sm font-semibold text-white rounded-full"
                            style={{ backgroundColor: blog.category.color }}
                        >
                            {blog.category.name}
                        </span>
                    </div>
                </div>
            )}
            <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between text-gray-500 text-sm mb-2">
                    <div className="flex items-center">
                        <span>{formatDate(blog.publishedAt)}</span>
                        <span className="mx-2">•</span>
                        <span>{blog.read_time} min read</span>
                    </div>
                    <SocialShare url={blogUrl} title={blog.title} size="sm" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-3 flex-1">
                    <Link
                        href={blogUrl}
                        className="hover:text-blue-600 transition-colors"
                    >
                        {blog.title}
                    </Link>
                </h4>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed line-clamp-3">
                    {blog.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center">
                        {blog.author?.avatar && (
                            <Image
                                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${blog.author.avatar.url}`}
                                alt={blog.author.name}
                                width={24}
                                height={24}
                                className="rounded-full mr-2"
                            />
                        )}
                        <span className="text-xs text-gray-600">
                            {blog.author?.name}
                        </span>
                    </div>
                    <Link
                        href={blogUrl}
                        className="text-blue-600 font-semibold hover:text-blue-700 transition-colors text-sm inline-flex items-center"
                    >
                        Read more →
                    </Link>
                </div>
            </div>
        </div>
    );
};
