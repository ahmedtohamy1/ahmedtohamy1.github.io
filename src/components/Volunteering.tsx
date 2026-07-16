import { Card } from "@/components/ui/card";
import PageSection from "@/components/layout/PageSection";
import Reveal from "@/components/layout/Reveal";
import { volunteering } from "@/data/site";
import React from "react";

const Volunteering = () => {
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
      id="volunteering"
      eyebrow="Voluntary Work"
      title="Giving back through education and mentorship."
      description="Community workshops and mentorship programs focused on helping the next wave of Flutter engineers ship confidently."
      align="center"
    >
      <div className="grid gap-6">
        {volunteering.map((entry, index) => (
          <Reveal key={entry.organization} delay={index * 0.05}>
            <Card 
              onMouseMove={handleMouseMove}
              className="card-glow rounded-[26px] border border-border/50 bg-card/30 p-5 sm:p-6 md:p-8 shadow-lg shadow-primary/5 backdrop-blur-sm transition-all hover:border-primary/30"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 z-10 relative">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/80">{entry.period}</p>
                  <h3 className="text-xl font-bold text-foreground tracking-tight mt-1">{entry.organization}</h3>
                  <p className="text-xs text-muted-foreground/80 font-medium">
                    {entry.role} · {entry.location}
                  </p>
                </div>
              </div>
              <ul className="mt-5 space-y-3.5 text-sm text-muted-foreground font-light z-10 relative">
                {entry.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3">
                    <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-primary/60 shrink-0" />
                    <span className="leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        ))}
      </div>
    </PageSection>
  );
};

export default Volunteering;

