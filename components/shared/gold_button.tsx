"use client";

import { Button } from "@/ui/button";

interface GoldButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}

export function GoldButton({
  children,
  type = "button",
  disabled = false,
  className = "",
  onClick,
}: GoldButtonProps) {
  return (
    <Button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`bg-[url('/images/common/bg_button_gold.png')] bg-[#FFDF80] bg-cover bg-no-repeat text-black shadow font-bold transition-all hover:scale-105 ${
        disabled
          ? "cursor-not-allowed opacity-90 hover:scale-100"
          : "cursor-pointer"
      } ${className}`}
    >
      {children}
    </Button>
  );
}
