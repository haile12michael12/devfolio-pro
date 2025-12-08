import { motion, type HTMLMotionProps } from "framer-motion";
import { type ReactNode } from "react";

interface ScaleOnHoverProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  scale?: number;
  duration?: number;
}

export function ScaleOnHover({ 
  children, 
  className = "", 
  scale = 1.05,
  duration = 0.3,
  ...props
}: ScaleOnHoverProps) {
  return (
    <motion.div
      className={className}
      whileHover={{ scale }}
      whileTap={{ scale: 0.98 }}
      transition={{
        duration,
        ease: "easeOut"
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
