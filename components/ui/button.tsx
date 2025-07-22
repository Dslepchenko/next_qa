import * as React from "react";

import { cn } from "@/lib/utils";

function Button({
  className,
  ...props
}: React.ComponentProps<"button"> & {
  asChild?: boolean;
}) {
  return (
    <button
      data-slot="button"
      className={cn("cursor-pointer", className)}
      {...props}
    />
  );
}

export { Button };
