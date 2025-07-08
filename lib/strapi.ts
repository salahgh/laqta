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

// Types for Services
export interface Service {
    id: number;
    title: string;
    description: string;
    slug?: string;
    icon?: string;
    gradientFrom?: string;
    gradientTo?: string;
    tags?: Array<{
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
    publishedAt: string;
    createdAt: string;
    updatedAt: string;
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

// Base fetch wrapper
async function fetchApi<T>(
    endpoint: string,
    options: RequestInit = {},
): Promise<T> {
    // const token = await getAuthToken();
    const token = undefined;

    const config: RequestInit = {
        headers: {
            "Content-Type": "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
            ...(options.headers || {}),
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

// Services API
export const servicesApi = {
    // Get all services
    async getAll(params?: {
        page?: number;
        pageSize?: number;
        sort?: string;
        populate?: string;
        filters?: Record<string, any>;
    }): Promise<ApiResponse<Service[]>> {
        const searchParams = new URLSearchParams();
        if (params?.page)
            searchParams.set("pagination[page]", params.page.toString());
        if (params?.pageSize)
            searchParams.set(
                "pagination[pageSize]",
                params.pageSize.toString(),
            );
        if (params?.sort) searchParams.set("sort", params.sort);
        if (params?.populate) searchParams.set("populate", params.populate);

        // Handle filters
        if (params?.filters) {
            Object.entries(params.filters).forEach(([key, value]) => {
                searchParams.set(`filters[${key}]`, value.toString());
            });
        }

        const query = searchParams.toString();
        const endpoint = `/services${query ? `?${query}` : ""}`;

        return fetchApi<ApiResponse<Service[]>>(endpoint);
    },

    // Get service by ID
    async getById(
        id: number,
        params?: {
            populate?: string;
        },
    ): Promise<ApiResponse<Service>> {
        const searchParams = new URLSearchParams();
        if (params?.populate) searchParams.set("populate", params.populate);

        const query = searchParams.toString();
        const endpoint = `/services/${id}${query ? `?${query}` : ""}`;

        return fetchApi<ApiResponse<Service>>(endpoint);
    },

    // Get featured services
    async getFeatured(params?: {
        page?: number;
        pageSize?: number;
    }): Promise<ApiResponse<Service[]>> {
        return this.getAll({
            ...params,
            filters: { featured: true },
            populate: "*",
        });
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

// Works/Projects interface
export interface Work {
    id: number;
    title: string;
    description: string;
    category: string;
    metrics?: string;
    cta_text?: string;
    image_position?: "left" | "right";
    featured?: boolean;
    image?: {
        data?: {
            attributes: {
                url: string;
                alternativeText?: string;
            };
        };
    };
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

// Works API
export const worksApi = {
    // Get all works
    async getAll(params?: {
        page?: number;
        pageSize?: number;
        sort?: string;
        populate?: string;
        filters?: Record<string, any>;
    }): Promise<ApiResponse<Work[]>> {
        const searchParams = new URLSearchParams();
        if (params?.page)
            searchParams.set("pagination[page]", params.page.toString());
        if (params?.pageSize)
            searchParams.set(
                "pagination[pageSize]",
                params.pageSize.toString(),
            );
        if (params?.sort) searchParams.set("sort", params.sort);
        if (params?.populate) searchParams.set("populate", params.populate);

        // Handle filters
        if (params?.filters) {
            Object.entries(params.filters).forEach(([key, value]) => {
                searchParams.set(`filters[${key}]`, value.toString());
            });
        }

        const query = searchParams.toString();
        const endpoint = `/projects${query ? `?${query}` : ""}`;

        return fetchApi<ApiResponse<Work[]>>(endpoint);
    },

    // Get work by ID
    async getById(
        id: number,
        params?: {
            populate?: string;
        },
    ): Promise<ApiResponse<Work>> {
        const searchParams = new URLSearchParams();
        if (params?.populate) searchParams.set("populate", params.populate);

        const query = searchParams.toString();
        const endpoint = `/works/${id}${query ? `?${query}` : ""}`;

        return fetchApi<ApiResponse<Work>>(endpoint);
    },

    // Get featured works
    async getFeatured(params?: {
        page?: number;
        pageSize?: number;
    }): Promise<ApiResponse<Work[]>> {
        return this.getAll({
            ...params,
            filters: { featured: true },
            populate: "*",
        });
    },
};

// Types for Testimonials
export interface Testimonial {
    id: number;
    documentId: string;
    testimonial: string;
    author: string;
    role: string;
    avatar?: string;
    company?: string;
    rating?: number;
    featured?: boolean;
    publishedAt: string;
    createdAt: string;
    updatedAt: string;
}

// Testimonials API
export const testimonialsApi = {
    // Get all testimonials
    async getAll(params?: {
        page?: number;
        pageSize?: number;
        sort?: string;
        populate?: string;
        filters?: Record<string, any>;
    }): Promise<ApiResponse<Testimonial[]>> {
        const searchParams = new URLSearchParams();
        if (params?.page)
            searchParams.set("pagination[page]", params.page.toString());
        if (params?.pageSize)
            searchParams.set(
                "pagination[pageSize]",
                params.pageSize.toString(),
            );
        if (params?.sort) searchParams.set("sort", params.sort);
        if (params?.populate) searchParams.set("populate", params.populate);

        // Handle filters
        if (params?.filters) {
            Object.entries(params.filters).forEach(([key, value]) => {
                searchParams.set(`filters[${key}]`, value.toString());
            });
        }

        const query = searchParams.toString();
        const endpoint = `/testimonials${query ? `?${query}` : ""}`;

        return fetchApi<ApiResponse<Testimonial[]>>(endpoint);
    },

    // Get testimonial by ID
    async getById(
        id: number,
        params?: {
            populate?: string;
        },
    ): Promise<ApiResponse<Testimonial>> {
        const searchParams = new URLSearchParams();
        if (params?.populate) searchParams.set("populate", params.populate);

        const query = searchParams.toString();
        const endpoint = `/testimonials/${id}${query ? `?${query}` : ""}`;

        return fetchApi<ApiResponse<Testimonial>>(endpoint);
    },

    // Get featured testimonials
    async getFeatured(params?: {
        page?: number;
        pageSize?: number;
    }): Promise<ApiResponse<Testimonial[]>> {
        return this.getAll({
            ...params,
            filters: { featured: true },
            populate: "*",
        });
    },
};

// Types for FAQs
export interface FAQ {
    id: number;
    documentId: string;
    question: string;
    answer: string;
    category?: string;
    featured?: boolean;
    order?: number;
    publishedAt: string;
    createdAt: string;
    updatedAt: string;
}

// FAQs API
export const faqsApi = {
    // Get all FAQs
    async getAll(params?: {
        page?: number;
        pageSize?: number;
        sort?: string;
        populate?: string;
        filters?: Record<string, any>;
    }): Promise<ApiResponse<FAQ[]>> {
        const searchParams = new URLSearchParams();
        if (params?.page)
            searchParams.set("pagination[page]", params.page.toString());
        if (params?.pageSize)
            searchParams.set(
                "pagination[pageSize]",
                params.pageSize.toString(),
            );
        if (params?.sort) searchParams.set("sort", params.sort);
        if (params?.populate) searchParams.set("populate", params.populate);

        // Handle filters
        if (params?.filters) {
            Object.entries(params.filters).forEach(([key, value]) => {
                searchParams.set(`filters[${key}]`, value.toString());
            });
        }

        const query = searchParams.toString();
        const endpoint = `/faqs${query ? `?${query}` : ""}`;

        return fetchApi<ApiResponse<FAQ[]>>(endpoint);
    },

    // Get FAQ by ID
    async getById(
        id: number,
        params?: {
            populate?: string;
        },
    ): Promise<ApiResponse<FAQ>> {
        const searchParams = new URLSearchParams();
        if (params?.populate) searchParams.set("populate", params.populate);

        const query = searchParams.toString();
        const endpoint = `/faqs/${id}${query ? `?${query}` : ""}`;

        return fetchApi<ApiResponse<FAQ>>(endpoint);
    },

    // Get featured FAQs
    async getFeatured(params?: {
        page?: number;
        pageSize?: number;
    }): Promise<ApiResponse<FAQ[]>> {
        return this.getAll({
            ...params,
            filters: { featured: true },
            sort: "order:asc",
        });
    },

    // Get FAQs by category
    async getByCategory(
        category: string,
        params?: {
            page?: number;
            pageSize?: number;
        },
    ): Promise<ApiResponse<FAQ[]>> {
        return this.getAll({
            ...params,
            filters: { category },
            sort: "order:asc",
        });
    },
};

// Types for Missions
export interface Mission {
    id: number;
    documentId: string;
    title: string;
    description: string;
    icon?: string;
    iconSrc?: string;
    featured?: boolean;
    order?: number;
    publishedAt: string;
    createdAt: string;
    updatedAt: string;
}

// Missions API
export const missionsApi = {
    // Get all missions
    async getAll(params?: {
        page?: number;
        pageSize?: number;
        sort?: string;
        populate?: string;
        filters?: Record<string, any>;
    }): Promise<ApiResponse<Mission[]>> {
        const searchParams = new URLSearchParams();
        if (params?.page)
            searchParams.set("pagination[page]", params.page.toString());
        if (params?.pageSize)
            searchParams.set(
                "pagination[pageSize]",
                params.pageSize.toString(),
            );
        if (params?.sort) searchParams.set("sort", params.sort);
        if (params?.populate) searchParams.set("populate", params.populate);

        // Handle filters
        if (params?.filters) {
            Object.entries(params.filters).forEach(([key, value]) => {
                searchParams.set(`filters[${key}]`, value.toString());
            });
        }

        const query = searchParams.toString();
        const endpoint = `/missions${query ? `?${query}` : ""}`;

        return fetchApi<ApiResponse<Mission[]>>(endpoint);
    },

    // Get mission by ID
    async getById(
        id: number,
        params?: {
            populate?: string;
        },
    ): Promise<ApiResponse<Mission>> {
        const searchParams = new URLSearchParams();
        if (params?.populate) searchParams.set("populate", params.populate);

        const query = searchParams.toString();
        const endpoint = `/missions/${id}${query ? `?${query}` : ""}`;

        return fetchApi<ApiResponse<Mission>>(endpoint);
    },

    // Get featured missions
    async getFeatured(params?: {
        page?: number;
        pageSize?: number;
    }): Promise<ApiResponse<Mission[]>> {
        return this.getAll({
            ...params,
            filters: { featured: true },
            sort: "order:asc",
        });
    },
};

// Updated Blog interface based on new API structure
export interface Blog {
    id: number;
    documentId: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    read_time: number;
    featured: boolean;
    views: number;
    meta_title?: string;
    meta_description?: string;
    publishedAt: string;
    createdAt: string;
    updatedAt: string;
    category: {
        id: number;
        documentId: string;
        name: string;
        slug: string;
        description?: string;
        color: string;
    };
    author: {
        id: number;
        documentId: string;
        name: string;
        email: string;
        bio?: string;
        avatar?: {
            id: number;
            documentId: string;
            url: string;
            alternativeText?: string;
            width?: number;
            height?: number;
        };
    };
    tags: Array<{
        id: number;
        documentId: string;
        name: string;
        slug: string;
    }>;
    featured_image?: {
        id: number;
        documentId: string;
        url: string;
        alternativeText?: string;
        width?: number;
        height?: number;
    };
}

// Category interface
export interface Category {
    id: number;
    documentId: string;
    name: string;
    slug: string;
    description?: string;
    color: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

// Tag interface
export interface Tag {
    id: number;
    documentId: string;
    name: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

// Updated Blogs API
export const blogsApi = {
    // Get blog by slug
    async getBySlug(slug: string): Promise<ApiResponse<Blog>> {
        return fetchApi<ApiResponse<Blog>>(
            `/blogs?filters[slug][$eq]=${slug}&populate=*`,
        );
    },

    // Get blogs by category
    async getByCategory(
        categorySlug: string,
        params?: { page?: number; pageSize?: number },
    ): Promise<ApiResponse<Blog[]>> {
        const searchParams = new URLSearchParams();
        searchParams.set("filters[category][slug][$eq]", categorySlug);
        searchParams.set("populate", "*");
        if (params?.page)
            searchParams.set("pagination[page]", params.page.toString());
        if (params?.pageSize)
            searchParams.set(
                "pagination[pageSize]",
                params.pageSize.toString(),
            );

        return fetchApi<ApiResponse<Blog[]>>(
            `/blogs?${searchParams.toString()}`,
        );
    },

    // Get featured blogs
    async getFeatured(params?: {
        page?: number;
        pageSize?: number;
    }): Promise<ApiResponse<Blog[]>> {
        const searchParams = new URLSearchParams();
        searchParams.set("filters[featured][$eq]", "true");
        searchParams.set("populate", "*");
        if (params?.page)
            searchParams.set("pagination[page]", params.page.toString());
        if (params?.pageSize)
            searchParams.set(
                "pagination[pageSize]",
                params.pageSize.toString(),
            );

        return fetchApi<ApiResponse<Blog[]>>(
            `/blogs?${searchParams.toString()}`,
        );
    },

    // Get all blogs with search and filters
    async getAll(params?: {
        page?: number;
        pageSize?: number;
        search?: string;
        category?: string;
        tag?: string;
        sort?: string;
    }): Promise<ApiResponse<Blog[]>> {
        const searchParams = new URLSearchParams();
        searchParams.set("populate", "*");

        if (params?.page)
            searchParams.set("pagination[page]", params.page.toString());
        if (params?.pageSize)
            searchParams.set(
                "pagination[pageSize]",
                params.pageSize.toString(),
            );
        if (params?.sort) searchParams.set("sort", params.sort);

        // Search functionality
        if (params?.search) {
            searchParams.set(
                "filters[$or][0][title][$containsi]",
                params.search,
            );
            searchParams.set(
                "filters[$or][1][excerpt][$containsi]",
                params.search,
            );
            searchParams.set(
                "filters[$or][2][content][$containsi]",
                params.search,
            );
        }

        // Category filter
        if (params?.category) {
            searchParams.set("filters[category][slug][$eq]", params.category);
        }

        // Tag filter
        if (params?.tag) {
            searchParams.set("filters[tags][slug][$eq]", params.tag);
        }

        return fetchApi<ApiResponse<Blog[]>>(
            `/blogs?${searchParams.toString()}`,
        );
    },

    // Get related blogs
    async getRelated(
        blogId: number,
        limit: number = 3,
    ): Promise<ApiResponse<Blog[]>> {
        const searchParams = new URLSearchParams();
        searchParams.set("filters[id][$ne]", blogId.toString());
        searchParams.set("populate", "*");
        searchParams.set("pagination[pageSize]", limit.toString());
        searchParams.set("sort", "publishedAt:desc");

        return fetchApi<ApiResponse<Blog[]>>(
            `/blogs?${searchParams.toString()}`,
        );
    },
};

// Categories API
export const categoriesApi = {
    async getAll(): Promise<ApiResponse<Category[]>> {
        return fetchApi<ApiResponse<Category[]>>("/categories?sort=name:asc");
    },
};

// Tags API
export const tagsApi = {
    async getAll(): Promise<ApiResponse<Tag[]>> {
        return fetchApi<ApiResponse<Tag[]>>("/tags?sort=name:asc");
    },
};

// Newsletter API
export const newsletterApi = {
    async subscribe(
        email: string,
    ): Promise<{ success: boolean; message: string }> {
        try {
            await fetchApi("/newsletter-subscriptions", {
                method: "POST",
                body: JSON.stringify({ data: { email } }),
            });
            return {
                success: true,
                message: "Successfully subscribed to newsletter!",
            };
        } catch (error) {
            return {
                success: false,
                message: "Failed to subscribe. Please try again.",
            };
        }
    },
};

export default {
    blogsApi,
    categoriesApi,
    tagsApi,
    newsletterApi,
    servicesApi,
    worksApi,
    testimonialsApi,
    faqsApi,
    missionsApi,
    utils,
};
