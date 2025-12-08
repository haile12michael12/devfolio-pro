import { motion } from "framer-motion";
import { SEOHead } from "@/components/seo/SEOHead";
import { Container } from "@/components/layout/Container";
import { ContactForm } from "@/components/sections/ContactForm";
import { FadeIn } from "@/components/animations/FadeIn";

export default function Contact() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
      data-testid="page-contact"
    >
      <SEOHead
        title="Contact - Let's Work Together"
        description="Have a project in mind? Whether it's a brand strategy, content campaign, or digital marketing initiative, I'd love to hear about it."
      />

      <section className="py-20 md:py-32">
        <Container>
          <FadeIn>
            <div className="text-center">
              <span className="mb-4 inline-block rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-indigo-400" data-testid="badge-contact">
                Contact
              </span>
              <h1 className="text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl md:text-6xl" data-testid="heading-contact">
                Let's Create Something{" "}
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Amazing
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400" data-testid="text-contact-description">
                Have a project in mind? Whether it's a brand strategy, content campaign, 
                or digital marketing initiative, I'd love to hear about it.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      <ContactForm showTitle={false} />
    </motion.main>
  );
}
