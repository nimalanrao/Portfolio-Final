import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Coffee, Code } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function SectionExperienceTimeline() {
  const { t } = useTranslation();

  const timelineData = [
    {
      id: "barista",
      role: t("exp_barista"),
      period: "2025 – 2026",
      icon: Coffee,
      highlight: false,
      content: {
        description: t("timeline_barista_desc"),
        points: [
          t("exp_detail_1"),
          t("exp_detail_2"),
          t("exp_detail_3"),
          t("exp_detail_4")
        ]
      }
    },
    {
      id: "transition",
      type: "bridge",
      text: t("timeline_bridge")
    },
    {
      id: "webdev",
      role: t("timeline_webdev_role"),
      company: "LOOKS Salon KL",
      location: t("kl_malaysia"),
      period: "2026 – Present",
      icon: Code,
      highlight: true,
      content: {
        description: t("timeline_webdev_desc"),
        points: [
          t("timeline_webdev_pt1"),
          t("timeline_webdev_pt2"),
          t("timeline_webdev_pt3"),
          t("timeline_webdev_pt4"),
          t("timeline_webdev_pt5"),
          t("timeline_webdev_pt6"),
          t("timeline_webdev_pt7"),
          t("timeline_webdev_pt8")
        ]
      }
    }
  ];
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const lines = document.querySelectorAll('.experience-line');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('glow');
        } else {
          entry.target.classList.remove('glow');
        }
      });
    }, { threshold: 0.5 });
    
    lines.forEach(line => observer.observe(line));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="relative py-32 bg-black overflow-hidden" ref={ref}>
        {/* Scroll Progress Line */}
        <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-white/5" />
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 w-1 bg-primary/30 rounded-full shadow-[0_0_15px_rgba(222,219,200,0.5)]"
          style={{ height: lineHeight, top: 0 }}
        />

        <div className="max-w-7xl mx-auto relative z-10 space-y-32">
          {timelineData.map((item, i) => {
            if (item.type === "bridge") {
              return (
                <motion.div
                  key={item.id}
                  className="flex justify-center text-center px-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <p className="text-primary-cream text-lg italic max-w-2xl font-sans">"{item.text}"</p>
                </motion.div>
              );
            }

            const cardIndex = timelineData.filter(d => d.type !== "bridge").findIndex(d => d.id === item.id);
            const isEven = cardIndex % 2 === 0;
            const CardIcon = item.icon as any;
            
            return (
              <motion.div
                key={item.id}
                className={`relative flex flex-col md:flex-row items-center w-full ${isEven ? 'md:justify-start' : 'md:justify-end'}`}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                {/* Connector Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-black border-2 border-primary rounded-full z-20 shadow-[0_0_10px_rgba(222,219,200,0.5)] group-hover:scale-150 group-hover:bg-primary transition-all duration-500" />
                
                {/* Card Container */}
                <div className={`w-full md:w-5/12 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                  <motion.div 
                    whileHover={{ scale: 1.03, y: -5, rotateX: 2, rotateY: isEven ? -2 : 2 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`liquid-glass p-8 rounded-[1.5rem] shadow-lg group hover:shadow-[0_0_40px_rgba(222,219,200,0.15)] transition-colors duration-500 border border-primary/10 hover:border-primary/30 relative overflow-hidden ${item.highlight ? 'bg-gradient-to-br from-primary/5 to-transparent' : 'bg-gradient-to-br from-transparent to-transparent hover:from-primary/5 hover:to-transparent'}`}
                  >
                    
                    {/* Torch Light Hover Effect Placeholder */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(222,219,200,0.08)_0%,transparent_70%)]" />

                    <div className="flex items-center gap-4 mb-4 relative z-10">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-125 group-hover:bg-primary group-hover:text-black transition-all duration-500 group-hover:rotate-12">
                        {CardIcon && <CardIcon className="w-5 h-5" />}
                      </div>
                      <div className="group-hover:translate-x-1 transition-transform duration-500">
                        <h3 className="text-xl font-medium text-primary-cream">{item.role}</h3>
                        {item.company && <p className="text-primary/80 text-sm">{item.company} • {item.location}</p>}
                      </div>
                    </div>
                    
                    <p className="text-primary/50 text-xs tracking-widest uppercase mb-6 relative z-10 group-hover:text-primary transition-colors duration-500">{item.period}</p>
                    
                    <div className="space-y-4 relative z-10">
                      <p className="text-gray-300 text-sm leading-relaxed">{item.content?.description}</p>
                      
                      <ul className="space-y-2 mt-4">
                        {item.content?.points.map((pt, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-400 text-sm group/pt">
                            <span className="block w-1.5 h-1.5 bg-primary/50 rounded-full mt-1.5 flex-shrink-0 group-hover/pt:scale-150 group-hover/pt:bg-primary transition-all duration-300" />
                            <span className="group-hover/pt:text-white transition-colors duration-300">{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bottom Glowing Beige Line */}
                    <div className="experience-line absolute bottom-0 left-0 right-0 h-1 rounded-b-[1.5rem] group-hover:shadow-[0_0_15px_4px_rgba(245,245,220,0.6)] group-hover:opacity-80 transition-all duration-500" />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
  );
}
