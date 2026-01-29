import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import { motion } from "framer-motion";
import { 
  SiReact, SiNextdotjs, SiJavascript, SiTailwindcss, SiRedux, 
  SiNodedotjs, SiExpress, SiMongodb, SiRedis, SiJsonwebtokens,
  SiGit, SiDigitalocean, SiRailway, SiRender, SiWordpress, SiGoogleanalytics
} from "react-icons/si";
import { Cpu } from "lucide-react";

const skills = [
  {
    title: "Frontend",
    items: [
      { name: "React.js", icon: <SiReact className="text-[#61DAFB]" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-text" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
      { name: "Redux", icon: <SiRedux className="text-[#764ABC]" /> },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
      { name: "Express.js", icon: <SiExpress className="text-text" /> },
      { name: "JWT Auth", icon: <SiJsonwebtokens className="text-[#FB015B]" /> },
      { name: "REST APIs", icon: <Cpu className="text-primary" /> },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
      { name: "Redis", icon: <SiRedis className="text-[#DC382D]" /> },
      { name: "Mongoose", icon: <SiMongodb className="text-[#880000]" /> },
    ],
  },
  {
    title: "Tools & Cloud",
    items: [
      { name: "Git & GitHub", icon: <SiGit className="text-[#F05032]" /> },
      { name: "DigitalOcean", icon: <SiDigitalocean className="text-[#0080FF]" /> },
      { name: "Railway", icon: <SiRailway className="text-text" /> },
      { name: "Analytics", icon: <SiGoogleanalytics className="text-[#E37400]" /> },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 bg-bg relative overflow-hidden w-full px-2 md:px-10">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="w-full relative z-10">
        <SectionHeading
          kicker="Skills"
          title="Technologies I work with"
          subtitle="A practical tech stack focused on building scalable, secure, and production-ready web applications."
        />

        {/* Following your standard md:px-36 grid layout */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20 md:px-36">
          {skills.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group bg-bg-soft/30 backdrop-blur-sm border border-border p-8 rounded-[2rem] hover:border-primary/40 transition-all duration-500"
            >
              <h3 className="font-heading font-bold text-xl text-text mb-8 border-b border-border pb-4 group-hover:border-primary/20 transition-colors">
                {category.title}
              </h3>

              <div className="grid grid-cols-1 gap-5">
                {category.items.map((skill, sIdx) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 group/item"
                  >
                    <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-bg border border-border group-hover/item:border-primary/50 group-hover/item:shadow-[0_0_15px_rgba(20,184,166,0.1)] transition-all text-2xl">
                      {skill.icon}
                    </div>
                    <span className="text-text-muted group-hover/item:text-text transition-colors font-body text-sm font-medium uppercase tracking-wide">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;