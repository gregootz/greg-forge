import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, FileText, BookOpen } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const titles = [
  "Red Teamer",
  "Web Developer",
  "CTF Player",
  "Network Engineer",
  "CEO — Heptacorenet Technologies",
];

const HeroSection = () => {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 scanline pointer-events-none" />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-primary text-sm mb-4 tracking-widest uppercase">
            &gt; initializing portfolio...
          </p>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold mb-6">
            <span className="text-foreground">Gregory George</span>
            <br />
            <span className="text-gradient-primary">Machiwa</span>
          </h1>

          <div className="h-8 mb-8 flex items-center justify-center">
            <span className="font-mono text-muted-foreground text-lg">
              {"// "}
            </span>
            <motion.span
              key={titleIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="font-mono text-primary text-lg glow-text"
            >
              {titles[titleIndex]}
            </motion.span>
            <span className="w-0.5 h-5 bg-primary ml-1 animate-blink border-r-2 border-primary" />
          </div>

          <p className="font-body text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
            "Breaking, Building, Securing — One packet at a time."
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="neon" size="lg" asChild>
              <a href="#projects">
                <ArrowDown className="mr-2 h-4 w-4" />
                View Projects
              </a>
            </Button>
            <Button variant="neon-outline" size="lg" asChild>
              <a href="#blog">
                <BookOpen className="mr-2 h-4 w-4" />
                Read Blog
              </a>
            </Button>
            <Button variant="neon-outline" size="lg" asChild>
              <a href="#contact">
                <FileText className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown className="h-5 w-5 text-primary/50" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
