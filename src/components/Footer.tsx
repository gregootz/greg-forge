import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-primary" />
          <span className="font-heading text-sm text-muted-foreground">
            © {new Date().getFullYear()} Gregory George Machiwa
          </span>
        </div>
        <p className="text-xs text-muted-foreground font-mono">
          Built with precision. Secured by design.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
