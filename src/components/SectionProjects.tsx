import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Scissors, Music, Clock, User, ChevronLeft, ChevronRight, Layers } from "lucide-react";
import WordsPullUp from "./animations/WordsPullUp";
import VideoPlayerModal from "./VideoPlayerModal";
import { useTranslation } from "react-i18next";

import lookssalonVideo from "../assests/lookssalon.mp4";
import eightsevenVideo from "../assests/eightseven.mp4";
import portfolioVideo from "../assests/portfolio.mp4";
import veltrixstudioImage from "../assests/veltrixstudio.png";

export default function SectionProjects() {
  const { t } = useTranslation();

  const projects = [
    {
      title: "Veltrix Studio",
      description: t("project_veltrix_desc"),
      link: "https://www.veltrixstudio.lol/",
      media: veltrixstudioImage,
      mediaType: "image",
      icon: Layers,
      color: "from-cyan-500/20 via-primary/10 to-transparent",
      tags: ["Web Systems", "AI Automation", "React", "Tailwind"],
    },
    {
      title: "Nithya Creative Studio",
      description: t("project_portfolio_desc"),
      link: "https://github.com/nimalanrao",
      media: portfolioVideo,
      mediaType: "video",
      icon: User,
      color: "from-amber-500/20 via-primary/10 to-transparent",
      tags: ["React", "Framer Motion", "Tailwind"],
    },
    {
      title: "LOOKS Salon KL",
      description: t("project_looks_desc"),
      link: "https://lookssalon.my",
      media: lookssalonVideo,
      mediaType: "video",
      icon: Scissors,
      color: "from-emerald-500/20 via-primary/10 to-transparent",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    },
    {
      title: "EI8HT SE7EN",
      description: t("project_eightseven_desc"),
      link: "https://nimalanrao.github.io/EI8HTY-SE7EN",
      media: eightsevenVideo,
      mediaType: "video",
      icon: Music,
      color: "from-indigo-500/20 via-primary/10 to-transparent",
      tags: ["React", "Vite", "GSAP"],
    },
    {
      title: t("project_coming_soon"),
      description: t("project_coming_soon_desc"),
      link: "#",
      media: null,
      mediaType: "none",
      icon: Clock,
      color: "from-white/10 to-transparent",
      tags: ["Secret"],
      isPlaceholder: true,
    },
  ];

  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const scrollLeft = container.scrollLeft;
    const slideWidth = container.clientWidth * 0.75 || 320;
    const newIndex = Math.min(
      projects.length - 1,
      Math.max(0, Math.round(scrollLeft / slideWidth))
    );
    setActiveSlide(newIndex);
  };

  const scrollToSlide = (index: number) => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const children = container.children;
    const targetChild = children[index] as HTMLElement;
    if (targetChild) {
      targetChild.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  };

  const goToNext = () => {
    const nextIndex = Math.min(projects.length - 1, activeSlide + 1);
    scrollToSlide(nextIndex);
  };

  const goToPrev = () => {
    const prevIndex = Math.max(0, activeSlide - 1);
    scrollToSlide(prevIndex);
  };

  const handleCardClick = (project: typeof projects[0]) => {
    if (project.isPlaceholder) return;
    if (project.mediaType === "video" && project.media) {
      setActiveVideo(project.media);
    } else if (project.link && project.link !== "#") {
      window.open(project.link, "_blank", "noopener noreferrer");
    }
  };

  return (
    <section id="projects" className="py-32 bg-black relative overflow-hidden">
      {activeVideo && (
        <VideoPlayerModal src={activeVideo} onClose={() => setActiveVideo(null)} />
      )}

      <div className="max-w-7xl mx-auto px-6 space-y-12 relative z-10">
        <div className="flex items-end justify-between">
          <header className="space-y-4">
            <span className="text-primary text-[10px] tracking-[0.3em] uppercase opacity-70 block">
              {t("selected_work")}
            </span>
            <WordsPullUp
              text={t("projects")}
              className="text-primary-cream text-4xl sm:text-5xl md:text-6xl font-medium tracking-tighter"
            />
          </header>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={goToPrev}
              disabled={activeSlide === 0}
              className="w-12 h-12 rounded-full liquid-glass flex items-center justify-center text-primary-cream hover:bg-white/10 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed z-20"
              aria-label="Previous Project"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goToNext}
              disabled={activeSlide === projects.length - 1}
              className="w-12 h-12 rounded-full liquid-glass flex items-center justify-center text-primary-cream hover:bg-white/10 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed z-20"
              aria-label="Next Project"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Progress Bar Counter */}
        <div className="flex items-center gap-4">
          <span className="text-primary-cream font-medium text-lg tabular-nums">
            {String(activeSlide + 1).padStart(2, "0")}
          </span>
          <div className="flex-1 h-px bg-white/10 relative overflow-hidden rounded-full">
            <motion.div
              className="absolute top-0 left-0 h-full bg-primary"
              animate={{ width: `${((activeSlide + 1) / projects.length) * 100}%` }}
              transition={{ type: "spring", stiffness: 250, damping: 25 }}
            />
          </div>
          <span className="text-gray-500 text-sm tabular-nums">
            {String(projects.length).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Hardware-Accelerated Clean Carousel */}
      <div className="mt-12 overflow-hidden">
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 max-w-7xl mx-auto scroll-smooth py-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <div
                key={project.title}
                className="shrink-0 w-[88vw] sm:w-[55vw] md:w-[42vw] lg:w-[32vw] snap-start"
              >
                <div
                  onClick={() => handleCardClick(project)}
                  className={`liquid-glass p-6 rounded-[2rem] flex flex-col group h-full relative overflow-hidden cursor-pointer border border-white/5 hover:border-primary/30 transition-all duration-500 ${
                    project.isPlaceholder ? "opacity-60 grayscale cursor-default" : ""
                  }`}
                >
                  <div
                    className={`w-full aspect-[16/10] rounded-2xl bg-gradient-to-br ${project.color} border border-white/5 flex items-center justify-center relative overflow-hidden mb-6 group-hover:scale-[1.02] transition-transform duration-500`}
                  >
                    {project.mediaType === "video" && project.media ? (
                      <video
                        src={project.media}
                        autoPlay
                        muted
                        playsInline
                        loop
                        preload="metadata"
                        className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700 pointer-events-none"
                      />
                    ) : project.mediaType === "image" && project.media ? (
                      <img
                        src={project.media}
                        alt={project.title}
                        className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700 pointer-events-none"
                      />
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
                        <Icon
                          className="w-14 h-14 text-primary-cream relative z-10 group-hover:scale-110 group-hover:text-primary transition-all duration-500"
                          strokeWidth={1.5}
                        />
                      </>
                    )}

                    {!project.isPlaceholder && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="absolute top-4 right-4 w-10 h-10 rounded-full liquid-glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 bg-black/60 hover:bg-primary hover:text-black text-primary shadow-lg"
                        title="Open project link"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  <div className="space-y-4 relative z-10 flex flex-col flex-1">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-medium text-primary-cream group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-4 mt-auto">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] text-primary/60 border border-primary/20 px-3 py-1 rounded-full uppercase tracking-wider group-hover:border-primary/40 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
