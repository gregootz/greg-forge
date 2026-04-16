import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Shield,
  Sun,
  Moon,
  Home,
  User,
  Wrench,
  FolderKanban,
  BookOpen,
  Flag,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";

const navLinks = [
  { label: "Home", href: "#home", icon: Home },
  { label: "About", href: "#about", icon: User },
  { label: "Skills", href: "#skills", icon: Wrench },
  { label: "Projects", href: "#projects", icon: FolderKanban },
  { label: "Blog", href: "#blog", icon: BookOpen },
  { label: "CTF Writeups", href: "#ctf", icon: Flag },
  { label: "Contact", href: "#contact", icon: Mail },
];

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-card border-b border-border/50" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <Shield className="h-7 w-7 text-primary transition-all group-hover:drop-shadow-[0_0_8px_hsl(var(--primary)/0.6)]" />
          <span className="font-heading font-bold text-lg text-foreground">
            G<span className="text-primary">M</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.href}
                href={link.href}
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-body text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon className="h-4 w-4" />
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="text-foreground"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-foreground"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            {isMobileOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {isMobileOpen && (
        <div className="md:hidden glass-card border-t border-border/50 animate-fade-in-up">
          <nav className="flex flex-col p-4 gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2.5 px-4 py-3 text-sm font-body text-muted-foreground hover:text-primary hover:bg-secondary/50 rounded-md transition-colors"
                  onClick={() => setIsMobileOpen(false)}
                >
                  <Icon className="h-4 w-4" />
                  {link.label}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
