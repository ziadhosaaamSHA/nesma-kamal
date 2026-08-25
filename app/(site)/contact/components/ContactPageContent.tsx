//import SectionReveal from "@/components/transitions/SectionReveal";
import { BookingForm } from "@/components/BookingForm";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import { contactInfoItems } from "./contact.data";

export default function ContactPageContent() {
  return (
    <div className="relative">
      <section className="relative overflow-hidden bg-brand-parchment py-24">
          <Container size="content" className="grid grid-cols-1 gap-16 md:grid-cols-2">
            <div>
              <h2 className="mb-8 text-3xl font-display md:text-5xl">Get in touch</h2>
              <p className="body-copy mb-12 text-brand-charcoal/70">
                Whether you have a question about services, workshops, or just want to say hello, I&apos;d
                love to hear from you.
              </p>

              <div className="space-y-6">
                {contactInfoItems.map((item) => (
                  <div key={item.label}>
                    <h4 className="mb-2 text-xs font-bold uppercase text-brand-olive">{item.label}</h4>
                    <p className="text-xl font-display">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <Card className="p-10 shadow-2xl md:p-16">
              <BookingForm />
            </Card>
          </Container>
      </section>
    </div>
  );
}
