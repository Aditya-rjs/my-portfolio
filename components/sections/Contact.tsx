"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Mail,
  Phone,
  Send,
  CheckCircle2,
  AlertCircle,
  MapPin,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { siteConfig } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(4, "Subject must be at least 4 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;
type SubmitStatus = "idle" | "loading" | "success" | "error";

const contactItems = [
  { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: Phone, label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
  { icon: MapPin, label: "Location", value: siteConfig.location, href: null },
];

export function Contact() {
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitStatus("success");
        reset();
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus("idle"), 4000);
      }
    } catch {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Contact"
          title="Get In Touch"
          subtitle="Open to internship offers, full-time roles, and collaboration opportunities."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-10"
        >
          {/* Left: Contact info */}
          <motion.div variants={fadeInUp} className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="font-semibold text-foreground mb-1">Let&apos;s Connect</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Whether you&apos;re a recruiter, fellow developer, or collaborator — feel free to
                reach out. I respond within 24 hours.
              </p>
            </div>

            <div className="space-y-3">
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-500/10 shrink-0">
                    <Icon size={15} className="text-blue-500" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm text-foreground hover:text-blue-500 transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm text-foreground">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground mb-3">Find me on</p>
              <div className="flex gap-3">
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 text-xs font-medium rounded-lg border border-border hover:bg-accent text-muted-foreground hover:text-foreground transition-all duration-200"
                >
                  <FaGithub size={14} />
                  GitHub
                </a>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 text-xs font-medium rounded-lg border border-border hover:bg-accent text-muted-foreground hover:text-foreground transition-all duration-200"
                >
                  <FaLinkedinIn size={14} />
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div variants={fadeInUp} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="space-y-4 p-6 rounded-2xl border border-border bg-background"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium text-foreground mb-1.5"
                  >
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    {...register("name")}
                    className="w-full px-3 py-2.5 text-sm rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-200"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium text-foreground mb-1.5"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    {...register("email")}
                    className="w-full px-3 py-2.5 text-sm rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-200"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs font-medium text-foreground mb-1.5"
                >
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Job Opportunity / Collaboration / Feedback"
                  {...register("subject")}
                  className="w-full px-3 py-2.5 text-sm rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-200"
                />
                {errors.subject && (
                  <p className="mt-1 text-xs text-red-500">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-medium text-foreground mb-1.5"
                >
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Hi Aditya, I came across your profile and would like to discuss..."
                  {...register("message")}
                  className="w-full px-3 py-2.5 text-sm rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-200 resize-none"
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={submitStatus === "loading" || submitStatus === "success"}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl bg-blue-500 hover:bg-blue-600 disabled:opacity-60 disabled:cursor-not-allowed text-white transition-all duration-200"
              >
                {submitStatus === "loading" ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : submitStatus === "success" ? (
                  <>
                    <CheckCircle2 size={16} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    Send Message
                  </>
                )}
              </button>

              {submitStatus === "error" && (
                <div className="flex items-center gap-2 text-sm text-red-500">
                  <AlertCircle size={14} />
                  Something went wrong. Please email directly at{" "}
                  <a href={`mailto:${siteConfig.email}`} className="underline">
                    {siteConfig.email}
                  </a>
                </div>
              )}
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
