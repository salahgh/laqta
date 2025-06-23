export const Logo = ({ className = '' }) => {
    return (
        <div className={`flex items-center justify-between text-white ${className}`} style={{width: 120, height: 26.3}}>
            <img src="/images/logo.svg" alt="Logo" className="w-8 h-8" style={{width: 26.3, height: 26.3}}/>
            <img src="/images/laqta.svg" alt="Logo" className="w-8 h-8" style={{width: 84.5, height: 18.41}}/>
        </div>
    );
};