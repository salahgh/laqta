export const metadata = {
  title: "Laqta | Digital Agency",
};

export default function Home() {
  return (
    <section className="space-y-3xl">
      <header className="text-center max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold text-primary-600 mb-md">We craft delightful digital experiences</h1>
        <p className="text-neutral-600">
          Full-service product design & development agency helping startups and enterprises turn ideas into exceptional products.
        </p>
        <a href="/contact" className="inline-block mt-lg px-6 py-3 rounded bg-primary-600 text-white hover:bg-primary-700">
          Start a project
        </a>
      </header>
      <div className="grid gap-lg md:grid-cols-3">
        {["Design", "Development", "Branding"].map((item) => (
          <div key={item} className="border rounded-lg bg-white shadow p-lg text-center">
            <div className="h-16 w-16 bg-neutral-200 mx-auto mb-md" />
            <h3 className="font-semibold mb-sm">{item}</h3>
            <p className="text-sm text-neutral-600">
              Brief blurb about the service area.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
