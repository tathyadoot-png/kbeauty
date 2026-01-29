import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const navLinks = [
    { label: "Home", path: "#home" },
    { label: "About", path: "#about" },
    { label: "Skills", path: "#skills" },
    { label: "Experience", path: "#experience" },
    { label: "Projects", path: "#projects" },
    { label: "Education", path: "#education" },
    { label: "Contact", path: "#contact" },
  ];

  return (
    <footer className="bg-bg-soft border-t border-border pt-14">
      <div className="container">
        {/* TOP */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-border">
          {/* BRAND */}
          <div className="text-center md:text-left space-y-1">
            <h2 className="font-heading text-xl font-extrabold text-text">
              Karishma Dawar
            </h2>
            <p className="text-xs text-muted uppercase tracking-wide">
              Full Stack Developer • MERN • Next.js
            </p>
          </div>

          {/* NAV */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                className="text-xs font-semibold text-muted hover:text-primary transition uppercase"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* CTA BAR */}
        <div className="my-10 rounded-2xl bg-bg border border-border p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted text-center md:text-left">
            Open to full-time roles, freelance projects & collaborations.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="mailto:karishmadawar123@gmail.com"
              className="p-3 rounded-xl bg-bg-soft border border-border hover:border-primary transition"
            >
              <Mail size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/karishma-dawar"
              target="_blank"
              className="p-3 rounded-xl bg-bg-soft border border-border hover:border-primary transition"
            >
              <Linkedin size={18} />
            </a>

            <a
              href="https://github.com/Karishma0709"
              target="_blank"
              className="p-3 rounded-xl bg-bg-soft border border-border hover:border-primary transition"
            >
              <Github size={18} />
            </a>
          </div>
        </div>

        {/* BOTTOM */}
        <p className="text-center text-[11px] text-muted pb-8">
          © {new Date().getFullYear()} Karishma Dawar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
