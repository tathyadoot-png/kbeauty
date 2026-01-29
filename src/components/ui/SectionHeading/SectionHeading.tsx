import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  kicker?: string;
}

const SectionHeading = ({
  title,
  subtitle,
  kicker = "Section Overview",
}: SectionHeadingProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".connector-line", {
        scaleX: 0,
        transformOrigin: "left",
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
      });

      gsap.from(".reveal-up", {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-[96%] lg:w-[88%] mx-auto  md:pt-10 pb-6 mb-12 md:mb-20"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        {/* LEFT */}
        <div className="space-y-3">
          <p className="reveal-up text-xs uppercase tracking-widest text-primary font-semibold">
            {kicker}
          </p>

          <h2 className="reveal-up font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-text leading-tight">
            {title}
          </h2>

          {subtitle && (
            <p className="reveal-up max-w-xl text-muted text-sm md:text-base leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {/* RIGHT LINE */}
        <div className="hidden md:block flex-grow max-w-[30%]">
          <div className="connector-line h-[2px] w-full bg-gradient-to-r from-primary to-transparent" />
        </div>
      </div>

      {/* BOTTOM ACCENT */}
      <div className="mt-6 w-full h-[1px] bg-border relative overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "25%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute left-0 top-0 h-full bg-primary"
        />
      </div>
    </div>
  );
};

export default SectionHeading;
