import Image from "next/image";
//import SectionReveal from "@/components/transitions/SectionReveal";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import { galleryImageItems } from "./gallery.data";

export default function GalleryPageContent() {
  return (
    <div className="relative">
      <section className="relative overflow-hidden bg-white py-24">
          <Container>
            <div className="columns-1 space-y-8 gap-8 md:columns-2 lg:columns-3">
              {galleryImageItems.map((item) => (
                <Card
                  key={item.alt}
                  className="group relative break-inside-avoid overflow-hidden shadow-xl"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={1000}
                    height={1000}
                    className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-brand-charcoal/0 transition-all duration-500 group-hover:bg-brand-charcoal/20" />
                </Card>
              ))}
            </div>
          </Container>
      </section>
    </div>
  );
}
