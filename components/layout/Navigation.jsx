import { ArrowRightIcon } from "../icons";
import { Logo } from "@/components/ui/Logo";
import { NavLink } from "@/components/ui/NavLink";
import { LanguageSelector } from "@/components/ui/LanguageSelector";
import { Button } from "@/components/ui/Button";
import { Rocket } from "lucide-react";

export const Navigation = ({ className = "" }) => {
    const navItems = [
        { label: "Home", href: "/", isActive: false },
        { label: "About Us", href: "/about", isActive: true },
        { label: "Services", href: "/services", isActive: false },
        { label: "Blog", href: "/blog", isActive: false },
        { label: "Contact Us", href: "/contact", isActive: false },
    ];

    return (
        <nav
            className={`w-full flex ${className} h-[105px] items-center justify-center`}
        >
            {/* Logo Section */}
            <div
                style={{
                    width: 1326,
                    height: 62.5,
                }}
                className={"flex items-center justify-between "}
            >
                <Logo />

                {/* Navigation Links - Hidden on mobile */}
                <div className={"flex justify-center h-full"}>
                    <div
                        className="lg:flex items-center gap-11 border-[1px] rounded-full px-14 "
                        style={{ borderColor: "rgba(255, 255, 255, 0.2)" }}
                    >
                        {navItems.map((item) => (
                            <NavLink
                                key={item.label}
                                href={item.href}
                                isActive={item.isActive}
                            >
                                <span className={"text-body-xl font-medium"}>
                                    {item.label}
                                </span>
                            </NavLink>
                        ))}
                    </div>

                    <div className={"w-3"}></div>

                    <LanguageSelector className="hidden sm:flex" />
                </div>

                <div className={"h-full"}>
                    <Button
                        size="md"
                        rightIcon={<Rocket className="w-4 h-4 ml-2" />}
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
            </div>
        </nav>
    );
};
