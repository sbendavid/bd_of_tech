import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/2 w-full h-full opacity-10"
        >
          <div className="w-full h-full border border-primary/30 rounded-full" />
        </motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/2 -left-1/2 w-full h-full opacity-10"
        >
          <div className="w-full h-full border border-accent/30 rounded-full" />
        </motion.div>
        
        {/* Floating orbs */}
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="mb-6"
          >
            <span className="px-4 py-2 rounded-full glass text-sm text-primary">
              Available for opportunities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            <span className="text-foreground">Ben-David</span>{" "}
            <span className="gradient-text">Samuel</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-px w-12 bg-primary" />
            <p className="text-xl md:text-2xl text-muted-foreground font-mono">
              Backend Engineer
            </p>
            <div className="h-px w-12 bg-primary" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg text-muted-foreground max-w-2xl mb-10 text-balance"
          >
            Crafting scalable backend systems with Node.js, TypeScript, Python & more.
            Building robust APIs and architecting solutions that power modern applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            <motion.a
              href="/BenDavid_Samuel_Resume.pdf"
              download="BenDavid_Samuel_Resume.pdf"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium flex items-center gap-2 hover-glow"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </motion.a>
            <motion.a
              href="https://github.com/sbendavid"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 glass rounded-xl hover-glow"
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/ben-david-samuel-107a86267/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 glass rounded-xl hover-glow"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="mailto:samuelbendavid01@gmail.com"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 glass rounded-xl hover-glow"
            >
              <Mail className="w-6 h-6" />
            </motion.a>
          </motion.div>

          <motion.a
            href="#about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{
              opacity: { delay: 1 },
              y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
            }}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowDown className="w-6 h-6" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
