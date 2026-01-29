import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import { motion } from "framer-motion";
import { ExternalLink, CheckCircle2, Newspaper, Feather, UserCheck, Zap, Globe, Github } from "lucide-react";

const mainProjects = [
  {
    title: "The Drishtikon",
    subtitle: "MERN News Platform",
    tech: ["React", "Node.js", "MongoDB", "JWT"],
    link: "https://www.thedrishtikon.com",
    icon: <Newspaper className="text-primary" size={24} />,
    points: [
      "Complete Admin, Editor & Client panels built single-handedly.",
      "SEO-friendly structure with clean meta tags.",
      "Role-based access control (RBAC) & Push notifications.",
      "Scalable architecture for high-traffic news delivery."
    ]
  },
  {
    title: "Tathyadoot",
    subtitle: "SEO-First Next.js Portal",
    tech: ["Next.js", "Redux", "Express", "SSR"],
    link: "https://www.tathyadoot.com",
    icon: <Zap className="text-primary" size={24} />,
    points: [
      "Optimized for search engines using SSR & dynamic meta tags.",
      "Redux-powered state management for consistent data flow.",
      "Rich social previews & light/dark mode support.",
      "Route-based code splitting for performance."
    ]
  },
  {
    title: "Content Mohalla",
    subtitle: "Creator-Driven Lit Platform",
    tech: ["Next.js", "Node.js", "MongoDB"],
    link: "https://www.contentmohalla.com",
    icon: <Feather className="text-primary" size={24} />,
    points: [
      "Creator dashboards for managing poetry & prose.",
      "Admin workflow: User Submit → Review → Live Publishing.",
      "Social sharing functionality for literary posts.",
      "Clean, responsive reading experience for users."
    ]
  },
  {
    title: "Indian Says",
    subtitle: "Modernized MERN Portal",
    tech: ["React", "Node.js", "Tailwind"],
    link: "https://www.indiansays.com",
    icon: <Globe className="text-primary" size={24} />,
    points: [
      "Redesigned UI with focus on typography and readability.",
      "Enhanced user experience for digital news consumption.",
      "Integrated comment system for user engagement.",
      "Smooth micro-interactions using Framer Motion."
    ]
  },
  {
    title: "Rajendra Shukla",
    subtitle: "Public Leadership Portfolio",
    tech: ["Next.js", "TypeScript", "GSAP"],
    link: "https://www.rajendrashukla.co.in",
    icon: <UserCheck className="text-primary" size={24} />,
    points: [
      "High-performance static site with GSAP animations.",
      "Fully responsive professional layout for leadership profile.",
      "Section-based storytelling of work and initiatives.",
      "Optimized for fast load times and accessibility."
    ]
  }
];

const otherProjects = [
  { name: "Inedco Networks", link: "https://inedconetworks.com" },
  { name: "Betul Biofuel", link: "https://betulbiofuel.com" },
  { name: "The Sociyo", link: "https://thesociyo.com" },
  { name: "India Global Resources", link: "https://indiaglobalresources.in" }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 bg-bg relative overflow-hidden w-full px-2 md:px-10">
        <SectionHeading
          kicker="My Work"
          title="Featured Projects"
          subtitle="Real-world platforms built with full-stack ownership and performance in mind."
        />
      <div className="w-full relative z-10 md:px-36">
      

        {/* VERTICAL GRID FOR MAIN PROJECTS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
          {mainProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-bg-soft/40 border border-border rounded-[2rem] p-8 flex flex-col justify-between hover:border-primary/40 transition-all duration-500"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-bg rounded-2xl border border-border text-primary shadow-sm group-hover:shadow-primary/10 transition-all">
                    {project.icon}
                  </div>
                  <a href={project.link} target="_blank" className="p-2 text-text-muted hover:text-primary transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>

                <div>
                  <h3 className="text-xl font-heading font-bold text-text group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-primary/70 text-[10px] font-bold uppercase tracking-widest mt-1">
                    {project.subtitle}
                  </p>
                </div>

                <ul className="space-y-3">
                  {project.points.map((point, i) => (
                    <li key={i} className="flex gap-2 text-[13px] text-text-muted leading-relaxed font-body">
                      <CheckCircle2 size={14} className="text-primary mt-1 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 pt-8">
                {project.tech.map((t) => (
                  <span key={t} className="px-2 py-1 bg-bg border border-border rounded-lg text-[10px] font-bold text-text-muted">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* OTHER PROJECTS - Sleek Minimalist UI */}
        <div className="mt-24">
          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-xl font-heading font-bold text-text">More Projects</h3>
            <div className="h-px flex-1 bg-border/50" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherProjects.map((project, index) => (
              <motion.a
                key={index}
                href={project.link}
                target="_blank"
                whileHover={{ scale: 1.02 }}
                className="p-5 bg-bg-soft/30 border border-border rounded-2xl flex items-center justify-between group hover:bg-primary/5 hover:border-primary/30 transition-all"
              >
                <div className="flex items-center gap-3">
                  <Globe size={16} className="text-text-muted group-hover:text-primary transition-colors" />
                  <span className="text-sm text-text-muted group-hover:text-text font-medium transition-colors truncate">
                    {project.name}
                  </span>
                </div>
                <ExternalLink size={14} className="text-text-muted group-hover:text-primary transition-colors shrink-0" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;