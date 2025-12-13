import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/site";
import { ArrowLeft, ChevronLeft, ChevronRight, ExternalLink, Github, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

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


  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main className="container mx-auto max-w-4xl px-4 pt-32 pb-24 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-primary/70">Project</p>
          <h1 className="mt-4 text-4xl font-semibold">We couldn’t find that case study.</h1>
          <p className="mt-3 text-muted-foreground">
            The project you’re looking for may be private or the link is outdated. Head back to the main page to explore other work.
          </p>
          <Button className="mt-6 rounded-full" onClick={() => navigate("/")}>
            Back home
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="px-4 pt-28 pb-16">
        <div className="container mx-auto max-w-5xl space-y-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to projects
            </Link>
            <div className="flex flex-wrap gap-3">
              {project.github ? (
                <Button asChild variant="outline" className="rounded-full">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
              ) : null}
              {project.demo ? (
                <Button asChild className="rounded-full shadow-lg shadow-primary/30">
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live preview
                  </a>
                </Button>
              ) : null}
            </div>
          </div>

          <div className="space-y-6 rounded-[32px] border border-border/60 bg-card/90 p-8 shadow-lg shadow-primary/10 backdrop-blur">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.4em] text-primary/70">Case study</p>
              <h1 className="text-4xl font-semibold">{project.title}</h1>
              <p className="text-lg text-muted-foreground">{project.brief ?? project.description}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs text-primary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {gallery.length > 0 && (
            <section className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h2 className="text-xl font-semibold text-foreground">Gallery</h2>
                <p className="text-sm text-muted-foreground">Tap a screen to enter the full-viewer.</p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {gallery.map((src, index) => (
                  <button
                    key={`${project.slug}-thumb-${src}`}
                    className="group relative overflow-hidden rounded-[24px] border border-border/60 bg-black/5"
                    onClick={() => {
                      setActiveIndex(index);
                      setIsViewerOpen(true);
                    }}
                  >
                    <img src={src} alt={`${project.title} thumbnail ${index + 1}`} className="h-60 w-full object-cover transition group-hover:scale-105" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent opacity-0 transition group-hover:opacity-100" />
                    <span className="absolute bottom-4 left-4 text-sm font-medium text-white">View</span>
                  </button>
                ))}
              </div>
            </section>
          )}

          {project.detail && (
            <section className="rounded-[32px] border border-border/60 bg-card/90 p-8 shadow-lg shadow-primary/5">
              <h2 className="text-xl font-semibold text-foreground">Brief</h2>
              <p className="mt-3 text-base text-muted-foreground leading-relaxed">{project.detail}</p>
            </section>
          )}

          {project.features && (
            <section className="rounded-[32px] border border-border/60 bg-card/90 p-8 shadow-lg shadow-primary/5">
              <h2 className="text-xl font-semibold text-foreground">Highlights</h2>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                {project.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {project.sections && project.sections.length > 0 && (
            <section className="grid gap-6">
              {project.sections.map((section) => (
                <div key={section.title} className="rounded-[28px] border border-border/60 bg-card/90 p-6 shadow-md shadow-primary/5">
                  <h3 className="text-lg font-semibold text-foreground">{section.title}</h3>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          )}
        </div>
      </main>
      <Footer />

      {isViewerOpen && activeImage && (
        <div className="fixed inset-0 z-50 flex flex-col bg-black/90 backdrop-blur">
          <div className="flex justify-end p-4">
            <button
              className="rounded-full border border-white/20 bg-black/60 p-2 text-white transition hover:bg-black/80"
              onClick={() => setIsViewerOpen(false)}
              aria-label="Close gallery"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="relative flex flex-1 items-center justify-center px-6 pb-10">
            {gallery.length > 1 && (
              <button
                className="absolute left-6 top-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-black/50 p-3 text-white transition hover:bg-black/80"
                onClick={() => shiftImage(-1)}
                aria-label="Previous screenshot"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
            )}
            <img src={activeImage} alt={`${project.title} fullscreen`} className="max-h-[90vh] max-w-[90vw] rounded-[18px] border border-white/10 object-contain shadow-2xl shadow-black/60" />
            {gallery.length > 1 && (
              <button
                className="absolute right-6 top-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-black/50 p-3 text-white transition hover:bg-black/80"
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

