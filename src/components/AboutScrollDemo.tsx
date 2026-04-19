"use client";
import { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion } from "motion/react";
import { GraduationCap, Languages, Zap, Target, Rocket, Lightbulb, Brain, Users, Sparkles, Code2 } from "lucide-react";
import WordsPullUpMultiStyle from "./animations/WordsPullUpMultiStyle";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function AboutScrollDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "center center"],
  });

  const bioText = "Building clean visuals and smooth digital experiences. Motivated, detail-oriented, and built for fast-paced creative teams.";

  const opacity = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
  const glow = useTransform(scrollYProgress, [0, 1], ["0 0 0px rgba(222,219,200,0)", "0 0 30px rgba(222,219,200,0.8)"]);
  const color = useTransform(scrollYProgress, [0, 1], ["#374151", "#dedbc8"]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

  const segments = [
    { text: "Nithyanatha is a digital creative based in Kuala Lumpur, Malaysia.", className: "font-normal" },
  ];

  const traits = [
    { name: "Strong work ethic", icon: <Zap className="w-4 h-4" /> },
    { name: "Detail-oriented", icon: <Target className="w-4 h-4" /> },
    { name: "Fast learner", icon: <Rocket className="w-4 h-4" /> },
    { name: "Creative thinker", icon: <Lightbulb className="w-4 h-4" /> },
    { name: "Problem solver", icon: <Brain className="w-4 h-4" /> },
    { name: "Team player", icon: <Users className="w-4 h-4" /> },
    { name: "Highly Adaptable", icon: <Sparkles className="w-4 h-4" /> },
    { name: "Self-motivated", icon: <Zap className="w-4 h-4" /> },
    { name: "Tech-savvy", icon: <Code2 className="w-4 h-4" /> },
    { name: "Strategic", icon: <Target className="w-4 h-4" /> },
    { name: "Reliable", icon: <Users className="w-4 h-4" /> },
    { name: "Goal-oriented", icon: <Rocket className="w-4 h-4" /> },
  ];

  const content = (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 p-8 md:p-16 h-full ${isMobile ? 'liquid-glass rounded-[3rem] py-20' : 'bg-black/20 backdrop-blur-sm'}`}>
      <div className="space-y-12">
        <motion.p 
          style={{ opacity, textShadow: glow, color, scale }}
          className="font-sans text-2xl sm:text-3xl md:text-4xl leading-tight transition-all duration-300 font-medium"
        >
          {bioText}
        </motion.p>
        
        <div className="pt-10 border-t border-white/10 flex items-start gap-6">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <p className="text-primary/60 text-[10px] tracking-widest uppercase">Education</p>
            <p className="text-primary-cream text-xl font-medium">SMK Kepong Baru</p>
            <p className="text-gray-500 text-sm">SPM 2025</p>
          </div>
        </div>
      </div>

      <div className="space-y-12">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Languages className="w-4 h-4 text-primary" />
            <p className="text-primary/60 text-[10px] tracking-widest uppercase">Languages</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {["English (Fluent)", "Malay (Fluent)", "Tamil (Intermediate)"].map(lang => (
              <span key={lang} className="text-primary-cream text-xs border border-white/5 bg-white/[0.02] px-4 py-2 rounded-full hover:border-primary/40 transition-colors cursor-default">
                {lang}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Sparkles className="w-4 h-4 text-primary" />
            <p className="text-primary/60 text-[10px] tracking-widest uppercase">Key Traits</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {traits.map(trait => (
              <div key={trait.name} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.01] border border-white/5 hover:border-primary/20 transition-all group">
                <div className="text-primary/40 group-hover:text-primary transition-colors shrink-0">
                  {trait.icon}
                </div>
                <span className="text-gray-500 text-[11px] group-hover:text-primary-cream transition-colors leading-tight">{trait.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <section id="about" ref={containerRef} className="bg-black py-20 px-4 sm:px-8 flex flex-col items-center justify-center overflow-hidden">
        <div className="space-y-4 mb-20">
          <span className="text-primary text-[10px] sm:text-xs tracking-[0.4em] uppercase block text-center opacity-70">
            Who I Am
          </span>
          <WordsPullUpMultiStyle
            segments={segments}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-4xl mx-auto leading-[0.95] sm:leading-[0.9] text-center justify-center"
          />
        </div>
        {content}
      </section>
    );
  }

  return (
    <section id="about" ref={containerRef} className="bg-black py-0 flex items-center justify-center overflow-hidden">
      <ContainerScroll
        titleComponent={
          <div className="space-y-4 mb-20">
            <span className="text-primary text-[10px] sm:text-xs tracking-[0.4em] uppercase block text-center opacity-70">
              Who I Am
            </span>
            <WordsPullUpMultiStyle
              segments={segments}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-4xl mx-auto leading-[0.95] sm:leading-[0.9] text-center justify-center"
            />
          </div>
        }
      >
        {content}
      </ContainerScroll>
    </section>
  );
}
