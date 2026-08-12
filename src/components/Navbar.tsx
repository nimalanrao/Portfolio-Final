import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { i18n, t } = useTranslation();

  const languages = [
    { code: "en", label: "EN", name: "English" },
    { code: "ms", label: "MS", name: "Malay" },
    { code: "zh", label: "ZH", name: "中文" },
  ];

  const currentLangCode = (i18n.language || "en").slice(0, 2);
  const currentLangObj = languages.find((l) => l.code === currentLangCode) || languages[0];

  const handleLanguageToggle = () => {
    const currentIndex = languages.findIndex((l) => l.code === currentLangCode);
    const nextLang = languages[(currentIndex + 1) % languages.length];
    i18n.changeLanguage(nextLang.code);
  };

  const navItems = [
    { name: t("nav_about"), href: "#about" },
    { name: t("nav_services"), href: "#services" },
    { name: t("nav_skills"), href: "#skills" },
    { name: t("nav_projects"), href: "#projects" },
    { name: t("nav_experience"), href: "#experience" },
    { name: t("nav_contact"), href: "#contact" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (href === "#hero" || href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const target = document.querySelector(href);
    if (target) {
      const navbarOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Centered Desktop Floating Navbar */}
      <div className="fixed top-6 left-0 right-0 z-[100] hidden md:flex justify-center items-center pointer-events-none">
        <motion.nav
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className={`pointer-events-auto font-sans px-4 py-2 flex items-center gap-4 rounded-full transition-all duration-300 ${
            isScrolled
              ? "liquid-glass shadow-2xl border border-white/15 backdrop-blur-2xl bg-black/80"
              : "bg-black/60 backdrop-blur-md border border-white/10"
          }`}
        >
          {/* Clickable Brand Logo Button */}
          <button
            onClick={(e) => handleNavClick(e, "#hero")}
            className="text-primary-cream font-medium tracking-tighter text-base pr-3 border-r border-white/10 hover:text-primary transition-colors cursor-pointer shrink-0"
          >
            Nithyanantha
          </button>

          {/* Navigation Links */}
          <div className="flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-3 py-1.5 rounded-full text-xs uppercase tracking-widest text-primary/70 hover:text-primary transition-all duration-300 relative group cursor-pointer"
              >
                {item.name}
                <span className="absolute inset-0 bg-primary/10 rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>

          {/* Integrated Language Switcher */}
          <div className="pl-3 border-l border-white/10 shrink-0">
            <button
              onClick={handleLanguageToggle}
              className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary-cream hover:text-primary transition-colors cursor-pointer px-2.5 py-1 rounded-full bg-white/5 border border-white/10 hover:border-primary/40"
              title={`Current Language: ${currentLangObj.name}. Tap to change.`}
            >
              <Globe className="w-3.5 h-3.5 text-primary" />
              <span>{currentLangObj.label}</span>
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Burger Trigger & Language Toggle */}
      <div className="fixed top-6 right-6 z-[110] md:hidden flex items-center gap-2">
        <button
          onClick={handleLanguageToggle}
          className="h-10 px-3 rounded-full liquid-glass flex items-center gap-1.5 text-primary-cream shadow-xl border border-white/10 text-xs font-mono uppercase"
        >
          <Globe className="w-3.5 h-3.5 text-primary" />
          <span>{currentLangObj.label}</span>
        </button>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-10 h-10 rounded-full liquid-glass flex items-center justify-center text-primary-cream shadow-xl border border-white/10 cursor-pointer"
        >
          {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Fullscreen Mobile Menu Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[105] liquid-glass font-sans backdrop-blur-3xl flex flex-col items-center justify-center md:hidden border-none px-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center gap-7 w-full"
            >
              <button
                onClick={(e) => handleNavClick(e, "#hero")}
                className="text-primary-cream font-medium tracking-tighter text-3xl mb-2 cursor-pointer"
              >
                Nithyanantha
              </button>

              {/* Language Switcher in Mobile Drawer */}
              <div className="flex items-center gap-2 bg-white/5 p-1.5 rounded-full border border-white/10 mb-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => i18n.changeLanguage(lang.code)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                      currentLangCode === lang.code
                        ? "bg-primary text-black shadow-md"
                        : "text-primary/60 hover:text-primary"
                    }`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>

              {navItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.05 }}
                  className="text-xl uppercase tracking-[0.25em] text-primary/70 hover:text-primary transition-colors font-medium cursor-pointer"
                >
                  {item.name}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-6 flex flex-col items-center gap-2 text-primary/40 text-[10px] uppercase tracking-widest"
              >
                <p>{t("kl_malaysia")}</p>
                <a href="mailto:nithyananthanimalan@gmail.com" className="hover:text-primary transition-colors">
                  nithyananthanimalan@gmail.com
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
