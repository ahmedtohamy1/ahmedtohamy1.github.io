import { motion } from "framer-motion";
import { ArrowUpRight, FileText, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { heroStats, highlightBadges, siteMeta } from "@/data/site";

const Hero = () => {
  return (
    <section className="relative isolate overflow-hidden px-4 pt-32 pb-20">
      <div className="absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-[420px] bg-[var(--hero-gradient)] blur-2xl" />
        <div className="absolute -top-6 right-16 h-56 w-56 rounded-full bg-primary/35 blur-[120px]" />
        <div className="absolute bottom-4 left-4 h-56 w-56 rounded-full bg-accent/25 blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 px-4 py-2 text-sm text-primary">
            <span className="h-2 w-2 rounded-full bg-primary" />
            {siteMeta.availability}
          </div>
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.7em] text-primary/70">Premium Flutter Experiences</p>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              {siteMeta.name}
            </h1>
            <p className="text-xl text-muted-foreground md:text-2xl">{siteMeta.role}</p>
            <p className="text-lg leading-relaxed text-muted-foreground/90 md:text-xl">{siteMeta.headline}</p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="group gap-2 rounded-full px-6 py-6 text-base shadow-lg shadow-primary/20">
              <a href="#contact">
                <Mail className="h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
                Book a Discovery Call
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="gap-2 rounded-full border-primary/30 px-6 py-6 text-base text-primary hover:border-primary hover:bg-primary/10"
            >
              <a href="#projects">
                <FileText className="h-5 w-5" />
                View Selected Work
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {[Github, Linkedin, Mail].map((Icon, index) => {
              const href =
                Icon === Mail ? "mailto:1ahmed.tohamy@gmail.com" : Icon === Github ? "https://github.com/ahmedtohamy1" : "https://linkedin.com/in/1ahmedtohamy";
              return (
                <Button
                  key={Icon.displayName ?? index}
                  asChild
                  size="icon"
                  variant="ghost"
                  className="rounded-full border border-transparent text-foreground/70 transition hover:border-primary/30 hover:text-primary"
                >
                  <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                    <Icon className="h-5 w-5" />
                  </a>
                </Button>
              );
            })}
            <span className="text-sm text-muted-foreground">Responds in &lt; 24h</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="absolute -inset-x-6 -inset-y-6 rounded-[32px] bg-gradient-to-br from-primary/20 via-accent/10 to-transparent blur-3xl" />

          <div className="relative rounded-[28px] border border-white/20 bg-gradient-to-br from-background/80 via-background/60 to-background/80 p-8 shadow-2xl shadow-primary/20 backdrop-blur-3xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.5em] text-muted-foreground">Core strengths</p>
                <p className="text-foreground/90">{siteMeta.summary}</p>
              </div>
              <ArrowUpRight className="h-10 w-10 text-primary" />
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {highlightBadges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-primary/30 bg-gradient-to-r from-primary/10 to-transparent px-4 py-2 text-sm text-primary"
                >
                  {badge}
                </span>
              ))}
            </div>

            <div className="mt-10 grid gap-6 rounded-2xl border border-primary/20 bg-white/10 p-6 backdrop-blur">
              {heroStats.map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <p className="text-3xl font-semibold text-primary">{stat.value}</p>
                  <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
