import { motion } from "framer-motion";
import { Shield, Code, Network, Trophy } from "lucide-react";

const highlights = [
  { icon: Shield, label: "Red Teaming", detail: "Attack surface enumeration & exploit dev" },
  { icon: Code, label: "Web Development", detail: "Full-stack applications & secure coding" },
  { icon: Network, label: "Network Engineering", detail: "Architecture, firewalls & automation" },
  { icon: Trophy, label: "CTF Competitor", detail: "Web exploitation, crypto & reverse engineering" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2 text-foreground">
            <span className="text-primary">&gt;</span> About Me
          </h2>
          <div className="w-20 h-0.5 bg-primary mb-10 glow-primary" />

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-5">
              <p className="text-muted-foreground leading-relaxed font-body">
                I'm <span className="text-foreground font-semibold">Gregory George Machiwa</span>, a
                cybersecurity professional and the <span className="text-primary">CEO of Heptacorenet Technologies</span>.
                My expertise spans red team operations, where I simulate advanced adversary tactics to
                identify vulnerabilities before malicious actors do.
              </p>
              <p className="text-muted-foreground leading-relaxed font-body">
                Beyond offensive security, I build modern web applications with a security-first mindset,
                compete in Capture The Flag competitions to sharpen my skills, and design robust network
                infrastructures. I believe that understanding how systems break is the key to building
                systems that don't.
              </p>
              <p className="text-muted-foreground leading-relaxed font-body">
                At Heptacorenet Technologies, I lead a team focused on delivering cutting-edge
                cybersecurity solutions, penetration testing services, and secure software development
                to organizations across East Africa and beyond.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="glass-card rounded-lg p-5 hover:border-primary/30 transition-colors group"
                >
                  <item.icon className="h-8 w-8 text-primary mb-3 group-hover:drop-shadow-[0_0_8px_hsl(var(--primary)/0.5)] transition-all" />
                  <h3 className="font-heading text-sm font-semibold text-foreground mb-1">{item.label}</h3>
                  <p className="text-xs text-muted-foreground font-body">{item.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
