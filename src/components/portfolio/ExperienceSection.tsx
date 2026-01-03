import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Backend Software Engineer",
    company: "Jodna Technology",
    location: "Remote",
    period: "Sep 2024 - Present",
    type: "current",
    highlights: [
      "Improved performance and reliability of databases, web services and integrations",
      "Collaborated with frontend developers to design and implement seamless APIs",
      "Enhanced system security with robust authentication and authorization mechanisms",
      "Deployed applications using Docker for consistent runtime environments",
    ],
  },
  {
    title: "Backend Software Engineer",
    company: "Intplus",
    location: "Remote",
    period: "Jan 2024 - Present",
    type: "current",
    highlights: [
      "Designed complex data schemas in MongoDB with Mongoose for multi-entity systems",
      "Developed RESTful API endpoints with advanced filters and geo-based data",
      "Implemented role-based access control for organizers, attendees, and user types",
      "Integrated Cloudinary for optimized media upload and delivery",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "54 Startups Inc",
    location: "Dakar, DKR",
    period: "Dec 2023 - Mar 2024",
    type: "past",
    highlights: [
      "Built responsive UIs for web and mobile using React.js and React Native Expo",
      "Developed backend systems with Django and PostgreSQL",
      "Maintained code quality through unit testing, Git, and code reviews",
      "Authored technical documentation for APIs and system architecture",
    ],
  },
  {
    title: "Software Engineer Internship",
    company: "Interra Networks Ltd",
    location: "Abuja, FCT",
    period: "Dec 2021 - Nov 2022",
    type: "past",
    highlights: [
      "Worked with UI/UX and development teams on responsive design solutions",
      "Participated in full software lifecycle from development to deployment",
      "Improved codebase quality by enforcing coding standards and refactoring",
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.period}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative mb-12 md:mb-16 pl-8 md:pl-0 ${
                index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"
              } md:w-1/2`}
            >
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.3, delay: index * 0.15 + 0.2 }}
                className={`absolute left-0 md:left-auto ${
                  index % 2 === 0 ? "md:right-0 md:translate-x-1/2" : "md:left-0 md:-translate-x-1/2"
                } top-0 w-4 h-4 rounded-full border-4 border-background ${
                  exp.type === "current" ? "bg-primary glow-primary" : "bg-secondary"
                }`}
              />

              <motion.div
                whileHover={{ y: -5 }}
                className={`glass p-6 rounded-2xl hover-glow ${
                  index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                }`}
              >
                <div className={`flex flex-col gap-2 mb-4 ${index % 2 === 0 ? "md:items-end" : ""}`}>
                  <div className="flex items-center gap-2 text-primary">
                    <Briefcase className="w-4 h-4" />
                    <span className="font-semibold">{exp.title}</span>
                  </div>
                  <h3 className="text-xl font-bold">{exp.company}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <ul className={`space-y-2 text-sm text-muted-foreground ${index % 2 === 0 ? "md:text-right" : ""}`}>
                  {exp.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex items-start gap-2">
                      <span className={`text-primary mt-1 ${index % 2 === 0 ? "md:order-2" : ""}`}>•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
