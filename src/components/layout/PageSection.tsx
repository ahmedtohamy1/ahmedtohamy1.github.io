import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import Reveal from "./Reveal";

type PageSectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  contentClassName?: string;
  showHalo?: boolean;
  children: ReactNode;
};

const PageSection = ({
  id,
  eyebrow,
  title,
  description,
  align = "left",
  className,
  contentClassName,
  showHalo = true,
  children,
}: PageSectionProps) => {
  const headerAlignment = align === "center" ? "text-center mx-auto" : "";

  return (
    <section id={id} className={cn("relative scroll-mt-32 py-16 md:py-20 px-4 md:px-6", className)}>
      <div className="container mx-auto max-w-6xl">
        <Reveal>
          <div className={cn("space-y-4 mb-10 max-w-3xl", headerAlignment)}>
            {eyebrow && (
              <p className="text-[0.75rem] font-semibold uppercase tracking-[0.55em] text-primary/80">
                {eyebrow}
              </p>
            )}
            <h2 className={cn("text-4xl md:text-5xl font-semibold tracking-tight text-foreground", headerAlignment)}>
              {title}
            </h2>
            {description && (
              <p className={cn("text-base md:text-lg text-muted-foreground leading-relaxed", headerAlignment)}>
                {description}
              </p>
            )}
          </div>
        </Reveal>

        <div className={cn("relative", contentClassName)}>
          {children}
          {showHalo && (
            <div
              className="pointer-events-none absolute inset-0 -z-10 rounded-[2rem] border border-primary/5 blur-[80px]"
              aria-hidden
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default PageSection;

