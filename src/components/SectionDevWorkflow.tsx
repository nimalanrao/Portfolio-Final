import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Apple, Layout, Server, Terminal, Github, Globe, Database, Cpu } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function SectionDevWorkflow() {
  const { t } = useTranslation();

  const workflowCards = [
    {
      title: t("workflow_mobile"),
      icon: <Smartphone className="w-6 h-6" />,
      badges: [
        { label: "iOS", icon: <Apple className="w-3 h-3" /> },
        { label: "Android", icon: <Smartphone className="w-3 h-3" /> }
      ],
      description: t("workflow_mobile_desc"),
      stack: ["React Native", "Firebase"],
      micro_text: t("workflow_mobile_micro")
    },
    {
      title: t("workflow_frontend"),
      icon: <Layout className="w-6 h-6" />,
      description: t("workflow_frontend_desc"),
      stack: ["Next.js", "React", "Tailwind"],
      micro_text: t("workflow_frontend_micro")
    },
    {
      title: t("workflow_backend"),
      icon: <Server className="w-6 h-6" />,
      description: t("workflow_backend_desc"),
      stack: ["Node.js", "REST API", "Firebase"],
      micro_text: t("workflow_backend_micro")
    },
    {
      title: t("workflow_devops"),
      icon: <Terminal className="w-6 h-6" />,
      description: t("workflow_devops_desc"),
      stack: ["GitHub", "Vercel", "Linux"],
      micro_text: t("workflow_devops_micro")
    }
  ];
  return (
    <section id="skills" className="py-32 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 space-y-16 relative z-10">
        <div className="text-center space-y-4">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 0.6, y: 0 }}
            className="text-primary text-[10px] tracking-[0.4em] uppercase"
          >
            {t("dev_workflow")}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-primary-cream text-4xl sm:text-5xl md:text-6xl font-medium tracking-tighter"
          >
            {t("workflow_heading")}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {workflowCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="liquid-glass p-8 rounded-[2rem] flex flex-col group h-full relative overflow-hidden transition-all duration-300 hover:border-primary/40 border border-white/10"
            >
              <div className="space-y-6 relative z-10 flex-1">
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors duration-300">
                    {card.icon}
                  </div>
                  {card.badges && (
                    <div className="flex gap-1.5">
                      {card.badges.map((badge, bIdx) => (
                        <span key={bIdx} className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[8px] text-gray-400 uppercase tracking-wider group-hover:border-primary/30 transition-colors duration-300">
                          {badge.label}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-medium text-primary-cream group-hover:text-primary transition-colors duration-300">{card.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{card.description}</p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4">
                  {card.stack.map(tag => (
                    <span 
                      key={tag}
                      className="text-[8px] text-primary/60 border border-primary/20 px-2 py-0.5 rounded-full uppercase tracking-wider group-hover:border-primary/40 group-hover:text-primary/90 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 relative z-10">
                <p className="text-[9px] text-primary/40 italic group-hover:text-primary/70 transition-colors duration-300">
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
