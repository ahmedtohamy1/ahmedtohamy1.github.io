import { Card } from "@/components/ui/card";
import PageSection from "@/components/layout/PageSection";
import Reveal from "@/components/layout/Reveal";
import { educationHistory } from "@/data/site";

const Education = () => {
  return (
    <PageSection
      id="education"
      eyebrow="Education"
      title="Academic track and focused training."
      description="Formal engineering education paired with targeted programs in mobile, full stack, and cross-platform delivery."
      align="center"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {educationHistory.map((entry, index) => (
          <Reveal key={entry.institution} delay={index * 0.05}>
            <Card className="rounded-[26px] border border-border/70 bg-card/95 p-6 shadow-lg shadow-primary/5">
              <div className="space-y-1">
                <p className="text-sm uppercase tracking-[0.35em] text-primary/70">{entry.period}</p>
                <h3 className="text-xl font-semibold text-foreground">{entry.institution}</h3>
                <p className="text-sm text-muted-foreground">{entry.location}</p>
              </div>
              <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                <p className="font-medium text-foreground">{entry.credential}</p>
                {entry.details.map((detail) => (
                  <p key={detail}>{detail}</p>
                ))}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </PageSection>
  );
};

export default Education;

