import React from "react";
import { motion } from "motion/react";
import { Smartphone, Apple, Layout, Server, Terminal, Github, Globe, Database, Cpu } from "lucide-react";

const workflowCards = [
  {
    title: "Mobile Apps",
    icon: <Smartphone className="w-6 h-6" />,
    badges: [
      { label: "iOS", icon: <Apple className="w-3 h-3" /> },
      { label: "Android", icon: <Smartphone className="w-3 h-3" /> }
    ],
    description: "Build cross-platform mobile apps with clean UI and smooth performance.",
    stack: ["React Native", "Firebase"],
    micro_text: "Fast. Smooth. Production-ready."
  },
  {
    title: "Frontend",
    icon: <Layout className="w-6 h-6" />,
    description: "Modern web interfaces focused on speed and responsiveness.",
    stack: ["Next.js", "React", "Tailwind"],
    micro_text: "Clean UI. Optimized UX."
  },
  {
    title: "Backend",
    icon: <Server className="w-6 h-6" />,
    description: "APIs and logic built for scalability and performance.",
    stack: ["Node.js", "REST API", "Firebase"],
    micro_text: "Structured. Efficient. Scalable."
  },
  {
    title: "Dev & Deploy",
    icon: <Terminal className="w-6 h-6" />,
    description: "Version control and deployment workflows.",
    stack: ["GitHub", "Vercel", "Linux"],
    micro_text: "Ship fast. Stay stable."
  }
];

export default function SectionDevWorkflow() {
  return (
    <section id="skills" className="py-32 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 space-y-16 relative z-10">
        <div className="text-center space-y-4">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 0.6, y: 0 }}
            className="text-primary text-[10px] tracking-[0.4em] uppercase"
          >
            Development Workflow
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-primary-cream text-4xl sm:text-5xl md:text-6xl font-medium tracking-tighter"
          >
            Tools used to build and ship applications.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {workflowCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ 
                opacity: 1, 
                y: 0, 
                scale: 1,
                boxShadow: "0 0 20px rgba(222, 219, 200, 0.1)"
              }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.8, 
                delay: idx * 0.15,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ 
                scale: 1.03, 
                y: -8,
                rotateX: 2,
                rotateY: 2,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.98 }}
              className="liquid-glass p-8 rounded-[2rem] flex flex-col group h-full relative overflow-hidden transition-all duration-500 hover:border-primary/40"
              style={{ perspective: "1000px" }}
            >
              {/* Dynamic Follow Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(222,219,200,0.15)_0%,transparent_60%)]" 
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = ((e.clientX - rect.left) / rect.width) * 100;
                  const y = ((e.clientY - rect.top) / rect.height) * 100;
                  e.currentTarget.style.setProperty('--mouse-x', `${x}%`);
                  e.currentTarget.style.setProperty('--mouse-y', `${y}%`);
                }}
              />
              
              <div className="space-y-6 relative z-10 flex-1">
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-black group-hover:animate-pulse transition-all duration-500">
                    {card.icon}
                  </div>
                  {card.badges && (
                    <div className="flex gap-1.5">
                      {card.badges.map((badge, bIdx) => (
                        <span key={bIdx} className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[8px] text-gray-400 uppercase tracking-wider group-hover:border-primary/40 transition-colors duration-500">
                          {badge.label}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-medium text-primary-cream group-hover:brightness-125 transition-all duration-500">{card.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed group-hover:text-gray-300 transition-colors duration-500">{card.description}</p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4">
                  {card.stack.map(tag => (
                    <motion.span 
                      key={tag}
                      initial={{ opacity: 0.6, y: 0 }}
                      whileHover={{ opacity: 1, y: -2 }}
                      className="text-[8px] text-primary/60 border border-primary/20 px-2 py-0.5 rounded-full uppercase tracking-wider"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 relative z-10">
                <p className="text-[9px] text-primary/40 italic group-hover:text-primary transition-colors duration-500">
                  {card.micro_text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
