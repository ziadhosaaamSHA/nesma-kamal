//import SectionReveal from "@/components/transitions/SectionReveal";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { blogPostItems } from "./blog.data";

export default function BlogPageContent() {
  return (
    <div className="relative">
      <section className="relative overflow-hidden bg-brand-parchment py-24">
          <Container size="content">
            <div className="grid grid-cols-1 gap-16">
              {blogPostItems.map((post) => (
                <article key={post.id} className="flex flex-col items-center gap-12 md:flex-row">
                  <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden rounded-sm bg-brand-sage md:w-1/3" />
                  <div className="flex-grow">
                    <div className="mb-4 flex items-center gap-4">
                      <span className="text-[10px] font-bold uppercase text-brand-olive">
                        {post.category}
                      </span>
                      <span className="text-[10px] uppercase text-brand-charcoal/40">{post.date}</span>
                    </div>
                    <h3 className="mb-6 cursor-pointer text-3xl font-display transition-colors hover:text-brand-burgundy">
                      {post.title}
                    </h3>
                    <p className="body-copy mb-8 text-brand-charcoal/70">{post.excerpt}</p>
                    <Button variant="outline" className="border-b-0 px-0 py-0 hover:bg-transparent hover:text-brand-burgundy">
                      {post.ctaLabel}
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </Container>
      </section>
    </div>
  );
}
