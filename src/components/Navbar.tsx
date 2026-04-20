import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t } = useTranslation();

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
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <>
      {/* Desktop Floating Navbar */}
      <AnimatePresence>
        {isScrolled && !isMenuOpen && (
          <motion.nav
            initial={{ y: -100, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1 }}
            exit={{ y: -100, x: "-50%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-6 left-1/2 z-[100] liquid-glass font-sans px-2 py-2 hidden md:flex items-center gap-1 min-w-[500px] justify-between rounded-full"
          >
            <div className="flex items-center gap-1 w-full px-2">
              <div className="text-primary-cream font-medium tracking-tighter text-lg pr-4 border-r border-white/10">
                Nithyanantha
              </div>
              <div className="flex items-center gap-1 flex-1 justify-center">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="px-3 py-1.5 rounded-full text-xs uppercase tracking-widest text-primary/60 hover:text-primary transition-all duration-300 relative group"
                  >
                    {item.name}
                    <motion.div
                      className="absolute inset-0 bg-primary/10 rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity"
                      layoutId="nav-hover"
                    />
                  </a>
                ))}
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Mobile Burger Trigger */}
      <div className="fixed top-6 right-6 z-[110] md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-12 h-12 rounded-full liquid-glass flex items-center justify-center text-primary-cream shadow-xl"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[105] liquid-glass font-sans backdrop-blur-3xl flex flex-col items-center justify-center md:hidden border-none"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center gap-8"
            >
              <div className="text-primary-cream font-medium tracking-tighter text-4xl mb-8">
                Nithyanantha
              </div>
              {navItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="text-2xl uppercase tracking-[0.3em] text-primary/60 hover:text-primary transition-colors font-medium"
                >
                  {item.name}
                </motion.a>
              ))}
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-12 flex flex-col items-center gap-4 text-primary/40 text-[10px] uppercase tracking-widest"
              >
                <p>{t("kl_malaysia")}</p>
                <a href="mailto:nithyananthanimalan@gmail.com">nithyananthanimalan@gmail.com</a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
