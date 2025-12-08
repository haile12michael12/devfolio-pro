export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: string;
  description: string;
  thumbnail: string;
  images: string[];
  tags: string[];
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  challenge: string;
  solution: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  year: string;
  duration: string;
  services: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "elevate-fitness-rebrand",
    title: "Elevate Fitness Brand Launch",
    client: "Elevate Fitness",
    category: "Brand Strategy",
    description: "Complete brand overhaul and digital marketing strategy for a premium fitness studio chain, resulting in 300% growth in social media engagement.",
    thumbnail: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=1200&h=800&fit=crop"
    ],
    tags: ["Branding", "Social Media", "Content Strategy"],
    results: [
      { metric: "Engagement", value: "+300%", description: "Social media engagement increase" },
      { metric: "Followers", value: "50K+", description: "New followers in 6 months" },
      { metric: "Revenue", value: "+45%", description: "Membership sign-up increase" }
    ],
    challenge: "Elevate Fitness was struggling to differentiate themselves in a crowded market. Their social media presence was inconsistent and failed to capture their premium positioning.",
    solution: "We developed a comprehensive brand identity system and content strategy that showcased their unique approach to fitness. This included a complete visual overhaul, influencer partnerships, and a user-generated content campaign.",
    testimonial: {
      quote: "The transformation was incredible. Our brand finally reflects who we are, and the results speak for themselves.",
      author: "Sarah Chen",
      role: "CEO, Elevate Fitness"
    },
    year: "2024",
    duration: "6 months",
    services: ["Brand Strategy", "Social Media Marketing", "Content Creation"]
  },
  {
    id: "2",
    slug: "techstart-product-launch",
    title: "TechStart SaaS Launch Campaign",
    client: "TechStart",
    category: "Product Launch",
    description: "Multi-channel product launch campaign for an innovative B2B SaaS platform, generating 10,000+ qualified leads in the first quarter.",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&h=800&fit=crop"
    ],
    tags: ["Product Launch", "B2B Marketing", "Lead Generation"],
    results: [
      { metric: "Leads", value: "10K+", description: "Qualified leads generated" },
      { metric: "CTR", value: "4.2%", description: "Average click-through rate" },
      { metric: "CAC", value: "-35%", description: "Customer acquisition cost reduction" }
    ],
    challenge: "TechStart needed to launch their new platform in a competitive B2B space with limited brand awareness and a tight timeline.",
    solution: "We created a phased launch strategy combining thought leadership content, targeted LinkedIn campaigns, and strategic webinars. Our approach focused on educating the market while building anticipation.",
    year: "2024",
    duration: "4 months",
    services: ["Content Strategy", "Paid Advertising", "Lead Generation"]
  },
  {
    id: "3",
    slug: "artisan-coffee-social",
    title: "Artisan Coffee Social Takeover",
    client: "Brewcraft Coffee",
    category: "Social Media",
    description: "Transformed a local coffee roaster into a nationally recognized brand through strategic social media storytelling and influencer partnerships.",
    thumbnail: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1200&h=800&fit=crop"
    ],
    tags: ["Social Media", "Influencer Marketing", "Brand Building"],
    results: [
      { metric: "Reach", value: "2M+", description: "Monthly impressions" },
      { metric: "Sales", value: "+120%", description: "Online sales increase" },
      { metric: "Community", value: "85K", description: "Engaged community members" }
    ],
    challenge: "Brewcraft was a beloved local brand but struggled to translate their in-store experience to digital channels and expand beyond their region.",
    solution: "We developed a content strategy centered on the craft and story behind each roast. Micro-influencer partnerships and user-generated content campaigns helped build an authentic, engaged community.",
    testimonial: {
      quote: "They understood our brand from day one. The growth has been organic and authentic, exactly what we wanted.",
      author: "Marcus Thompson",
      role: "Founder, Brewcraft Coffee"
    },
    year: "2023",
    duration: "8 months",
    services: ["Social Media Marketing", "Influencer Marketing", "Content Creation"]
  },
  {
    id: "4",
    slug: "wellness-app-growth",
    title: "MindfulMe App Growth",
    client: "MindfulMe",
    category: "App Marketing",
    description: "Drove app downloads and user retention for a wellness meditation app through targeted content marketing and community building.",
    thumbnail: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=1200&h=800&fit=crop"
    ],
    tags: ["App Marketing", "Content Marketing", "Community"],
    results: [
      { metric: "Downloads", value: "500K+", description: "App downloads" },
      { metric: "Retention", value: "+65%", description: "30-day retention improvement" },
      { metric: "Rating", value: "4.9", description: "App store rating" }
    ],
    challenge: "In a saturated wellness app market, MindfulMe needed to stand out and build a loyal user base with limited marketing budget.",
    solution: "We focused on community-led growth, creating valuable content around mental wellness, partnering with wellness influencers, and implementing a referral program that turned users into advocates.",
    year: "2024",
    duration: "12 months",
    services: ["Content Strategy", "Community Building", "Influencer Marketing"]
  },
  {
    id: "5",
    slug: "fashion-ecommerce-revival",
    title: "Nova Fashion E-commerce Revival",
    client: "Nova Fashion",
    category: "E-commerce",
    description: "Revitalized a struggling e-commerce fashion brand with a complete digital marketing overhaul and conversion optimization strategy.",
    thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&h=800&fit=crop"
    ],
    tags: ["E-commerce", "Paid Advertising", "Conversion Optimization"],
    results: [
      { metric: "Revenue", value: "+180%", description: "E-commerce revenue growth" },
      { metric: "ROAS", value: "5.2x", description: "Return on ad spend" },
      { metric: "AOV", value: "+40%", description: "Average order value increase" }
    ],
    challenge: "Nova Fashion had declining sales and an aging customer base. Their digital presence felt outdated and disconnected from current trends.",
    solution: "We modernized their brand voice, implemented a data-driven paid advertising strategy, and created trend-forward content that resonated with a younger demographic while retaining loyal customers.",
    testimonial: {
      quote: "They brought fresh energy to our brand and the results exceeded all our expectations.",
      author: "Elena Rodriguez",
      role: "Marketing Director, Nova Fashion"
    },
    year: "2023",
    duration: "10 months",
    services: ["Paid Advertising", "Content Strategy", "E-commerce Optimization"]
  },
  {
    id: "6",
    slug: "restaurant-chain-local-seo",
    title: "Savory Bites Local Domination",
    client: "Savory Bites",
    category: "Local SEO",
    description: "Implemented a comprehensive local SEO and reputation management strategy for a regional restaurant chain, dominating local search results.",
    thumbnail: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&h=800&fit=crop"
    ],
    tags: ["Local SEO", "Reputation Management", "Google Business"],
    results: [
      { metric: "Visibility", value: "+250%", description: "Local search visibility" },
      { metric: "Reviews", value: "2,500+", description: "New positive reviews" },
      { metric: "Foot Traffic", value: "+45%", description: "In-store visits increase" }
    ],
    challenge: "Despite great food, Savory Bites was losing to competitors in local search results and had inconsistent review management across 15 locations.",
    solution: "We optimized all Google Business profiles, implemented a review generation system, and created location-specific content strategies that highlighted each restaurant's unique offerings.",
    year: "2024",
    duration: "6 months",
    services: ["Local SEO", "Reputation Management", "Content Strategy"]
  }
];

export const categories = ["All", "Brand Strategy", "Product Launch", "Social Media", "App Marketing", "E-commerce", "Local SEO"];
