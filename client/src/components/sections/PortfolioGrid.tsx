import { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { projects, categories, type Project } from "@/data/projects";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/FadeIn";

interface PortfolioGridProps {
  showAll?: boolean;
  limit?: number;
}

export function PortfolioGrid({ showAll = false, limit = 6 }: PortfolioGridProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);
  
  const displayProjects = showAll ? filteredProjects : filteredProjects.slice(0, limit);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <section id="work-preview" className="relative py-20 md:py-32 bg-slate-950" data-testid="section-portfolio">
      <Container>
        <FadeIn>
          <SectionTitle
            badge="Portfolio"
            title="Featured Work"
            subtitle="Explore my latest projects and see how I've helped brands achieve their goals through creative content and strategic marketing."
          />
        </FadeIn>

        {showAll && (
          <FadeIn delay={0.1}>
            <div className="mb-8 flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-indigo-600 text-white"
                      : "border border-slate-700 text-slate-400 hover:border-slate-600 hover:text-slate-300"
                  }`}
                  data-testid={`button-filter-${category.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </FadeIn>
        )}

        <motion.div 
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          layout
          data-testid="portfolio-grid"
        >
          <AnimatePresence mode="popLayout">
            {displayProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group cursor-pointer"
                onClick={() => openModal(project)}
                data-testid={`card-project-${project.slug}`}
              >
                <div className="relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50 transition-all duration-300 hover:border-slate-700">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-60" />
                  </div>
                  
                  <div className="p-5">
                    <div className="mb-2 flex flex-wrap gap-2">
                      <span className="rounded-full bg-indigo-500/10 px-2.5 py-0.5 text-xs font-medium text-indigo-400">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="mb-1 text-lg font-semibold text-slate-50 line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-400 line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/80 text-slate-300 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {!showAll && (
          <FadeIn delay={0.3}>
            <div className="mt-12 text-center">
              <Button 
                asChild
                variant="outline"
                className="rounded-full border-slate-700 text-slate-300 hover:border-slate-600 hover:bg-slate-800/50"
                data-testid="button-view-all-work"
              >
                <Link href="/work">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        )}
      </Container>

      <Modal isOpen={!!selectedProject} onClose={closeModal} size="large">
        {selectedProject && (
          <div>
            <div className="relative mb-6 overflow-hidden rounded-lg">
              <img
                src={selectedProject.images[currentImageIndex]}
                alt={selectedProject.title}
                className="w-full aspect-video object-cover"
              />
              
              {selectedProject.images.length > 1 && (
                <>
                  <button
                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/80 text-white backdrop-blur-sm transition-colors hover:bg-slate-800"
                    data-testid="button-prev-image"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/80 text-white backdrop-blur-sm transition-colors hover:bg-slate-800"
                    data-testid="button-next-image"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {selectedProject.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                        className={`h-2 w-2 rounded-full transition-colors ${
                          idx === currentImageIndex ? "bg-white" : "bg-white/40"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="mb-4 flex flex-wrap gap-2">
              {selectedProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-400"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h3 className="mb-2 text-2xl font-bold text-slate-50">
              {selectedProject.title}
            </h3>
            <p className="mb-4 text-slate-300">
              {selectedProject.client}
            </p>
            <p className="mb-6 text-slate-400 leading-relaxed">
              {selectedProject.description}
            </p>

            <div className="mb-6 grid grid-cols-3 gap-4">
              {selectedProject.results.map((result) => (
                <div key={result.metric} className="rounded-lg border border-slate-800 bg-slate-800/50 p-4 text-center">
                  <div className="text-2xl font-bold text-indigo-400">
                    {result.value}
                  </div>
                  <div className="text-xs text-slate-500">
                    {result.metric}
                  </div>
                </div>
              ))}
            </div>

            <Button 
              asChild
              className="w-full rounded-full bg-indigo-600 text-white hover:bg-indigo-500"
              data-testid="button-view-case-study"
            >
              <Link href={`/work/${selectedProject.slug}`} onClick={closeModal}>
                View Full Case Study
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        )}
      </Modal>
    </section>
  );
}
