import { Navigation } from "@/components/layout/Navigation";

export const metadata = {
    title: "Our Work | Laqta",
};

export default function WorkPage() {
    return (
        <section className="space-y-3xl">
            <Navigation />
            <div className="grid gap-lg md:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 6 }).map((_, i) => (
                    <article
                        key={i}
                        className="border rounded-lg bg-white shadow overflow-hidden"
                    >
                        <div className="h-40 bg-neutral-200" />
                        <div className="p-lg">
                            <h3 className="font-semibold mb-sm">
                                Project #{i + 1}
                            </h3>
                            <p className="text-sm text-neutral-600 mb-md">
                                Brief description of the project outcome.
                            </p>
                            <a
                                href="#"
                                className="text-primary-600 text-sm font-medium hover:underline"
                            >
                                View case study →
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
