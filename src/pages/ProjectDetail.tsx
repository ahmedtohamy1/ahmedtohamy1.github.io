import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { projects } from "@/data/site";
import { ArrowLeft, ChevronLeft, ChevronRight, ExternalLink, Github, X, Award, ShieldAlert, CheckCircle2, ChevronRightCircle } from "lucide-react";
import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find((item) => item.slug === slug);
  
  const gallery = useMemo(() => {
    if (!project) return [];
    if (project.gallery && project.gallery.length) return project.gallery;
    return project.cover ? [project.cover] : [];
  }, [project]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Overview");

  // Reset tab selection when slug changes
  useEffect(() => {
    setActiveTab("Overview");
    setActiveIndex(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  const activeImage = useMemo(() => {
    if (!gallery.length) return undefined;
    return gallery[activeIndex % gallery.length];
  }, [gallery, activeIndex]);

  const shiftImage = (delta: number) => {
    if (!gallery.length || gallery.length === 1) return;
    setActiveIndex((prev) => (prev + delta + gallery.length) % gallery.length);
  };

  useEffect(() => {
    if (!isViewerOpen) return;

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsViewerOpen(false);
      } else if (event.key === "ArrowRight") {
        setActiveIndex((prev) => (prev + 1) % Math.max(gallery.length, 1));
      } else if (event.key === "ArrowLeft") {
        setActiveIndex((prev) => (prev - 1 + Math.max(gallery.length, 1)) % Math.max(gallery.length, 1));
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isViewerOpen, gallery.length]);

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

  // Find next project in the roster
  const nextProject = useMemo(() => {
    if (!project) return null;
    const currentIndex = projects.findIndex((p) => p.slug === project.slug);
    const nextIdx = (currentIndex + 1) % projects.length;
    return projects[nextIdx];
  }, [project]);

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

  // Define dynamic case study tabs
  const tabOptions = useMemo(() => {
    const opts = ["Overview"];
    if (project && project.sections) {
      project.sections.forEach((s) => opts.push(s.title));
    }
    return opts;
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main className="container mx-auto max-w-4xl px-4 pt-32 pb-24 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-primary/70">Project</p>
          <h1 className="mt-4 text-4xl font-extrabold font-sans">Case study not found.</h1>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto font-light leading-relaxed">
            The project you’re looking for may be private, proprietary, or the link is outdated. Head back to the main page to explore other work.
          </p>
          <Button className="mt-6 rounded-full px-6 py-5 shadow-lg" onClick={() => navigate("/")}>
            Back home
          </Button>
        </main>
        <Footer />
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Dynamic blurred cover halo backdrop */}
      <div className="absolute top-0 inset-x-0 h-[500px] overflow-hidden -z-10 opacity-30 select-none pointer-events-none">
        <img src={project.cover} alt="" className="w-full h-full object-cover blur-[140px] scale-125" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
      </div>

      <Navigation />

      <main className="px-4 pt-28 pb-16">
        <div className="container mx-auto max-w-5xl space-y-8">
          
          {/* Header Back/Links Row */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to projects
            </Link>
            <div className="flex flex-wrap gap-3">
              {project.github ? (
                <Button asChild variant="outline" className="rounded-full border-primary/20 bg-background/50 hover:bg-primary/5 text-xs font-semibold px-5 py-4">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <Github className="mr-2 h-4 w-4 text-primary" />
                    GitHub Source
                  </a>
                </Button>
              ) : null}
              {project.demo ? (
                <Button asChild className="rounded-full shadow-lg shadow-primary/10 hover:scale-[1.02] transition-all text-xs font-semibold px-5 py-4">
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Launch Live Demo
                  </a>
                </Button>
              ) : null}
            </div>
          </div>

          {/* Hero Header Card */}
          <Card 
            onMouseMove={handleMouseMove}
            className="card-glow relative overflow-hidden rounded-[32px] border border-border/50 bg-card/30 p-8 md:p-10 backdrop-blur-sm shadow-xl"
          >
            <div className="space-y-4 relative z-10">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-[9px] font-mono font-bold tracking-widest text-primary uppercase">
                  Flutter Case Study
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                <span className="text-[10px] font-bold text-muted-foreground/60 tracking-wider">Enterprise Release</span>
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl font-sans leading-none">{project.title}</h1>
              <p className="text-lg text-muted-foreground/90 font-light leading-relaxed max-w-3xl">{project.brief ?? project.description}</p>
              
              <div className="flex flex-wrap gap-1.5 pt-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="rounded-full border border-primary/10 bg-primary/5 px-3 py-0.5 text-xs text-primary font-medium">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>

          {/* Project Metrics Console Dashboard */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border border-border/40 bg-card/20 p-4 rounded-3xl backdrop-blur-sm">
            <div className="p-3 text-center space-y-1">
              <span className="text-[9px] uppercase tracking-wider text-muted-foreground font-semibold font-mono block">Product Realm</span>
              <span className="text-base font-bold text-foreground truncate block">
                {project.tags[1] || "Mobile App"}
              </span>
            </div>
            <div className="p-3 text-center space-y-1 border-l border-border/20">
              <span className="text-[9px] uppercase tracking-wider text-muted-foreground font-semibold font-mono block">Delivery Role</span>
              <span className="text-base font-bold text-foreground truncate block">Flutter Lead</span>
            </div>
            <div className="p-3 text-center space-y-1 md:border-l border-border/20">
              <span className="text-[9px] uppercase tracking-wider text-muted-foreground font-semibold font-mono block">Core Tech</span>
              <span className="text-base font-bold text-primary truncate block">
                {project.tags[0] || "Flutter / Dart"}
              </span>
            </div>
            <div className="p-3 text-center space-y-1 border-l border-border/20">
              <span className="text-[9px] uppercase tracking-wider text-muted-foreground font-semibold font-mono block">Distribution</span>
              <span className="text-base font-bold text-foreground truncate block">
                {project.demo ? "Public Store" : "Enterprise NDA"}
              </span>
            </div>
          </div>

          {/* Screenshot Slider Gallery */}
          {gallery.length > 0 && (
            <section className="space-y-4">
              <div className="flex items-center justify-between border-b border-border/30 pb-2.5">
                <h2 className="text-lg font-bold tracking-tight text-foreground font-sans">Visual Gallery</h2>
                <span className="text-xs text-muted-foreground font-light">Select screens to review fullscreen mockups</span>
              </div>
              
              <div className="flex gap-4 overflow-x-auto pb-4 pt-1 snap-x scrollbar-thin">
                {gallery.map((src, index) => (
                  <button
                    key={`${project.slug}-thumb-${src}`}
                    className="relative rounded-[22px] border border-border/40 overflow-hidden shrink-0 w-[280px] xs:w-80 aspect-[16/10] bg-black/40 hover:border-primary/50 transition-colors snap-center shadow-lg group"
                    onClick={() => {
                      setActiveIndex(index);
                      setIsViewerOpen(true);
                    }}
                  >
                    {/* Blurred Backdrop */}
                    <div className="absolute inset-0 select-none overflow-hidden opacity-25 blur-xl scale-110 pointer-events-none">
                      <img src={src} alt="" className="w-full h-full object-cover" />
                    </div>
                    
                    {/* Brand-Specific Gradient Canvas */}
                    <div className={`relative w-full h-full pt-4 px-4 pb-0 flex items-end justify-center bg-gradient-to-br ${getProjectGradient(project.title)}`}>
                      {/* Floating Screenshot (respecting embedded mockup details) */}
                      <img
                        src={src}
                        alt=""
                        className="max-h-full max-w-[90%] object-contain object-bottom drop-shadow-[0_12px_28px_rgba(0,0,0,0.6)] group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                        loading="lazy"
                      />
                    </div>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 pointer-events-none" />
                    
                    <span className="absolute bottom-3 left-3 text-[10px] font-bold text-white bg-black/60 border border-white/10 px-2.5 py-1 rounded-full backdrop-blur opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      Inspect Mockup &rarr;
                    </span>
                  </button>
                ))}
              </div>
            </section>
          )}

          {/* Tabbed Case Study Explorer */}
          <section className="space-y-6">
            {/* Tabs List */}
            <div className="flex overflow-x-auto pb-2 border-b border-border/30 scrollbar-none gap-2">
              {tabOptions.map((opt) => {
                const isActive = activeTab === opt;
                return (
                  <button
                    key={opt}
                    onClick={() => setActiveTab(opt)}
                    className={`relative px-4 py-2.5 text-sm font-semibold tracking-wide whitespace-nowrap rounded-full transition-colors ${
                      isActive ? "text-primary z-10" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeDetailTab"
                        className="absolute inset-0 rounded-full bg-primary/10 border border-primary/20 -z-10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {opt}
                  </button>
                );
              })}
            </div>

            {/* Tabs Content Display with Animations */}
            <div className="min-h-[250px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  {activeTab === "Overview" ? (
                    <div className="grid gap-6">
                      {project.detail && (
                        <Card 
                          onMouseMove={handleMouseMove}
                          className="card-glow rounded-[28px] border border-border/50 bg-card/30 p-6 md:p-8 shadow-sm"
                        >
                          <h3 className="text-lg font-bold text-foreground border-b border-border/20 pb-3 flex items-center gap-2">
                            <Award className="h-4.5 w-4.5 text-primary" /> Executive Architecture Brief
                          </h3>
                          <p className="mt-4 text-base text-muted-foreground/90 font-light leading-relaxed">{project.detail}</p>
                        </Card>
                      )}

                      {project.features && (
                        <Card 
                          onMouseMove={handleMouseMove}
                          className="card-glow rounded-[28px] border border-border/50 bg-card/30 p-6 md:p-8 shadow-sm"
                        >
                          <h3 className="text-lg font-bold text-foreground border-b border-border/20 pb-3 flex items-center gap-2">
                            <ShieldAlert className="h-4.5 w-4.5 text-primary" /> Key Functional Modules
                          </h3>
                          <ul className="mt-5 space-y-3.5 text-sm text-muted-foreground/90 font-light relative z-10">
                            {project.features.map((feature) => (
                              <li key={feature} className="flex items-start gap-3">
                                <CheckCircle2 className="h-4 w-4 text-primary/70 shrink-0 mt-0.5" />
                                <span className="leading-relaxed">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </Card>
                      )}
                    </div>
                  ) : (
                    <div>
                      {project.sections &&
                        project.sections
                          .filter((section) => section.title === activeTab)
                          .map((section) => (
                            <Card 
                              key={section.title}
                              onMouseMove={handleMouseMove}
                              className="card-glow rounded-[28px] border border-border/50 bg-card/30 p-6 md:p-8 shadow-sm"
                            >
                              <h3 className="text-lg font-bold text-foreground border-b border-border/20 pb-3">{section.title}</h3>
                              <ul className="mt-5 space-y-3.5 text-sm text-muted-foreground/90 font-light relative z-10">
                                {section.bullets.map((bullet) => (
                                  <li key={bullet} className="flex items-start gap-3">
                                    <CheckCircle2 className="h-4 w-4 text-primary/70 shrink-0 mt-0.5" />
                                    <span className="leading-relaxed">{bullet}</span>
                                  </li>
                                ))}
                              </ul>
                            </Card>
                          ))}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </section>

          {/* Footer Navigation Card: Next Case Study Teaser */}
          {nextProject && (
            <div className="pt-8 border-t border-border/30">
              <Link 
                to={`/projects/${nextProject.slug}`}
                className="block group"
              >
                <Card 
                  onMouseMove={handleMouseMove}
                  className="card-glow rounded-[28px] border border-border/40 bg-card/20 p-6 md:p-8 hover:border-primary/40 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
                >
                  <div className="space-y-1.5 min-w-0">
                    <span className="text-[9px] font-mono font-bold tracking-widest text-muted-foreground uppercase">Up Next Case Study</span>
                    <h4 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors truncate">{nextProject.title}</h4>
                    <p className="text-sm text-muted-foreground font-light truncate max-w-xl">{nextProject.brief ?? nextProject.description}</p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-primary font-semibold text-sm shrink-0">
                    Explore Study
                    <ChevronRightCircle className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Card>
              </Link>
            </div>
          )}

        </div>
      </main>

      <Footer />

      {/* Full Screen Lightbox Modal */}
      {isViewerOpen && activeImage && (
        <div className="fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-md transition-all duration-300">
          <div className="flex justify-between items-center p-5 border-b border-white/5 bg-black/35">
            <span className="text-xs font-semibold text-white/50 font-mono tracking-widest uppercase">
              {project.title} &mdash; Mockup {activeIndex + 1} of {gallery.length}
            </span>
            <button
              className="rounded-full border border-white/10 bg-white/5 p-2 text-white/80 transition hover:bg-white/15"
              onClick={() => setIsViewerOpen(false)}
              aria-label="Close gallery"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <div className="relative flex flex-1 items-center justify-center p-6">
            {gallery.length > 1 && (
              <button
                className="absolute left-2 xs:left-4 md:left-6 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-black/60 p-2 xs:p-3 md:p-3.5 text-white/80 transition hover:bg-black/90 hover:scale-105"
                onClick={() => shiftImage(-1)}
                aria-label="Previous screenshot"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
            )}
            
            <img 
              src={activeImage} 
              alt={`${project.title} fullscreen view`} 
              className="max-h-[82vh] max-w-[88vw] rounded-[20px] border border-white/10 object-contain shadow-2xl shadow-black/80" 
            />
            
            {gallery.length > 1 && (
              <button
                className="absolute right-2 xs:right-4 md:right-6 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-black/60 p-2 xs:p-3 md:p-3.5 text-white/80 transition hover:bg-black/90 hover:scale-105"
                onClick={() => shiftImage(1)}
                aria-label="Next screenshot"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
