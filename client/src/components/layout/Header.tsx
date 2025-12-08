import { useState } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import { Container } from "./Container";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-20 border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-xl" data-testid="header">
      <Container className="h-full">
        <nav className="flex h-full items-center justify-between gap-4" data-testid="nav-main">
          <Link 
            href="/" 
            className="flex items-center gap-2 text-xl font-bold text-slate-50"
            data-testid="link-home-logo"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="hidden sm:inline" data-testid="text-logo-name">Alex Rivera</span>
          </Link>

          <div className="hidden md:flex items-center gap-1" data-testid="nav-desktop">
            {navLinks.map((link) => {
              const isActive = location === link.href || 
                (link.href !== "/" && location.startsWith(link.href));
              
              return (
                <Link 
                  key={link.href} 
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                    isActive 
                      ? "text-slate-50" 
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                  data-testid={`link-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 -z-10 rounded-lg bg-slate-800/50"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:block">
            <Button 
              asChild
              className="rounded-full bg-indigo-600 px-6 text-white hover:bg-indigo-500"
              data-testid="button-header-cta"
            >
              <Link href="/contact">Let's Talk</Link>
            </Button>
          </div>

          <button
            className="flex md:hidden h-10 w-10 items-center justify-center rounded-lg text-slate-300 hover:bg-slate-800/50 hover:text-slate-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </nav>
      </Container>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-slate-800/50 bg-slate-950/95 backdrop-blur-xl"
            data-testid="nav-mobile"
          >
            <Container>
              <div className="flex flex-col gap-1 py-4">
                {navLinks.map((link) => {
                  const isActive = location === link.href;
                  
                  return (
                    <Link 
                      key={link.href} 
                      href={link.href}
                      className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                        isActive 
                          ? "bg-slate-800/50 text-slate-50" 
                          : "text-slate-400 hover:bg-slate-800/30 hover:text-slate-200"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      data-testid={`link-mobile-nav-${link.label.toLowerCase()}`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <Button 
                  asChild
                  className="mt-2 w-full rounded-full bg-indigo-600 text-white hover:bg-indigo-500"
                  data-testid="button-mobile-cta"
                >
                  <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Let's Talk</Link>
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
