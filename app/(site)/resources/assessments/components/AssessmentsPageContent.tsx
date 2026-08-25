//import SectionReveal from "@/components/transitions/SectionReveal";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import { assessmentItems } from "./assessments.data";

export default function AssessmentsPageContent() {
  return (
    <div className="relative">
      <section className="relative overflow-hidden bg-white py-24">
          <Container size="narrow" className="text-center md:px-6">
            <h2 className="mb-8 text-3xl font-display md:text-5xl">Understanding Your Journey</h2>
            <p className="body-copy mx-auto mb-16 max-w-[700px] text-brand-charcoal/70">
              These clinical screening tools are designed to help you gain insight into your current
              emotional state. Please note these are not diagnostic tools but guides for further
              exploration.
            </p>

            <div className="grid grid-cols-1 gap-8 text-left md:grid-cols-2">
              {assessmentItems.map((assessment) => (
                <Card
                  key={assessment.title}
                  className="group bg-brand-parchment p-10 transition-all duration-500 hover:shadow-2xl"
                >
                  <div className="mb-6 flex items-start justify-between">
                    <h3 className="text-2xl font-display transition-colors group-hover:text-brand-burgundy">
                      {assessment.title}
                    </h3>
                    <span className="text-[10px] font-bold uppercase text-brand-charcoal/40">
                      {assessment.estimatedTime}
                    </span>
                  </div>
                  <p className="body-copy-sm mb-8 text-brand-charcoal/60">{assessment.description}</p>
                  <Button fullWidth>{assessment.ctaLabel}</Button>
                </Card>
              ))}
            </div>
          </Container>
      </section>
    </div>
  );
}
