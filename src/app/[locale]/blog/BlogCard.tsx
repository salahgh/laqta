import React from "react";
import { Link } from "@/src/i18n/navigation";
import Image from "next/image";
import { Blog } from "@/lib/strapi";
import { SocialShare } from "./SocialShare";
import { useLocale } from "next-intl";

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

    const locale = useLocale();

    const blogUrl = `/blog/articles/${blog.slug}`;

    if (variant === "featured") {
        return (
            <article className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200">
                {/* Gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />

                {blog.featured_image && (
                    <div className="relative h-72 md:h-80 w-full overflow-hidden">
                        <Image
                            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${blog.featured_image.url}`}
                            alt={blog.featured_image.alternativeText || blog.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                        />
                        
                        {/* Featured image overlay if available */}
                        {blog.featured_image_overlay && (
                            <div className="absolute inset-0">
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${blog.featured_image_overlay.url}`}
                                    alt={blog.featured_image_overlay.alternativeText || "Overlay"}
                                    fill
                                    className="object-cover mix-blend-overlay opacity-60"
                                />
                            </div>
                        )}
                        
                        {/* Image overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                        {/* Gallery indicator */}
                        {blog.gallery && blog.gallery.length > 0 && (
                            <div className="absolute bottom-4 right-4 z-20">
                                <div className="flex items-center space-x-1 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full border border-white/20">
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-xs font-semibold text-white">
                                        +{blog.gallery.length}
                                    </span>
                                </div>
                            </div>
                        )}

                        {/* Category badge with enhanced styling */}
                        <div className="absolute top-6 left-6 z-20">
                            <span
                                className="px-4 py-2 text-sm font-bold text-white rounded-full backdrop-blur-sm shadow-lg border border-white/20 hover:scale-105 transition-transform duration-300"
                                style={{
                                    backgroundColor: `${blog.category.color}dd`,
                                    boxShadow: `0 4px 20px ${blog.category.color}40`,
                                }}
                            >
                                {blog.category.name}
                            </span>
                        </div>

                        {/* Reading time badge */}
                        <div className="absolute top-6 right-6 z-20">
                            <span className="px-3 py-1 text-xs font-semibold text-white bg-black/50 backdrop-blur-sm rounded-full border border-white/20">
                                {blog.read_time} min read
                            </span>
                        </div>
                    </div>
                )}

                <div className="relative z-20 p-8">
                    {/* Meta information with enhanced styling */}
                    <div className="flex items-center justify-between text-gray-500 text-sm mb-4">
                        <div className="flex items-center space-x-4">
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
                                <span className="font-medium">
                                    {formatDate(blog.publishedAt)}
                                </span>
                            </div>
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
                                <span>{blog.views} views</span>
                            </div>
                        </div>
                        <SocialShare url={blogUrl} title={blog.title} />
                    </div>

                    {/* Enhanced title */}
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors duration-300">
                        <Link
                            href={blogUrl}
                            className="hover:underline decoration-2 underline-offset-4"
                        >
                            {blog.meta_title}
                        </Link>
                    </h3>

                    {/* Enhanced excerpt */}
                    <p className="text-gray-600 text-lg mb-8 leading-relaxed line-clamp-3">
                        {blog.excerpt}
                    </p>

                    {/* Enhanced author section and CTA */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            {blog?.author?.avatar && (
                                <div className="relative">
                                    <Image
                                        src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${blog?.author?.avatar.url}`}
                                        alt={blog.author.name}
                                        width={48}
                                        height={48}
                                        className="rounded-full ring-2 ring-gray-200 group-hover:ring-blue-300 transition-all duration-300"
                                    />
                                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white" />
                                </div>
                            )}
                            <div>
                                <p className="text-sm font-semibold text-gray-900">
                                    {blog.author?.name}
                                </p>
                                <p className="text-xs text-gray-500">Author</p>
                            </div>
                        </div>

                        <Link
                            href={blogUrl}
                            className="group/btn bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center space-x-2"
                        >
                            <span>Read Article</span>
                            <svg
                                className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
            </article>
        );
    }

    // Enhanced default variant
    return (
        <article className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200 hover:-translate-y-2">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />

            {blog.featured_image && (
                <div className="relative h-56 w-full overflow-hidden">
                    <Image
                        src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${blog.featured_image.url}`}
                        alt={blog.featured_image.alternativeText || blog.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    {/* Image overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />

                    {/* Category badge */}
                    <div className="absolute top-4 left-4 z-20">
                        <span
                            className="px-3 py-1 text-xs font-bold text-white rounded-full backdrop-blur-sm shadow-md border border-white/20"
                            style={{
                                backgroundColor: `${blog.category.color}dd`,
                                boxShadow: `0 2px 10px ${blog.category.color}30`,
                            }}
                        >
                            {blog.category.name}
                        </span>
                    </div>
                </div>
            )}

            <div className="relative z-20 p-6 flex flex-col flex-1">
                {/* Enhanced meta information */}
                <div className="flex items-center justify-between text-gray-500 text-sm mb-3">
                    <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1">
                            <svg
                                className="w-3 h-3"
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
                        <div className="flex items-center space-x-1">
                            <svg
                                className="w-3 h-3"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span>{blog.read_time} min</span>
                        </div>
                    </div>
                    <SocialShare url={blogUrl} title={blog.title} size="sm" />
                </div>

                {/* Enhanced title */}
                <h4 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors duration-300 flex-1">
                    <Link
                        href={blogUrl}
                        className="hover:underline decoration-2 underline-offset-2"
                    >
                        {blog.title}
                    </Link>
                </h4>

                {/* Enhanced excerpt */}
                <p className="text-gray-600 text-sm mb-6 leading-relaxed line-clamp-3">
                    {blog.excerpt}
                </p>

                {/* Enhanced footer */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-2">
                        {blog.author?.avatar && (
                            <Image
                                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${blog.author.avatar.url}`}
                                alt={blog.author.name}
                                width={32}
                                height={32}
                                className="rounded-full ring-2 ring-gray-200 group-hover:ring-blue-300 transition-all duration-300"
                            />
                        )}
                        <div>
                            <p className="text-xs font-semibold text-gray-900">
                                {blog.author?.name}
                            </p>
                        </div>
                    </div>
                    // Use Link instead of regular anchor tags
                    <Link href={`/blog/articles/${blog.slug}`} className="...">
                        {/* Blog card content */}
                    </Link>
                    {/* Enhanced excerpt */}
                    <p className="text-gray-600 text-sm mb-6 leading-relaxed line-clamp-3">
                        {blog.excerpt}
                    </p>
                    {/* Enhanced footer */}
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                        <div className="flex items-center space-x-2">
                            {blog.author?.avatar && (
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${blog.author.avatar.url}`}
                                    alt={blog.author.name}
                                    width={32}
                                    height={32}
                                    className="rounded-full ring-2 ring-gray-200 group-hover:ring-blue-300 transition-all duration-300"
                                />
                            )}
                            <div>
                                <p className="text-xs font-semibold text-gray-900">
                                    {blog.author?.name}
                                </p>
                            </div>
                        </div>

                        <Link
                            href={blogUrl}
                            className="group/btn text-blue-600 hover:text-blue-700 font-semibold text-sm inline-flex items-center space-x-1 hover:bg-blue-50 px-3 py-2 rounded-lg transition-all duration-300"
                        >
                            <span>Read more</span>
                            <svg
                                className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform duration-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    );
};
