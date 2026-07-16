import { Globe, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import PageSection from "@/components/layout/PageSection";
import Reveal from "@/components/layout/Reveal";
import { contactInfo, socialLinks } from "@/data/site";
import React from "react";

const iconMap = {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Globe,
};

const Contact = () => {
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
      id="contact"
      eyebrow="Connect"
      title="Let’s architect your next calm, premium Flutter release."
      description="Drop a note and I’ll respond within one business day with next steps, suggested timelines, and how we can work together."
      align="center"
      showHalo={false}
    >
      <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
        <Reveal className="h-full">
          <Card 
            onMouseMove={handleMouseMove}
            className="card-glow rounded-[28px] border border-border/50 bg-card/30 p-5 sm:p-8 shadow-xl shadow-primary/5 backdrop-blur-sm transition-all hover:border-primary/30 h-full"
          >
            <h3 className="text-lg font-bold text-foreground tracking-tight border-b border-border/20 pb-3">Direct Line</h3>
            <div className="mt-6 space-y-5">
              {contactInfo.map((info) => {
                const Icon = iconMap[info.icon as keyof typeof iconMap];
                return (
                  <div key={info.label} className="flex items-center gap-3 sm:gap-4 rounded-2xl border border-primary/10 bg-primary/5 p-3 sm:p-4 z-10 relative">
                    <div className="rounded-2xl bg-primary/10 p-2.5 sm:p-3 text-primary shrink-0">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground">{info.label}</p>
                      {info.href ? (
                        <a href={info.href} className="text-base md:text-lg font-semibold text-foreground hover:text-primary transition-colors block truncate">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-base md:text-lg font-semibold text-foreground truncate">{info.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        </Reveal>

        <Reveal delay={0.1} className="h-full">
          <Card 
            onMouseMove={handleMouseMove}
            className="card-glow rounded-[28px] border border-primary/20 bg-gradient-to-br from-primary/10 via-card/35 to-card/20 p-5 sm:p-8 shadow-xl shadow-primary/10 backdrop-blur-sm h-full flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-bold text-foreground tracking-tight border-b border-white/5 pb-3">Social Signals</h3>
              <div className="mt-6 space-y-4 z-10 relative">
                {socialLinks.map((link) => {
                  const Icon = iconMap[link.icon as keyof typeof iconMap];
                  return (
                    <Button
                      key={link.label}
                      asChild
                      variant="outline"
                      className="group flex w-full items-center justify-between rounded-2xl border-primary/25 bg-background/50 px-3 sm:px-4 py-3 sm:py-4 text-base text-foreground/80 hover:border-primary hover:bg-primary/5 transition-all"
                    >
                      <a href={link.href} target="_blank" rel="noreferrer">
                        <span className="flex items-center gap-3">
                          <Icon className="h-5 w-5 text-primary" />
                          {link.label}
                        </span>
                        <span className="text-xs font-semibold text-primary group-hover:scale-105 transition-transform">View</span>
                      </a>
                    </Button>
                  );
                })}
              </div>
            </div>
            <div className="mt-8 rounded-2xl border border-white/5 bg-white/[0.03] p-4 text-xs font-light text-muted-foreground/80 leading-relaxed z-10 relative">
              Available for fractional leadership, mobile architecture reviews, and flagship Flutter builds.
            </div>
          </Card>
        </Reveal>
      </div>

      <Reveal delay={0.2}>
        <div className="mt-10 flex flex-col items-center gap-4">
          <Button asChild size="lg" className="rounded-full px-8 py-6 text-base font-bold shadow-lg shadow-primary/15 hover:shadow-primary/25 hover:scale-[1.02] transition-all">
            <a href="mailto:1ahmed.tohamy@gmail.com">
              <Mail className="mr-2 h-5 w-5" />
              Send a Project Brief
            </a>
          </Button>
          <p className="text-sm text-muted-foreground font-light">No spam, just thoughtful replies and realistic timelines.</p>
        </div>
      </Reveal>
    </PageSection>
  );
};

export default Contact;
