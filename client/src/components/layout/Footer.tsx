import { Link } from "wouter";
import { Sparkles, Twitter, Instagram, Linkedin, Youtube, Mail } from "lucide-react";
import { Container } from "./Container";

const footerLinks = {
  navigation: [
    { href: "/", label: "Home" },
    { href: "/work", label: "Work" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" }
  ],
  services: [
    { label: "Content Strategy" },
    { label: "Social Media Marketing" },
    { label: "Video Production" },
    { label: "SEO & Growth" },
    { label: "Influencer Marketing" }
  ]
};

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" }
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/50 bg-slate-950" data-testid="footer">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link 
              href="/"
              className="flex items-center gap-2 text-xl font-bold text-slate-50"
              data-testid="footer-logo"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span>Alex Rivera</span>
            </Link>
            <p className="mt-4 text-sm text-slate-400 leading-relaxed" data-testid="footer-description">
              Content creator and digital marketer helping brands tell their stories and grow their audience through strategic, creative campaigns.
            </p>
            <div className="mt-6 flex gap-3" data-testid="footer-social">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 text-slate-400 transition-colors hover:border-slate-700 hover:bg-slate-800/50 hover:text-slate-200"
                  data-testid={`link-social-${social.label.toLowerCase()}`}
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div data-testid="footer-nav">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Navigation
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-slate-200"
                    data-testid={`footer-link-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div data-testid="footer-services">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.services.map((service, index) => (
                <li key={service.label}>
                  <span className="text-sm text-slate-400" data-testid={`footer-service-${index}`}>
                    {service.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div data-testid="footer-contact">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Get in Touch
            </h3>
            <div className="mt-4 space-y-3">
              <a 
                href="mailto:hello@alexrivera.com"
                className="flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-slate-200"
                data-testid="footer-email"
              >
                <Mail className="h-4 w-4" />
                hello@alexrivera.com
              </a>
              <p className="text-sm text-slate-400" data-testid="footer-availability">
                Available for freelance projects and brand collaborations.
              </p>
              <Link 
                href="/contact"
                className="inline-flex items-center text-sm font-medium text-indigo-400 transition-colors hover:text-indigo-300"
                data-testid="footer-cta"
              >
                Start a project
                <span className="ml-1">→</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800/50 py-6" data-testid="footer-bottom">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-slate-500" data-testid="footer-copyright">
              © {currentYear} Alex Rivera. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-slate-500">
              <a href="#" className="hover:text-slate-300" data-testid="link-privacy">Privacy Policy</a>
              <a href="#" className="hover:text-slate-300" data-testid="link-terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
