import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Tag, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blog";
import { SEOHead } from "@/components/seo/SEOHead";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/FadeIn";
import { SlideUp } from "@/components/animations/SlideUp";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  
  const post = blogPosts.find(p => p.slug === slug);
  const relatedPosts = blogPosts
    .filter(p => p.slug !== slug && p.category === post?.category)
    .slice(0, 3);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  if (!post) {
    return (
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="pt-20"
        data-testid="page-blog-not-found"
      >
        <SEOHead
          title="Post Not Found"
          description="The article you're looking for doesn't exist or has been removed."
        />
        <section className="flex min-h-[60vh] items-center justify-center py-20">
          <Container>
            <div className="text-center">
              <h1 className="mb-4 text-3xl font-bold text-slate-50" data-testid="heading-not-found">
                Post Not Found
              </h1>
              <p className="mb-8 text-slate-400" data-testid="text-not-found">
                The article you're looking for doesn't exist or has been removed.
              </p>
              <Button 
                asChild
                variant="outline" 
                className="rounded-full border-slate-700 text-slate-300"
                data-testid="button-back-to-blog"
              >
                <Link href="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Link>
              </Button>
            </div>
          </Container>
        </section>
      </motion.main>
    );
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
      data-testid={`page-blog-${post.slug}`}
    >
      <SEOHead
        title={post.title}
        description={post.excerpt}
        image={post.thumbnail}
      />

      <article>
        <section className="py-16 md:py-24">
          <Container size="narrow">
            <FadeIn>
              <Link 
                href="/blog"
                className="mb-8 inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-slate-200"
                data-testid="link-back-to-blog"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-slate-500">
                <span className="rounded-full bg-indigo-500/10 px-3 py-1 font-medium text-indigo-400" data-testid="post-category">
                  {post.category}
                </span>
                <span className="flex items-center gap-1.5" data-testid="post-date">
                  <Calendar className="h-4 w-4" />
                  {formatDate(post.publishedAt)}
                </span>
                <span className="flex items-center gap-1.5" data-testid="post-readtime">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </span>
              </div>

              <h1 className="mb-6 text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl md:text-5xl leading-tight" data-testid="post-title">
                {post.title}
              </h1>

              <p className="mb-8 text-xl text-slate-400 leading-relaxed" data-testid="post-excerpt">
                {post.excerpt}
              </p>

              <div className="flex items-center gap-4 border-b border-slate-800 pb-8" data-testid="post-author">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-slate-800"
                  data-testid="author-avatar"
                />
                <div>
                  <div className="font-medium text-slate-50" data-testid="author-name">{post.author.name}</div>
                  <div className="text-sm text-slate-500" data-testid="author-role">{post.author.role}</div>
                </div>
              </div>
            </FadeIn>
          </Container>
        </section>

        <section className="pb-8">
          <Container>
            <SlideUp>
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="w-full aspect-video object-cover"
                  data-testid="post-thumbnail"
                />
              </div>
            </SlideUp>
          </Container>
        </section>

        <section className="py-12 md:py-16">
          <Container size="narrow">
            <SlideUp delay={0.1}>
              <div 
                className="prose prose-lg prose-invert max-w-none prose-headings:text-slate-50 prose-p:text-slate-400 prose-strong:text-slate-200 prose-ul:text-slate-400 prose-ol:text-slate-400 prose-a:text-indigo-400 prose-a:no-underline hover:prose-a:underline prose-h2:mt-12 prose-h2:mb-6 prose-h3:mt-8 prose-h3:mb-4"
                dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }}
                data-testid="post-content"
              />
            </SlideUp>

            <SlideUp delay={0.2}>
              <div className="mt-12 flex flex-wrap gap-2 border-t border-slate-800 pt-8" data-testid="post-tags">
                <Tag className="h-4 w-4 text-slate-500" />
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-700 px-3 py-1 text-sm text-slate-400"
                    data-testid={`tag-${tag.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </SlideUp>
          </Container>
        </section>

        {relatedPosts.length > 0 && (
          <section className="border-t border-slate-800 py-16 md:py-24">
            <Container>
              <FadeIn>
                <h2 className="mb-8 text-2xl font-bold text-slate-50" data-testid="heading-related">
                  Related Articles
                </h2>
              </FadeIn>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" data-testid="related-posts-grid">
                {relatedPosts.map((relatedPost, index) => (
                  <SlideUp key={relatedPost.id} delay={index * 0.1}>
                    <Link 
                      href={`/blog/${relatedPost.slug}`}
                      className="group block h-full rounded-xl border border-slate-800 bg-slate-900/50 overflow-hidden transition-all duration-300 hover:border-slate-700"
                      data-testid={`card-related-${relatedPost.slug}`}
                    >
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={relatedPost.thumbnail}
                          alt={relatedPost.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          data-testid={`img-related-${relatedPost.slug}`}
                        />
                      </div>
                      <div className="p-5">
                        <div className="mb-2 text-xs text-slate-500" data-testid={`readtime-related-${relatedPost.slug}`}>
                          {relatedPost.readTime}
                        </div>
                        <h3 className="font-semibold text-slate-50 line-clamp-2 group-hover:text-indigo-400 transition-colors" data-testid={`heading-related-${relatedPost.slug}`}>
                          {relatedPost.title}
                        </h3>
                      </div>
                    </Link>
                  </SlideUp>
                ))}
              </div>
            </Container>
          </section>
        )}
      </article>
    </motion.main>
  );
}
