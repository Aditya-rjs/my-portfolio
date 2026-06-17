import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Mail } from "lucide-react";
import { siteConfig } from "@/lib/data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="flex flex-col items-center gap-5 sm:flex-row sm:justify-between">

          {/* Brand */}
          <div className="flex flex-col items-center sm:items-start gap-1">
            <span className="font-semibold text-foreground">
              <span className="text-blue-500">A</span>ditya Raj Singh
              <span className="text-blue-500">.</span>
            </span>
            <p className="text-xs text-muted-foreground">
              Aspiring Software Engineer · Full Stack Developer
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-all duration-200"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-all duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="p-2.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-all duration-200"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground text-center sm:text-right">
            © {currentYear} Aditya Raj Singh · Deployed on{" "}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground hover:text-blue-500 transition-colors duration-200"
            >
              Vercel
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
