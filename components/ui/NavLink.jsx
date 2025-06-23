export const NavLink = ({ href = "#", children, className = "", isActive = false }) => {
    return (
        <a
            href={href}
            className={`
        text-[16px] font-medium leading-none
        transition-all duration-200 ease-in-out
        ${isActive
                ? 'text-brand-aqua'
                : 'text-white hover:text-brand-aqua'
            }
        ${className}
      `}
        >
            {children}
        </a>
    );
};