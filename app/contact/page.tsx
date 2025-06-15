import StepperForm from "@/components/StepperForm";

export const metadata = {
  title: "Contact Us | Laqta",
};

export default function ContactPage() {
  return (
    <section className="space-y-3xl">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-primary-600">Contact Us</h1>
        <p className="mt-sm text-neutral-600 max-w-2xl mx-auto">
          Tell us about your idea and let’s build something great together.
        </p>
      </header>
      <StepperForm />
    </section>
  );
}
