import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Shield, Code, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";

type Category = "all" | "cybersecurity" | "web" | "design";

const projects = [
  {
    title: "NetRecon Toolkit",
    description: "Automated network reconnaissance framework for red team engagements. Performs subdomain enumeration, port scanning, and service fingerprinting.",
    tech: ["Python", "Nmap", "Shodan API", "SQLite"],
    category: "cybersecurity" as Category,
  },
  {
    title: "SecureVault Web App",
    description: "Encrypted password manager with zero-knowledge architecture, built with a security-first development approach.",
    tech: ["React", "Node.js", "AES-256", "PostgreSQL"],
    category: "web" as Category,
  },
  {
    title: "PacketForge",
    description: "Custom packet crafting and analysis tool for network security testing and protocol fuzzing.",
    tech: ["Python", "Scapy", "Wireshark", "Docker"],
    category: "cybersecurity" as Category,
  },
  {
    title: "CTF Platform",
    description: "Self-hosted Capture The Flag platform with challenge management, scoring engine, and real-time leaderboard.",
    tech: ["Django", "Redis", "Docker", "WebSockets"],
    category: "web" as Category,
  },
  {
    title: "Heptacorenet Dashboard",
    description: "Internal security operations dashboard for monitoring threat intelligence feeds, vulnerability scans, and incident response workflows.",
    tech: ["React", "TypeScript", "Grafana", "REST API"],
    category: "web" as Category,
  },
  {
    title: "PhishGuard",
    description: "Automated phishing simulation and awareness training platform for enterprise security programs.",
    tech: ["Python", "Flask", "SMTP", "JavaScript"],
    category: "cybersecurity" as Category,
  },
  {
    title: "Heptacorenet Brand Identity",
    description: "Complete brand identity design including logo, color system, typography, business cards, and social media templates.",
    tech: ["Photoshop", "Illustrator", "Figma", "After Effects"],
    category: "design" as Category,
  },
  {
    title: "CyberCon Event Graphics",
    description: "Full visual package for cybersecurity conference — banners, badges, stage backdrops, and promotional materials.",
    tech: ["Illustrator", "Photoshop", "InDesign", "Canva"],
    category: "design" as Category,
  },
];

const filters: { label: string; value: Category; icon: typeof Shield }[] = [
  { label: "All", value: "all", icon: Code },
  { label: "Cybersecurity", value: "cybersecurity", icon: Shield },
  { label: "Web Development", value: "web", icon: Code },
  { label: "Graphics Design", value: "design", icon: Palette },
];

const ProjectsSection = () => {
  const [active, setActive] = useState<Category>("all");

  const filtered = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2 text-foreground">
            <span className="text-primary">&gt;</span> Projects
          </h2>
          <div className="w-20 h-0.5 bg-primary mb-8 glow-primary" />

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActive(f.value)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-sm transition-all border ${
                  active === f.value
                    ? "bg-primary/10 border-primary/40 text-primary glow-primary"
                    : "glass-card border-border/50 text-muted-foreground hover:border-primary/20 hover:text-foreground"
                }`}
              >
                <f.icon className="h-4 w-4" />
                {f.label}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                layout
                className="glass-card rounded-lg p-6 flex flex-col hover:border-primary/30 transition-all group"
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <div className="w-2 h-2 rounded-full bg-neon-purple" />
                  <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mt-3 mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground font-body mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2 py-1 rounded bg-secondary text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button variant="neon-outline" size="sm" className="flex-1">
                    <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                    Demo
                  </Button>
                  <Button variant="ghost" size="sm" className="flex-1 text-muted-foreground hover:text-foreground">
                    <Github className="mr-1.5 h-3.5 w-3.5" />
                    Source
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;