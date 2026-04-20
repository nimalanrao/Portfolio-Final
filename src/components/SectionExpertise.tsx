import React from "react";
import { motion } from "framer-motion";
import { Code2, Palette, TrendingUp, Video } from "lucide-react";
import WordsPullUp from "./animations/WordsPullUp";
import { useTranslation } from "react-i18next";

export default function SectionExpertise() {
  const { t } = useTranslation();

  const services = [
    {
      title: t("front_end"),
      description: t("front_end_desc"),
      icon: <Code2 className="w-6 h-6" />,
      tools: ["React", "Next.js", "Tailwind", "Framer Motion"]
    },
    {
      title: t("branding"),
      description: t("branding_desc"),
      icon: <Palette className="w-6 h-6" />,
      tools: ["Figma", "Design Systems", "Identity"]
    },
    {
      title: t("marketing"),
      description: t("marketing_desc"),
      icon: <TrendingUp className="w-6 h-6" />,
      tools: ["SEO", "Strategy", "Analytics"]
    },
    {
      title: t("content"),
      description: t("content_desc"),
      icon: <Video className="w-6 h-6" />,
      tools: ["Short-form", "Visuals", "Creative"]
    }
  ];

  return (
    <section id="services" className="py-32 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 space-y-20 relative z-10">
        <header className="space-y-2">
          <span className="text-primary text-[10px] tracking-[0.4em] uppercase opacity-70">
            {t("what_i_do")}
          </span>
          <div className="space-y-0">
            <WordsPullUp
              text={t("specialized")}
              className="text-primary-cream text-5xl sm:text-6xl md:text-7xl font-medium tracking-tighter leading-[0.9]"
            />
            <WordsPullUp
              text={t("expertise")}
              className="text-primary-cream text-5xl sm:text-6xl md:text-7xl font-medium tracking-tighter leading-[0.9]"
            />
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="liquid-glass p-8 rounded-[2rem] flex flex-col h-full group transition-all duration-500 hover:shadow-[0_0_40px_rgba(222,219,200,0.15)] relative overflow-hidden"
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
          ))}
        </div>
      </div>
    </section>
  );
}
