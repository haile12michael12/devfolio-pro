import { SEOHead } from "@/components/seo/SEOHead";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { Testimonials } from "@/components/sections/Testimonials";
import { BlogHighlights } from "@/components/sections/BlogHighlights";
import { ContactForm } from "@/components/sections/ContactForm";

export default function Home() {
  return (
    <main data-testid="page-home">
      <SEOHead
        title="Alex Rivera - Content Creator & Digital Marketer"
        description="Helping brands tell compelling stories and achieve measurable growth through strategic content and marketing campaigns."
      />
      <Hero />
      <Services />
      <PortfolioGrid />
      <Testimonials />
      <BlogHighlights />
      <ContactForm />
    </main>
  );
}
