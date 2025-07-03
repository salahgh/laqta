// lib/strapi-articles.ts
import { cookies } from "next/headers";

// Types for Articles
export interface Article {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    read_time: number;
    publishedAt: string;
    createdAt: string;
    updatedAt: string;
    category: {
        id: number;
        name: string;
        slug: string;
        color: string;
    };
    author: {
        id: number;
        name: string;
        email: string;
        bio?: string;
        avatar?: {
            url: string;
            alternativeText?: string;
        };
    };
    tags: Array<{
        id: number;
        name: string;
        slug: string;
    }>;
    featured_image?: {
        url: string;
        alternativeText?: string;
        width?: number;
        height?: number;
    };
}

export interface PaginationMeta {
    pagination: {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
    };
}

export interface ApiResponse<T> {
    data: T;
    meta?: PaginationMeta;
}

export interface ApiError {
    data: any;
    error: {
        status: number;
        name: string;
        message: string;
        details?: any;
    };
}

// Configuration
const STRAPI_URL =
    process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
const API_BASE = `${STRAPI_URL}/api`;

// Helper function to get auth token
async function getAuthToken(): Promise<string | null> {
    if (typeof window !== "undefined") {
        // Client-side - use localStorage
        return localStorage.getItem("strapi_token");
    } else {
        // Server-side - use cookies
        try {
            const cookieStore = await cookies();
            const token = cookieStore.get("strapi_token");
            return token?.value || null;
        } catch (error) {
            // If cookies() fails (e.g., in API routes or edge runtime), return null
            return null;
        }
    }
}

// Base fetch wrapper
async function fetchApi<T>(
    endpoint: string,
    options: RequestInit = {},
): Promise<T> {
    const token = await getAuthToken();

    const config: RequestInit = {
        headers: {
            "Content-Type": "application/json",
            ...(token && { Authorization: `Bearer ${token}` }),
            ...options.headers,
        },
        ...options,
    };

    const response = await fetch(`${API_BASE}${endpoint}`, config);

    if (!response.ok) {
        const error: ApiError = await response.json();
        throw new Error(error.error.message || "API request failed");
    }

    return response.json();
}

// Articles API
export const articlesApi = {
    // Get article by slug
    async getBySlug(slug: string): Promise<ApiResponse<Article>> {
        return fetchApi<ApiResponse<Article>>(`/articles/slug/${slug}`);
    },

    // Get articles by category
    async getByCategory(
        categorySlug: string,
        params?: { page?: number; pageSize?: number },
    ): Promise<ApiResponse<Article[]>> {
        const searchParams = new URLSearchParams();
        if (params?.page) searchParams.set("page", params.page.toString());
        if (params?.pageSize)
            searchParams.set("pageSize", params.pageSize.toString());

        const query = searchParams.toString();
        const endpoint = `/articles/category/${categorySlug}${query ? `?${query}` : ""}`;

        return fetchApi<ApiResponse<Article[]>>(endpoint);
    },

    // Get featured articles
    async getFeatured(params?: {
        page?: number;
        pageSize?: number;
    }): Promise<ApiResponse<Article[]>> {
        const searchParams = new URLSearchParams();
        if (params?.page) searchParams.set("page", params.page.toString());
        if (params?.pageSize)
            searchParams.set("pageSize", params.pageSize.toString());

        const query = searchParams.toString();
        const endpoint = `/articles/featured${query ? `?${query}` : ""}`;

        return fetchApi<ApiResponse<Article[]>>(endpoint);
    },

    // Get all articles
    async getAll(params?: {
        page?: number;
        pageSize?: number;
    }): Promise<ApiResponse<Article[]>> {
        const searchParams = new URLSearchParams();
        if (params?.page) searchParams.set("page", params.page.toString());
        if (params?.pageSize)
            searchParams.set("pageSize", params.pageSize.toString());

        const query = searchParams.toString();
        const endpoint = `/articles${query ? `?${query}` : ""}`;

        return fetchApi<ApiResponse<Article[]>>(endpoint);
    },
};

// Utility functions
export const utils = {
    // Get full URL for uploaded files
    getFileUrl(url: string): string {
        if (url.startsWith("http")) return url;
        return `${STRAPI_URL}${url}`;
    },
};

// Export default
export default articlesApi;
