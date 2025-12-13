import PageSection from "@/components/layout/PageSection";
import Reveal from "@/components/layout/Reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { projects } from "@/data/site";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();
  const initialState = useMemo(
    () => Object.fromEntries(projects.map((project, index) => [project.slug ?? project.title ?? `project-${index}`, 0])),
    []
  );
  const [activeImages, setActiveImages] = useState<Record<string, number>>(initialState);

  const getKey = (projectTitle?: string, slug?: string, index?: number) => slug ?? projectTitle ?? `project-${index ?? 0}`;

  const shiftImage = (key: string, delta: number, total: number) => {
    if (total <= 1) return;
    setActiveImages((prev) => {
      const current = prev[key] ?? 0;
      const next = (current + delta + total) % total;
      return { ...prev, [key]: next };
    });
  };

  return (
    <PageSection
      id="projects"
      eyebrow="Selected Work"
      title="Proof that meticulous Flutter craft ships business outcomes."
      description="A rotating set of engagements that highlight different sides of my craft: modular architecture, IoT integrations, payment security, and leadership of small but mighty product squads."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => {
          const gallery = project.gallery ?? [project.cover];
          const key = getKey(project.title, project.slug, index);
          const activeIndex = activeImages[key] ?? 0;
          const activeImage = gallery[activeIndex] ?? project.cover;

          return (
            <Reveal key={project.slug ?? `${project.title}-${index}`} delay={index * 0.04}>
              <Card
                className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-[28px] border border-border/60 bg-card/90 shadow-xl shadow-primary/10 transition hover:-translate-y-1.5 hover:border-primary/40"
                role={project.slug ? "button" : undefined}
                tabIndex={project.slug ? 0 : undefined}
                onClick={() => project.slug && navigate(`/projects/${project.slug}`)}
                onKeyDown={(event) => {
                  if (project.slug && (event.key === "Enter" || event.key === " ")) {
                    event.preventDefault();
                    navigate(`/projects/${project.slug}`);
                  }
                }}
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-primary/15 via-accent/10 to-transparent">
                  <img
                    src={activeImage}
                    alt={`${project.title} preview`}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {gallery.length > 1 && (
                    <>
                      <button
                        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/30 bg-black/30 p-2 text-white backdrop-blur transition hover:bg-black/60"
                        onClick={(event) => {
                          event.stopPropagation();
                          shiftImage(key, -1, gallery.length);
                        }}
                        aria-label="Previous screenshot"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </button>
                      <button
                        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/30 bg-black/30 p-2 text-white backdrop-blur transition hover:bg-black/60"
                        onClick={(event) => {
                          event.stopPropagation();
                          shiftImage(key, 1, gallery.length);
                        }}
                        aria-label="Next screenshot"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </button>
                      <div className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 flex gap-2">
                        {gallery.map((_, indicatorIndex) => (
                          <span
                            key={`${key}-indicator-${indicatorIndex}`}
                            className={`h-1.5 w-6 rounded-full transition ${
                              indicatorIndex === activeIndex ? "bg-white" : "bg-white/40"
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent" />
                </div>
                <div className="flex flex-1 flex-col gap-6 p-8">
                  <div className="space-y-2">
                    <p className="text-sm uppercase tracking-[0.4em] text-primary/70">{project.tags[0]}</p>
                    <h3 className="text-2xl font-semibold text-foreground">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.brief ?? project.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs text-primary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-auto space-y-3">
                    <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">Snapshot</p>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                    <div className="grid gap-3 pt-2 sm:grid-cols-2">
                      {project.github ? (
                        <Button
                          asChild
                          variant="outline"
                          className="gap-2 rounded-full border-primary/30 text-primary hover:border-primary"
                          onClick={(event) => event.stopPropagation()}
                        >
                          <a href={project.github} target="_blank" rel="noreferrer">
                            <Github className="h-4 w-4" />
                            Code
                          </a>
                        </Button>
                      ) : (
                        <Button
                          variant="outline"
                          disabled
                          className="gap-2 rounded-full border-dashed border-primary/30 text-muted-foreground"
                          onClick={(event) => event.stopPropagation()}
                        >
                          <Github className="h-4 w-4" />
                          Private
                        </Button>
                      )}
                      {project.demo ? (
                        <Button
                          asChild
                          className="gap-2 rounded-full shadow-lg shadow-primary/20"
                          onClick={(event) => event.stopPropagation()}
                        >
                          <a href={project.demo} target="_blank" rel="noreferrer">
                            <ExternalLink className="h-4 w-4" />
                            Preview
                          </a>
                        </Button>
                      ) : (
                        <Button disabled className="gap-2 rounded-full shadow-none" onClick={(event) => event.stopPropagation()}>
                          <ExternalLink className="h-4 w-4" />
                          NDA
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </PageSection>
  );
};

export default Projects;
