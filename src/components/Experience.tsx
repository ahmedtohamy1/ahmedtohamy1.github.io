import { Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";
import PageSection from "@/components/layout/PageSection";
import Reveal from "@/components/layout/Reveal";
import { experiences } from "@/data/site";

const Experience = () => {
  return (
    <PageSection
      id="experience"
      eyebrow="Journey"
      title="Leading squads through complex launches, quietly."
      description="I thrive where reliability, security, and beautiful UX meet. Here’s a condensed timeline of platforms I’ve shipped and teams I’ve coached."
    >
      <div className="relative pl-6">
        <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" aria-hidden />
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <Reveal key={`${experience.title}-${experience.company}-${index}`} delay={index * 0.05}>
              <div className="relative pl-10">
                <div className="absolute left-0 top-6 h-2 w-2 -translate-x-1/2 rounded-full bg-primary" />
                <Card className="rounded-[28px] border border-border/60 bg-card/90 p-8 shadow-xl shadow-primary/10">
                  <div className="flex flex-wrap items-start gap-4">
                    <div className="rounded-2xl border border-primary/20 bg-primary/10 p-3 text-primary">
                      <Briefcase className="h-5 w-5" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">{experience.period}</p>
                      <h3 className="text-2xl font-semibold text-foreground">{experience.title}</h3>
                      <p className="text-primary">{experience.company}</p>
                      <div className="text-sm text-muted-foreground">{experience.location} · {experience.type}</div>
                    </div>
                  </div>
                  <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                    {experience.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3">
                        <span className="mt-2 h-1 w-6 rounded-full bg-primary/40" />
                        <span>{highlight}</span>
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
