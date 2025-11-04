import React from "react";
import { Link } from "@/src/i18n/navigation";
import Image from "next/image";
import { Blog, utils } from "@/lib/strapi";
import { SocialShare } from "./SocialShare";
import { useLocale } from "next-intl";

interface BlogCardProps {
    blog: Blog;
    variant?: "default" | "featured" | "horizontal";
    className?: string;
}

interface BadgeProps {
    children: React.ReactNode;
    color?: string;
    className?: string;
}

interface MetaItemProps {
    icon: React.ReactNode;
    text: string;
}

// Reusable Badge Component with enhanced styling
const Badge: React.FC<BadgeProps> = ({ children, color, className = "" }) => (
    <span
        className={`px-4 py-1.5 text-xs font-bold text-white rounded-full backdrop-blur-md shadow-lg border border-white/30 transition-all duration-300 hover:scale-105 ${className}`}
        style={{
            backgroundColor: color ? `${color}` : "rgba(59, 130, 246, 0.9)",
            boxShadow: color ? `0 4px 20px ${color}50` : "0 4px 20px rgba(59, 130, 246, 0.5)",
        }}
    >
        {children}
    </span>
);

// Reusable Meta Item Component
const MetaItem: React.FC<MetaItemProps> = ({ icon, text }) => (
    <div className="flex items-center space-x-1.5">
        {icon}
        <span className="text-xs font-medium">{text}</span>
    </div>
);

// Date formatting utility
const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });
};

// Icon components with updated styling
const CalendarIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
        <path
            fillRule="evenodd"
            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
            clipRule="evenodd"
        />
    </svg>
);

const ClockIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
        <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
            clipRule="evenodd"
        />
    </svg>
);

const EyeIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
        <path
            fillRule="evenodd"
            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
            clipRule="evenodd"
        />
    </svg>
);

const GalleryIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
        <path
            fillRule="evenodd"
            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
            clipRule="evenodd"
        />
    </svg>
);

const ArrowRightIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M13 7l5 5m0 0l-5 5m5-5H6"
        />
    </svg>
);

// Featured Blog Card Component - Modern Magazine Style
const FeaturedBlogCard: React.FC<{ blog: Blog; blogUrl: string }> = ({ blog, blogUrl }) => (
    <article className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden border border-gray-200 hover:border-blue-300 transform hover:-translate-y-1">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 via-purple-100/30 to-pink-100/40 opacity-0 group-hover:opacity-100 transition-all duration-700 z-10 pointer-events-none" />

        {/* Decorative Corner Element */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />

        {/* Featured Image with Enhanced Overlay */}
        {blog.featured_image && (
            <div className="relative h-80 md:h-96 w-full overflow-hidden">
                <Image
                    src={utils.getFileUrl(blog.featured_image.url)}
                    alt={blog.featured_image.alternativeText || blog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />

                {/* Multi-layer Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Category Badge with Glow Effect */}
                {blog.category && (
                    <div className="absolute top-6 left-6 z-20">
                        <Badge color={blog.category.color} className="text-sm font-extrabold">
                            {blog.category.name}
                        </Badge>
                    </div>
                )}

                {/* Reading Time Badge */}
                {blog.read_time && (
                    <div className="absolute top-6 right-6 z-20">
                        <div className="flex items-center space-x-2 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full border border-white/30">
                            <ClockIcon className="w-4 h-4 text-white" />
                            <span className="text-sm font-bold text-white">{blog.read_time} min</span>
                        </div>
                    </div>
                )}

                {/* Gallery Indicator with Animation */}
                {blog.gallery && blog.gallery.length > 0 && (
                    <div className="absolute bottom-6 right-6 z-20">
                        <div className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600/90 to-pink-600/90 backdrop-blur-md rounded-full border border-white/30 shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <GalleryIcon className="text-white" />
                            <span className="text-sm font-bold text-white">
                                {blog.gallery.length} Photos
                            </span>
                        </div>
                    </div>
                )}
            </div>
        )}

        {/* Content Section */}
        <div className="relative z-20 p-8 md:p-10">
            {/* Meta Information with Icons */}
            <div className="flex items-center justify-between text-gray-600 mb-5">
                <div className="flex items-center space-x-5">
                    <MetaItem
                        icon={<CalendarIcon className="text-blue-600" />}
                        text={formatDate(blog.publishedAt)}
                    />
                    {blog.views && (
                        <MetaItem
                            icon={<EyeIcon className="text-purple-600" />}
                            text={`${blog.views.toLocaleString()} views`}
                        />
                    )}
                </div>
                <SocialShare url={blogUrl} title={blog.title} />
            </div>

            {/* Title with Underline Animation */}
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-5 leading-tight">
                <Link
                    href={blogUrl}
                    className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-pink-600 transition-all duration-500"
                >
                    {blog.title}
                </Link>
            </h3>

            {/* Excerpt with Enhanced Typography */}
            <p className="text-gray-700 text-lg md:text-xl mb-8 leading-relaxed line-clamp-3 font-medium">
                {blog.excerpt}
            </p>

            {/* Author and CTA with Gradient Button */}
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    {blog.author?.avatar && (
                        <div className="relative">
                            <Image
                                src={utils.getFileUrl(blog.author.avatar.url)}
                                alt={blog.author.name || "Author"}
                                width={56}
                                height={56}
                                className="rounded-full ring-4 ring-gray-200 group-hover:ring-blue-400 transition-all duration-500 shadow-lg"
                            />
                            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-4 border-white animate-pulse" />
                        </div>
                    )}
                    <div>
                        <p className="text-base font-bold text-gray-900">
                            {blog.author?.name || "Anonymous"}
                        </p>
                        <p className="text-sm text-gray-500 font-medium">Featured Author</p>
                    </div>
                </div>

                <Link
                    href={blogUrl}
                    className="group/btn relative px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white rounded-2xl font-bold transition-all duration-500 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center space-x-3 overflow-hidden"
                >
                    <span className="relative z-10">Read Article</span>
                    <ArrowRightIcon className="relative z-10 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-white/20 transform translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500" />
                </Link>
            </div>
        </div>
    </article>
);

// Default Blog Card Component - Clean & Modern
const DefaultBlogCard: React.FC<{ blog: Blog; blogUrl: string }> = ({ blog, blogUrl }) => (
    <article className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 hover:border-blue-300 transform hover:-translate-y-2">
        {/* Subtle Background Gradient on Hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />

        {/* Featured Image with Overlay */}
        {blog.featured_image && (
            <div className="relative h-60 w-full overflow-hidden">
                <Image
                    src={utils.getFileUrl(blog.featured_image.url)}
                    alt={blog.featured_image.alternativeText || blog.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                {/* Category Badge */}
                {blog.category && (
                    <div className="absolute top-4 left-4 z-20">
                        <Badge color={blog.category.color} className="text-xs">
                            {blog.category.name}
                        </Badge>
                    </div>
                )}

                {/* Gallery Indicator */}
                {blog.gallery && blog.gallery.length > 0 && (
                    <div className="absolute bottom-4 right-4 z-20">
                        <div className="flex items-center space-x-1 px-3 py-1.5 bg-black/70 backdrop-blur-sm rounded-full border border-white/20">
                            <GalleryIcon className="w-4 h-4 text-white" />
                            <span className="text-xs font-bold text-white">+{blog.gallery.length}</span>
                        </div>
                    </div>
                )}
            </div>
        )}

        {/* Content Section */}
        <div className="relative z-20 p-6 flex flex-col">
            {/* Meta Information */}
            <div className="flex items-center justify-between text-gray-600 mb-3">
                <div className="flex items-center space-x-3">
                    <MetaItem
                        icon={<CalendarIcon className="text-blue-600" />}
                        text={formatDate(blog.publishedAt)}
                    />
                    {blog.read_time && (
                        <MetaItem
                            icon={<ClockIcon className="text-purple-600" />}
                            text={`${blog.read_time} min`}
                        />
                    )}
                </div>
                <SocialShare url={blogUrl} title={blog.title} size="sm" />
            </div>

            {/* Title */}
            <h4 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                <Link
                    href={blogUrl}
                    className="hover:underline decoration-2 underline-offset-2 decoration-blue-600"
                >
                    {blog.title}
                </Link>
            </h4>

            {/* Excerpt */}
            <p className="text-gray-600 text-sm mb-6 leading-relaxed line-clamp-3 flex-grow">
                {blog.excerpt}
            </p>

            {/* Footer with Author and CTA */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-3">
                    {blog.author?.avatar && (
                        <Image
                            src={utils.getFileUrl(blog.author.avatar.url)}
                            alt={blog.author.name || "Author"}
                            width={36}
                            height={36}
                            className="rounded-full ring-2 ring-gray-200 group-hover:ring-blue-300 transition-all duration-300"
                        />
                    )}
                    <div>
                        <p className="text-sm font-bold text-gray-900">
                            {blog.author?.name || "Anonymous"}
                        </p>
                        {blog.views && (
                            <p className="text-xs text-gray-500">{blog.views.toLocaleString()} views</p>
                        )}
                    </div>
                </div>

                <Link
                    href={blogUrl}
                    className="group/btn bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm inline-flex items-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                    <span>Read</span>
                    <ArrowRightIcon className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Link>
            </div>
        </div>
    </article>
);

// Horizontal Blog Card Component - Modern List View
const HorizontalBlogCard: React.FC<{ blog: Blog; blogUrl: string }> = ({ blog, blogUrl }) => (
    <article className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 hover:border-blue-300 flex flex-col sm:flex-row transform hover:-translate-y-1">
        {/* Subtle Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-purple-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />

        {/* Featured Image */}
        {blog.featured_image && (
            <div className="relative w-full sm:w-64 h-48 sm:h-auto overflow-hidden flex-shrink-0">
                <Image
                    src={utils.getFileUrl(blog.featured_image.url)}
                    alt={blog.featured_image.alternativeText || blog.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    sizes="256px"
                />

                {/* Category Badge */}
                {blog.category && (
                    <div className="absolute top-4 left-4 z-20">
                        <Badge color={blog.category.color} className="text-xs">
                            {blog.category.name}
                        </Badge>
                    </div>
                )}
            </div>
        )}

        {/* Content */}
        <div className="relative z-20 flex-1 p-6 flex flex-col justify-between">
            <div>
                {/* Meta Information */}
                <div className="flex items-center space-x-4 text-gray-600 mb-3">
                    <MetaItem
                        icon={<CalendarIcon className="text-blue-600" />}
                        text={formatDate(blog.publishedAt)}
                    />
                    {blog.read_time && (
                        <MetaItem
                            icon={<ClockIcon className="text-purple-600" />}
                            text={`${blog.read_time} min`}
                        />
                    )}
                </div>

                {/* Title */}
                <h4 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors duration-300">
                    <Link
                        href={blogUrl}
                        className="hover:underline decoration-2 underline-offset-2 decoration-blue-600"
                    >
                        {blog.title}
                    </Link>
                </h4>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 mb-4">
                    {blog.excerpt}
                </p>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-3">
                    {blog.author?.avatar && (
                        <Image
                            src={utils.getFileUrl(blog.author.avatar.url)}
                            alt={blog.author.name || "Author"}
                            width={32}
                            height={32}
                            className="rounded-full ring-2 ring-gray-200 group-hover:ring-blue-300 transition-all duration-300"
                        />
                    )}
                    <div>
                        <p className="text-sm font-bold text-gray-900">
                            {blog.author?.name || "Anonymous"}
                        </p>
                        {blog.views && (
                            <p className="text-xs text-gray-500">{blog.views.toLocaleString()} views</p>
                        )}
                    </div>
                </div>

                <Link
                    href={blogUrl}
                    className="group/btn text-blue-600 hover:text-blue-700 font-bold text-sm inline-flex items-center space-x-2 hover:bg-blue-50 px-4 py-2 rounded-lg transition-all duration-300"
                >
                    <span>Read more</span>
                    <ArrowRightIcon className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Link>
            </div>
        </div>
    </article>
);

// Main BlogCard Component
export const BlogCard: React.FC<BlogCardProps> = ({
    blog,
    variant = "default",
    className = ""
}) => {
    const locale = useLocale();
    const blogUrl = `/blog/articles/${blog.slug}`;

    // Render based on variant
    const renderCard = () => {
        switch (variant) {
            case "featured":
                return <FeaturedBlogCard blog={blog} blogUrl={blogUrl} />;
            case "horizontal":
                return <HorizontalBlogCard blog={blog} blogUrl={blogUrl} />;
            default:
                return <DefaultBlogCard blog={blog} blogUrl={blogUrl} />;
        }
    };

    return (
        <div className={className}>
            {renderCard()}
        </div>
    );
};

export default BlogCard;
