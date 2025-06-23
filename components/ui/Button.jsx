export const Button = ({
                           variant = 'primary',
                           size = 'md',
                           children,
                           className = '',
                           leftIcon = null,
                           rightIcon = null,
                           darkMode = false,
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
    bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 
    text-white font-medium
    hover:shadow-xl hover:shadow-blue-500/25
    active:from-blue-700 active:via-blue-800 active:to-blue-900
    focus:outline-none
    transition-all duration-300 ease-in-out
    transform hover:scale-105 active:scale-95
  `,
        secondary: `
    bg-transparent ${darkMode ? 'text-white' : 'text-gray-400'} border-2 border-gray-600
    hover:border-brand-aqua hover:text-brand-aqua hover:bg-brand-aqua hover:bg-opacity-10
    focus:ring-brand-aqua
    transition-all duration-300 ease-in-out
    transform hover:scale-105 active:scale-95
  `,
    });

    const sizes = {
        sm: 'px-4 py-2 text-[14px] h-[36px]',
        md: 'px-6 py-3 text-[16px] h-[44px]',
        lg: 'px-8 py-4 text-[18px] h-[52px]',
    };

    const variants = getVariants(darkMode);

    return (
        <button
            className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className} shadow`}
            {...props}
        >
            {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
            <span className="leading-none">{children}</span>
            {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
        </button>
    );
};