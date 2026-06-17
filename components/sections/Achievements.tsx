"use client";

import { motion } from "framer-motion";
import { Trophy, Award } from "lucide-react";
import { achievements } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Trophy,
  Award,
};

export function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Achievements"
          title="Awards & Recognition"
          subtitle="Milestones that reflect both technical and personal excellence."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {achievements.map((achievement) => {
            const Icon = iconMap[achievement.icon] || Trophy;
            return (
              <motion.div
                key={achievement.title}
                variants={fadeInUp}
                className={cn(
                  "group relative p-6 rounded-xl border overflow-hidden transition-all duration-300 hover:scale-[1.01]",
                  achievement.borderColor,
                  "bg-background"
                )}
              >
                {/* Hover gradient overlay */}
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                    achievement.color
                  )}
                />
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-3">
                    <div
                      className={cn(
                        "p-3 rounded-xl bg-gradient-to-br",
                        achievement.color,
                        "border",
                        achievement.borderColor
                      )}
                    >
                      <Icon size={22} className="text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">{achievement.title}</h3>
                      <p className="text-xs font-medium text-muted-foreground mt-0.5">
                        {achievement.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
