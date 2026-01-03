import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Server, Shield } from "lucide-react";

const highlights = [
  {
    icon: Server,
    title: "Backend Architecture",
    description: "Designing scalable multi-tenant SaaS platforms and robust API systems",
  },
  {
    icon: Database,
    title: "Database Expert",
    description: "PostgreSQL, MongoDB, complex data modeling with Prisma & Mongoose",
  },
  {
    icon: Code2,
    title: "Full-Stack Capable",
    description: "React, Next.js, React Native for seamless end-to-end development",
  },
  {
    icon: Shield,
    title: "Security Focused",
    description: "Implementing robust authentication, authorization & access control",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Dynamic Backend Developer with extensive experience in designing and 
              implementing scalable web applications, particularly in{" "}
              <span className="text-primary">multi-tenant SaaS platforms</span> and{" "}
              <span className="text-primary">API architecture</span>.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Expertise in optimizing backend performance, enforcing secure access 
              control, and delivering robust data models through modern technologies 
              including <span className="text-accent">Node.js</span>,{" "}
              <span className="text-accent">TypeScript</span>,{" "}
              <span className="text-accent">Python</span>,{" "}
              <span className="text-accent">PostgreSQL</span>, and{" "}
              <span className="text-accent">MongoDB</span>.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Committed to creating clean, maintainable backend systems that effectively 
              address real-world challenges. Currently expanding into{" "}
              <span className="text-primary">cybersecurity</span> to build more secure 
              and resilient systems.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <span className="px-4 py-2 glass rounded-full text-sm">🎓 UNN Graduate</span>
              <span className="px-4 py-2 glass rounded-full text-sm">📍 Enugu, Nigeria</span>
              <span className="px-4 py-2 glass rounded-full text-sm">🔒 Security Enthusiast</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-6 glass rounded-2xl hover-glow cursor-default"
              >
                <item.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
