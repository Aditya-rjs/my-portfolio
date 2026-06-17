"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { ExternalLink, ChevronDown, Star, Construction } from "lucide-react";
import { projects } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export function Projects() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="projects" className="py-16 sm:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Projects"
          title="Featured Work"
          subtitle="Production-grade projects built with modern tech stacks."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-10 sm:mt-12 space-y-5 sm:space-y-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              className="group rounded-2xl border border-border bg-background overflow-hidden hover:border-blue-500/30 transition-all duration-300"
            >
              {/* Stack vertically on mobile, side-by-side on lg+ */}
              <div className="flex flex-col lg:grid lg:grid-cols-5">
                {/* Project Image */}
                <div className="lg:col-span-2 relative h-44 sm:h-52 lg:h-auto overflow-hidden bg-muted">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  {project.featured && (
                    <div className="absolute top-3 left-3 flex items-center gap-1 px-2 py-1 rounded-full bg-background/90 backdrop-blur-sm border border-border text-xs font-medium text-yellow-500">
                      <Star size={10} className="fill-yellow-500" />
                      Featured
                    </div>
                  )}
                  {project.liveStatus === "under-development" && (
                    <div className="absolute bottom-3 left-3 flex items-center gap-1 px-2 py-1 rounded-full bg-orange-500/90 backdrop-blur-sm text-xs font-medium text-white">
                      <Construction size={10} />
                      In Development
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="lg:col-span-3 p-4 sm:p-6 flex flex-col gap-3 sm:gap-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1.5">{project.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {project.shortDescription}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs rounded-md bg-muted text-muted-foreground border border-border/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-auto">
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-border bg-background hover:bg-accent text-foreground transition-all duration-200"
                      >
                        <FaGithub size={13} />
                        GitHub
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-border/40 text-muted-foreground cursor-not-allowed">
                        <FaGithub size={13} />
                        GitHub (Soon)
                      </span>
                    )}

                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition-all duration-200"
                      >
                        <ExternalLink size={13} />
                        Live Demo
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-orange-500/30 text-orange-500 bg-orange-500/5">
                        <Construction size={13} />
                        In Dev
                      </span>
                    )}

                    <button
                      onClick={() =>
                        setExpandedId(expandedId === project.id ? null : project.id)
                      }
                      className="ml-auto inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors duration-200 touch-manipulation"
                    >
                      {expandedId === project.id ? "Less" : "Details"}
                      <motion.div
                        animate={{ rotate: expandedId === project.id ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown size={13} />
                      </motion.div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Expandable Detail Panel */}
              <AnimatePresence>
                {expandedId === project.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 sm:px-6 pb-5 sm:pb-6 border-t border-border">
                      <div className="pt-4 sm:pt-5 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-2 sm:mb-3">
                            Project Overview
                          </h4>
                          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                            {project.description}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-2 sm:mb-3">
                            Key Features
                          </h4>
                          <ul className="space-y-2">
                            {project.features.map((feat, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground"
                              >
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500/70 shrink-0" />
                                {feat}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
