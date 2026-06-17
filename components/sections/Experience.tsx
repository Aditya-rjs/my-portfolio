"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { experiences } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Experience"
          title="Work Experience"
          subtitle="Internships where I built real products and shipped real code."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 relative"
        >
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden sm:block" />

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="relative sm:pl-20">
                {/* Timeline dot */}
                <div className="absolute left-8 top-5 -translate-x-1/2 hidden sm:block">
                  <div className="w-3 h-3 rounded-full bg-blue-500 border-2 border-background shadow-sm" />
                </div>

                <div className="group p-6 rounded-xl border border-border bg-card hover:border-blue-500/30 transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Briefcase size={14} className="text-blue-500" />
                        <h3 className="font-semibold text-foreground">{exp.role}</h3>
                      </div>
                      <p className="text-sm font-semibold text-blue-500">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground flex-wrap">
                      <Calendar size={12} />
                      <span>{exp.duration}</span>
                      <span className="ml-1 px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-500 font-medium">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.highlights.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500/60 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
