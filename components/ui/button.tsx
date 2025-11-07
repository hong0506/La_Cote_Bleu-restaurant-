import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost'
  size?: 'default' | 'sm' | 'lg'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    const variants = {
      default: "bg-gold hover:bg-gold-600 text-navy shadow-lg hover:shadow-xl hover:scale-105",
      outline: "border-2 border-gold text-gold hover:bg-gold hover:text-navy shadow-md hover:shadow-lg hover:scale-105",
      ghost: "hover:bg-navy-100 text-navy hover:scale-105",
    }
    
    const sizes = {
      default: "px-8 py-3 text-base",
      sm: "px-4 py-2 text-sm",
      lg: "px-10 py-4 text-lg",
    }

    return (
      <button
        className={cn(
          "relative inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 overflow-hidden group",
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      >
        {/* Shine effect */}
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
        <span className="relative">{props.children}</span>
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button }
