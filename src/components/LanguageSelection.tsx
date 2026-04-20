import React from "react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

interface LanguageSelectionProps {
  onSelect: () => void;
}

export default function LanguageSelection({ onSelect }: LanguageSelectionProps) {
  const { i18n } = useTranslation();

  const handleSelect = (lang: string) => {
    i18n.changeLanguage(lang);
    onSelect();
  };

  const languages = [
    { code: "en", label: "English", native: "English" },
    { code: "ms", label: "Malay", native: "Bahasa Melayu" },
    { code: "zh", label: "Chinese", native: "中文" },
  ];

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, filter: "blur(20px)" }}
      className="fixed inset-0 z-[10000] bg-black flex flex-col items-center justify-center space-y-12 px-6"
    >
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: `radial-gradient(#dedbc8 1px, transparent 1px)`, 
          backgroundSize: '80px 80px' 
        }} 
      />

      <header className="text-center space-y-4 relative z-10">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.5, y: 0 }}
          className="text-primary text-[10px] tracking-[0.4em] uppercase"
        >
          {t("select_language")}
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-primary-cream text-4xl sm:text-5xl font-medium tracking-tighter"
        >
          {t("choose_experience")}
        </motion.h1>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl relative z-10">
        {languages.map((lang, idx) => (
          <motion.button
            key={lang.code}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + idx * 0.1 }}
            onClick={() => handleSelect(lang.code)}
            className="liquid-glass group p-8 rounded-[2rem] flex flex-col items-center justify-center space-y-4 border border-white/5 hover:border-primary/30 transition-all duration-500"
          >
            <span className="text-gray-500 text-xs tracking-widest uppercase group-hover:text-primary transition-colors">
              {lang.label}
            </span>
            <span className="text-primary-cream text-2xl font-medium">
              {lang.native}
            </span>
          </motion.button>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1 }}
        className="text-[10px] uppercase tracking-[0.2em] text-primary/60"
      >
        Nithya Creative Studio
      </motion.div>
    </motion.div>
  );
}
