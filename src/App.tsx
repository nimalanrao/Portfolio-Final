/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Github } from "lucide-react";
import ProgressScroll from "./components/ProgressScroll";
import Navbar from "./components/Navbar";
import SectionHero from "./components/SectionHero";
import SectionAbout from "./components/SectionAbout";
import SectionExpertise from "./components/SectionExpertise";
import SectionProjects from "./components/SectionProjects";
import SectionExperienceTimeline from "./components/SectionExperienceTimeline";

export default function App() {
  return (
    <main className="relative bg-black min-h-screen selection:bg-primary selection:text-black font-almarai overflow-x-hidden">
      <ProgressScroll />
      <Navbar />
      <SectionHero />
      <SectionAbout />
      <SectionExpertise />
      <SectionProjects />
      <SectionExperienceTimeline />
      
      {/* Footer / Contact Section */}
      <footer id="contact" className="bg-black py-24 px-6 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none" />
        <div className="max-w-7xl mx-auto space-y-16 relative z-10">
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
              <div className="space-y-6 max-w-2xl">
                <h2 className="text-4xl sm:text-5xl md:text-6xl text-primary font-medium leading-tight">
                  Open for freelance, collaborations, and full-time roles.
                </h2>
                <div className="flex flex-wrap gap-12 pt-4">
                  <div>
                    <p className="text-primary/40 text-[10px] uppercase tracking-widest mb-2">Location</p>
                    <p className="text-primary-cream">Kuala Lumpur, Malaysia</p>
                  </div>
                  <div>
                    <p className="text-primary/40 text-[10px] uppercase tracking-widest mb-2">Availability</p>
                    <p className="text-primary-cream">Available Worldwide</p>
                  </div>
                  <div>
                    <p className="text-primary/40 text-[10px] uppercase tracking-widest mb-2">Email</p>
                    <a href="mailto:nithyananthanimalan@gmail.com" className="text-primary-cream hover:text-primary transition-colors">nithyananthanimalan@gmail.com</a>
                  </div>
                  <div>
                    <p className="text-primary/40 text-[10px] uppercase tracking-widest mb-2">Phone</p>
                    <a href="tel:+60123454214" className="text-primary-cream hover:text-primary transition-colors">+6012-345-4214</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-8">
              <div className="text-primary-cream font-medium tracking-tighter text-2xl">Nithyanantha</div>
              <div className="text-[10px] text-gray-500 uppercase tracking-widest">
                © 2026 Nithyanantha. Digital Creative.
              </div>
            </div>
          </div>
        </div>
      </footer>

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
    </main>
  );
}
