import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { blogPosts } from "@/data/blog";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/FadeIn";
import { staggerContainer } from "@/components/animations/FramerConfig";

interface BlogHighlightsProps {
  showAll?: boolean;
  limit?: number;
}

export function BlogHighlights({ showAll = false, limit = 3 }: BlogHighlightsProps) {
  const displayPosts = showAll ? blogPosts : blogPosts.filter(p => p.featured).slice(0, limit);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <section className="relative py-20 md:py-32 bg-slate-950" data-testid="section-blog-highlights">
      <Container>
        <FadeIn>
          <SectionTitle
            badge="Insights"
            title="Latest from the Blog"
            subtitle="Thoughts, strategies, and insights on content creation, digital marketing, and building your online presence."
          />
        </FadeIn>

        <motion.div 
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          data-testid="blog-highlights-grid"
        >
          {displayPosts.map((post, index) => (
            <motion.div
              key={post.id}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.5, delay: index * 0.1 }
                }
              }}
            >
              <Link 
                href={`/blog/${post.slug}`}
                className="group block h-full rounded-xl border border-slate-800 bg-slate-900/50 overflow-hidden transition-all duration-300 hover:border-slate-700 hover:bg-slate-900/80"
                data-testid={`card-blog-${post.slug}`}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                <div className="p-5 md:p-6">
                  <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-slate-500">
                    <span className="rounded-full bg-indigo-500/10 px-2.5 py-0.5 font-medium text-indigo-400">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {formatDate(post.publishedAt)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="mb-2 text-lg font-semibold text-slate-50 line-clamp-2 group-hover:text-indigo-400 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-sm text-slate-400 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-sm font-medium text-indigo-400 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {!showAll && (
          <FadeIn delay={0.3}>
            <div className="mt-12 text-center">
              <Button 
                asChild
                variant="outline"
                className="rounded-full border-slate-700 text-slate-300 hover:border-slate-600 hover:bg-slate-800/50"
                data-testid="button-view-all-posts"
              >
                <Link href="/blog">
                  View All Articles
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        )}
      </Container>
    </section>
  );
}
