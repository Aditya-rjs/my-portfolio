"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Mail, ArrowRight, Download, ChevronDown } from "lucide-react";
import { siteConfig } from "@/lib/data";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 },
  },
};

export function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #6366f1 1px, transparent 1px), linear-gradient(to bottom, #6366f1 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      {/* Radial gradient glow */}
      <div className="absolute -z-10 top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-blue-500/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ── Left: Text Content ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            {/* Status badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium rounded-full border border-green-500/30 bg-green-500/10 text-green-600 dark:text-green-400">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                Open to Opportunities · Graduating 2026
              </span>
            </motion.div>

            {/* Name & Title */}
            <motion.div variants={itemVariants} className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
                Aditya Raj
                <br />
                <span className="text-blue-500">Singh</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground font-medium">
                Aspiring Software Engineer • Full Stack Developer • AI Enthusiast
              </p>
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="text-base text-muted-foreground leading-relaxed max-w-lg"
            >
              {siteConfig.tagline} Final-year CSE student at LNJPIT Chapra, passionate about
              building products that make an impact.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
              <button
                onClick={() => scrollTo("projects")}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition-all duration-200 shadow-sm hover:shadow-blue-500/25 hover:shadow-md"
              >
                View Projects
                <ArrowRight size={14} />
              </button>
              <a
                href={siteConfig.resumeFile}
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg border border-border bg-background hover:bg-accent text-foreground transition-all duration-200"
              >
                <Download size={14} />
                Download Resume
              </a>
              <button
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-all duration-200"
              >
                Contact Me
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 pt-2">
              <span className="text-xs text-muted-foreground">Find me on</span>
              <div className="flex items-center gap-2">
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md border border-border text-muted-foreground hover:text-foreground hover:bg-accent hover:border-border/80 transition-all duration-200"
                  aria-label="GitHub"
                >
                  <FaGithub size={16} />
                </a>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md border border-border text-muted-foreground hover:text-foreground hover:bg-accent transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn size={16} />
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="p-2 rounded-md border border-border text-muted-foreground hover:text-foreground hover:bg-accent transition-all duration-200"
                  aria-label="Email"
                >
                  <Mail size={16} />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right: Profile Image ── */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative glow ring */}
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-500/10 blur-xl -z-10" />
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border border-border/50 shadow-2xl bg-muted">
                <Image
                  src="/images/profile.jpg"
                  alt="Aditya Raj Singh — Software Engineer"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-background border border-border rounded-xl px-4 py-2.5 shadow-lg">
                <p className="text-xs font-semibold text-foreground">B.Tech CSE</p>
                <p className="text-xs text-muted-foreground">LNJPIT Chapra · 2026</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex justify-center mt-16"
        >
          <button
            onClick={() => scrollTo("about")}
            className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors duration-200"
            aria-label="Scroll to About"
          >
            <span className="text-xs">Scroll</span>
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown size={16} />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
