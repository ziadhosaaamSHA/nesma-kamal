import Hero from "./Hero";
import About from "./About";
import WorkshopsSection from "./WorkshopsSection";
import Testimonials from "./Testimonials";
import QuoteSection from "./QuoteSection";
import BookSection from "./BookSection";
import BlogsSection from "./BlogsSection";
import Booking from "./Booking";
import FAQ from "./FAQ";
import Container from "@/components/ui/Container";

export default function HomePageContent() {
  return (
    <main className="relative">
      <Hero />
      <Container size="site" className="relative z-20">
        <About />
        <Testimonials />
        <QuoteSection />
        <BookSection />
        <WorkshopsSection />
        <BlogsSection />
        <FAQ />
      </Container>
      <Booking />
    </main>
  );
}
