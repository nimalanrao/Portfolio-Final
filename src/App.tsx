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
import LoadingScreen from "./components/LoadingScreen";
import React from "react";

export default function App() {
  return (
    <SmoothScroll>
      <main className="relative bg-black min-h-screen selection:bg-primary selection:text-black font-almarai overflow-x-clip text-primary-cream">
        {/* Cinematic Vignette */}
        <div className="vignette" />
        
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
        <SectionFooter />
      </main>
    </SmoothScroll>
  );
}
