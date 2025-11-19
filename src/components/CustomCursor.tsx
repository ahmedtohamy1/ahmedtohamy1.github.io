import { useEffect, useState } from "react";

const interactiveTargets = "a, button, [role='button'], input, textarea, select, summary, .cursor-target";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isActive, setIsActive] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");
    if (!mediaQuery.matches) {
      return;
    }

    setIsEnabled(true);
    let rafId = 0;

    const handlePointerMove = (event: PointerEvent) => {
      const { clientX, clientY } = event;
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setPosition({ x: clientX, y: clientY });
      });
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
    <div
      className={`custom-cursor ${isActive ? "custom-cursor--active" : ""}`}
      style={{ top: position.y, left: position.x }}
      aria-hidden
    />
  );
};

export default CustomCursor;

