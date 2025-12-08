import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FadeIn } from "@/components/animations/FadeIn";
import { staggerContainer } from "@/components/animations/FramerConfig";

export function Testimonials() {
  return (
    <section className="relative py-20 md:py-32 bg-slate-950" data-testid="section-testimonials">
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/10 via-transparent to-transparent" />
      
      <Container className="relative z-10">
        <FadeIn>
          <SectionTitle
            badge="Testimonials"
            title="What Clients Say"
            subtitle="Don't just take my word for it. Here's what brands and businesses have to say about working with me."
          />
        </FadeIn>

        <motion.div 
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          data-testid="testimonials-grid"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.5, delay: index * 0.1 }
                }
              }}
              className="relative rounded-xl border border-slate-800 bg-slate-900/50 p-6 md:p-8"
              data-testid={`card-testimonial-${testimonial.id}`}
            >
              <div className="absolute -top-3 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600/20 text-indigo-400">
                <Quote className="h-4 w-4" />
              </div>

              <div className="mb-4 flex gap-1" data-testid={`rating-${testimonial.id}`}>
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="mb-6 text-slate-300 leading-relaxed" data-testid={`quote-${testimonial.id}`}>
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4" data-testid={`author-${testimonial.id}`}>
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-slate-800"
                  data-testid={`avatar-${testimonial.id}`}
                />
                <div>
                  <div className="font-medium text-slate-50" data-testid={`name-${testimonial.id}`}>
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-slate-500" data-testid={`role-${testimonial.id}`}>
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
