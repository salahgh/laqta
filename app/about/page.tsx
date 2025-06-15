export const metadata = {
  title: "About Us | Laqta",
};

export default function AboutPage() {
  return (
    <section className="space-y-3xl">
      <header className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-primary-600 mb-sm">About Us</h1>
        <p className="text-neutral-600">
          We are a multidisciplinary digital agency committed to delivering delightful products.
        </p>
      </header>
      <div className="prose mx-auto">
        <p>
          (Detailed company story, mission, vision, and team introduction will be placed here.)
        </p>
      </div>
    </section>
  );
}
