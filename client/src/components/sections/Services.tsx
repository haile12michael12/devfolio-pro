import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { services, iconMap } from "@/data/services";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FadeIn } from "@/components/animations/FadeIn";
import { staggerContainer } from "@/components/animations/FramerConfig";

interface ServicesProps {
  showAll?: boolean;
}

export function Services({ showAll = false }: ServicesProps) {
  const displayServices = showAll ? services : services.slice(0, 6);

  return (
    <section className="relative py-20 md:py-32 bg-slate-950" data-testid="section-services">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/10 via-transparent to-transparent" />
      
      <Container className="relative z-10">
        <FadeIn>
          <SectionTitle
            badge="What I Do"
            title="Services That Drive Results"
            subtitle="From content strategy to performance marketing, I offer comprehensive digital solutions tailored to your brand's unique needs."
          />
        </FadeIn>

        <motion.div 
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          data-testid="services-grid"
        >
          {displayServices.map((service, index) => {
            const Icon = iconMap[service.icon];
            
            return (
              <motion.div
                key={service.id}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.5, delay: index * 0.1 }
                  }
                }}
                className="group relative rounded-xl border border-slate-800 bg-slate-900/50 p-6 md:p-8 transition-all duration-300 hover:border-slate-700 hover:bg-slate-900/80"
                data-testid={`card-service-${service.id}`}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600/20 to-purple-600/20 text-indigo-400" data-testid={`icon-service-${service.id}`}>
                  {Icon && <Icon className="h-6 w-6" />}
                </div>

                <h3 className="mb-3 text-xl font-semibold text-slate-50" data-testid={`heading-service-${service.id}`}>
                  {service.title}
                </h3>

                <p className="mb-4 text-sm text-slate-400 leading-relaxed" data-testid={`text-service-${service.id}`}>
                  {service.description}
                </p>

                <ul className="space-y-2" data-testid={`features-service-${service.id}`}>
                  {service.features.slice(0, 3).map((feature, featureIndex) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-slate-500" data-testid={`feature-${service.id}-${featureIndex}`}>
                      <span className="h-1 w-1 rounded-full bg-indigo-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-600/5 to-purple-600/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </motion.div>

        {!showAll && (
          <FadeIn delay={0.4}>
            <div className="mt-12 text-center">
              <Link 
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-medium text-indigo-400 transition-colors hover:text-indigo-300"
                data-testid="link-all-services"
              >
                View All Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeIn>
        )}
      </Container>
    </section>
  );
}
