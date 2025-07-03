import React from "react";
import { Navigation } from "@/components/layout/Navigation";
import Footer from "@/components/sections/Footer";
import { ArticleCard } from "@/app/blog/ArticleCard";
import { Article, articlesApi } from "@/lib/strapi";

// This page will be statically generated at build time
export const revalidate = 3600; // Revalidate every hour

export const metadata = {
    title: "Insights & Stories - LAQTA",
    description:
        "Discover how storytelling transforms brands and connects with audiences on a deeper level",
};

const HomePage = async () => {
    let featuredArticle: Article | null = null;
    let latestArticles: Article[] = [];
    let allArticles: Article[] = [];

    try {
        // Fetch featured articles (assuming the first one is featured)
        const featuredResponse = await articlesApi.getFeatured({
            page: 0,
            pageSize: 10,
        });
        featuredArticle = featuredResponse.data[0] || null;

        // Fetch latest articles (excluding featured)
        const latestResponse = await articlesApi.getAll({
            page: 1,
            pageSize: 6,
        });
        latestArticles = latestResponse.data
            .filter((article) => article.id !== featuredArticle?.id)
            .slice(0, 2);

        // Fetch all articles for recommendations
        const allResponse = await articlesApi.getAll({ page: 1, pageSize: 9 });
        allArticles = allResponse.data;
    } catch (error) {
        console.error("Failed to fetch articles:", error);
    }

    return (
        <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 min-h-screen">
            <Navigation />

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

                    {/* Featured Article */}
                    {featuredArticle && (
                        <div className="mb-16">
                            <ArticleCard
                                article={featuredArticle}
                                variant="featured"
                            />
                        </div>
                    )}
                </div>
            </section>

            {/* Latest Articles Section */}
            {latestArticles.length > 0 && (
                <section className="px-4 md:px-8 pb-16">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
                            Latest Articles
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8 mb-16">
                            {latestArticles.map((article) => (
                                <ArticleCard
                                    key={article.id}
                                    article={article}
                                    variant="horizontal"
                                />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Recommendation Section */}
            {allArticles.length > 0 && (
                <section className="px-4 md:px-8 pb-16">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <div className="inline-block bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                                Recommendation
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                You Might Also Like
                            </h3>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                            {allArticles.slice(0, 3).map((article) => (
                                <ArticleCard
                                    key={`rec-${article.id}`}
                                    article={article}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* No Content Fallback */}
            {!featuredArticle &&
                latestArticles.length === 0 &&
                allArticles.length === 0 && (
                    <section className="px-4 md:px-8 pb-16">
                        <div className="max-w-7xl mx-auto text-center py-12">
                            <p className="text-gray-300 text-lg">
                                No articles found. Check back soon for new
                                content!
                            </p>
                        </div>
                    </section>
                )}

            <Footer />
        </div>
    );
};

export default HomePage;
