import { useRef } from "react";
import { useScroll } from "motion/react";
import WordsPullUpMultiStyle from "./animations/WordsPullUpMultiStyle";
import AnimatedLetter from "./animations/AnimatedLetter";

export default function SectionAbout() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const segments = [
    { text: "Nithyanatha is a digital creative based in Kuala Lumpur, Malaysia.", className: "font-normal" },
  ];

  const bioText = "Combines technical ability with real-world operations experience to build clean visuals, smooth user experiences, and modern digital work that helps brands stand out. Motivated, detail-oriented, and able to work independently or in fast-paced teams.";
  const bioChars = bioText.split("");

  return (
    <section id="about" className="bg-black py-32 px-4 sm:px-8 flex items-center justify-center overflow-hidden">
      <div className="max-w-6xl w-full liquid-glass p-12 md:p-24 rounded-[3rem] space-y-24">
        <div className="space-y-4">
          <span className="text-primary text-[10px] sm:text-xs tracking-widest uppercase block text-center opacity-70">
            Who I Am
          </span>
          <WordsPullUpMultiStyle
            segments={segments}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-4xl mx-auto leading-[0.95] sm:leading-[0.9] text-center"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div ref={scrollRef} className="text-left space-y-8">
            <p className="text-gray-300 font-sans text-lg sm:text-xl md:text-2xl leading-relaxed">
              {bioText}
            </p>
            
            <div className="pt-8 border-t border-white/10 space-y-2">
              <p className="text-primary font-medium text-sm">Education</p>
              <p className="text-gray-400 text-base">SMK Kepong Baru · SPM 2025</p>
            </div>
          </div>

          <div className="space-y-12">
            <div className="space-y-4">
              <p className="text-primary/60 text-[10px] tracking-widest uppercase">Languages</p>
              <div className="flex flex-wrap gap-4">
                {["English (Fluent)", "Malay (Fluent)", "Tamil (Intermediate)"].map(lang => (
                  <span key={lang} className="text-primary-cream text-sm border border-white/10 px-4 py-2 rounded-full">
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-primary/60 text-[10px] tracking-widest uppercase">Key Traits</p>
              <div className="grid grid-cols-2 gap-4">
                {["Strong work ethic", "Detail-oriented", "Fast learner", "Creative thinker", "Problem solver", "Team player"].map(trait => (
                  <div key={trait} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-gray-400 text-sm">{trait}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
