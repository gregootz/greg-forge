import { motion } from "framer-motion";
import { Calendar, Tag, ArrowRight } from "lucide-react";

const posts = [
  {
    title: "Bypassing WAFs: A Red Teamer's Perspective",
    date: "2025-03-15",
    category: "Security Research",
    excerpt: "Exploring advanced techniques for evading web application firewalls during penetration testing engagements...",
  },
  {
    title: "Building Secure APIs with Node.js",
    date: "2025-02-28",
    category: "Web Development",
    excerpt: "Best practices for implementing authentication, rate limiting, and input validation in modern REST APIs...",
  },
  {
    title: "HackTheBox: Pandora Writeup",
    date: "2025-02-10",
    category: "CTF Writeups",
    excerpt: "Step-by-step walkthrough of the Pandora machine, covering SNMP enumeration, path hijacking, and privilege escalation...",
  },
  {
    title: "Network Segmentation for SMBs",
    date: "2025-01-20",
    category: "Network Engineering",
    excerpt: "Practical guide to implementing VLAN segmentation and micro-segmentation in small-to-medium business environments...",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-24 relative">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2 text-foreground">
            <span className="text-primary">&gt;</span> Blog
          </h2>
          <div className="w-20 h-0.5 bg-primary mb-10 glow-primary" />

          <div className="grid md:grid-cols-2 gap-6">
            {posts.map((post, i) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass-card rounded-lg p-6 hover:border-primary/30 transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-4 text-xs text-muted-foreground font-mono mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1 text-primary">
                    <Tag className="h-3.5 w-3.5" />
                    {post.category}
                  </span>
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground font-body mb-4">{post.excerpt}</p>
                <span className="flex items-center gap-1 text-sm text-primary font-mono group-hover:gap-2 transition-all">
                  Read more <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
