import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import { motion } from "framer-motion";
import { Code2, Layers, Rocket, Users, ChevronRight } from "lucide-react";

const highlights = [
  {
    icon: <Code2 className="text-primary" size={32} />,
    title: "Full Stack Development",
    description: "Building end-to-end applications using MERN stack and Next.js with clean architecture.",
    tag: "Architecture"
  },
  {
    icon: <Layers className="text-primary" size={32} />,
    title: "Scalable Systems",
    description: "Designing robust APIs and database schemas that handle growth without breaking.",
    tag: "Backend"
  },
  {
    icon: <Rocket className="text-primary" size={32} />,
    title: "Production Ready",
    description: "Experience in CI/CD, cloud deployment, and optimizing for real-world performance.",
    tag: "DevOps"
  },
  {
    icon: <Users className="text-primary" size={32} />,
    title: "Team Collaboration",
    description: "Effective communication in agile environments, delivering results for global clients.",
    tag: "Soft Skills"
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-32 bg-bg relative overflow-hidden w-full px-2 md:px-10">
      {/* BACKGROUND ELEMENTS - UNIQUE UI */}
      <div className="absolute inset-0 z-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: `linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)`, 
             backgroundSize: '100px 100px' }} 
        />
        {/* Large Gradient Glows */}
        <div className="absolute -top-24 -left-20 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 -right-20 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full" />
      </div>

      <div className="w-full  relative z-10">
        <SectionHeading
          kicker="About"
          title="Who I am & how I work"
          subtitle="Full Stack Developer focused on building high-performance web applications."
        />

        <div className="grid lg:grid-cols-12 gap-16 mt-20 items-center md:px-36">
          
          {/* LEFT: PROFESSIONAL STORY (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="relative">
              <span className="absolute  h-full bg-primary/40 rounded-full" />
              <p className="text-text/90 text-xl font-body leading-relaxed">
                I specialize in turning complex logic into <span className="text-primary font-bold">elegant user experiences</span>. 
                With a deep focus on the modern JS ecosystem, I build applications that are as fast as they are beautiful.
              </p>
            </div>

            <div className="space-y-4 text-text-muted text-lg leading-relaxed font-body">
              <p>
                My expertise spans <span className="text-text font-medium">React, Next.js, and Node.js</span>, backed by 
                successful delivery of 10+ production-grade projects. I don't just write code; I build solutions that drive business value.
              </p>
              <p>
                Whether it's a high-traffic news portal or a complex SaaS dashboard, I ensure 
                <span className="text-text"> security, scalability, and seamless UX</span> are baked in from day one.
              </p>
            </div>

            <motion.button 
              whileHover={{ x: 10 }}
              className="flex items-center gap-2 text-primary font-heading font-bold uppercase tracking-widest text-sm group"
            >
              Learn more about my process 
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* RIGHT: FEATURE GRID (7 Cols) */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4 md:gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative bg-bg-soft/50 backdrop-blur-sm border border-border p-8 rounded-[2rem] overflow-hidden"
              >
                {/* Card Glow Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="inline-block p-3 rounded-2xl bg-bg border border-border mb-6 group-hover:border-primary/50 transition-colors">
                    {item.icon}
                  </div>
                  
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-primary mb-2 font-bold opacity-70">
                    {item.tag}
                  </span>
                  
                  <h3 className="font-heading font-bold text-text text-xl mb-3">
                    {item.title}
                  </h3>
                  
                  <p className="text-text-muted text-sm leading-relaxed group-hover:text-text/80 transition-colors font-body">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;