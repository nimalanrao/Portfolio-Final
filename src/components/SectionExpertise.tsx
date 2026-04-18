import React from "react";
import { motion } from "motion/react";
import { 
  ArrowRight, 
  Code, 
  Sparkles, 
  Target, 
  Zap, 
  Cpu, 
  Palette, 
  TrendingUp, 
  Briefcase 
} from "lucide-react";
import WordsPullUp from "./animations/WordsPullUp";
import { useSmooothy } from "../hooks/useSmooothy";

const services = [
  {
    title: "Front-End Development",
    description: "Responsive, fast, and clean websites using modern frameworks.",
    tools: ["HTML", "CSS", "JS", "React", "Next.JS", "Tailwind"],
    icon: <Code className="w-5 h-5" />
  },
  {
    title: "Content Creation",
    description: "Short-form videos, visuals, and digital content for brands.",
    tools: ["Instagram", "TikTok", "Reels"],
    icon: <Sparkles className="w-5 h-5" />
  },
  {
    title: "UI/UX & Branding",
    description: "Improving user experience and building strong brand identity.",
    tools: ["Figma", "UI Design", "Branding"],
    icon: <Target className="w-5 h-5" />
  },
  {
    title: "Marketing Strategy",
    description: "Using psychology and data-driven insights to improve engagement.",
    tools: ["SEO", "Strategy", "Psychology"],
    icon: <Zap className="w-5 h-5" />
  }
];

const skillCategories = [
  {
    title: "Technical",
    icon: <Cpu className="w-5 h-5" />,
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Node.js", "TailwindCSS", "Git", "Firebase"]
  },
  {
    title: "Creative",
    icon: <Palette className="w-5 h-5" />,
    skills: ["Figma", "Premiere Pro", "After Effects", "Canva", "Photoshop", "Lightroom", "CapCut"]
  },
  {
    title: "Marketing",
    icon: <TrendingUp className="w-5 h-5" />,
    skills: ["SEO", "Social Media", "Content Strategy", "Meta Ads", "Google Ads", "Analytics", "Email Marketing"]
  },
  {
    title: "Operations",
    icon: <Briefcase className="w-5 h-5" />,
    skills: ["Team Management", "Inventory", "Customer Service", "Training", "SOP Design", "Reporting"]
  },
];

export default function SectionExpertise() {
  const { wrapperRef: servicesSliderRef } = useSmooothy<HTMLDivElement>({
    infinite: true,
    snap: true,
    variableWidth: true,
    lerpFactor: 0.15,
    dragSensitivity: 0.004,
    speedDecay: 0.9,
    snapStrength: 0.1,
    scrollInput: true,
    scrollSensitivity: 0.6,
  });

  const { wrapperRef: skillsSliderRef } = useSmooothy<HTMLDivElement>({
    infinite: true,
    snap: true,
    variableWidth: true,
    lerpFactor: 0.15,
    dragSensitivity: 0.004,
    speedDecay: 0.9,
    snapStrength: 0.1,
    scrollInput: true,
    scrollSensitivity: 0.6,
  });

  return (
    <section id="expertise-container" className="bg-black py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none" />
      
      <div className="space-y-32">
        {/* Services Sub-section */}
        <div id="services" className="space-y-16">
          <header className="space-y-4 max-w-7xl mx-auto px-4 sm:px-8">
            <span className="text-primary text-[10px] tracking-[0.3em] uppercase opacity-70 block">
              Services
            </span>
            <WordsPullUp
              text="Specialized in digital experiences."
              className="text-primary-cream text-4xl sm:text-5xl md:text-6xl font-medium tracking-tighter"
            />
          </header>

          {/* Smooothy Services Slider */}
          <div className="overflow-hidden">
            <div
              ref={servicesSliderRef}
              className="flex overflow-x-hidden cursor-grab active:cursor-grabbing"
              style={{ userSelect: "none" }}
            >
              {services.map((service, i) => (
                <div
                  key={service.title}
                  className="shrink-0 w-[80vw] sm:w-[60vw] md:w-[40vw] lg:w-[28vw] px-3"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -10, scale: 1.02, rotateX: 5, rotateY: 5 }}
                    transition={{ duration: 0.8, delay: i * 0.1, type: "spring", stiffness: 300, damping: 20 }}
                    viewport={{ once: true }}
                    className="liquid-glass p-8 rounded-[2rem] flex flex-col h-full group transition-colors duration-500 hover:shadow-[0_0_40px_rgba(222,219,200,0.15)] relative overflow-hidden bg-gradient-to-br from-transparent to-transparent hover:from-primary/5 hover:to-transparent"
                  >
                    {/* Subtle Torch effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(222,219,200,0.08)_0%,transparent_70%)]" />

                    <div className="space-y-6 relative z-10">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-125 group-hover:-translate-y-2 group-hover:rotate-12 transition-all duration-500 group-hover:bg-primary group-hover:text-black">
                        {service.icon}
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-xl font-medium text-primary-cream group-hover:translate-x-1 transition-transform duration-500">{service.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {service.tools.map(tool => (
                          <span key={tool} className="text-[9px] text-primary/60 border border-primary/20 px-2 py-1 rounded-full uppercase tracking-wider group-hover:border-primary/60 group-hover:text-primary transition-colors duration-500">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Sub-section */}
        <div id="skills" className="space-y-16">
          <header className="space-y-4 max-w-7xl mx-auto px-4 sm:px-8">
            <span className="text-primary text-[10px] tracking-[0.3em] uppercase opacity-70 block">
              Capabilities
            </span>
            <WordsPullUp
              text="Expertise"
              className="text-primary-cream text-4xl sm:text-5xl md:text-6xl font-medium tracking-tighter"
            />
          </header>

          {/* Smooothy Skills Slider */}
          <div className="overflow-hidden">
            <div
              ref={skillsSliderRef}
              className="flex overflow-x-hidden cursor-grab active:cursor-grabbing"
              style={{ userSelect: "none" }}
            >
              {skillCategories.map((cat, i) => (
                <div
                  key={cat.title}
                  className="shrink-0 w-[80vw] sm:w-[60vw] md:w-[40vw] lg:w-[28vw] px-3"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -10, scale: 1.02, rotateX: 5, rotateY: -5 }}
                    transition={{ duration: 0.8, delay: i * 0.1, type: "spring", stiffness: 300, damping: 20 }}
                    viewport={{ once: true }}
                    className="liquid-glass p-8 rounded-[2rem] space-y-8 group hover:shadow-[0_0_40px_rgba(222,219,200,0.15)] relative overflow-hidden bg-gradient-to-br from-transparent to-transparent hover:from-primary/5 hover:to-transparent"
                  >
                    {/* Subtle Torch effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(222,219,200,0.08)_0%,transparent_70%)]" />
                    
                    <div className="space-y-6 relative z-10">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-125 group-hover:-translate-y-2 group-hover:-rotate-12 transition-all duration-500 group-hover:bg-primary group-hover:text-black">
                        {cat.icon}
                      </div>
                      <h3 className="text-xl font-medium text-primary-cream flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-500">
                        {cat.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-x-3 gap-y-3 relative z-10">
                      {cat.skills.map((skill, idx) => (
                        <div key={idx} className="flex items-center gap-2 group/skill">
                          <span className="text-gray-400 text-xs group-hover/skill:text-black group-hover/skill:bg-primary transition-all duration-300 cursor-default bg-white/5 px-2 py-1 rounded-md">
                            {skill}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
