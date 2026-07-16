import { Card } from "@/components/ui/card";
import PageSection from "@/components/layout/PageSection";
import Reveal from "@/components/layout/Reveal";
import { educationHistory } from "@/data/site";
import React from "react";

const Education = () => {
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
      id="education"
      eyebrow="Education"
      title="Academic track and focused training."
      description="Formal engineering education paired with targeted programs in mobile, full stack, and cross-platform delivery."
      align="center"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {educationHistory.map((entry, index) => (
          <Reveal key={entry.institution} delay={index * 0.05} className="h-full">
            <Card 
              onMouseMove={handleMouseMove}
              className="card-glow rounded-[26px] border border-border/50 bg-card/30 p-6 shadow-lg shadow-primary/5 backdrop-blur-sm transition-all hover:border-primary/30 flex flex-col justify-between h-full"
            >
              <div className="space-y-1.5 z-10 relative">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/80">{entry.period}</p>
                <h3 className="text-xl font-bold text-foreground tracking-tight">{entry.institution}</h3>
                <p className="text-xs text-muted-foreground/80 font-medium">{entry.location}</p>
              </div>
              <div className="mt-4 space-y-2 text-sm text-muted-foreground font-light z-10 relative">
                <p className="font-semibold text-foreground">{entry.credential}</p>
                {entry.details.map((detail) => (
                  <p key={detail} className="leading-relaxed">{detail}</p>
                ))}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </PageSection>
  );
};

export default Education;

