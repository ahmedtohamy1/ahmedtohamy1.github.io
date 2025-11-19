import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import PageSection from "@/components/layout/PageSection";
import Reveal from "@/components/layout/Reveal";
import { skillCategories } from "@/data/site";

const Skills = () => {
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
            <Card className="rounded-3xl border border-border/70 bg-background/90 p-6 shadow-lg shadow-primary/5">
              <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="rounded-full border border-primary/10 bg-primary/5 px-3 py-1 text-xs uppercase tracking-wide text-primary"
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
