"use client";

import { AnimatedButton } from "@/ui/animated-button";

interface GreenButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function GreenButton({
  children,
  className = "",
  onClick,
}: GreenButtonProps) {
  return (
    <AnimatedButton
      onClick={onClick}
      className={`bg-primary bg-[url('/images/common/bg_button_green.png')] bg-contain bg-no-repeat text-black px-8 py-2 lg:py-4 font-semibold transition-colors min-w-[300px] ${className}`}
    >
      {children}
    </AnimatedButton>
  );
}
