import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const CustomInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "border-none focus-within:outline-none focus:outline-none focus:ring-0",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
CustomInput.displayName = "Input";

export { CustomInput };
