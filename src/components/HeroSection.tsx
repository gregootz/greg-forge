import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, FileText, BookOpen, Shield, Code, Network, Trophy, Palette, Search } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const titles = [
  "Red Teamer",
  "Web Developer",
  "CTF Player",
  "Network Engineer",
  "Graphics Designer",
  "Digital Forensics Analyst",
  "CEO — Heptacorenet Technologies",
];

const highlights = [
  { icon: Shield, label: "Red Teaming", detail: "Attack surface enumeration & exploit dev" },
  { icon: Code, label: "Web Development", detail: "Full-stack applications & secure coding" },
  { icon: Network, label: "Network Engineering", detail: "Architecture, firewalls & automation" },
  { icon: Trophy, label: "CTF Competitor", detail: "Web exploitation, crypto & reverse engineering" },
  { icon: Palette, label: "Graphics Design", detail: "Branding, UI/UX & visual storytelling" },
  { icon: Search, label: "Digital Forensics", detail: "Evidence analysis, incident investigation" },
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
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0">
        <img src={profileImg} alt="" className="w-full h-full object-cover object-top" />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/50" />
      </div>
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute inset-0 scanline pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 pt-28 pb-16 flex flex-col min-h-screen">
        {/* Top Hero */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full flex flex-col items-center text-center">
            {/* Profile + Name row */}
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 mb-6">
              {/* Profile Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative shrink-0"
              >
                <div className="w-40 h-40 md:w-52 md:h-52 rounded-2xl overflow-hidden border-2 border-primary/30 glow-primary">
                  <img
                    src={profileImg}
                    alt="Gregory George Machiwa"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute -inset-2 rounded-2xl bg-primary/10 blur-2xl -z-10" />
                {/* Status badge */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute -bottom-3 -right-3 glass-card rounded-full px-3 py-1.5 border border-primary/30"
                >
                  <span className="flex items-center gap-1.5 text-xs font-mono">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-primary">Available</span>
                  </span>
                </motion.div>
              </motion.div>

              {/* Name + title */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center md:text-left"
              >
                <p className="font-mono text-primary text-sm mb-3 tracking-widest uppercase">
                  &gt; initializing portfolio...
                </p>
                <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2">
                  <span className="text-foreground">Gregory George</span>
                  <br />
                  <span className="text-gradient-primary">Machiwa</span>
                </h1>
              </motion.div>
            </div>

            {/* Rotating title + tagline + buttons */}
            <div className="h-8 mb-6 flex items-center justify-center">
              <span className="font-mono text-muted-foreground text-lg">{"// "}</span>
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

            <p className="font-body text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8">
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
          </div>
        </div>

        {/* About / Highlights Strip */}
        <motion.div
          id="about"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12"
        >
          <div className="glass-card rounded-xl p-6 md:p-8 border border-border/50">
            <div className="grid md:grid-cols-[1fr_auto] gap-8 items-start mb-8">
              <div className="space-y-4">
                <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground">
                  <span className="text-primary">&gt;</span> whoami
                </h2>
                <p className="text-muted-foreground leading-relaxed font-body text-sm md:text-base">
                  I'm <span className="text-foreground font-semibold">Gregory George Machiwa</span>, a
                  cybersecurity professional and the <span className="text-primary">CEO of Heptacorenet Technologies</span>.
                  My expertise spans red team operations, where I simulate advanced adversary tactics to
                  identify vulnerabilities before malicious actors do.
                </p>
                <p className="text-muted-foreground leading-relaxed font-body text-sm md:text-base">
                  Beyond offensive security, I build modern web applications with a security-first mindset,
                  compete in Capture The Flag competitions to sharpen my skills, and design robust network
                  infrastructures. I believe that understanding how systems break is the key to building
                  systems that don't.
                </p>
                <p className="text-muted-foreground leading-relaxed font-body text-sm md:text-base">
                  At Heptacorenet Technologies, I lead a team focused on delivering cutting-edge
                  cybersecurity solutions, penetration testing services, and secure software development
                  to organizations across East Africa and beyond.
                </p>
              </div>

              {/* Quick stats */}
              <div className="flex md:flex-col gap-4 md:gap-3 justify-center text-center">
                {[
                  { value: "5+", label: "Years Exp" },
                  { value: "20+", label: "Projects" },
                  { value: "50+", label: "CTFs" },
                ].map((stat) => (
                  <div key={stat.label} className="glass-card rounded-lg px-4 py-3 border border-primary/20">
                    <div className="font-heading text-2xl font-bold text-primary glow-text">{stat.value}</div>
                    <div className="text-xs text-muted-foreground font-mono">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlight Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                  className="glass-card rounded-lg p-4 hover:border-primary/30 transition-colors group cursor-default"
                >
                  <item.icon className="h-7 w-7 text-primary mb-2 group-hover:drop-shadow-[0_0_8px_hsl(var(--primary)/0.5)] transition-all" />
                  <h3 className="font-heading text-xs md:text-sm font-semibold text-foreground mb-1">{item.label}</h3>
                  <p className="text-[11px] md:text-xs text-muted-foreground font-body leading-snug">{item.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown className="h-5 w-5 text-primary/50" />
      </motion.div>
    </section>
  );
};

export default HeroSection;