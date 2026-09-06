import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5A0BFB] disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-br from-[#5A0BFB] to-[#7B2FFF] text-white hover:from-[#4908D4] hover:to-[#6A28E5] shadow-[0_0_25px_rgba(90,11,251,0.35)] hover:shadow-[0_0_35px_rgba(90,11,251,0.5)] border border-[#7B2FFF]/30",
        secondary:
          "bg-[#13131A] text-white hover:bg-[#1E1E2E] border border-[#1E1E2E] hover:border-[#5A0BFB]/50",
        outline:
          "border border-white/20 bg-transparent text-white hover:bg-white/10 hover:border-white/40",
        ghost: "text-white/80 hover:text-white hover:bg-white/5",
        link: "text-[#5A0BFB] underline-offset-4 hover:underline",
        white: "bg-white text-[#0A0A0F] hover:bg-gray-100 shadow-[0_0_30px_rgba(255,255,255,0.2)] font-bold",
      },
      size: {
        default: "h-11 px-5 py-2.5",
        sm: "h-9 rounded-lg px-3.5 text-xs",
        lg: "h-14 rounded-xl px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
