"use client";

import { motion } from "framer-motion";
import { Users, Calendar } from "lucide-react";
import { leadershipRoles } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const iconMap: Record<string, React.ElementType> = {
  Users,
  Calendar,
};

export function Leadership() {
  return (
    <section id="leadership" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Leadership"
          title="Leadership & Activities"
          subtitle="Demonstrating impact beyond code through organization and teamwork."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {leadershipRoles.map((role) => {
            const Icon = iconMap[role.icon] || Users;
            return (
              <motion.div
                key={role.title}
                variants={fadeInUp}
                className="group p-6 rounded-xl border border-border bg-card hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2.5 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors shrink-0">
                    <Icon size={18} className="text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{role.title}</h3>
                    <p className="text-sm font-medium text-blue-500">{role.organization}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {role.highlights.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500/60 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
