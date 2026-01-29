import { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Disable on mobile
    if (typeof window === "undefined" || window.innerWidth < 768) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    const handlePointerMove = (ev: PointerEvent) => {
      gsap.to(cursor, {
        x: ev.clientX,
        y: ev.clientY,
        duration: 0.45,
        ease: "power2.out",
        overwrite: "auto",
     															});
    };

    const handlePointerDown = () => {
      gsap.fromTo(
        cursor,
        { scale: 1 },
        { scale: 1.8, duration: 0.2, yoyo: true, repeat: 1 }
      );
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerdown", handlePointerDown);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="
        fixed top-0 left-0
        w-2 h-2
        -translate-x-1/2 -translate-y-1/2
        rounded-full
        bg-primary
        pointer-events-none
        z-[9999]
        mix-blend-difference
      "
    />
  );
};

export default CustomCursor;
