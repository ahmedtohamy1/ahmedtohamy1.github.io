import { Globe, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import PageSection from "@/components/layout/PageSection";
import Reveal from "@/components/layout/Reveal";
import { contactInfo, socialLinks } from "@/data/site";

const iconMap = {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Globe,
};

const Contact = () => {
  return (
    <PageSection
      id="contact"
      eyebrow="Connect"
      title="Let’s architect your next calm, premium Flutter release."
      description="Drop a note and I’ll respond within one business day with next steps, suggested timelines, and how we can work together."
      align="center"
      showHalo={false}
    >
      <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
        <Reveal>
          <Card className="rounded-[28px] border border-border/60 bg-card/95 p-8 shadow-xl shadow-primary/10">
            <h3 className="text-lg font-semibold text-foreground">Direct line</h3>
            <div className="mt-6 space-y-5">
              {contactInfo.map((info) => {
                const Icon = iconMap[info.icon as keyof typeof iconMap];
                return (
                  <div key={info.label} className="flex items-center gap-4 rounded-2xl border border-primary/10 bg-primary/5 p-4">
                    <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{info.label}</p>
                      {info.href ? (
                        <a href={info.href} className="text-lg font-medium text-foreground hover:text-primary">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-lg font-medium text-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        </Reveal>

        <Reveal delay={0.1}>
          <Card className="rounded-[28px] border border-primary/30 bg-gradient-to-br from-primary/10 via-card to-card p-8 shadow-xl shadow-primary/15">
            <h3 className="text-lg font-semibold text-foreground">Social signals</h3>
            <div className="mt-6 space-y-4">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon as keyof typeof iconMap];
                return (
                  <Button
                    key={link.label}
                    asChild
                    variant="outline"
                    className="group flex w-full items-center justify-between rounded-2xl border-primary/30 bg-transparent px-4 py-4 text-base text-foreground/80 hover:border-primary hover:bg-primary/5"
                  >
                    <a href={link.href} target="_blank" rel="noreferrer">
                      <span className="flex items-center gap-3">
                        <Icon className="h-5 w-5 text-primary" />
                        {link.label}
                      </span>
                      <span className="text-sm text-primary">View</span>
                    </a>
                  </Button>
                );
              })}
            </div>
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-muted-foreground">
              Available for fractional leadership, mobile architecture reviews, and flagship Flutter builds.
            </div>
          </Card>
        </Reveal>
      </div>

      <Reveal delay={0.2}>
        <div className="mt-10 flex flex-col items-center gap-4">
          <Button asChild size="lg" className="rounded-full px-8 py-6 text-base shadow-lg shadow-primary/20">
            <a href="mailto:1ahmed.tohamy@gmail.com">
              <Mail className="mr-2 h-5 w-5" />
              Send a project brief
            </a>
          </Button>
          <p className="text-sm text-muted-foreground">No spam, just thoughtful replies and realistic timelines.</p>
        </div>
      </Reveal>
    </PageSection>
  );
};

export default Contact;
