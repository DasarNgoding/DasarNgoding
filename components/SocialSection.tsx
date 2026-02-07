"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, Github, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    icon: Instagram,
    name: "Instagram",
    handle: "@dasarngoding.id",
    description: "Konten harian & tips programming",
    color: "from-pink-500 to-purple-500",
    href: "https://instagram.com/dasarngoding.id",
  },
  {
    icon: PlayCircle,
    name: "TikTok",
    handle: "@dasarngoding",
    description: "Video pendek & tutorial cepat",
    color: "from-black via-cyan-400 to-pink-500",
    href: "https://tiktok.com/@dasarngoding",
  },
  {
    icon: Github,
    name: "GitHub",
    handle: "DasarNgoding",
    description: "Source code & project examples",
    color: "from-neutral-800 to-black",
    href: "https://github.com/DasarNgoding",
  },
];

const SocialSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-6 xl:px-12 bg-secondary relative overflow-hidden" id="sosial">
      <div className="container xl:px-24 relative z-10 mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-light border border-border">
            <Instagram className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground font-medium">Social Media</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Belajar Bareng DasarNgoding
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Konten tersedia dalam bentuk video singkat dan praktik langsung. 
            Follow untuk update terbaru!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className="group"
            >
              <div className="h-full gradient-card rounded-2xl border border-border p-6 shadow-card transition-all duration-300 hover:shadow-hover hover:border-brand-accent hover:-translate-y-2 text-center">
                <div className={`w-16 h-16 mx-auto rounded-2xl bg-linear-to-br ${social.color} flex items-center justify-center mb-5 transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                  <social.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {social.name}
                </h3>
                <p className="text-muted-foreground font-medium mb-3">
                  {social.handle}
                </p>
                <p className="text-sm text-muted-foreground">
                  {social.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialSection;