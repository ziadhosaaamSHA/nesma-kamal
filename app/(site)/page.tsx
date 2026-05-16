import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import QuoteSection from "@/components/QuoteSection";
import BookSection from "@/components/BookSection";
import Booking from "@/components/Booking";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <About />
      <Testimonials />
      <QuoteSection />
      <BookSection />
      <Services />
      <FAQ />
      <Booking />
    </main>
  );
}
