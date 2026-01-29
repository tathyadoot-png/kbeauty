import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const StickySocial = () => {
  const socials = [
    {
      icon: Mail,
      href: "mailto:karishmadawar123@gmail.com",
      label: "Email",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/karishma-dawar",
      label: "LinkedIn",
    },
    {
      icon: Github,
      href: "https://github.com/Karishma0709",
      label: "GitHub",
    },
  ];

  return (
    <div
      className="
        fixed z-[999]
        bottom-24 right-5
        md:right-6 md:top-1/2 md:-translate-y-1/2 md:bottom-auto
      "
    >
      {/* Dock */}
      <div
        className="
          bg-bg-soft/80 backdrop-blur-xl
          border border-border
          p-2 md:p-2.5
          rounded-2xl
          shadow-soft
          flex flex-col gap-2.5
        "
      >
        {socials.map((item, idx) => (
          <motion.a
            key={idx}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="
              group relative
              h-10 w-10 md:h-11 md:w-11
              flex items-center justify-center
              rounded-xl
              border border-border
              bg-bg
              transition-all duration-300
              hover:border-primary
            "
          >
            {/* Icon */}
            <item.icon
              className="
                w-4 h-4 md:w-5 md:h-5
                text-muted
                transition-colors duration-300
                group-hover:text-primary
              "
            />

            {/* Tooltip (Desktop only) */}
            <div
              className="
                hidden md:block
                absolute right-full mr-3
                px-3 py-1.5
                rounded-lg
                bg-bg-soft border border-border
                text-[10px] font-semibold uppercase text-muted
                opacity-0 translate-x-2
                group-hover:opacity-100 group-hover:translate-x-0
                transition-all
                whitespace-nowrap
              "
            >
              {item.label}
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default StickySocial;
