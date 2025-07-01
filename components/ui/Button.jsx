import React from "react";

export const Button = ({
    variant = "primary",
    size = "md",
    children,
    className = "",
    leftIcon = <></>,
    rightIcon = <></>,
    darkMode = false,
    style = {},
    ...props
}) => {
    const baseClasses = `
    font-semibold transition-all duration-200 ease-in-out
    flex items-center justify-center gap-2
    rounded-full border-0 cursor-pointer
    focus:outline-none focus:ring-2 focus:ring-offset-2
  `;

    // Fixed variants object with conditional secondary variant
    const getVariants = (darkMode = false) => ({
        primary: `
  bg-gradient-to-r from-[#1370AD] to-[#62C1FF] 
  text-white font-medium
  hover:shadow-xl hover:shadow-blue-500/25
  active:from-[#1370AD] active:via-[#0F5A8A] active:to-[#0B4267]
  focus:outline-none
  transition-all duration-300 ease-in-out
  transform hover:scale-105 active:scale-95
`,
        secondary: `
    bg-transparent ${darkMode ? "text-white" : "text-gray-400"}  
    focus:ring-brand-aqua
    transition-all duration-300 ease-in-out
    transform hover:scale-105 active:scale-95
  `,
    });

    const sizes = {
        sm: "px-4 py-2 text-[14px] h-[36px]",
        md: "px-6 py-3 text-[16px] h-[44px]",
        lg: "px-8 py-4 text-[18px] h-[52px]",
    };

    const variants = getVariants(darkMode);

    return (
        <button
            className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className} shadow h-full w-full md:text-body-xl 
            text-body-md md:px-[30px] px-[5px] font-medium`}
            {...props}
            style={{
                borderColor: variant === "secondary" ? "#54B3F1" : "unset",
                borderWidth:
                    variant === "secondary"
                        ? variant === "primary"
                            ? "0px"
                            : "1px"
                        : "0px",
                borderTopWidth: variant === "primary" ? "1px" : "1px",
                ...style,
            }}
        >
            {leftIcon && (
                <span className="flex-shrink-0 invisible md:visible">
                    {leftIcon}
                </span>
            )}
            <span className="leading-none ">{children}</span>
            {rightIcon && (
                <span className="flex-shrink-0 invisible md:visible">
                    {rightIcon}
                </span>
            )}
        </button>
    );
};
