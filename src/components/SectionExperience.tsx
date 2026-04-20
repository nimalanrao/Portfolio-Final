import { motion } from "motion/react";
import WordsPullUp from "./animations/WordsPullUp";
import { useTranslation } from "react-i18next";

export default function SectionExperience() {
  const { t } = useTranslation();

  const experiences = [
    {
      role: t("exp_barista"),
      period: "2025 – 2026",
      details: [
        t("exp_detail_1"),
        t("exp_detail_2"),
        t("exp_detail_3"),
        t("exp_detail_4")
      ]
    }
  ];

  return (
    <section id="experience" className="bg-black py-32 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto space-y-24">
        <header className="space-y-4">
          <span className="text-primary text-[10px] sm:text-xs tracking-widest uppercase block opacity-70">
            {t("journey")}
          </span>
          <WordsPullUp
            text={t("experience")}
            className="text-primary-cream text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight"
          />
        </header>

        <div className="space-y-6 max-w-4xl">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="liquid-glass p-8 md:p-12 rounded-[2rem] grid grid-cols-1 md:grid-cols-4 gap-8 group"
            >
              <div className="col-span-1">
                <p className="text-primary/60 font-mono text-sm group-hover:text-primary transition-colors">
                  {exp.period}
                </p>
              </div>
              <div className="col-span-3 space-y-6">
                <h3 className="text-2xl md:text-3xl font-medium text-primary-cream">
                  {exp.role}
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {exp.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-400 text-sm">
                      <div className="w-1 h-1 bg-primary rounded-full group-hover:scale-150 transition-transform" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
