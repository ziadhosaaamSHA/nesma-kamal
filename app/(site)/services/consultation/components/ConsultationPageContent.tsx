//import SectionReveal from "@/components/transitions/SectionReveal";
import { BookingForm } from "@/components/BookingForm";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import { consultationFeatures } from "./consultation.data";

export default function ConsultationPageContent() {
  return (
    <div className="relative">
      <section className="relative overflow-hidden bg-white py-24">
          <Container size="content" className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div>
              <h2 className="mb-8 text-3xl font-display md:text-5xl">Personalized Therapy</h2>
              <p className="body-copy mb-8 text-brand-charcoal/70">
                Private sessions tailored to your unique emotional landscape. We use evidence-based
                CBT and DBT techniques to help you navigate life&apos;s transitions.
              </p>
              <ul className="mb-12 space-y-4 text-brand-charcoal/80">
                {consultationFeatures.map((feature) => (
                  <li key={feature.text} className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-brand-olive" />
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Card className="border border-brand-charcoal/5 bg-brand-parchment p-10 shadow-2xl md:p-16">
              <BookingForm />
            </Card>
          </Container>
      </section>
    </div>
  );
}
