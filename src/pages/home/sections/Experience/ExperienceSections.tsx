import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "The Sociyo",
    role: "Software Developer & IT Manager",
    duration: "June 2025 – Present",
    location: "Bhopal, India",
    points: [
      "Developed and maintained 3+ news portal websites using MERN Stack and Next.js with focus on performance, SEO, and scalability.",
      "Built admin, editor, and client panels with role-based access control for content publishing workflows.",
      "Integrated Google Analytics 4, Microsoft Clarity, and Google AdSense for analytics, tracking, and monetization.",
      "Implemented REST APIs with Node.js, Express.js, MongoDB, and secure JWT-based authentication.",
      "Deployed and managed production applications on DigitalOcean, Railway, and Render.",
    ],
  },
  {
    company: "SSS Technologies",
    role: "Software Developer",
    duration: "August 2024 – July 2025",
    location: "Bhopal, India",
    points: [
      "Developed responsive web applications using React.js and Tailwind CSS.",
      "Built RESTful APIs using Node.js and Express.js.",
      "Implemented JWT authentication and role-based access control.",
      "Worked on admin dashboards, forms, and internal tools.",
      "Collaborated with clients and team members to deliver live projects.",
    ],
  },
  {
    company: "Gramhal",
    role: "Database Manager",
    duration: "October 2023 – May 2024",
    location: "Bhopal, India",
    points: [
      "Verified and validated crop receipt data to ensure accuracy and consistency.",
      "Coordinated daily with on-site teams to resolve data-related issues.",
      "Assisted in application testing by reporting bugs and usability issues.",
      "Provided structured feedback to improve data quality and system reliability.",
    ],
  },
  {
    company: "3Analytics",
    role: "Implementation Associate",
    duration: "May 2022 – November 2023",
    location: "Bhopal, India",
    points: [
      "Worked on AEFI projects for Routine Immunization and COVID-19 vaccination in coordination with NHM.",
      "Served as State Coordinator, acting as a liaison between NHM, JHPIEGO, and internal teams.",
      "Collected, validated, and shared beneficiary vaccination data for post-vaccination follow-ups.",
      "Prepared weekly and monthly analytical reports for stakeholders.",
      "Ensured data accuracy, compliance, and smooth cross-team communication.",
    ],
  },
  // {
  //   company: "UNICEF",
  //   role: "Incharge Supervisor",
  //   duration: "November 2021 – March 2022",
  //   location: "Bhopal, India",
  //   points: [
  //     "Supervised and coordinated a team of 8 members for daily operations.",
  //     "Acted as a communication bridge between state and district-level teams.",
  //     "Collected and consolidated COVID-19 vaccination data from field teams.",
  //     "Prepared daily reports, summaries, and presentations for state authorities.",
  //   ],
  // },
];

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="py-28 bg-bg relative overflow-hidden"
    >
        <SectionHeading
  kicker="Experience"
  title="Professional journey"
  subtitle="Hands-on experience across full stack development, real-world projects, and collaborative team environments."
/>

      {/* glow */}
      <div className="absolute top-1/3 left-0 w-[300px] h-[300px] bg-primary/5 blur-[120px] rounded-full" />

      <div className="container relative z-10">
        {/* SECTION HEADER */}
       

        {/* TIMELINE */}
        <div className="relative border-l border-border pl-8 space-y-14">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* DOT */}
              <span className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-primary shadow-glow" />

              <div className="bg-bg-soft border border-border rounded-2xl p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-heading font-bold text-text">
                      {exp.role}
                    </h3>
                    <p className="text-primary font-medium">
                      {exp.company}
                    </p>
                  </div>

                  <div className="text-sm text-muted flex items-center gap-2">
                    <Briefcase size={14} />
                    {exp.duration}
                  </div>
                </div>

                <p className="text-sm text-muted">
                  {exp.location}
                </p>

                <ul className="space-y-2 pt-2">
                  {exp.points.map((point, i) => (
                    <li
                      key={i}
                      className="text-sm text-muted leading-relaxed"
                    >
                      • {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
