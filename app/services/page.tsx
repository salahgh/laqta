export const metadata = {
  title: "Services | Laqta",
};

export default function ServicesPage() {
  return (
    <section className="space-y-3xl">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-primary-600">Our Services</h1>
        <p className="mt-sm text-neutral-600 max-w-2xl mx-auto">
          We offer a full-stack of design & development services.
        </p>
      </header>
      <div className="grid gap-lg md:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="border rounded-lg bg-white shadow p-lg">
            <div className="h-32 bg-neutral-200 mb-md" />
            <h3 className="font-semibold mb-sm">Service #{i + 1}</h3>
            <p className="text-sm text-neutral-600">
              Short description of the service offered.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
