// ❌ useOutletContext hata do
import HeroSection from "./sections/home/HeroSection";
import AboutSection from "./sections/about/AboutSection";
import ContactSection from "./sections/contact/ContactSection";
import SkillsSection from "./sections/Skills/SkillsSection";
import ExperienceSection from "./sections/Experience/ExperienceSections";
import ProjectsSection from "./sections/Projects/ProjectsSection";
import EducationSection from "./sections/Education/EducationSection";

const HomePage = () => {
  return (
    <>
      <section id="home">
        <HeroSection />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="skills">
        <SkillsSection />
      </section>

      <section id="experience">
        <ExperienceSection />
      </section>

      <section id="projects">
        <ProjectsSection />
      </section>

      <section id="education">
        <EducationSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>
    </>
  );
};

export default HomePage;
