import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, X, Download, FastForward } from 'lucide-react';

interface VideoPlayerModalProps {
  src: string;
  onClose: () => void;
}

export default function VideoPlayerModal({ src, onClose }: VideoPlayerModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [showControls, setShowControls] = useState(true);
  const controlsTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handlePlayPause = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const p = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(p);
    }
  };

  const handleScrub = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    const scrubTime = Number(e.target.value);
    if (videoRef.current) {
      const newTime = (scrubTime / 100) * videoRef.current.duration;
      videoRef.current.currentTime = newTime;
      setProgress(scrubTime);
    }
  };

  const toggleSpeed = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      let newSpeed = speed === 1 ? 1.5 : speed === 1.5 ? 2 : 1;
      videoRef.current.playbackRate = newSpeed;
      setSpeed(newSpeed);
    }
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) setShowControls(false);
    }, 2000);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-xl p-4 md:p-8"
        onClick={onClose}
        onMouseMove={handleMouseMove}
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 w-12 h-12 rounded-full liquid-glass flex items-center justify-center text-white hover:bg-white/10 transition-colors z-[210]"
        >
          <X className="w-6 h-6" />
        </button>

        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-5xl rounded-[2rem] overflow-hidden shadow-2xl bg-black"
          onClick={(e) => e.stopPropagation()}
        >
          <video
            ref={videoRef}
            src={src}
            className="w-full h-auto aspect-video object-cover"
            autoPlay
            muted
            playsInline
            loop
            onTimeUpdate={handleTimeUpdate}
            onClick={handlePlayPause}
          />

          <AnimatePresence>
            {showControls && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute bottom-0 left-0 right-0 pt-32 pb-4 px-4 sm:pb-6 sm:px-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end"
              >
                <div className="flex flex-col gap-3 sm:gap-4 max-w-5xl mx-auto w-full">
                  {/* Scrubber */}
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={progress || 0}
                    onChange={handleScrub}
                    className="w-full h-1 sm:h-1.5 bg-white/30 rounded-lg appearance-none cursor-pointer accent-primary hover:h-2 transition-all"
                  />
                  
                  {/* Controls Row */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <button 
                        onClick={handlePlayPause}
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/90 hover:bg-primary flex items-center justify-center text-black hover:scale-105 transition-all"
                      >
                        {isPlaying ? <Pause className="w-4 h-4 sm:w-5 sm:h-5" /> : <Play className="w-4 h-4 sm:w-5 sm:h-5 ml-1" />}
                      </button>
                    </div>

                    <div className="flex items-center gap-3 sm:gap-4">
                      <button 
                        onClick={toggleSpeed}
                        className="px-2 py-1 sm:px-3 sm:py-1.5 rounded-full bg-black/40 border border-white/10 text-white text-[10px] sm:text-xs font-medium hover:bg-white/20 transition-colors flex items-center gap-1.5 backdrop-blur-md"
                      >
                        <FastForward className="w-3 h-3" />
                        {speed}x
                      </button>
                      
                      <a 
                        href={src}
                        download
                        onClick={(e) => e.stopPropagation()}
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                      >
                        <Download className="w-3 h-3 sm:w-4 sm:h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
