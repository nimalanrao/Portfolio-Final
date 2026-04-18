import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface Segment {
  text: string;
  className: string;
}

interface WordsPullUpMultiStyleProps {
  segments: Segment[];
  className?: string;
  delay?: number;
}

export default function WordsPullUpMultiStyle({
  segments,
  className = "",
  delay = 0,
}: WordsPullUpMultiStyleProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });

  // Flatten segments into words with their styles
  const allWords = segments.flatMap((segment) =>
    segment.text.split(" ").map((word) => ({
      word,
      style: segment.className,
    }))
  );

  return (
    <div ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {allWords.map((item, i) => (
        <span
          key={i}
          className={`inline-block overflow-hidden mr-[0.25em] last:mr-0 ${item.style}`}
        >
          <motion.span
            initial={{ y: "100%" }}
            animate={isInView ? { y: 0 } : { y: "100%" }}
            transition={{
              duration: 0.8,
              delay: delay + i * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="inline-block"
          >
            {item.word}
          </motion.span>
        </span>
      ))}
    </div>
  );
}
