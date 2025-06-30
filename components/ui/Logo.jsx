export const Logo = ({ className = "" }) => {
    return (
        <div
            className={`flex items-center gap-2 justify-between text-white ${className}`}
        >
            <img src="/images/logo.svg" alt="Logo" className="h-[26px]" />
            <img src="/images/laqta.svg" alt="Logo" className="h-[18px]" />
        </div>
    );
};
