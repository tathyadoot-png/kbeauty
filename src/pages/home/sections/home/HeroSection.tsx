import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import img from "@/assets/karish.jpeg";

const HomePage = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-32 pb-20 bg-bg relative overflow-hidden w-full px-2 md:px-10"
    >
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 blur-[150px] rounded-full opacity-50" />
        <div className="absolute inset-0 opacity-[0.02]" 
             style={{ backgroundImage: `radial-gradient(var(--color-primary) 1px, transparent 1px)`, backgroundSize: '40px 40px' }} 
        />
      </div>

      <div className="w-full relative z-10 grid lg:grid-cols-12 gap-12 items-center md:px-36">
        
        {/* LEFT CONTENT (7 Columns) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/20 text-primary text-xs font-bold uppercase tracking-[0.2em]">
            <Sparkles size={14} /> Available for Opportunities
          </div>

          {/* FANCY FONT APPLIED HERE */}
          <h1 className="text-5xl md:text-7xl font-heading font-extrabold leading-[1.1] text-text">
            Building the <span className="font-fancy-script text-primary lowercase tracking-normal px-2">future</span> <br /> 
            of <span className="font-fancy-serif italic text-text/90">web applications.</span>
          </h1>

          <p className="text-text-muted max-w-xl text-lg md:text-xl leading-relaxed font-body">
            Hi, I’m <span className="text-text font-semibold">Karishma Dawar</span>. A Full Stack Developer specializing in 
            <span className="text-text font-medium"> MERN & Next.js</span>. I transform complex ideas into <span className="font-fancy-serif text-primary">high-performance</span>, 
            production-ready digital experiences.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-wrap gap-5">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects" 
              className="px-8 py-4 bg-primary text-bg font-heading font-bold rounded-2xl flex items-center gap-2 shadow-lg shadow-primary/20 hover:bg-primary-soft transition-colors"
            >
              Explore My Work <ArrowRight size={18} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-8 py-4 bg-bg-soft border border-border text-text font-heading font-bold rounded-2xl flex items-center gap-2 hover:border-primary/50 transition-all"
            >
              Get in Touch
            </motion.a>
          </div>

          {/* QUICK SOCIALS */}
          <div className="flex items-center gap-6 pt-4 text-text-muted">
            <span className="text-xs font-bold uppercase tracking-widest opacity-50">Follow Me</span>
            <div className="h-px w-12 bg-border" />
            <div className="flex gap-4">
              {[
                { icon: <Github size={20} />, link: "https://github.com/Karishma0709" },
                { icon: <Linkedin size={20} />, link: "https://www.linkedin.com/in/karishma-dawar" },
                { icon: <Mail size={20} />, link: "mailto:karishmadawar123@gmail.com" }
              ].map((social, i) => (
                <a key={i} href={social.link} className="hover:text-primary transition-colors transform hover:-translate-y-1 duration-300">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE: IMAGE & STATS (5 Columns) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="lg:col-span-5 relative"
        >
          {/* Image Container with Custom Frame */}
          <div className="relative z-10 w-full aspect-[4/5] rounded-[3rem] overflow-hidden border border-border group shadow-2xl shadow-primary/5">
            <img 
              src={img} 
              alt="Karishma Dawar" 
              className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-60" />
            
            {/* Floating Stats Card */}
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-bg-soft/80 backdrop-blur-xl border border-border rounded-3xl">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <h3 className="text-2xl font-heading font-bold text-primary">10+</h3>
                  <p className="text-[10px] uppercase tracking-widest text-text-muted font-bold">Projects Built</p>
                </div>
                <div className="text-center border-l border-border">
                  <h3 className="text-2xl font-heading font-bold text-primary">4+</h3>
                  <p className="text-[10px] uppercase tracking-widest text-text-muted font-bold">Years Exp.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Background Square */}
          <div className="absolute -top-6 -right-6 w-full h-full border-2 border-primary/20 rounded-[3rem] -z-10 translate-x-4 translate-y-4" />
        </motion.div>

      </div>
    </section>
  );
};

export default HomePage;