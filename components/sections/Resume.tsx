"use client";

import { motion } from "framer-motion";
import { Download, Briefcase, FolderOpen, Users, GraduationCap } from "lucide-react";
import { resumeStats, siteConfig } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const iconMap: Record<string, React.ElementType> = {
  Briefcase,
  FolderOpen,
  Users,
  GraduationCap,
};

export function Resume() {
  return (
    <section id="resume" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Resume"
          title="Curriculum Vitae"
          subtitle="A snapshot of my academic, professional, and technical journey."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 space-y-8"
        >
          {/* Stats grid */}
          <motion.div variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {resumeStats.map((stat) => {
              const Icon = iconMap[stat.icon] || Briefcase;
              return (
                <div
                  key={stat.label}
                  className="flex flex-col items-center gap-2 p-5 rounded-xl border border-border bg-card text-center"
                >
                  <div className="p-2 rounded-lg bg-blue-500/10">
                    <Icon size={18} className="text-blue-500" />
                  </div>
                  <span className="text-2xl font-bold text-foreground">{stat.value}</span>
                  <span className="text-xs text-muted-foreground">{stat.label}</span>
                </div>
              );
            })}
          </motion.div>

          {/* Download CTA card */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-2xl border border-blue-500/20 bg-blue-500/5"
          >
            <div>
              <h3 className="text-xl font-bold text-foreground mb-1">
                Aditya Raj Singh — Resume
              </h3>
              <p className="text-sm text-muted-foreground max-w-md">
                Full resume covering education, internships, projects, leadership, and technical
                skills. ATS-friendly PDF format, updated 2026.
              </p>
              <div className="flex flex-wrap gap-4 mt-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Briefcase size={12} className="text-blue-500" />
                  2 Internships
                </span>
                <span className="flex items-center gap-1">
                  <FolderOpen size={12} className="text-blue-500" />
                  2+ Projects
                </span>
                <span className="flex items-center gap-1">
                  <Users size={12} className="text-blue-500" />
                  Leadership Roles
                </span>
                <span className="flex items-center gap-1">
                  <GraduationCap size={12} className="text-blue-500" />
                  B.Tech CSE 2026
                </span>
              </div>
            </div>
            <a
              href={siteConfig.resumeFile}
              download
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl bg-blue-500 hover:bg-blue-600 text-white transition-all duration-200 shadow-md hover:shadow-blue-500/25 hover:shadow-lg"
            >
              <Download size={16} />
              Download PDF
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
