import { useParams, Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, ArrowRight, Quote, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import { SEOHead } from "@/components/seo/SEOHead";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/FadeIn";
import { SlideUp } from "@/components/animations/SlideUp";

export default function WorkDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [, setLocation] = useLocation();
  
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="pt-20"
        data-testid="page-work-not-found"
      >
        <SEOHead
          title="Project Not Found"
          description="The project you're looking for doesn't exist or has been removed."
        />
        <section className="flex min-h-[60vh] items-center justify-center py-20">
          <Container>
            <div className="text-center">
              <h1 className="mb-4 text-3xl font-bold text-slate-50" data-testid="heading-not-found">
                Project Not Found
              </h1>
              <p className="mb-8 text-slate-400" data-testid="text-not-found">
                The project you're looking for doesn't exist or has been removed.
              </p>
              <Button 
                asChild
                variant="outline" 
                className="rounded-full border-slate-700 text-slate-300"
                data-testid="button-back-to-work"
              >
                <Link href="/work">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Portfolio
                </Link>
              </Button>
            </div>
          </Container>
        </section>
      </motion.main>
    );
  }

  const projectIndex = projects.findIndex(p => p.slug === slug);
  const nextProject = projects[(projectIndex + 1) % projects.length];
  const prevProject = projects[(projectIndex - 1 + projects.length) % projects.length];

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
      data-testid={`page-work-${project.slug}`}
    >
      <SEOHead
        title={`${project.title} - Case Study`}
        description={project.description}
        image={project.thumbnail}
      />

      <section className="relative py-16 md:py-24">
        <Container>
          <FadeIn>
            <Link 
              href="/work"
              className="mb-8 inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-slate-200"
              data-testid="link-back-to-work"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Portfolio
            </Link>
          </FadeIn>

          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <FadeIn delay={0.1}>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-400"
                      data-testid={`tag-${tag.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h1 className="mb-4 text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl md:text-5xl" data-testid="heading-project-title">
                  {project.title}
                </h1>

                <p className="text-lg text-slate-300" data-testid="text-project-client">
                  {project.client}
                </p>
              </FadeIn>
            </div>

            <div className="lg:col-span-1">
              <FadeIn delay={0.2}>
                <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6" data-testid="card-project-details">
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">
                    Project Details
                  </h3>
                  <dl className="space-y-4">
                    <div className="flex items-center justify-between">
                      <dt className="flex items-center gap-2 text-sm text-slate-500">
                        <Calendar className="h-4 w-4" />
                        Year
                      </dt>
                      <dd className="text-sm font-medium text-slate-300" data-testid="text-project-year">{project.year}</dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt className="flex items-center gap-2 text-sm text-slate-500">
                        <Clock className="h-4 w-4" />
                        Duration
                      </dt>
                      <dd className="text-sm font-medium text-slate-300" data-testid="text-project-duration">{project.duration}</dd>
                    </div>
                    <div className="border-t border-slate-800 pt-4">
                      <dt className="mb-2 text-sm text-slate-500">Services</dt>
                      <dd className="flex flex-wrap gap-2">
                        {project.services.map((service) => (
                          <span
                            key={service}
                            className="rounded-full border border-slate-700 px-2 py-0.5 text-xs text-slate-400"
                            data-testid={`service-tag-${service.toLowerCase().replace(/\s+/g, '-')}`}
                          >
                            {service}
                          </span>
                        ))}
                      </dd>
                    </div>
                  </dl>
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-16">
        <Container>
          <SlideUp>
            <div className="overflow-hidden rounded-2xl">
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full aspect-video object-cover"
                data-testid="img-project-hero"
              />
            </div>
          </SlideUp>
        </Container>
      </section>

      <section className="py-12 md:py-16">
        <Container size="narrow">
          <div className="grid gap-12 md:grid-cols-3 mb-16">
            {project.results.map((result, index) => (
              <SlideUp key={result.metric} delay={index * 0.1}>
                <div className="text-center" data-testid={`stat-${result.metric.toLowerCase()}`}>
                  <div className="text-4xl font-bold text-indigo-400 md:text-5xl" data-testid={`stat-value-${index}`}>
                    {result.value}
                  </div>
                  <div className="mt-2 text-sm text-slate-500" data-testid={`stat-description-${index}`}>{result.description}</div>
                </div>
              </SlideUp>
            ))}
          </div>

          <SlideUp delay={0.2}>
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-slate-50" data-testid="heading-challenge">The Challenge</h2>
              <p className="text-slate-400 leading-relaxed" data-testid="text-challenge">{project.challenge}</p>
            </div>
          </SlideUp>

          <SlideUp delay={0.3}>
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-slate-50" data-testid="heading-solution">The Solution</h2>
              <p className="text-slate-400 leading-relaxed" data-testid="text-solution">{project.solution}</p>
            </div>
          </SlideUp>
        </Container>
      </section>

      {project.images.length > 1 && (
        <section className="py-12">
          <Container>
            <div className="grid gap-6 md:grid-cols-2">
              {project.images.slice(1).map((image, index) => (
                <SlideUp key={index} delay={index * 0.1}>
                  <div className="overflow-hidden rounded-xl">
                    <img
                      src={image}
                      alt={`${project.title} - Image ${index + 2}`}
                      className="w-full aspect-video object-cover"
                      data-testid={`img-project-${index + 2}`}
                    />
                  </div>
                </SlideUp>
              ))}
            </div>
          </Container>
        </section>
      )}

      {project.testimonial && (
        <section className="py-16 md:py-24">
          <Container size="narrow">
            <SlideUp>
              <div className="relative rounded-2xl border border-slate-800 bg-slate-900/50 p-8 md:p-12" data-testid="card-project-testimonial">
                <div className="absolute -top-4 left-8 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-white">
                  <Quote className="h-5 w-5" />
                </div>
                <blockquote className="text-xl text-slate-300 leading-relaxed md:text-2xl" data-testid="text-testimonial-quote">
                  "{project.testimonial.quote}"
                </blockquote>
                <div className="mt-6">
                  <div className="font-medium text-slate-50" data-testid="text-testimonial-author">{project.testimonial.author}</div>
                  <div className="text-sm text-slate-500" data-testid="text-testimonial-role">{project.testimonial.role}</div>
                </div>
              </div>
            </SlideUp>
          </Container>
        </section>
      )}

      <section className="border-t border-slate-800 py-16">
        <Container>
          <FadeIn>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <Link 
                href={`/work/${prevProject.slug}`}
                className="group flex items-center gap-3 text-slate-400 transition-colors hover:text-slate-200"
                data-testid="link-prev-project"
              >
                <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
                <div>
                  <div className="text-xs text-slate-500">Previous Project</div>
                  <div className="font-medium" data-testid="text-prev-project-title">{prevProject.title}</div>
                </div>
              </Link>
              
              <Link 
                href={`/work/${nextProject.slug}`}
                className="group flex items-center gap-3 text-slate-400 transition-colors hover:text-slate-200 text-right"
                data-testid="link-next-project"
              >
                <div>
                  <div className="text-xs text-slate-500">Next Project</div>
                  <div className="font-medium" data-testid="text-next-project-title">{nextProject.title}</div>
                </div>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </FadeIn>
        </Container>
      </section>
    </motion.main>
  );
}
