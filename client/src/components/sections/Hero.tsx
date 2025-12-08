import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Play, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/animations/FadeIn";

export function Hero() {
  const scrollToWork = () => {
    const workSection = document.getElementById("work-preview");
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" data-testid="section-hero">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950/20 to-slate-950" />
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-bl from-indigo-600/10 via-purple-600/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-purple-600/10 via-indigo-600/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(148, 163, 184, 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <Container className="relative z-10 pt-20">
        <div className="flex flex-col items-center text-center">
          <FadeIn delay={0.1}>
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-400" data-testid="badge-availability">
              <span className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
              Available for new projects
            </span>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="mt-8 max-w-4xl text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl md:text-6xl lg:text-7xl" data-testid="heading-hero">
              Content Creator &{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Digital Marketer
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="mt-6 max-w-2xl text-lg text-slate-400 sm:text-xl leading-relaxed" data-testid="text-hero-description">
              I help brands tell compelling stories, build engaged communities, and achieve 
              measurable growth through strategic content and digital marketing campaigns.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button 
                asChild
                size="lg"
                className="rounded-full bg-indigo-600 px-8 py-6 text-base font-medium text-white hover:bg-indigo-500"
                data-testid="button-hero-work"
              >
                <Link href="/work">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-2 border-slate-700 bg-transparent px-8 py-6 text-base font-medium text-slate-300 hover:border-slate-600 hover:bg-slate-800/50 hover:text-slate-50"
                data-testid="button-hero-contact"
              >
                <Link href="/contact">
                  <Play className="mr-2 h-4 w-4" />
                  Let's Connect
                </Link>
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="mt-16 grid grid-cols-3 gap-8 sm:gap-16" data-testid="stats-hero">
              {[
                { value: "50+", label: "Projects Completed" },
                { value: "25M+", label: "Reach Generated" },
                { value: "8+", label: "Years Experience" }
              ].map((stat, index) => (
                <div key={stat.label} className="text-center" data-testid={`stat-hero-${index}`}>
                  <div className="text-2xl font-bold text-slate-50 sm:text-3xl md:text-4xl" data-testid={`stat-value-${index}`}>
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-slate-500 sm:text-sm" data-testid={`stat-label-${index}`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </Container>

      <motion.button
        onClick={scrollToWork}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 transition-colors hover:text-slate-300"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        data-testid="button-scroll-down"
      >
        <span className="text-xs uppercase tracking-wider">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </motion.button>
    </section>
  );
}
