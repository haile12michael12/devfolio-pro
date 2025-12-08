export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote: "Working with Alex completely transformed our digital presence. The strategic approach to content creation and the attention to detail in every campaign exceeded our expectations. Our engagement rates have never been higher.",
    author: "Sarah Chen",
    role: "CEO",
    company: "Elevate Fitness",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    rating: 5
  },
  {
    id: "2",
    quote: "The results speak for themselves. We saw a 300% increase in qualified leads within the first quarter of our campaign. The team's understanding of B2B marketing is exceptional.",
    author: "Michael Torres",
    role: "VP of Marketing",
    company: "TechStart",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
    rating: 5
  },
  {
    id: "3",
    quote: "They truly understood our brand's soul. The content they create doesn't just look beautiful—it tells our story in a way that resonates with our customers on a deep level.",
    author: "Marcus Thompson",
    role: "Founder",
    company: "Brewcraft Coffee",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    rating: 5
  },
  {
    id: "4",
    quote: "The combination of creativity and data-driven strategy is rare. Every decision was backed by insights, and the creative execution was always on point. Highly recommend for any brand looking to grow.",
    author: "Elena Rodriguez",
    role: "Marketing Director",
    company: "Nova Fashion",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    rating: 5
  },
  {
    id: "5",
    quote: "Our app went from struggling to retain users to having one of the highest retention rates in our category. The community-first approach they implemented was game-changing.",
    author: "David Park",
    role: "Co-founder",
    company: "MindfulMe",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
    rating: 5
  },
  {
    id: "6",
    quote: "Finally, a marketing partner that delivers real, measurable results. Our restaurant locations are now dominating local search, and the increase in foot traffic has been remarkable.",
    author: "Jennifer Walsh",
    role: "Operations Director",
    company: "Savory Bites",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop",
    rating: 5
  }
];
