"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Instagram, Laptop, Target } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen px-6 xl:px-12 gradient-hero relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 gradient-glow opacity-50" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FEFEFE' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container relative z-10 py-40 lg:py-32 mx-auto xl:px-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-light/50 border border-border backdrop-blur-sm"
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-soft" />
                <span className="text-sm text-muted-foreground">
                  Platform Edukasi Programming
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground tracking-tight"
              >
                Dasar<span className="text-accent">Ngoding</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xl md:text-2xl font-medium text-muted-foreground"
              >
                Fokus fundamental, bukan shortcut.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-lg text-muted-foreground/80 max-w-md"
              >
                Belajar programming dari nol dengan pendekatan sederhana dan
                praktis.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#belajar">
                <Button
                  size="lg"
                  className="bg-brand-cream text-brand-dark hover:bg-brand-cream/90 shadow-button font-semibold rounded-xl px-8 py-6 text-base transition-all hover:scale-105"
                >
                  Mulai Belajar
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <Link
                href="https://instagram.com/dasarngoding.id"
                target="_blank"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border bg-transparent hover:bg-brand-light text-foreground rounded-xl px-8 py-6 text-base transition-all hover:scale-105"
                >
                  <Instagram className="mr-2 h-5 w-5" />
                  Follow @dasarngoding.id
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative">
              {/* Code block illustration */}
              <div className="w-100 h-87.5 gradient-card rounded-2xl shadow-card border border-border p-6 space-y-4 animate-float">
                {/* Window controls */}
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                  <div className="w-3 h-3 rounded-full bg-green-400/80" />
                </div>

                {/* Code lines */}
                <div className="space-y-3 font-mono text-sm">
                  <div className="flex items-center gap-3">
                    <span className="text-muted-foreground/50">1</span>
                    <span className="text-green-400">// Mulai dari sini</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-muted-foreground/50">2</span>
                    <span>
                      <span className="text-purple-400">const</span>{" "}
                      <span className="text-blue-300">belajar</span> ={" "}
                      <span className="text-orange-300">"fundamental"</span>;
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-muted-foreground/50">3</span>
                    <span>
                      <span className="text-purple-400">const</span>{" "}
                      <span className="text-blue-300">fokus</span> ={" "}
                      <span className="text-cyan-300">true</span>;
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-muted-foreground/50">4</span>
                    <span className="text-muted-foreground/30">│</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-muted-foreground/50">5</span>
                    <span>
                      <span className="text-purple-400">if</span> (fokus) {"{"}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-muted-foreground/50">6</span>
                    <span className="pl-4">
                      <span className="text-yellow-300">console</span>.
                      <span className="text-blue-300">log</span>(
                      <span className="text-orange-300">"Mulai dari fundamental"</span>);
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-muted-foreground/50">7</span>
                    <span>{"}"}</span>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -right-4 w-16 h-16 gradient-cta rounded-xl shadow-card flex items-center justify-center text-2xl"
              >
                <Laptop className="w-8 h-8" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute -bottom-4 -left-4 w-14 h-14 gradient-cta rounded-xl shadow-card flex items-center justify-center text-xl"
              >
                <Target className="w-8 h-8" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
