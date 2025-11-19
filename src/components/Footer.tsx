import { navLinks, siteMeta } from "@/data/site";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-border/60 bg-background/70 px-4 py-12 backdrop-blur">
      <div className="container mx-auto flex max-w-6xl flex-col gap-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
        <div>
          <p className="text-base font-semibold text-foreground">{siteMeta.name}</p>
          <p className="text-sm text-muted-foreground">{siteMeta.role}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-muted-foreground transition hover:text-primary">
              {link.label}
            </a>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">© {year} · Crafted with React, TypeScript, and Tailwind.</p>
      </div>
    </footer>
  );
};

export default Footer;
