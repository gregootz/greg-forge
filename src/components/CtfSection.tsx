import { motion } from "framer-motion";
import { Flag, Star } from "lucide-react";

const writeups = [
  { name: "CryptoVault", category: "Crypto", difficulty: 3, summary: "RSA padding oracle attack to recover encrypted flag from a vulnerable vault service." },
  { name: "SQLi Fortress", category: "Web", difficulty: 2, summary: "Blind SQL injection with time-based extraction on a hardened login portal." },
  { name: "StackSmash", category: "Pwn", difficulty: 4, summary: "Buffer overflow exploitation with ROP chain to bypass NX and ASLR protections." },
  { name: "Hidden Pixels", category: "Forensics", difficulty: 2, summary: "LSB steganography extraction from a PNG image using custom Python tooling." },
  { name: "Ghost Recon", category: "OSINT", difficulty: 1, summary: "Multi-source intelligence gathering to identify a target from minimal public traces." },
  { name: "MalDropper", category: "Reverse Engineering", difficulty: 5, summary: "Unpacking and analyzing a multi-stage malware dropper with anti-debug techniques." },
];

const difficultyColor = (d: number) => {
  if (d <= 2) return "text-green-400";
  if (d <= 3) return "text-yellow-400";
  return "text-red-400";
};

const CtfSection = () => {
  return (
    <section id="ctf" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2 text-foreground">
            <span className="text-primary">&gt;</span> CTF Writeups
          </h2>
          <div className="w-20 h-0.5 bg-primary mb-10 glow-primary" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {writeups.map((w, i) => (
              <motion.div
                key={w.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="glass-card rounded-lg p-5 hover:border-primary/30 transition-all cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono px-2 py-1 rounded bg-secondary text-primary">
                    {w.category}
                  </span>
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, si) => (
                      <Star
                        key={si}
                        className={`h-3 w-3 ${si < w.difficulty ? difficultyColor(w.difficulty) : "text-muted-foreground/20"}`}
                        fill={si < w.difficulty ? "currentColor" : "none"}
                      />
                    ))}
                  </div>
                </div>
                <h3 className="font-heading text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                  <Flag className="h-4 w-4 text-primary" />
                  {w.name}
                </h3>
                <p className="text-sm text-muted-foreground font-body">{w.summary}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtfSection;
