import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import PageSection from "@/components/layout/PageSection";
import Reveal from "@/components/layout/Reveal";
import { skillCategories } from "@/data/site";
import React from "react";

const Skills = () => {
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
      id="skills"
      eyebrow="Stack"
      title="An opinionated toolkit for reliable mobile delivery."
      description="Grounded in Flutter and Kotlin, extended with backend, web (React/Laravel), and workflow practices so every release ties back to measurable results."
      align="center"
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, index) => (
          <Reveal key={category.title} delay={index * 0.04}>
            <Card 
              onMouseMove={handleMouseMove}
              className="card-glow rounded-3xl border border-border/50 bg-card/30 p-6 shadow-lg shadow-primary/5 backdrop-blur-sm transition-all hover:border-primary/30"
            >
              <h3 className="text-lg font-bold text-foreground tracking-tight">{category.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2 z-10 relative">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="rounded-full border border-primary/10 bg-primary/5 px-3.5 py-1 text-xs uppercase tracking-wider text-primary hover:bg-primary/15 transition-colors duration-300"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </PageSection>
  );
};

export default Skills;
