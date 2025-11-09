import React from "react";
import { cn } from "@/lib/utils";
import { colors, shadows, spacing, borderRadius } from "@/design/tokens";

interface BadgeProps {
    children: React.ReactNode;
    variant?: "default" | "compact";
    color?: string;
    borderColor?: string;
    className?: string;
    shadow?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
    children,
    variant = "default",
    color = colors.brand.aqua,
    borderColor = colors.brand.aqua,
    className,
    shadow = false,
    ...props
}) => {
    const baseClasses = "inline-block border rounded-full";

    const variantClasses = {
        default: "padding-responsive-md text-responsive-md",
        compact: "px-6 py-1 text-responsive-md",
    };

    const shadowClass = shadow ? "shadow-lg" : "";

    return (
        <span
            className={cn(
                baseClasses,
                variantClasses[variant],
                shadowClass,
                className,
            )}
            style={{
                color,
                borderColor,
                borderRadius: borderRadius.full,
                boxShadow: shadow ? shadows.lg : "none",
            }}
            {...props}
        >
            {children}
        </span>
    );
};
