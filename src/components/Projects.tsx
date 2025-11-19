import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import PageSection from "@/components/layout/PageSection";
import Reveal from "@/components/layout/Reveal";
import { projects } from "@/data/site";

const Projects = () => {
  return (
    <PageSection
      id="projects"
      eyebrow="Selected Work"
      title="Proof that meticulous Flutter craft ships business outcomes."
      description="A rotating set of engagements that highlight different sides of my craft: modular architecture, IoT integrations, payment security, and leadership of small but mighty product squads."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.04}>
            <Card className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-border/60 bg-card/90 shadow-xl shadow-primary/10 transition hover:-translate-y-1.5 hover:border-primary/40">
              <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-primary/15 via-accent/10 to-transparent">
                <img
                  src={project.cover}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent" />
              </div>
              <div className="flex flex-1 flex-col gap-6 p-8">
                <div className="space-y-2">
                  <p className="text-sm uppercase tracking-[0.4em] text-primary/70">{project.tags[0]}</p>
                  <h3 className="text-2xl font-semibold text-foreground">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs text-primary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="mt-auto grid gap-3 sm:grid-cols-2">
                  {project.github ? (
                    <Button asChild variant="outline" className="gap-2 rounded-full border-primary/30 text-primary hover:border-primary">
                      <a href={project.github} target="_blank" rel="noreferrer">
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  ) : (
                    <Button variant="outline" disabled className="gap-2 rounded-full border-dashed border-primary/30 text-muted-foreground">
                      <Github className="h-4 w-4" />
                      Private
                    </Button>
                  )}
                  {project.demo ? (
                    <Button asChild className="gap-2 rounded-full shadow-lg shadow-primary/20">
                      <a href={project.demo} target="_blank" rel="noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        Preview
                      </a>
                    </Button>
                  ) : (
                    <Button disabled className="gap-2 rounded-full shadow-none">
                      <ExternalLink className="h-4 w-4" />
                      NDA
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </PageSection>
  );
};

export default Projects;
