//import SectionReveal from "@/components/transitions/SectionReveal";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import { courseCards } from "./courses.data";

export default function CoursesPageContent() {
  return (
    <div className="relative">
      <section className="relative overflow-hidden bg-brand-parchment py-24">
          <Container>
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-3xl font-display md:text-5xl">Self-Paced Learning</h2>
              <p className="body-copy mx-auto max-w-[700px] text-brand-charcoal/70">
                Access professional therapeutic tools and insights anytime, anywhere. Our courses
                are designed to provide clinical knowledge in an accessible format.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {courseCards.map((course) => (
                <Card
                  key={course.title}
                  className="group overflow-hidden transition-all duration-500 hover:shadow-2xl"
                >
                  <div className="relative aspect-video bg-brand-sage">
                    <div className="absolute inset-0 flex items-center justify-center text-brand-olive opacity-20 transition-opacity group-hover:opacity-40">
                      <span className="text-6xl">▶</span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="mb-4 text-xl font-display">{course.title}</h3>
                    <p className="body-copy-sm mb-6 text-brand-charcoal/60">{course.description}</p>
                    <Button fullWidth>{course.ctaLabel}</Button>
                  </div>
                </Card>
              ))}
            </div>
          </Container>
      </section>
    </div>
  );
}
