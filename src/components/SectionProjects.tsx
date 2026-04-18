import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { ExternalLink, Scissors, Calculator, Heart, Music, Clock, User, ChevronLeft, ChevronRight } from "lucide-react";
import WordsPullUp from "./animations/WordsPullUp";
import VideoPlayerModal from "./VideoPlayerModal";
import { useSmooothy } from "../hooks/useSmooothy";
import { LazyImage } from "./ui/lazy-image";

import lookssalonVideo from "../assests/lookssalon.mp4";
import pearcalcImg from "../assests/pearcalc.png";
import valentineforcerVideo from "../assests/valentineforcer.mp4";
import eightsevenVideo from "../assests/eightseven.mp4";
import portfolioVideo from "../assests/portfolio.mp4";

const projects = [
  {
    title: "Nithya Creative Studio",
    description: "My personal digital portfolio. A luxury, immersive experience built with smooth animations and interactive UI components.",
    link: "https://github.com/nimalanrao",
    media: portfolioVideo,
    mediaType: "video",
    icon: User,
    color: "from-white/20 to-transparent",
    tags: ["React", "Framer Motion", "Tailwind"],
  },
  {
    title: "LOOKS Salon KL",
    description: "Luxury Hair & Beauty Destination. World-class hair styling, Balayage, Kérastase treatments, and premium beauty services.",
    link: "https://lookssalon.my",
    media: lookssalonVideo,
    mediaType: "video",
    icon: Scissors,
    color: "from-amber-500/20 to-transparent",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "EI8HT SE7EN",
    description: "Premier K-Pop & Street Dance Academy in Kuala Lumpur. Dynamic platform for elevating dance motion and choreography.",
    link: "https://nimalanrao.github.io/EI8HTY-SE7EN",
    media: eightsevenVideo,
    mediaType: "video",
    icon: Music,
    color: "from-blue-500/20 to-transparent",
    tags: ["React", "Vite", "GSAP"],
  },
  {
    title: "PearCalc",
    description: "An iOS‑themed calculator built for the web. Clean UI, smooth interactions, Apple‑inspired design — without the lock‑in.",
    link: "https://pearcalculator.vercel.app",
    media: pearcalcImg,
    mediaType: "image",
    icon: Calculator,
    color: "from-green-500/20 to-transparent",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Valentine Forcer",
    description: "A cute interactive valentine forcer with a hilarious jump-scare twist if declined too many times.",
    link: "https://valentine-forcer.vercel.app",
    media: valentineforcerVideo,
    mediaType: "video",
    icon: Heart,
    color: "from-red-500/20 to-transparent",
    tags: ["TypeScript", "Vite", "CSS"],
  },
  {
    title: "Coming Soon",
    description: "More luxury digital experiences and polished web applications are currently in the works.",
    link: "#",
    media: null,
    mediaType: "none",
    icon: Clock,
    color: "from-white/10 to-transparent",
    tags: ["Secret"],
    isPlaceholder: true,
  }
];

export default function SectionProjects() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const videoRefs = useRef<{[key: string]: HTMLVideoElement | null}>({});
  const [isMobile, setIsMobile] = useState(false);

  const { wrapperRef, goToNext, goToPrev } = useSmooothy<HTMLDivElement>({
    infinite: true,
    snap: true,
    variableWidth: true,
    lerpFactor: 0.12,
    dragSensitivity: 0.004,
    speedDecay: 0.92,
    snapStrength: 0.08,
    scrollInput: true,
    scrollSensitivity: 0.8,
    onSlideChange: (current) => {
      setActiveSlide(current);
    },
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(hover: none) or (max-width: 768px)").matches);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseEnter = (title: string) => {
    if (!isMobile) {
      const vid = videoRefs.current[title];
      if (vid) {
        vid.play().catch(() => {});
      }
    }
  };

  const handleMouseLeave = (title: string) => {
    if (!isMobile) {
      const vid = videoRefs.current[title];
      if (vid) {
        vid.pause();
        vid.currentTime = 0;
      }
    }
  };

  const handleCardClick = (project: typeof projects[0]) => {
    if (project.isPlaceholder) return;
    if (project.mediaType === "video" && project.media) {
      setActiveVideo(project.media);
    } else {
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
              Selected Work
            </span>
            <WordsPullUp
              text="Projects"
              className="text-primary-cream text-4xl sm:text-5xl md:text-6xl font-medium tracking-tighter"
            />
          </header>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={goToPrev}
              className="w-12 h-12 rounded-full liquid-glass flex items-center justify-center text-primary-cream hover:bg-white/10 transition-all duration-300 z-20"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goToNext}
              className="w-12 h-12 rounded-full liquid-glass flex items-center justify-center text-primary-cream hover:bg-white/10 transition-all duration-300 z-20"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-primary-cream font-medium text-lg tabular-nums">
            {String(activeSlide + 1).padStart(2, '0')}
          </span>
          <div className="flex-1 h-px bg-white/10 relative">
            <motion.div
              className="absolute top-0 left-0 h-full bg-primary"
              animate={{ width: `${((activeSlide + 1) / projects.length) * 100}%` }}
              transition={{ type: "spring", stiffness: 200, damping: 30 }}
            />
          </div>
          <span className="text-gray-500 text-sm tabular-nums">
            {String(projects.length).padStart(2, '0')}
          </span>
        </div>
      </div>

      <div className="mt-12 overflow-hidden">
        <div
          ref={wrapperRef}
          className="flex overflow-x-hidden cursor-grab active:cursor-grabbing"
          style={{ userSelect: "none" }}
        >
          {projects.map((project, i) => {
            const Icon = project.icon;
            
            return (
              <div
                key={project.title}
                className="shrink-0 w-[85vw] md:w-[45vw] lg:w-[35vw] px-4"
              >
                <motion.div
                  onClick={() => handleCardClick(project)}
                  onMouseEnter={() => handleMouseEnter(project.title)}
                  onMouseLeave={() => handleMouseLeave(project.title)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`liquid-glass p-6 rounded-[2rem] flex flex-col group h-full relative overflow-hidden cursor-pointer bg-gradient-to-br from-transparent to-transparent hover:from-primary/5 hover:to-transparent ${project.isPlaceholder ? 'opacity-60 grayscale cursor-default' : ''}`}
                >
                  <div className={`w-full aspect-[16/10] rounded-2xl bg-gradient-to-br ${project.color} border border-white/5 flex items-center justify-center relative overflow-hidden mb-6`}>
                    
                    {project.mediaType === "video" && project.media ? (
                      <video 
                        ref={el => videoRefs.current[project.title] = el}
                        src={project.media}
                        className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                        muted
                        playsInline
                        loop
                        autoPlay={isMobile}
                      />
                    ) : project.mediaType === "image" && project.media ? (
                      <LazyImage 
                        src={project.media}
                        alt={project.title}
                        ratio={16/10}
                        className="scale-105 group-hover:scale-100 transition-transform duration-700"
                      />
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
                        <Icon className="w-16 h-16 text-primary-cream relative z-10 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
                      </>
                    )}
                    
                    {!project.isPlaceholder && (
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="absolute top-4 right-4 w-10 h-10 rounded-full liquid-glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 bg-black/50 hover:bg-black/80"
                      >
                        <ExternalLink className="w-4 h-4 text-primary" />
                      </a>
                    )}
                  </div>

                  <div className="space-y-4 relative z-10 flex flex-col flex-1">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-medium text-primary-cream">{project.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 pt-4 mt-auto">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] text-primary/60 border border-primary/20 px-3 py-1 rounded-full uppercase tracking-wider">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
