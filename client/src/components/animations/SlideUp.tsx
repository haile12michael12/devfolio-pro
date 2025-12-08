import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface SlideUpProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  distance?: number;
}

export function SlideUp({ 
  children, 
  className = "", 
  delay = 0,
  duration = 0.6,
  distance = 60
}: SlideUpProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ 
        opacity: 0, 
        y: distance 
      }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0 
      } : { 
        opacity: 0, 
        y: distance 
      }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {children}
    </motion.div>
  );
}
