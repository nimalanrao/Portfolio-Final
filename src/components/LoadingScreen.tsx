import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsVisible(false), 800);
          return 100;
        }
        return prev + Math.random() * 8;
      });
    }, 80);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.1,
            filter: "blur(60px) brightness(4) contrast(1.5)",
            transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden font-inter"
        >
          {/* Burn Effect Mask (Simulated with radial gradient) */}
          <motion.div
            className="absolute inset-0 bg-primary/20 mix-blend-screen"
            initial={{ opacity: 0 }}
            animate={progress === 100 ? { 
              opacity: [0, 1, 0],
              scale: [1, 1.5, 2],
              filter: ["blur(0px)", "blur(20px)", "blur(100px)"],
            } : {}}
            transition={{ duration: 1.2 }}
          />

          {/* Full Screen Progress Fill */}
          <motion.div 
            className="absolute bottom-0 left-0 w-full bg-primary/25"
            initial={{ height: "0%" }}
            animate={{ height: `${progress}%` }}
            transition={{ duration: 0.1, ease: "linear" }}
          />

          {/* Grainy Noise Overlay (Burning texture) */}
          <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none mix-blend-overlay" />

          <div className="absolute bottom-12 right-12 z-10">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <span className="text-9xl md:text-[15rem] font-bold text-primary-cream tabular-nums tracking-tighter leading-none select-none opacity-80 filter drop-shadow-[0_0_30px_rgba(222,219,200,0.3)]">
                {Math.floor(progress)}
              </span>
            </motion.div>
          </div>

          {/* Random "Flash" effects for burning feel */}
          <AnimatePresence>
            {progress === 100 && (
              <motion.div 
                className="absolute inset-0 bg-white opacity-0"
                animate={{ opacity: [0, 0.3, 0] }}
                transition={{ duration: 0.1, repeat: 2 }}
              />
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
