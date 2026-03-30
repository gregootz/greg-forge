import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "NetRecon Toolkit",
    description: "Automated network reconnaissance framework for red team engagements. Performs subdomain enumeration, port scanning, and service fingerprinting.",
    tech: ["Python", "Nmap", "Shodan API", "SQLite"],
  },
  {
    title: "SecureVault Web App",
    description: "Encrypted password manager with zero-knowledge architecture, built with a security-first development approach.",
    tech: ["React", "Node.js", "AES-256", "PostgreSQL"],
  },
  {
    title: "PacketForge",
    description: "Custom packet crafting and analysis tool for network security testing and protocol fuzzing.",
    tech: ["Python", "Scapy", "Wireshark", "Docker"],
  },
  {
    title: "CTF Platform",
    description: "Self-hosted Capture The Flag platform with challenge management, scoring engine, and real-time leaderboard.",
    tech: ["Django", "Redis", "Docker", "WebSockets"],
  },
  {
    title: "Heptacorenet Dashboard",
    description: "Internal security operations dashboard for monitoring threat intelligence feeds, vulnerability scans, and incident response workflows.",
    tech: ["React", "TypeScript", "Grafana", "REST API"],
  },
  {
    title: "PhishGuard",
    description: "Automated phishing simulation and awareness training platform for enterprise security programs.",
    tech: ["Python", "Flask", "SMTP", "JavaScript"],
  },
];

const ProjectsSection = () => {
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
          <div className="w-20 h-0.5 bg-primary mb-10 glow-primary" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
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
