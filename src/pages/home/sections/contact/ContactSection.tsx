import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Mail, Linkedin, MapPin, ArrowRight, Copy, Check } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("karishmadawar123@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-32 bg-bg relative overflow-hidden">
      {/* ANIMATED BACKGROUND GLOWS */}
      <motion.div 
        animate={{ x: [0, 30, 0], y: [0, -50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/3 left-1/4 w-[380px] h-[380px] bg-primary/10 blur-[120px] rounded-full" 
      />
      <motion.div 
        animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 right-1/4 w-[420px] h-[420px] bg-primary/5 blur-[160px] rounded-full" 
      />

      <SectionHeading
        kicker="Contact"
        title="Let’s work together"
        subtitle="Open to full-time roles, freelance projects, and meaningful collaborations."
      />

      <div className="container relative z-10 mt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          
          {/* LEFT – CONTACT INFO */}
          <div className="space-y-4">
            <ContactCard 
              href="mailto:karishmadawar123@gmail.com" 
              icon={<Mail size={22} />} 
              label="Email" 
              value="karishmadawar123@gmail.com"
              isCopyable
              onCopy={copyEmail}
              copied={copied}
            />
            <ContactCard 
              href="https://www.linkedin.com/in/karishma-dawar" 
              icon={<Linkedin size={22} />} 
              label="LinkedIn" 
              value="linkedin.com/in/karishma-dawar"
              external 
            />
            <ContactCard 
              icon={<MapPin size={22} />} 
              label="Location" 
              value="Bhopal, Madhya Pradesh, India"
            />
          </div>

          {/* RIGHT – CTA CARD WITH GRADIENT BORDER */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="group relative p-[1px] rounded-3xl overflow-hidden"
          >
            {/* The Gradient Border effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative h-full rounded-3xl p-10 bg-bg-soft border border-border flex flex-col justify-between z-10">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  Available for new projects
                </div>
                <h3 className="text-3xl font-heading font-bold text-text leading-tight">
                  Have a vision? <br />
                  <span className="text-primary">Let's build it.</span>
                </h3>
                <p className="text-muted leading-relaxed max-w-md">
                  Whether you’re hiring a developer or just want to chat about tech—my inbox is always open.
                </p>
              </div>

              <motion.a
                whileHover={{ gap: "12px" }}
                href="mailto:karishmadawar123@gmail.com"
                className="mt-10 btn-primary w-fit inline-flex items-center gap-2 group/btn"
              >
                Start a Conversation 
                <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// HELPER COMPONENT FOR CONTACT ITEMS
const ContactCard = ({ href, icon, label, value, external, isCopyable, onCopy, copied }: any) => {
  const content = (
    <div className="group flex items-center gap-5 bg-bg-soft/50 backdrop-blur-sm border border-border rounded-2xl p-5 transition-all hover:bg-bg-soft hover:border-primary/50 hover:shadow-soft relative">
      <div className="p-4 rounded-xl bg-bg border border-border text-primary group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div className="flex-grow">
        <p className="text-[10px] text-muted uppercase tracking-widest font-bold">
          {label}
        </p>
        <p className="font-medium text-text text-sm sm:text-base">
          {value}
        </p>
      </div>
      {isCopyable && (
        <button 
          onClick={(e) => { e.preventDefault(); onCopy(); }}
          className="p-2 text-muted hover:text-primary transition-colors"
        >
          {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
        </button>
      )}
    </div>
  );

  return href ? (
    <motion.a 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      href={href} 
      target={external ? "_blank" : undefined}
      className="block"
    >
      {content}
    </motion.a>
  ) : (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {content}
    </motion.div>
  );
};

export default ContactSection;