import React from "react";
import { Github } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function SectionFooter() {
  const { t } = useTranslation();

  return (
    <footer id="contact" className="bg-black py-24 px-6 border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none" />
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
            <div className="space-y-6 max-w-2xl">
              <h2 className="text-4xl sm:text-5xl md:text-6xl text-primary font-medium leading-tight">
                {t("footer_heading")}
              </h2>
              <div className="flex flex-wrap gap-12 pt-4">
                <div>
                  <p className="text-primary/40 text-[10px] uppercase tracking-widest mb-2">{t("location")}</p>
                  <p className="text-primary-cream">{t("kl_malaysia")}</p>
                </div>
                <div>
                  <p className="text-primary/40 text-[10px] uppercase tracking-widest mb-2">{t("availability")}</p>
                  <p className="text-primary-cream">{t("available_worldwide")}</p>
                </div>
                <div>
                  <p className="text-primary/40 text-[10px] uppercase tracking-widest mb-2">{t("email")}</p>
                  <a href="mailto:nithyananthanimalan@gmail.com" className="text-primary-cream hover:text-primary transition-colors">nithyananthanimalan@gmail.com</a>
                </div>
                <div>
                  <p className="text-primary/40 text-[10px] uppercase tracking-widest mb-2">{t("phone")}</p>
                  <a href="tel:+60123454214" className="text-primary-cream hover:text-primary transition-colors">+6012-345-4214</a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-white/5">
            <div className="flex items-center gap-6">
              <div className="text-primary-cream font-medium tracking-tighter text-2xl">Nithyanantha</div>
              <a href="/privacy" className="text-[10px] text-gray-500 uppercase tracking-widest hover:text-primary transition-colors">{t("privacy_policy")}</a>
            </div>
            <div className="text-[10px] text-gray-500 uppercase tracking-widest text-center md:text-right">
              © 2026 Nithyanantha. {t("digital_creative")}. <br className="md:hidden" />
              {t("built_for_speed")}
            </div>
          </div>
        </div>
      </div>

      {/* Pinned Github Handle */}
      <a 
        href="https://github.com/nimalanrao" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 liquid-glass font-sans text-gray-400 hover:text-primary-cream px-4 py-2 rounded-full transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(222,219,200,0.2)]"
      >
        <Github size={16} className="group-hover:scale-110 transition-transform duration-300" />
        <span className="text-xs font-medium tracking-wide">@nimalanrao</span>
      </a>
    </footer>
  );
}
