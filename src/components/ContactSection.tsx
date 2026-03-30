import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com/" },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2 text-foreground">
            <span className="text-primary">&gt;</span> Contact
          </h2>
          <div className="w-20 h-0.5 bg-primary mb-10 glow-primary" />

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl">
            <div className="space-y-6">
              <p className="text-muted-foreground font-body">
                Have a project in mind, need a pentest, or just want to say hello? Reach out and I'll get back to you.
              </p>

              <a
                href="mailto:gregory@heptacorenet.tech"
                className="flex items-center gap-3 text-primary font-mono text-sm hover:glow-text transition-all"
              >
                <Mail className="h-5 w-5" />
                gregory@heptacorenet.tech
              </a>

              <div className="flex gap-4 pt-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card p-3 rounded-lg hover:border-primary/30 transition-all group"
                    aria-label={s.label}
                  >
                    <s.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <textarea
                name="message"
                rows={4}
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
              />
              <Button variant="neon" size="lg" className="w-full">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
