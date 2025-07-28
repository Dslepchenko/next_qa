"use client";

import { motion } from "framer-motion";
import { Button } from "@/ui/button";
import { cn } from "@/lib/utils";

export function AnimatedButton({
  children,
  className,
  onClick,
  type,
  disabled,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Button
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={cn("font-heebo cursor-pointer", className)}
      >
        {children}
      </Button>
    </motion.div>
  );
}
