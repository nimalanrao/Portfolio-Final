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
            scale: 1.05,
            filter: "brightness(3)",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[9999] bg-black overflow-hidden font-inter"
        >
          {/* Full Screen Progress Bar */}
          <motion.div 
            className="absolute bottom-0 left-0 w-full bg-primary/30"
            initial={{ height: "0%" }}
            animate={{ height: `${progress}%` }}
            transition={{ duration: 0.1, ease: "linear" }}
          />

          {/* Number in Bottom Right */}
          <div className="absolute bottom-12 right-12 z-10">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <span className="text-9xl md:text-[12rem] font-bold text-primary-cream tabular-nums tracking-tighter leading-none select-none opacity-80">
                {Math.floor(progress)}
              </span>
            </motion.div>
          </div>

          <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
