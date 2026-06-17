"use client";

import { motion } from "framer-motion";
import { Code2, Layout, Server, Database, Brain, Cpu, Wrench, Rocket } from "lucide-react";
import { skillCategories } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Layout,
  Server,
  Database,
  Brain,
  Cpu,
  Wrench,
  Rocket,
};

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Skills"
          title="Technical Expertise"
          subtitle="A comprehensive stack built through real-world projects and internships."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-12"
        >
          {skillCategories.map((category) => {
            const Icon = iconMap[category.icon] || Code2;
            const isLearning = category.title === "Currently Learning";
            return (
              <motion.div
                key={category.title}
                variants={fadeInUp}
                className={`group p-5 rounded-xl border transition-all duration-300 ${
                  isLearning
                    ? "border-violet-500/30 bg-violet-500/5 hover:border-violet-500/50 hover:bg-violet-500/10"
                    : "border-border bg-background hover:border-blue-500/40"
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg shrink-0 transition-colors ${
                    isLearning
                      ? "bg-violet-500/15 group-hover:bg-violet-500/25"
                      : "bg-blue-500/10 group-hover:bg-blue-500/20"
                  }`}>
                    <Icon size={16} className={isLearning ? "text-violet-500" : "text-blue-500"} />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <h3 className="text-sm font-semibold text-foreground leading-tight">
                      {category.title}
                    </h3>
                    {isLearning && (
                      <span className="text-[10px] text-violet-500 font-medium">In Progress</span>
                    )}
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-2 py-1 text-xs rounded-md border transition-colors duration-150 ${
                        isLearning
                          ? "bg-violet-500/10 text-violet-400 border-violet-500/20 hover:text-violet-300"
                          : "bg-muted text-muted-foreground border-border/50 hover:text-foreground hover:border-border"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
