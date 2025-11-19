import { Card } from "@/components/ui/card";
import PageSection from "@/components/layout/PageSection";
import Reveal from "@/components/layout/Reveal";
import { aboutQuickFacts, siteMeta } from "@/data/site";

const About = () => {
  return (
    <PageSection
      id="about"
      eyebrow="About"
      title={siteMeta.headline}
      description={siteMeta.summary}
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <Card className="relative overflow-hidden rounded-[28px] border border-primary/20 bg-card/90 p-8 md:p-10 backdrop-blur-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" aria-hidden />
            <div className="relative space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">Professional pulse</h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                The resume translates directly into my delivery style: research-heavy discovery, calm execution, and measurable
                performance goals across Flutter, IoT/MQTT streams, socket-based sync, and supporting web layers (React + Laravel)
                when the product needs them.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">Base</p>
                  <p className="text-xl font-semibold text-foreground">{siteMeta.location}</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">Availability</p>
                  <p className="text-xl font-semibold text-primary">{siteMeta.availability}</p>
                </div>
              </div>
            </div>
          </Card>
        </Reveal>

        <div className="space-y-4">
          {aboutQuickFacts.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.05}>
              <Card className="rounded-3xl border border-border/60 bg-background/80 p-6 shadow-lg shadow-primary/5">
                <h4 className="text-sm uppercase tracking-[0.35em] text-primary/80">{card.title}</h4>
                <div className="mt-4 space-y-1">
                  {card.items.map((item, itemIndex) => (
                    <p
                      key={item}
                      className={itemIndex === 0 ? "text-lg font-semibold text-foreground" : "text-sm text-muted-foreground"}
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </PageSection>
  );
};

export default About;
