import { useEffect, useRef, useState } from "react";

const interactiveTargets = "a, button, [role='button'], input, textarea, select, summary, .cursor-target";

const CustomCursor = () => {
  const [isActive, setIsActive] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  
  const mouseRef = useRef({ x: -100, y: -100 });
  const ringRef = useRef({ x: -100, y: -100 });
  
  const dotElRef = useRef<HTMLDivElement>(null);
  const ringElRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");
    if (!mediaQuery.matches) {
      return;
    }

    setIsEnabled(true);

    const handlePointerMove = (event: PointerEvent) => {
      const { clientX, clientY } = event;
      mouseRef.current = { x: clientX, y: clientY };
      
      // Update dot position instantly
      if (dotElRef.current) {
        dotElRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0) translate(-50%, -50%)`;
      }
    };

    const handlePointerDown = () => setIsActive(true);
    const handlePointerUp = () => setIsActive(false);

    const handleInteractiveOver = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.closest(interactiveTargets)) {
        setIsActive(true);
      }
    };

    const handleInteractiveOut = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.closest(interactiveTargets)) {
        setIsActive(false);
      }
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);
    document.addEventListener("pointerover", handleInteractiveOver);
    document.addEventListener("pointerout", handleInteractiveOut);

    // Lerp loop for the outer ring
    let rafId = 0;
    const tick = () => {
      const ease = 0.15; // interpolation factor
      const dx = mouseRef.current.x - ringRef.current.x;
      const dy = mouseRef.current.y - ringRef.current.y;
      
      ringRef.current.x += dx * ease;
      ringRef.current.y += dy * ease;
      
      if (ringElRef.current) {
        ringElRef.current.style.transform = `translate3d(${ringRef.current.x}px, ${ringRef.current.y}px, 0) translate(-50%, -50%)`;
      }
      
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      document.removeEventListener("pointerover", handleInteractiveOver);
      document.removeEventListener("pointerout", handleInteractiveOut);
      cancelAnimationFrame(rafId);
    };
  }, []);

  if (!isEnabled) {
    return null;
  }

  return (
    <div className={isActive ? "custom-cursor--active" : ""}>
      <div ref={dotElRef} className="custom-cursor-dot" style={{ transform: "translate3d(-100px, -100px, 0) translate(-50%, -50%)" }} aria-hidden />
      <div ref={ringElRef} className="custom-cursor-ring" style={{ transform: "translate3d(-100px, -100px, 0) translate(-50%, -50%)" }} aria-hidden />
    </div>
  );
};

export default CustomCursor;

