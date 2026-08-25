//import SectionReveal from "@/components/transitions/SectionReveal";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import { workshopCards } from "./workshops.data";

export default function WorkshopsPageContent() {
  return (
    <div className="relative">
      <section className="relative overflow-hidden bg-brand-parchment py-24">
          <Container size="narrow" className="px-6 md:px-6">
            <h2 className="mb-8 text-center text-3xl font-display md:text-5xl">Group Healing Journeys</h2>
            <p className="body-copy mb-16 text-center text-brand-charcoal/70">
              Our interactive workshops provide a safe community where individuals can share
              experiences and learn practical tools for emotional regulation.
            </p>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {workshopCards.map((workshop) => (
                <Card key={workshop.title} className="p-8 shadow-xl">
                  <h3 className="mb-4 text-2xl font-display">{workshop.title}</h3>
                  <p className="body-copy-sm mb-6 text-brand-charcoal/60">{workshop.description}</p>
                  <Button fullWidth>{workshop.ctaLabel}</Button>
                </Card>
              ))}
            </div>
          </Container>
      </section>
    </div>
  );
}
