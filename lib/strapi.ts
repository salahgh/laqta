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

// Export default
export default { articlesApi, servicesApi, worksApi, testimonialsApi, faqsApi, missionsApi, utils };
