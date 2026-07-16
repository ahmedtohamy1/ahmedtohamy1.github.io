import PageSection from "@/components/layout/PageSection";
import Reveal from "@/components/layout/Reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { projects } from "@/data/site";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Marketplace", "IoT & Enterprise", "Utilities & Content"];

const Projects = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All");

  // Get project category mapping
  const getProjectCategory = (project: typeof projects[number]) => {
    const title = project.title.toLowerCase();
    if (title.includes("motobox")) return "Marketplace";
    if (title.includes("cloudmate") || title.includes("projectshub") || title.includes("delta")) return "IoT & Enterprise";
    return "Utilities & Content";
  };

  // Filter projects list
  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((project) => getProjectCategory(project) === activeCategory);
  }, [activeCategory]);

  // Get custom brand color gradient based on project title
  const getProjectGradient = (projectTitle: string) => {
    const title = projectTitle.toLowerCase();
    if (title.includes("store manager")) {
      return "from-amber-600/20 via-red-600/5 to-black/40";
    }
    if (title.includes("customer")) {
      return "from-red-600/20 via-orange-600/5 to-black/40";
    }
    if (title.includes("delivery")) {
      return "from-orange-600/20 via-amber-600/5 to-black/40";
    }
    if (title.includes("negoom")) {
      return "from-purple-600/20 via-indigo-600/5 to-black/40";
    }
    if (title.includes("qurani")) {
      return "from-emerald-600/20 via-teal-600/5 to-black/40";
    }
    if (title.includes("sleep")) {
      return "from-blue-600/20 via-sky-600/5 to-black/40";
    }
    if (title.includes("cloudmate")) {
      return "from-cyan-600/20 via-blue-600/5 to-black/40";
    }
    if (title.includes("projectshub")) {
      return "from-indigo-600/20 via-violet-600/5 to-black/40";
    }
    if (title.includes("delta")) {
      return "from-blue-600/20 via-indigo-600/5 to-black/40";
    }
    return "from-violet-600/20 via-fuchsia-600/5 to-black/40";
  };

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
      id="projects"
      eyebrow="Selected Work"
      title="Proof that meticulous Flutter craft ships business outcomes."
      description="A rotating set of engagements that highlight different sides of my craft: modular architecture, IoT integrations, payment security, and leadership of small but mighty product squads."
    >
      
      {/* Premium Horizontal Filter Row */}
      <div className="flex w-full items-center justify-start md:justify-center gap-2.5 overflow-x-auto pb-4 mb-12 scrollbar-none px-4 snap-x select-none">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`snap-center rounded-full px-5 py-3 text-[10px] sm:text-xs font-bold uppercase tracking-widest transition-all shrink-0 border ${
                isActive
                  ? "border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/10"
                  : "border-border/40 bg-card/25 text-muted-foreground hover:text-foreground hover:bg-card/45"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Projects Grid Showcase */}
      <motion.div layout className="grid gap-8 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => {
            const gallery = project.gallery ?? [project.cover];
            const key = getKey(project.title, project.slug, index);
            const activeIndex = activeImages[key] ?? 0;
            const activeImage = gallery[activeIndex] ?? project.cover;

            // First project spotlight layout
            const isFeatured = false;

            return (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                key={project.slug ?? `${project.title}-${index}`}
                className={isFeatured ? "md:col-span-2" : ""}
              >
                <Card
                  onMouseMove={handleMouseMove}
                  className={`card-glow group flex h-full cursor-pointer flex-col overflow-hidden rounded-[32px] border border-border/40 bg-card/20 shadow-2xl shadow-primary/5 transition-all hover:scale-[1.005] hover:border-primary/45 backdrop-blur-md ${
                    isFeatured ? "lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:gap-0" : ""
                  }`}
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
                  
                  {/* Aspect-Corrected Screenshot Display Area */}
                  <div className={`relative overflow-hidden bg-black/40 border-b border-border/40 ${
                    isFeatured ? "aspect-[16/10] lg:aspect-auto lg:h-full lg:border-b-0 lg:border-r lg:border-border/40" : "aspect-[16/10]"
                  }`}>
                    
                    {/* Blurred Cover Backdrop Fill to remove ugly empty sides */}
                    <div className="absolute inset-0 select-none overflow-hidden opacity-25 blur-2xl scale-110 pointer-events-none">
                      <img src={activeImage} alt="" className="w-full h-full object-cover" />
                    </div>

                    {/* Brand-Specific Gradient Canvas */}
                    <div className={`relative w-full h-full pt-6 px-6 md:pt-8 md:px-8 pb-0 flex items-end justify-center min-h-[280px] bg-gradient-to-br ${getProjectGradient(project.title)}`}>
                      {/* Floating Screenshot (respecting embedded mockup details) */}
                      <img
                        src={activeImage}
                        alt={`${project.title} screenshot`}
                        className="max-h-[200px] md:max-h-[225px] lg:max-h-full max-w-[90%] object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.65)] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                        loading="lazy"
                      />
                    </div>
                    
                    {/* Hover slider controls */}
                    {gallery.length > 1 && (
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button
                          className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 bg-black/50 p-2.5 text-white backdrop-blur hover:bg-black/80 transition-all hover:scale-105"
                          onClick={(event) => {
                            event.stopPropagation();
                            shiftImage(key, -1, gallery.length);
                          }}
                          aria-label="Previous screenshot"
                        >
                          <ChevronLeft className="h-4.5 w-4.5" />
                        </button>
                        <button
                          className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 bg-black/50 p-2.5 text-white backdrop-blur hover:bg-black/80 transition-all hover:scale-105"
                          onClick={(event) => {
                            event.stopPropagation();
                            shiftImage(key, 1, gallery.length);
                          }}
                          aria-label="Next screenshot"
                        >
                          <ChevronRight className="h-4.5 w-4.5" />
                        </button>
                      </div>
                    )}

                    {/* Indicator dots */}
                    {gallery.length > 1 && (
                      <div className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 flex gap-1.5 bg-black/20 border border-white/5 rounded-full px-2.5 py-1 backdrop-blur-sm">
                        {gallery.map((_, indicatorIndex) => (
                          <span
                            key={`${key}-indicator-${indicatorIndex}`}
                            className={`h-1.5 rounded-full transition-all duration-300 ${
                              indicatorIndex === activeIndex ? "bg-white w-6" : "bg-white/40 w-1.5"
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Card Content details */}
                  <div className="flex flex-col justify-between gap-5 p-5 sm:p-7 md:p-8 relative z-10">
                    <div className="space-y-4">
                      {isFeatured && (
                        <div className="flex items-center gap-2">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                          </span>
                          <span className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-accent">Flagship Product Suite</span>
                        </div>
                      )}
                      
                      <div className="space-y-2.5">
                        <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-primary/80">
                          {project.tags[0]}
                        </p>
                        <h3 className={`font-bold text-foreground tracking-tight group-hover:text-primary transition-colors leading-tight ${
                          isFeatured ? "text-3xl md:text-4xl" : "text-2xl"
                        }`}>
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground/90 font-light leading-relaxed">
                          {project.brief ?? project.description}
                        </p>
                      </div>

                      {/* Featured project detailed module logs */}
                      {isFeatured && project.features && (
                        <ul className="grid gap-2.5 sm:grid-cols-2 pt-2.5 text-xs text-muted-foreground/80 font-light">
                          {project.features.slice(0, 4).map((f) => (
                            <li key={f} className="flex gap-2">
                              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/70 shrink-0" />
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      <div className="flex flex-wrap gap-1.5 pt-1.5">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="rounded-full border border-primary/10 bg-primary/5 px-3 py-0.5 text-xs text-primary/95 font-medium">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="mt-auto space-y-4 pt-4 border-t border-border/30">
                      <div className="grid gap-3 sm:grid-cols-2">
                        {project.github ? (
                          <Button
                            asChild
                            variant="outline"
                            className="w-full gap-2 rounded-full border-primary/25 bg-background/50 text-foreground/85 hover:border-primary hover:bg-primary/5 transition-all text-xs font-bold"
                            onClick={(event) => event.stopPropagation()}
                          >
                            <a href={project.github} target="_blank" rel="noreferrer">
                              <Github className="h-3.5 w-3.5" />
                              Source Code
                            </a>
                          </Button>
                        ) : (
                          <Button
                            variant="outline"
                            disabled
                            className="w-full gap-2 rounded-full border-dashed border-primary/15 text-muted-foreground/50 text-xs font-medium bg-transparent"
                            onClick={(event) => event.stopPropagation()}
                          >
                            <Github className="h-3.5 w-3.5" />
                            Private Repo
                          </Button>
                        )}
                        {project.demo ? (
                          <Button
                            asChild
                            className="w-full gap-2 rounded-full shadow-md shadow-primary/5 hover:scale-[1.02] text-xs font-bold transition-all"
                            onClick={(event) => event.stopPropagation()}
                          >
                            <a href={project.demo} target="_blank" rel="noreferrer">
                              <ExternalLink className="h-3.5 w-3.5" />
                              Live Preview
                            </a>
                          </Button>
                        ) : (
                          <Button disabled className="w-full gap-2 rounded-full shadow-none text-xs font-medium" onClick={(event) => event.stopPropagation()}>
                            <ExternalLink className="h-3.5 w-3.5" />
                            NDA Secured
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>

                </Card>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </PageSection>
  );
};

export default Projects;
