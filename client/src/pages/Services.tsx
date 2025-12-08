import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Check } from "lucide-react";
import { services, iconMap } from "@/data/services";
import { SEOHead } from "@/components/seo/SEOHead";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/FadeIn";
import { SlideUp } from "@/components/animations/SlideUp";
import { staggerContainer } from "@/components/animations/FramerConfig";

export default function ServicesPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
      data-testid="page-services"
    >
      <SEOHead
        title="Services - What I Offer"
        description="Comprehensive digital marketing and content creation services designed to help your brand stand out, connect with your audience, and achieve measurable growth."
      />

      <section className="py-20 md:py-32">
        <Container>
          <FadeIn>
            <div className="text-center">
              <span className="mb-4 inline-block rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-indigo-400" data-testid="badge-services">
                Services
              </span>
              <h1 className="text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl md:text-6xl" data-testid="heading-services">
                What I Offer
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400" data-testid="text-services-description">
                Comprehensive digital marketing and content creation services designed 
                to help your brand stand out, connect with your audience, and achieve 
                measurable growth.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="pb-20 md:pb-32">
        <Container>
          <motion.div 
            className="space-y-24"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => {
              const Icon = iconMap[service.icon];
              const isEven = index % 2 === 0;
              
              return (
                <SlideUp key={service.id} delay={index * 0.1}>
                  <div 
                    className={`grid gap-8 md:gap-12 lg:grid-cols-2 lg:items-center ${
                      isEven ? "" : "lg:flex-row-reverse"
                    }`}
                    data-testid={`section-service-${service.id}`}
                  >
                    <div className={isEven ? "" : "lg:order-2"}>
                      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600/20 to-purple-600/20 text-indigo-400">
                        {Icon && <Icon className="h-7 w-7" />}
                      </div>

                      <h2 className="mb-4 text-2xl font-bold text-slate-50 sm:text-3xl" data-testid={`heading-service-${service.id}`}>
                        {service.title}
                      </h2>

                      <p className="mb-6 text-slate-400 leading-relaxed" data-testid={`text-service-description-${service.id}`}>
                        {service.description}
                      </p>

                      <ul className="mb-8 space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <li key={feature} className="flex items-center gap-3 text-slate-300" data-testid={`feature-${service.id}-${featureIndex}`}>
                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                              <Check className="h-3 w-3" />
                            </span>
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <Link href="/contact">
                        <Button 
                          className="rounded-full bg-indigo-600 text-white hover:bg-indigo-500"
                          data-testid={`button-inquire-${service.id}`}
                        >
                          Inquire About This Service
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>

                    <div className={`relative ${isEven ? "lg:order-2" : ""}`}>
                      <div className="aspect-square rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 via-indigo-950/20 to-slate-900 p-8 md:p-12" data-testid={`visual-service-${service.id}`}>
                        <div className="flex h-full items-center justify-center">
                          {Icon && (
                            <Icon className="h-32 w-32 text-indigo-400/20 md:h-48 md:w-48" />
                          )}
                        </div>
                      </div>
                      <div className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl border border-indigo-500/10 -z-10" />
                    </div>
                  </div>
                </SlideUp>
              );
            })}
          </motion.div>
        </Container>
      </section>

      <section className="border-t border-slate-800 py-20 md:py-32">
        <Container>
          <FadeIn>
            <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 via-indigo-950/30 to-slate-900 p-8 md:p-16 text-center" data-testid="section-cta">
              <h2 className="mb-4 text-3xl font-bold text-slate-50 md:text-4xl" data-testid="heading-cta">
                Ready to Get Started?
              </h2>
              <p className="mx-auto mb-8 max-w-xl text-slate-400" data-testid="text-cta">
                Let's discuss your project and create a custom strategy that delivers results.
                Schedule a free consultation today.
              </p>
              <Link href="/contact">
                <Button 
                  size="lg"
                  className="rounded-full bg-indigo-600 px-8 py-6 text-base font-medium text-white hover:bg-indigo-500"
                  data-testid="button-schedule-consultation"
                >
                  Schedule Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </FadeIn>
        </Container>
      </section>
    </motion.main>
  );
}
