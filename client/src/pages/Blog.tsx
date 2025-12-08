import { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Calendar, ArrowRight } from "lucide-react";
import { blogPosts, blogCategories } from "@/data/blog";
import { SEOHead } from "@/components/seo/SEOHead";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/animations/FadeIn";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(p => p.category === selectedCategory);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const featuredPost = blogPosts.find(p => p.featured);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
      data-testid="page-blog"
    >
      <SEOHead
        title="Blog - Insights & Ideas"
        description="Thoughts, strategies, and insights on content creation, digital marketing, and building your online presence."
      />

      <section className="py-20 md:py-32">
        <Container>
          <FadeIn>
            <div className="text-center">
              <span className="mb-4 inline-block rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-indigo-400" data-testid="badge-blog">
                Blog
              </span>
              <h1 className="text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl md:text-6xl" data-testid="heading-blog">
                Insights & Ideas
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400" data-testid="text-blog-description">
                Thoughts, strategies, and insights on content creation, digital marketing, 
                and building your online presence.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {featuredPost && (
        <section className="pb-16">
          <Container>
            <FadeIn delay={0.1}>
              <Link 
                href={`/blog/${featuredPost.slug}`}
                className="group block overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 transition-all duration-300 hover:border-slate-700"
                data-testid="card-featured-post"
              >
                <div className="grid lg:grid-cols-2">
                  <div className="aspect-video lg:aspect-auto overflow-hidden">
                    <img
                      src={featuredPost.thumbnail}
                      alt={featuredPost.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      data-testid="img-featured-post"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-6 md:p-10">
                    <span className="mb-4 inline-block w-fit rounded-full bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-400" data-testid="badge-featured">
                      Featured
                    </span>
                    <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-slate-500">
                      <span className="rounded-full bg-indigo-500/10 px-2.5 py-0.5 font-medium text-indigo-400" data-testid="category-featured">
                        {featuredPost.category}
                      </span>
                      <span className="flex items-center gap-1" data-testid="date-featured">
                        <Calendar className="h-3 w-3" />
                        {formatDate(featuredPost.publishedAt)}
                      </span>
                      <span className="flex items-center gap-1" data-testid="readtime-featured">
                        <Clock className="h-3 w-3" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                    <h2 className="mb-3 text-2xl font-bold text-slate-50 group-hover:text-indigo-400 transition-colors md:text-3xl" data-testid="heading-featured-post">
                      {featuredPost.title}
                    </h2>
                    <p className="mb-6 text-slate-400 leading-relaxed" data-testid="text-featured-excerpt">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-sm font-medium text-indigo-400" data-testid="link-read-featured">
                      Read Full Article
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </FadeIn>
          </Container>
        </section>
      )}

      <section className="pb-20 md:pb-32">
        <Container>
          <FadeIn delay={0.2}>
            <div className="mb-8 flex flex-wrap justify-center gap-2" data-testid="filter-categories">
              {blogCategories.map((category) => (
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

          <motion.div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" layout data-testid="blog-posts-grid">
            <AnimatePresence mode="popLayout">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
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
                        data-testid={`img-blog-${post.slug}`}
                      />
                    </div>
                    
                    <div className="p-5 md:p-6">
                      <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-slate-500">
                        <span className="rounded-full bg-indigo-500/10 px-2.5 py-0.5 font-medium text-indigo-400" data-testid={`category-${post.slug}`}>
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1" data-testid={`date-${post.slug}`}>
                          <Calendar className="h-3 w-3" />
                          {formatDate(post.publishedAt)}
                        </span>
                        <span className="flex items-center gap-1" data-testid={`readtime-${post.slug}`}>
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className="mb-2 text-lg font-semibold text-slate-50 line-clamp-2 group-hover:text-indigo-400 transition-colors" data-testid={`heading-${post.slug}`}>
                        {post.title}
                      </h3>

                      <p className="text-sm text-slate-400 line-clamp-2 leading-relaxed" data-testid={`excerpt-${post.slug}`}>
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
            </AnimatePresence>
          </motion.div>

          {filteredPosts.length === 0 && (
            <div className="py-16 text-center" data-testid="empty-state-posts">
              <p className="text-slate-400">No posts found in this category.</p>
            </div>
          )}
        </Container>
      </section>
    </motion.main>
  );
}
