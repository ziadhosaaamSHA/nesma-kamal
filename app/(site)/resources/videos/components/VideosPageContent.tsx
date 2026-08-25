//import SectionReveal from "@/components/transitions/SectionReveal";
import Container from "@/components/ui/Container";
import { videoItems } from "./videos.data";

export default function VideosPageContent() {
  return (
    <div className="relative">
      <section className="relative overflow-hidden bg-white py-24">
          <Container>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              {videoItems.map((video) => (
                <div key={video.id} className="group cursor-pointer">
                  <div className="relative mb-6 aspect-video overflow-hidden rounded-sm bg-brand-charcoal">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm transition-transform duration-500 group-hover:scale-110">
                        <span className="ml-1 text-2xl text-white">▶</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="mb-4 text-2xl font-display">{video.title}</h3>
                  <p className="body-copy-sm text-brand-charcoal/60">{video.description}</p>
                </div>
              ))}
            </div>
          </Container>
      </section>
    </div>
  );
}
