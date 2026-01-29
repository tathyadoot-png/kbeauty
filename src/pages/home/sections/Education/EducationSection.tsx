import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Master of Technology (M.Tech)",
    field: "Computer Science",
    institute: "Radharaman Engineering College, Bhopal",
    duration: "2018 – 2021",
  },
  {
    degree: "Bachelor of Engineering (B.E)",
    field: "Computer Science",
    institute: "Radharaman Engineering College, Bhopal",
    duration: "2014 – 2018",
  },
];

const EducationSection = () => {
  return (
    <section
      id="education"
      className="py-28 bg-bg relative overflow-hidden"
    >
        <SectionHeading
  kicker="Education"
  title="Academic background"
  subtitle="Strong foundation in computer science and software engineering principles."
/>

      {/* glow */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-primary/5 blur-[120px] rounded-full" />

      <div className="container relative z-10">
        {/* SECTION HEADER */}
      

        {/* EDUCATION CARDS */}
        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-bg-soft border border-border rounded-2xl p-7 space-y-4 hover:border-primary transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-bg border border-border text-primary">
                  <GraduationCap size={22} />
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg font-heading font-bold text-text">
                    {edu.degree}
                  </h3>
                  <p className="text-muted text-sm">
                    {edu.field}
                  </p>
                  <p className="text-sm text-muted">
                    {edu.institute}
                  </p>
                </div>
              </div>

              <p className="text-sm text-muted pt-2">
                {edu.duration}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
