import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { MorphingText } from "./ui/liquid-text";

export default function SectionHero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const morphTexts = [
    "Digital Creative",
    "Web Dev",
    "UI/UX Design",
  ];

  return (
    <section ref={containerRef} className="relative h-screen w-full p-4 md:p-6 bg-black overflow-hidden flex items-center justify-center">
      <motion.div
        style={{ scale, opacity, y }}
        className="relative h-full w-full rounded-2xl md:rounded-[2.5rem] overflow-hidden group shadow-[0_0_100px_rgba(0,0,0,0.5)]"
      >
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
            type="video/mp4"
          />
        </video>

        {/* Noise Overlay */}
        <div className="absolute inset-0 noise-overlay opacity-[0.7] mix-blend-overlay pointer-events-none" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 pointer-events-none" />

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-16">
          <div className="grid grid-cols-12 gap-6 items-end">
            <div className="col-span-12 lg:col-span-8">
              <div className="flex flex-col text-left">
                <span className="text-primary/60 text-[10px] sm:text-xs tracking-[0.4em] uppercase mb-4 ml-2">
                  Available for work · KL, Malaysia
                </span>
                <h1 className="sr-only">Nithyanatha | Digital Creative &amp; Web Developer Portfolio</h1>
                <MorphingText
                  texts={morphTexts}
                  className="text-primary-cream !text-[clamp(2.5rem,10vw,8rem)] !text-left !mx-0 font-medium leading-[0.9] tracking-[-0.05em]"
                />
              </div>
            </div>

            <div className="col-span-12 md:col-span-8 lg:col-span-4 space-y-6 md:space-y-8">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="text-primary/80 text-xs sm:text-sm md:text-base leading-relaxed max-w-sm"
              >
                Front-End Developer · Content Creator. Building clean visuals, smooth user experiences, and modern digital work that helps brands stand out.
              </motion.p>

              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="#contact"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  whileTap={{ scale: 0.95, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  viewport={{ once: true }}
                  className="group flex items-center gap-2 bg-primary px-1 py-1 rounded-full transition-all duration-500 ease-out hover:shadow-[0_0_30px_rgba(222,219,200,0.6)]"
                >
                  <span className="text-black font-medium text-sm sm:text-base pl-6 pr-2 py-2 group-hover:-translate-x-1 transition-transform duration-500">
                    Get In Touch
                  </span>
                  <div className="bg-black rounded-full w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center transition-all duration-500 group-hover:bg-white group-hover:-rotate-45">
                    <ArrowRight className="text-primary w-5 h-5 group-hover:text-black transition-colors duration-500" />
                  </div>
                </motion.a>

                <motion.a
                  href="#projects"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  whileTap={{ scale: 0.95, rotate: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  viewport={{ once: true }}
                  className="group flex items-center gap-4 border border-white/20 hover:border-white/60 px-6 py-3 rounded-full transition-all duration-500 ease-out liquid-glass hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                >
                  <span className="text-white font-sans font-medium text-sm sm:text-base group-hover:tracking-widest transition-all duration-500">
                    View My Work
                  </span>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
