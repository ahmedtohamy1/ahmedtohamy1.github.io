import { Button } from "@/components/ui/button";
import { navLinks, siteMeta } from "@/data/site";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        isScrolled ? "backdrop-blur-xl" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <div
          className={cn(
            "flex w-full items-center justify-between rounded-full border px-4 py-2",
            "border-primary/20 bg-gradient-to-r from-background/80 via-background/60 to-background/80 shadow-lg shadow-primary/5"
          )}
        >
          <a
            href="#"
            className="flex items-center gap-2 text-primary"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            aria-label="Scroll to top"
          >
            <img src="/headerAT.png" alt="AT monogram" className="h-8 w-auto" />
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Button
                key={link.href}
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection(link.href)}
                className="group relative px-4 py-2 text-sm font-medium text-foreground/80 transition-all hover:text-primary"
              >
                <span>{link.label}</span>
                <span className="absolute inset-x-4 bottom-1 h-0.5 scale-x-0 rounded-full bg-primary/70 transition-transform duration-300 group-hover:scale-x-100" />
              </Button>
            ))}
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="group relative px-4 py-2 text-sm font-medium text-foreground/80 transition-all hover:text-primary"
            >
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <span>Resume</span>
                <Download className="h-4 w-4" />
                <span className="absolute inset-x-4 bottom-1 h-0.5 scale-x-0 rounded-full bg-primary/70 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </Button>
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="mx-4 mt-2 rounded-3xl border border-primary/20 bg-background/95 p-4 shadow-lg md:hidden"
          >
            <div className="space-y-2">
              {navLinks.map((link) => (
                <Button
                  key={link.href}
                  variant="ghost"
                  className="w-full justify-start rounded-2xl px-4 py-3 text-lg font-medium text-foreground/80 hover:bg-primary/10 hover:text-primary"
                  onClick={() => scrollToSection(link.href)}
                >
                  {link.label}
                </Button>
              ))}

              <Button
                asChild
                variant="ghost"
                className="w-full justify-start rounded-2xl px-4 py-3 text-lg font-medium text-foreground/80 hover:bg-primary/10 hover:text-primary"
              >
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Resume
                  <Download className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
