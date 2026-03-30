import { motion } from "framer-motion";
import { Shield, Code, Flag, Network, Palette, Search } from "lucide-react";

const categories = [
  {
    icon: Shield,
    title: "Cybersecurity",
    skills: ["Red Teaming", "Penetration Testing", "Exploit Development", "OSINT", "Malware Analysis", "Incident Response", "SIEM & SOC Tools"],
  },
  {
    icon: Code,
    title: "Web Development",
    skills: ["HTML / CSS / JavaScript", "PHP / Python", "Node.js", "Laravel / Django", "API Development", "React / TypeScript", "Secure Coding"],
  },
  {
    icon: Flag,
    title: "CTF",
    skills: ["Reverse Engineering", "Forensics", "Cryptography", "Web Exploitation", "Pwn / Binary", "OSINT Challenges", "Steganography"],
  },
  {
    icon: Network,
    title: "Network Engineering",
    skills: ["Network Security", "Routing & Switching", "Firewalls & IDS/IPS", "Wireshark & Packet Analysis", "Network Automation", "VPN & Tunneling", "Cloud Networking"],
  },
  {
    icon: Palette,
    title: "Graphics Design",
    skills: ["Adobe Photoshop", "Adobe Illustrator", "Figma / UI Design", "Branding & Identity", "Social Media Graphics", "Print & Digital Media", "Motion Graphics"],
  },
  {
    icon: Search,
    title: "Digital Forensics",
    skills: ["Disk & Memory Forensics", "Evidence Acquisition", "Chain of Custody", "Log Analysis", "File Carving", "Timeline Analysis", "Forensic Reporting"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2 text-foreground">
            <span className="text-primary">&gt;</span> Skills
          </h2>
          <div className="w-20 h-0.5 bg-primary mb-10 glow-primary" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass-card rounded-lg p-6 hover:border-primary/30 transition-all group"
              >
                <div className="flex items-center gap-3 mb-5">
                  <cat.icon className="h-6 w-6 text-primary group-hover:drop-shadow-[0_0_8px_hsl(var(--primary)/0.5)] transition-all" />
                  <h3 className="font-heading text-sm font-bold text-foreground tracking-wide">{cat.title}</h3>
                </div>
                <ul className="space-y-2.5">
                  {cat.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2 text-sm text-muted-foreground font-body">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
