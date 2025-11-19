import { Card } from "@/components/ui/card";
import PageSection from "@/components/layout/PageSection";
import Reveal from "@/components/layout/Reveal";
import { volunteering } from "@/data/site";

const Volunteering = () => {
  return (
    <PageSection
      id="volunteering"
      eyebrow="Voluntary Work"
      title="Giving back through education and mentorship."
      description="Community workshops and mentorship programs focused on helping the next wave of Flutter engineers ship confidently."
      align="center"
    >
      <div className="grid gap-6">
        {volunteering.map((entry, index) => (
          <Reveal key={entry.organization} delay={index * 0.05}>
            <Card className="rounded-[26px] border border-border/70 bg-card/95 p-6 shadow-lg shadow-primary/5">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-primary/70">{entry.period}</p>
                  <h3 className="text-xl font-semibold text-foreground">{entry.organization}</h3>
                  <p className="text-sm text-muted-foreground">
                    {entry.role} · {entry.location}
                  </p>
                </div>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {entry.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2">
                    <span className="mt-2 h-1 w-5 rounded-full bg-primary/40" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        ))}
      </div>
    </PageSection>
  );
};

export default Volunteering;

