import ProgressScroll from "./components/ProgressScroll";
import Navbar from "./components/Navbar";
import SectionHero from "./components/SectionHero";
import { AboutScrollDemo } from "./components/AboutScrollDemo";
import SectionExpertise from "./components/SectionExpertise";
import SectionDevWorkflow from "./components/SectionDevWorkflow";
import SectionProjects from "./components/SectionProjects";
import SectionExperienceTimeline from "./components/SectionExperienceTimeline";
import SectionFooter from "./components/SectionFooter";
import AnalyticsTracker from "./components/AnalyticsTracker";
import CustomCursor from "./components/CustomCursor";
import SmoothScroll from "./components/SmoothScroll";
import LanguageSelection from "./components/LanguageSelection";
import LoadingScreen from "./components/LoadingScreen";
import React from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence } from "framer-motion";

export default function App() {
  const { t } = useTranslation();
  const [hasSelectedLanguage, setHasSelectedLanguage] = React.useState(false);

  return (
    <AnimatePresence mode="wait">
      {!hasSelectedLanguage ? (
        <LanguageSelection key="lang-select" onSelect={() => setHasSelectedLanguage(true)} />
      ) : (
        <SmoothScroll key="main-app">
          <main className="relative bg-black min-h-screen selection:bg-primary selection:text-black font-almarai overflow-x-hidden text-primary-cream">
            {/* Background Systems */}
            <CustomCursor />
            <LoadingScreen />
            <AnalyticsTracker />
      <ProgressScroll />
      <Navbar />

      {/* Sections */}
      <SectionHero />
      <AboutScrollDemo />
      <SectionExpertise />
      <SectionDevWorkflow />
      <SectionProjects />
      <SectionExperienceTimeline />

      {/* Privacy Policy Teaser / Section */}
      <section id="privacy" className="bg-black py-12 px-6 border-t border-white/5 opacity-30 hover:opacity-100 transition-opacity duration-500">
        <div className="max-w-7xl mx-auto text-[10px] uppercase tracking-[0.2em] text-center space-y-4">
          <p>{t("privacy_title")}</p>
          <p className="max-w-2xl mx-auto normal-case tracking-normal opacity-60">
            {t("privacy_desc_long")}
          </p>
        </div>
      </section>

      <SectionFooter />
      </main>
    </SmoothScroll>
      )}
    </AnimatePresence>
  );
}
