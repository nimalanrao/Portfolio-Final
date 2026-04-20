import React from "react";
import { motion, useTransform, type MotionValue } from "framer-motion";

interface AnimatedLetterProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
  key?: React.Key;
}

export default function AnimatedLetter({
  char,
  progress,
  range,
}: AnimatedLetterProps) {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <motion.span style={{ opacity }} className="inline-block transition-opacity duration-300">
      {char === " " ? "\u00A0" : char}
    </motion.span>
  );
}
