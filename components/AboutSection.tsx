"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Target } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-6 xl:px-12 bg-secondary relative overflow-hidden" id="tentang">
      {/* Subtle pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(0 0% 99%) 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="container relative z-10 mx-auto xl:px-24" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-light border border-border">
            <BookOpen className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground font-medium">Tentang Kami</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Tentang DasarNgoding
          </h2>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              DasarNgoding adalah platform edukasi untuk pemula yang ingin memahami 
              dasar pemrograman dengan benar. Santai tapi serius.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Kami fokus pada fundamental seperti cara berpikir programmer, Git, dan 
              konsep inti sebelum masuk ke framework atau tech stack.
            </motion.p>
          </div>

          {/* Stats or highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="grid grid-cols-2 gap-6 pt-8 max-w-md mx-auto"
          >
            <div className="gradient-card rounded-xl p-6 border border-border shadow-card text-center">
              <Target className="w-8 h-8 mx-auto mb-3 text-green-400" />
              <div className="text-2xl font-bold text-foreground">Fokus</div>
              <div className="text-sm text-muted-foreground">Fundamental First</div>
            </div>
            <div className="gradient-card rounded-xl p-6 border border-border shadow-card text-center">
              <BookOpen className="w-8 h-8 mx-auto mb-3 text-blue-400" />
              <div className="text-2xl font-bold text-foreground">Praktis</div>
              <div className="text-sm text-muted-foreground">Langsung Praktek</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;