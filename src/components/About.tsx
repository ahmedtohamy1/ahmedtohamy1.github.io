import { Card } from "@/components/ui/card";
import PageSection from "@/components/layout/PageSection";
import Reveal from "@/components/layout/Reveal";
import { aboutQuickFacts, siteMeta } from "@/data/site";
import React from "react";

const About = () => {
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
      id="about"
      eyebrow="About"
      title={siteMeta.headline}
      description={siteMeta.summary}
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="h-full">
          <Card 
            onMouseMove={handleMouseMove}
            className="card-glow relative overflow-hidden rounded-[28px] border border-primary/20 bg-card/40 p-8 md:p-10 backdrop-blur-xl h-full flex flex-col justify-between"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" aria-hidden />
            <div className="relative space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Professional Pulse</h3>
              <p className="text-lg leading-relaxed text-muted-foreground/90 font-light">
                My career highlights structured, research-heavy discovery, calm releases, and objective alignment. I bridge mobile engineering (Flutter, iOS, Android) with backend stacks (React, Laravel, .NET) and real-time streams (MQTT, WebSockets, Firebase) to create highly reliable apps that scale.
              </p>
              <div className="grid gap-4 sm:grid-cols-2 pt-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground font-semibold">Base</p>
                  <p className="text-lg font-bold text-foreground mt-1">{siteMeta.location}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground font-semibold">Availability</p>
                  <p className="text-lg font-bold text-primary mt-1">{siteMeta.availability.split(" ")[0]} {siteMeta.availability.split(" ").slice(1).join(" ")}</p>
                </div>
              </div>
            </div>
          </Card>
        </Reveal>

        <div className="space-y-4">
          {aboutQuickFacts.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.05}>
              <Card 
                onMouseMove={handleMouseMove}
                className="card-glow rounded-3xl border border-border/50 bg-card/30 p-6 shadow-lg shadow-primary/5 backdrop-blur-sm transition-all hover:border-primary/30"
              >
                <h4 className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/80">{card.title}</h4>
                <div className="mt-4 space-y-1 z-10 relative">
                  {card.items.map((item, itemIndex) => (
                    <p
                      key={item}
                      className={itemIndex === 0 ? "text-lg font-bold text-foreground" : "text-sm text-muted-foreground font-light"}
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </PageSection>
  );
};

export default About;
