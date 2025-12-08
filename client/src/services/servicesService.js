import { Megaphone, Video, PenTool, TrendingUp, Users, BarChart3, Camera, Globe } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: "content-strategy",
    title: "Content Strategy",
    description: "Develop compelling content strategies that resonate with your audience and drive measurable results across all platforms.",
    icon: "PenTool",
    features: ["Content calendars", "Audience research", "Brand voice development", "Performance tracking"]
  },
  {
    id: "social-media",
    title: "Social Media Marketing",
    description: "Build and engage your community with strategic social media campaigns that amplify your brand's message.",
    icon: "Megaphone",
    features: ["Platform optimization", "Community management", "Paid advertising", "Analytics & reporting"]
  },
  {
    id: "video-production",
    title: "Video Production",
    description: "Create scroll-stopping video content that captures attention and converts viewers into loyal customers.",
    icon: "Video",
    features: ["Short-form content", "Brand videos", "Editing & post-production", "YouTube optimization"]
  },
  {
    id: "seo-optimization",
    title: "SEO & Growth",
    description: "Boost your organic visibility with data-driven SEO strategies that put you ahead of the competition.",
    icon: "TrendingUp",
    features: ["Keyword research", "On-page optimization", "Technical SEO", "Link building"]
  },
  {
    id: "influencer-marketing",
    title: "Influencer Marketing",
    description: "Connect with the right influencers to expand your reach and build authentic brand partnerships.",
    icon: "Users",
    features: ["Influencer sourcing", "Campaign management", "Contract negotiation", "ROI tracking"]
  },
  {
    id: "analytics",
    title: "Analytics & Insights",
    description: "Transform data into actionable insights with comprehensive analytics and performance reporting.",
    icon: "BarChart3",
    features: ["Custom dashboards", "KPI tracking", "Competitive analysis", "Growth recommendations"]
  }
];

export const iconMap: Record<string, any> = {
  Megaphone,
  Video,
  PenTool,
  TrendingUp,
  Users,
  BarChart3,
  Camera,
  Globe
};
