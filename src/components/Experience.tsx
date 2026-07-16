import { Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";
import PageSection from "@/components/layout/PageSection";
import Reveal from "@/components/layout/Reveal";
import { experiences } from "@/data/site";
import React from "react";

const Experience = () => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    let rect = card.dataset.rect ? JSON.parse(card.dataset.rect) : null;
    
    if (!rect) {
      const r = card.getBoundingClientRect();
      rect = { left: r.left, top: r.top };
      card.dataset.rect = JSON.stringify(rect);
      
      const clearCache = () => {
        delete card.dataset.rect;
        card.removeEventListener("mouseleave", clearCache);
      };
      card.addEventListener("mouseleave", clearCache);
    }

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <PageSection
      id="experience"
      eyebrow="Journey"
      title="Leading squads through complex launches, quietly."
      description="I thrive where reliability, security, and beautiful UX meet. Here’s a condensed timeline of platforms I’ve shipped and teams I’ve coached."
    >
      <div className="relative pl-6">
        <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent/60 to-transparent" aria-hidden />
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <Reveal key={`${experience.title}-${experience.company}-${index}`} delay={index * 0.05}>
              <div className="relative pl-10">
                {/* Glowing Indicator Dot */}
                <div className="absolute left-0 top-7 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-background bg-primary shadow-[0_0_8px_hsl(var(--primary))]" />
                
                <Card 
                  onMouseMove={handleMouseMove}
                  className="card-glow rounded-[28px] border border-border/50 bg-card/30 p-8 shadow-xl shadow-primary/5 backdrop-blur-sm transition-all hover:border-primary/30"
                >
                  <div className="flex flex-wrap items-start gap-4">
                    <div className="rounded-2xl border border-primary/20 bg-primary/10 p-3 text-primary">
                      <Briefcase className="h-5 w-5" />
                    </div>
                    <div className="space-y-1.5">
                      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">{experience.period}</p>
                      <h3 className="text-2xl font-bold text-foreground tracking-tight">{experience.title}</h3>
                      <p className="text-base font-medium text-primary">{experience.company}</p>
                      <div className="text-xs text-muted-foreground/80 font-medium">{experience.location} · {experience.type}</div>
                    </div>
                  </div>
                  <ul className="mt-6 space-y-3 text-sm text-muted-foreground font-light z-10 relative">
                    {experience.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-3">
                        <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-primary/60 shrink-0" />
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </PageSection>
  );
};

export default Experience;
