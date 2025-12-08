import { motion } from "framer-motion";
import { SEOHead } from "@/components/seo/SEOHead";
import { Container } from "@/components/layout/Container";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { FadeIn } from "@/components/animations/FadeIn";

export default function Work() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
      data-testid="page-work"
    >
      <SEOHead
        title="Portfolio - My Work"
        description="Explore my portfolio of content creation, digital marketing, and brand strategy projects. See the results and impact of my work."
      />
      <section className="py-20 md:py-32">
        <Container>
          <FadeIn>
            <div className="text-center">
              <span className="mb-4 inline-block rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-indigo-400" data-testid="badge-portfolio">
                Portfolio
              </span>
              <h1 className="text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl md:text-6xl" data-testid="heading-work">
                My Work
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400" data-testid="text-work-description">
                A collection of projects that showcase my expertise in content creation, 
                digital marketing, and brand strategy. Each project represents a unique 
                challenge and creative solution.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      <PortfolioGrid showAll limit={100} />
    </motion.main>
  );
}
