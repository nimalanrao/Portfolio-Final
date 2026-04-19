/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import ProgressScroll from "./components/ProgressScroll";
import Navbar from "./components/Navbar";
import SectionHero from "./components/SectionHero";
import SectionAbout from "./components/SectionAbout";
import SectionExpertise from "./components/SectionExpertise";
import SectionDevWorkflow from "./components/SectionDevWorkflow";
import SectionProjects from "./components/SectionProjects";
import SectionExperienceTimeline from "./components/SectionExperienceTimeline";
import SectionFooter from "./components/SectionFooter";
import LoadingScreen from "./components/LoadingScreen";
import AnalyticsTracker from "./components/AnalyticsTracker";
import CustomCursor from "./components/CustomCursor";
import SmoothScroll from "./components/SmoothScroll";

export default function App() {
  return (
    <SmoothScroll>
      <main className="relative bg-black min-h-screen selection:bg-primary selection:text-black font-almarai overflow-x-hidden text-primary-cream">
        {/* Background Systems */}
        <CustomCursor />
        <LoadingScreen />
        <AnalyticsTracker />
      <ProgressScroll />
      <Navbar />

      {/* Sections */}
      <SectionHero />
      <SectionAbout />
      <SectionExpertise />
      <SectionDevWorkflow />
      <SectionProjects />
      <SectionExperienceTimeline />

      {/* Privacy Policy Teaser / Section */}
      <section id="privacy" className="bg-black py-12 px-6 border-t border-white/5 opacity-30 hover:opacity-100 transition-opacity duration-500">
        <div className="max-w-7xl mx-auto text-[10px] uppercase tracking-[0.2em] text-center space-y-4">
          <p>Privacy & Data Handling</p>
          <p className="max-w-2xl mx-auto normal-case tracking-normal opacity-60">
            We value your privacy. This site uses minimal analytics to understand visitor demographics. 
            No sensitive personal identifiable information is stored or sold. 
            Cookies are only used for essential site functions.
          </p>
        </div>
      </section>

      <SectionFooter />
      </main>
    </SmoothScroll>
  );
}
