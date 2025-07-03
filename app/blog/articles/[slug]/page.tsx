import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Navigation } from "@/components/layout/Navigation";
import Footer from "@/components/sections/Footer";
import { Article, articlesApi } from "@/lib/strapi";

interface ArticlePageProps {
    params: {
        slug: string;
    };
}

// Helper function to fetch article by slug
async function fetchArticleBySlug(slug: string): Promise<Article> {
    try {
        const response = await articlesApi.getBySlug(slug);
        return response.data;
    } catch (error) {
        throw new Error(`Failed to fetch article: ${error}`);
    }
}

// Generate metadata for SEO
export async function generateMetadata({ params }: ArticlePageProps) {
    try {
        const article = await fetchArticleBySlug(params.slug);

        return {
            title: `${article.title} - LAQTA`,
            description: article.excerpt,
            openGraph: {
                title: article.title,
                description: article.excerpt,
                images: article.featured_image
                    ? [
                          `${process.env.NEXT_PUBLIC_STRAPI_URL}${article.featured_image.url}`,
                      ]
                    : [],
            },
        };
    } catch (error) {
        return {
            title: "Article not found - LAQTA",
            description: "The requested article could not be found.",
        };
    }
}

const ArticlePage: ({
    params,
}: {
    params: any;
}) => Promise<React.JSX.Element> = async ({ params }) => {
    let article: Article;

    try {
        article = await fetchArticleBySlug(params.slug);
    } catch (error) {
        console.error("Error fetching article:", error);
        notFound();
    }

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
        });
    };

    return (
        <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 min-h-screen">
            <Navigation />

            <div className="max-w-4xl mx-auto px-4 py-8 md:py-16">
                {/* Article Header */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
                    {article.featured_image && (
                        <div className="relative h-64 md:h-96 w-full">
                            <Image
                                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${article.featured_image.url}`}
                                alt={
                                    article.featured_image.alternativeText ||
                                    article.title
                                }
                                fill
                                className="object-cover"
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
                            />
                        </div>
                    )}

                    <div className="p-6 md:p-8">
                        <div className="flex items-center mb-4">
                            <span
                                className="px-3 py-1 text-sm font-semibold text-white rounded-full"
                                style={{
                                    backgroundColor: article.category.color,
                                }}
                            >
                                {article.category.name}
                            </span>
                            <span className="ml-3 text-gray-600">
                                {article.read_time} min read
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            {article.title}
                        </h1>

                        <div className="flex items-center mb-6">
                            {article.author.avatar && (
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${article.author.avatar.url}`}
                                    alt={article.author.name}
                                    width={48}
                                    height={48}
                                    className="rounded-full mr-4"
                                />
                            )}
                            <div>
                                <p className="font-semibold text-slate-900">
                                    {article.author.name}
                                </p>
                                <p className="text-gray-600">
                                    {formatDate(article.publishedAt)}
                                </p>
                            </div>
                        </div>

                        <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                            {article.excerpt}
                        </p>
                    </div>
                </div>

                {/* Article Content */}
                <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-8">
                    <div className="prose prose-lg max-w-none prose-headings:text-slate-900 prose-p:text-gray-700 prose-a:text-blue-600 hover:prose-a:text-blue-800 prose-strong:text-slate-900 prose-code:text-pink-600 prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded">
                        <div
                            dangerouslySetInnerHTML={{
                                __html: article.content,
                            }}
                        />
                    </div>
                </div>

                {/* Tags Section */}
                {article.tags.length > 0 && (
                    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
                        <h3 className="text-lg font-semibold mb-3 text-slate-900">
                            Tags
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {article.tags.map((tag) => (
                                <span
                                    key={tag.id}
                                    className="px-3 py-1 bg-blue-500/10 text-blue-600 rounded-full text-sm hover:bg-blue-500/20 transition-colors cursor-pointer"
                                >
                                    #{tag.name}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <Footer />
        </div>
    );
};

export default ArticlePage;
