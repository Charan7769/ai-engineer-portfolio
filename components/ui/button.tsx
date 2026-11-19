import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "solid" | "outline" | "ghost" | "link";
    size?: "sm" | "md" | "lg";
    href?: string;
    target?: string;
    rel?: string;
    download?: boolean | string;
}

export const Button = React.forwardRef<any, ButtonProps>(
    (
    {
        className,
        variant = "solid",
        size = "md",
        children,
        href,
        target,
        rel,
        download,
        ...props
    },
    ref
)=> {
        const classes = cn(
            "inline-flex items-center justify-center font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] cursor-pointer select-none",
            // Variants
            variant === "solid" && "bg-primary hover:bg-primary/90 text-white shadow-md shadow-primary/20",
            variant === "outline" && "border border-border bg-transparent hover:bg-muted text-foreground",
            variant === "ghost" && "bg-transparent hover:bg-muted text-foreground",
            variant === "link" && "bg-transparent text-primary hover:underline p-0",
            // Sizes
            size === "sm" && "px-3 py-1.5 text-sm",
            size === "md" && "px-4 py-2 text-base",
            size === "lg" && "px-6 py-3 text-lg",
            className
        );

        if (href) {
            return (
                <a
                ref={ref}
                href={href}
                target={target}
                rel={rel}
                download={download}
                className={classes}
                {...(props as any)}
                >
                    {children}
                </a>
            );
        }

        return (
            <button
                ref={ref}
                className={classes}
                {...props}
            >
                {children}
            </button>
        );
    }
);

Button.displayName = "Button";
export default Button;

