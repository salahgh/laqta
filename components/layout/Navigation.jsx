import {ArrowRightIcon} from '../icons';
import {Logo} from "@/components/ui/Logo";
import {NavLink} from "@/components/ui/NavLink";
import {LanguageSelector} from "@/components/ui/LanguageSelector";
import {Button} from "@/components/ui/Button";

export const Navigation = ({className = ""}) => {
    const navItems = [
        {label: 'Home', href: '/', isActive: false},
        {label: 'About Us', href: '/about', isActive: true},
        {label: 'Services', href: '/services', isActive: false},
        {label: 'Blog', href: '/blog', isActive: false},
        {label: 'Contact Us', href: '/contact', isActive: false},
    ];

    return (
        <nav className={`
      w-full h-[80px] px-8 
      flex items-center justify-between
      bg-transparent
      ${className}
    `}>
            {/* Logo Section */}
            <div className="flex-shrink-0">
                <Logo/>
            </div>

            {/* Navigation Links - Hidden on mobile */}
            <div className="lg:flex items-center gap-8 border-[1px] rounded-full px-12 py-4 border-gray-50"
            style={{borderColor: 'rgba(255, 255, 255, 0.2)'}}
            >
                {navItems.map((item) => (
                    <NavLink
                        key={item.label}
                        href={item.href}
                        isActive={item.isActive}
                    >
                        {item.label}
                    </NavLink>
                ))}
            </div>

            {/* Right Section - Language + CTA */}
            <div className="flex items-center gap-6">
                <LanguageSelector className="hidden sm:flex"/>
                <Button
                    variant="primary"
                    size="md"
                    rightIcon={<ArrowRightIcon className="w-[16px] h-[16px]"/>}
                    className="min-w-[140px]"
                >
                    Get Started
                </Button>
            </div>

            {/* Mobile Menu Button - Show on small screens */}
            <div className="lg:hidden">
                <button className="w-6 h-6 flex flex-col justify-center items-center gap-1">
                    <span className="w-6 h-0.5 bg-white"></span>
                    <span className="w-6 h-0.5 bg-white"></span>
                    <span className="w-6 h-0.5 bg-white"></span>
                </button>
            </div>
        </nav>
    );
};