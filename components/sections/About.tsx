"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code2, Cpu, Brain, Target } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const highlights = [
  { icon: Code2, label: "Full Stack Development", desc: "React, Node.js, Express, MongoDB" },
  { icon: Brain, label: "Machine Learning & AI", desc: "XGBoost, SHAP, Scikit-learn" },
  { icon: Cpu, label: "Software Engineering", desc: "DSA, OOP, System Design" },
  { icon: Target, label: "Problem Solving", desc: "Algorithms, Data Structures" },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="About"
          title="Who I Am"
          subtitle="A software engineering student who ships real products."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-12"
        >
          {/* Left: Bio */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m a final-year Computer Science Engineering student at{" "}
                <span className="text-foreground font-medium">
                  Loknayak Jai Prakash Institute of Technology (LNJPIT), Chapra
                </span>
                , graduating in 2026. My focus spans full-stack web development, frontend
                engineering, machine learning, and building AI-powered solutions.
              </p>
              <p>
                I&apos;ve completed two internships — at{" "}
                <span className="text-foreground font-medium">Polytropic Services</span> as a
                Frontend Developer and at{" "}
                <span className="text-foreground font-medium">Invigo Infotech</span> as a Web
                Development intern — where I built production-grade React applications and
                responsive UIs.
              </p>
              <p>
                Beyond code, I serve as a{" "}
                <span className="text-foreground font-medium">Training & Placement Coordinator</span>{" "}
                at my college and have organized large-scale inter-college events, building
                leadership and communication skills alongside my technical growth.
              </p>
            </div>

            {/* Career objective */}
            <div className="p-4 rounded-xl border border-blue-500/20 bg-blue-500/5">
              <p className="text-xs font-semibold text-blue-500 uppercase tracking-wide mb-1.5">
                Career Objective
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Seeking Software Engineer and Full Stack Development opportunities to apply
                technical expertise, problem-solving abilities, and development experience in
                building scalable, impactful software solutions at product-based companies.
              </p>
            </div>

            {/* Education card */}
            <div className="flex items-start gap-4 p-4 rounded-xl border border-border bg-card">
              <div className="p-2 rounded-lg bg-blue-500/10 shrink-0">
                <GraduationCap size={20} className="text-blue-500" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">{siteConfig.degree}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{siteConfig.college}</p>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-xs text-muted-foreground">
                    2022 – {siteConfig.graduationYear}
                  </span>
                  <span className="text-xs font-semibold text-green-600 dark:text-green-400 bg-green-500/10 px-2 py-0.5 rounded-full">
                    CGPA: {siteConfig.cgpa}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Highlight cards */}
          <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map(({ icon: Icon, label, desc }) => (
              <div
                key={label}
                className="group p-5 rounded-xl border border-border bg-card hover:border-blue-500/40 hover:bg-blue-500/5 transition-all duration-300"
              >
                <div className="p-2 rounded-lg bg-blue-500/10 w-fit mb-3 group-hover:bg-blue-500/20 transition-colors">
                  <Icon size={18} className="text-blue-500" />
                </div>
                <p className="font-semibold text-sm text-foreground">{label}</p>
                <p className="text-xs text-muted-foreground mt-1">{desc}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
