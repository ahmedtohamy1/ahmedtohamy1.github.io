import { PropsWithChildren, useRef } from "react";
import { motion, useInView } from "framer-motion";

type RevealProps = PropsWithChildren<{
  delay?: number;
  yOffset?: number;
  className?: string;
  scaleFrom?: number;
}>;

const Reveal = ({ children, delay = 0, yOffset = 32, className, scaleFrom = 0.98 }: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yOffset, scale: scaleFrom }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              scale: 1,
            }
          : {
              opacity: 0,
              y: yOffset,
              scale: scaleFrom,
            }
      }
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;

