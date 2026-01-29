import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { Menu, X, ArrowRight, Home, User, Code2, Briefcase, GraduationCap, FolderGit2, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  const navItems = [
    { label: "Home", href: "#home", icon: <Home size={18} /> },
    { label: "About", href: "#about", icon: <User size={18} /> },
    { label: "Skills", href: "#skills", icon: <Code2 size={18} /> },
    { label: "Experience", href: "#experience", icon: <Briefcase size={18} /> },
    { label: "Projects", href: "#projects", icon: <FolderGit2 size={18} /> },
    { label: "Education", href: "#education", icon: <GraduationCap size={18} /> },
    { label: "Contact", href: "#contact", icon: <PhoneCall size={18} /> },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".nav-reveal",
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.08, ease: "expo.out" }
      );
    }, navRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav ref={navRef} className="fixed top-0 z-[100] w-full transition-all duration-300 py-4  md:px-0">
      <div
        className={`mx-auto transition-all duration-500 ease-in-out flex items-center justify-between px-6 py-3 rounded-[2rem] border w-[95%] max-w-7xl ${
          scrolled
            ? "bg-bg-soft/80 backdrop-blur-2xl border-primary/20 shadow-[0_20px_50px_-15px_rgba(20,184,166,0.2)]"
            : "bg-transparent border-transparent"
        }`}
      >
        {/* LOGO SECTION */}
        <div className="nav-reveal flex flex-col group cursor-pointer">
          <h1 className="font-heading text-lg md:text-xl font-black tracking-tighter text-text group-hover:text-primary transition-colors">
            Karishma Dawar
          </h1>
          <div className="flex items-center gap-1.5">
             <span className="h-[1px] w-3 bg-primary"></span>
             <p className="text-[10px] text-muted uppercase tracking-[0.2em] font-bold">
               Full Stack Dev
             </p>
          </div>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden xl:flex items-center bg-bg/20 rounded-full px-2 py-1 border border-border/40 backdrop-blur-md">
          {navItems.map((item) => (
            <a 
              key={item.href} 
              href={item.href} 
              className="nav-reveal px-5 py-2 rounded-full relative group overflow-hidden"
            >
              <span className="relative z-10 text-[11px] font-bold uppercase tracking-widest text-muted group-hover:text-text transition-colors duration-300">
                {item.label}
              </span>
              <span className="absolute inset-0 bg-primary/10 scale-0 group-hover:scale-100 rounded-full transition-transform duration-500 ease-out" />
            </a>
          ))}
        </div>

        {/* RIGHT SIDE: CTA & TOGGLE */}
        <div className="nav-reveal flex items-center gap-4">
          <a
            href="#contact"
            className="hidden sm:flex items-center gap-2 px-6 py-2.5 bg-primary text-bg font-bold text-xs uppercase tracking-widest rounded-full hover:shadow-[0_0_20px_rgba(20,184,166,0.4)] transition-all duration-300 active:scale-95"
          >
            Let's Talk
            <ArrowRight size={14} />
          </a>

          <button
            className="xl:hidden p-3 rounded-2xl bg-bg-soft border border-border/50 text-primary hover:bg-primary hover:text-bg transition-all duration-300"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={20} strokeWidth={3} />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-bg/95 backdrop-blur-2xl flex flex-col"
          >
            {/* Mobile menu content remains same as your previous stable version */}
            <div className="flex justify-between items-center px-4 py-8">
              <div className="flex flex-col">
                <h1 className="text-2xl font-black text-text tracking-tighter">Karishma Dawar</h1>
                <p className="text-xs text-primary uppercase tracking-widest font-bold">Portfolio Menu</p>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-4 rounded-2xl bg-primary/10 text-primary border border-primary/20">
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col gap-3 px-6 mt-4">
              {navItems.map((item, idx) => (
                <motion.a
                  key={item.href}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.08, ease: "circOut" }}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between p-5 rounded-[1.5rem] bg-bg-soft/50 border border-border/50 group active:scale-95 transition-all"
                >
                  <div className="flex items-center gap-5">
                    <span className="p-3 rounded-xl bg-bg border border-border text-primary group-hover:bg-primary group-hover:text-bg transition-all">{item.icon}</span>
                    <span className="text-lg font-bold text-text uppercase tracking-widest">{item.label}</span>
                  </div>
                  <ArrowRight size={20} className="text-muted group-hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;