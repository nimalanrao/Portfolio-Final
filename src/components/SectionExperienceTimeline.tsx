import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { Code, Coffee, ShoppingBag, Wrench, Sparkles, CheckCircle2, ChevronRight, ChevronLeft } from "lucide-react";
import { useTranslation } from "react-i18next";
import WordsPullUp from "./animations/WordsPullUp";

export default function SectionExperienceTimeline() {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);

  const experiences = [
    {
      id: "ecommerce",
      role: t("exp_ecommerce"),
      company: "Multi-Platform Retail",
      tabLabel: "Multi-Platform",
      location: t("kl_malaysia"),
      period: "2023 – 2025",
      isCurrent: false,
      icon: ShoppingBag,
      highlight: false,
      description: t("timeline_ecommerce_desc"),
      points: [
        t("exp_ecommerce_pt1"),
        t("exp_ecommerce_pt2"),
        t("exp_ecommerce_pt3"),
        t("exp_ecommerce_pt4"),
      ],
    },
    {
      id: "barista",
      role: t("exp_barista"),
      company: "F&B Services",
      tabLabel: "F&B Services",
      location: t("kl_malaysia"),
      period: "2025 – 2026",
      isCurrent: false,
      icon: Coffee,
      highlight: false,
      description: t("timeline_barista_desc"),
      points: [
        t("exp_detail_1"),
        t("exp_detail_2"),
        t("exp_detail_3"),
        t("exp_detail_4"),
      ],
    },
    {
      id: "webdev",
      role: t("timeline_webdev_role"),
      company: "Web Development",
      tabLabel: "Web Development",
      location: t("kl_malaysia"),
      period: "2026 – Present",
      isCurrent: true,
      icon: Code,
      highlight: true,
      description: t("timeline_webdev_desc"),
      points: [
        t("timeline_webdev_pt1"),
        t("timeline_webdev_pt2"),
        t("timeline_webdev_pt3"),
        t("timeline_webdev_pt4"),
        t("timeline_webdev_pt5"),
        t("timeline_webdev_pt6"),
        t("timeline_webdev_pt7"),
        t("timeline_webdev_pt8"),
      ],
    },
    {
      id: "hardware",
      role: t("exp_hardware_admin"),
      company: "Hardware Retail Operations",
      tabLabel: "Hardware Retail",
      location: t("kl_malaysia"),
      period: "2026 – Present",
      isCurrent: true,
      icon: Wrench,
      highlight: true,
      description: t("timeline_hardware_desc"),
      points: [
        t("exp_hardware_pt1"),
        t("exp_hardware_pt2"),
        t("exp_hardware_pt3"),
        t("exp_hardware_pt4"),
        t("exp_hardware_pt5"),
      ],
    },
  ];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  const [progressPercent, setProgressPercent] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    return smoothProgress.on("change", (latest) => {
      const pct = Math.min(100, Math.max(0, Math.round(latest * 100)));
      setProgressPercent(pct);

      const index = Math.min(experiences.length - 1, Math.floor(latest * experiences.length));
      setActiveIndex(index);
    });
  }, [smoothProgress, experiences.length]);

  const currentItem = experiences[activeIndex];
  const IconComponent = currentItem.icon;

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative h-[260vh] sm:h-[300vh] bg-black text-slate-100"
    >
      {/* Sticky Locked Container with balanced top clearance */}
      <div className="sticky top-0 h-screen max-h-screen flex flex-col justify-between pt-16 sm:pt-20 pb-5 px-4 sm:px-6 md:px-8 max-w-5xl mx-auto w-full overflow-hidden z-10 space-y-4">
        
        {/* Header & Minimalist Progress Section */}
        <div className="space-y-3 shrink-0">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <span className="text-amber-200/80 text-[10px] sm:text-xs tracking-[0.4em] uppercase block font-mono">
                {t("journey")}
              </span>
              <WordsPullUp
                text={t("experience")}
                className="text-white text-3xl sm:text-4xl md:text-5xl font-medium tracking-tighter"
              />
            </div>

            {/* High-contrast Mono Progress Badge */}
            <div className="flex items-center gap-2.5 bg-zinc-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 self-start sm:self-auto">
              <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                Progress
              </span>
              <span className="text-sm font-mono font-semibold text-amber-200 min-w-[2.5rem] text-right">
                {progressPercent}%
              </span>
            </div>
          </div>

          {/* Minimal 2px Progress Line */}
          <div className="w-full h-1 bg-white/10 rounded-full relative overflow-hidden backdrop-blur-sm">
            <motion.div
              style={{ scaleX: smoothProgress, transformOrigin: "left" }}
              className="h-full bg-gradient-to-r from-amber-300/40 via-amber-200 to-amber-100 rounded-full shadow-[0_0_12px_rgba(251,191,36,0.6)]"
            />
          </div>

          {/* Clean Step Tab Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
            {experiences.map((exp, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={exp.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`px-3 py-2 rounded-xl text-xs font-mono transition-all duration-300 flex items-center justify-between border cursor-pointer ${
                    isActive
                      ? "bg-amber-400/15 border-amber-300/60 text-white font-medium shadow-[0_0_15px_rgba(251,191,36,0.15)]"
                      : "bg-white/[0.03] border-white/10 text-zinc-400 hover:text-zinc-200 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center gap-1.5 truncate">
                    <span className="text-[10px] text-amber-300 font-semibold">0{idx + 1}.</span>
                    <span className="truncate uppercase tracking-wider text-[11px]">{exp.tabLabel}</span>
                  </div>
                  <span className="text-[9px] opacity-60 hidden md:inline shrink-0">{exp.period.split(" ")[0]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Perfectly Balanced Spotlight Card Container */}
        <div className="my-auto relative w-full flex-1 flex items-center justify-center py-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentItem.id}
              initial={{ opacity: 0, y: 15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-4xl bg-zinc-950/90 backdrop-blur-2xl p-6 sm:p-8 rounded-3xl border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.8)] flex flex-col justify-between space-y-5 relative overflow-hidden"
            >
              {/* Subtle ambient aura */}
              <div className="absolute -top-24 -right-24 w-72 h-72 bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />

              <div className="space-y-4 relative z-10">
                {/* Card Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-200 shrink-0 shadow-inner">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-medium text-white tracking-tight leading-snug">
                        {currentItem.role}
                      </h3>
                      <p className="text-zinc-400 text-xs sm:text-sm mt-0.5 font-sans">
                        {currentItem.company} • {currentItem.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 self-start sm:self-auto shrink-0">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                      PHASE 0{activeIndex + 1} / 0{experiences.length}
                    </span>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider text-amber-200 bg-amber-400/10 border border-amber-400/20">
                      {currentItem.isCurrent && (
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      )}
                      <span>{currentItem.period}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-normal">
                  {currentItem.description}
                </p>

                {/* Key Deliverables List */}
                <div className="space-y-2.5 pt-1">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-amber-200/80 font-mono font-medium block">
                    Key Deliverables
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[28vh] overflow-y-auto pr-1">
                    {currentItem.points.map((pt, pIdx) => (
                      <div
                        key={pIdx}
                        className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all group"
                      >
                        <CheckCircle2 className="w-4 h-4 text-amber-300/80 shrink-0 mt-0.5 group-hover:text-amber-200 transition-colors" />
                        <span className="text-xs sm:text-sm text-zinc-300 group-hover:text-white leading-relaxed">
                          {pt}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Minimal Footer Controls */}
        <div className="flex items-center justify-between text-[10px] sm:text-xs font-mono text-zinc-500 pt-2 shrink-0 border-t border-white/10">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveIndex((prev) => Math.max(0, prev - 1))}
              disabled={activeIndex === 0}
              className="p-1.5 rounded-lg border border-white/10 disabled:opacity-25 hover:border-amber-200/50 text-zinc-300 hover:text-white transition-all cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="uppercase tracking-widest text-zinc-400">
              Phase 0{activeIndex + 1} of 0{experiences.length}
            </span>
            <button
              onClick={() => setActiveIndex((prev) => Math.min(experiences.length - 1, prev + 1))}
              disabled={activeIndex === experiences.length - 1}
              className="p-1.5 rounded-lg border border-white/10 disabled:opacity-25 hover:border-amber-200/50 text-zinc-300 hover:text-white transition-all cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <span className="tracking-wider opacity-60">
            Scroll to progress through timeline
          </span>
        </div>
      </div>
    </section>
  );
}
