"use client";

import { Logo } from "@/components/ui/Logo";
import { NavLink } from "@/components/ui/NavLink";
import { LanguageSelector } from "@/components/ui/LanguageSelector";
import { Button } from "@/components/ui/Button";
import { Rocket, Menu, X } from "lucide-react";
import { useState } from "react";

export const Navigation = ({ className = "" }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const navItems = [
        { label: "Home", href: "/", isActive: false },
        { label: "About Us", href: "/about", isActive: true },
        { label: "Services", href: "/services", isActive: false },
        { label: "Blog", href: "/blog", isActive: false },
        { label: "Contact Us", href: "/contact", isActive: false },
    ];

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const closeDrawer = () => {
        setIsDrawerOpen(false);
    };

    return (
        <>
            <nav
                className={`flex w-full ${className} relative z-50 h-[70px] items-center justify-center bg-blue-800 md:h-[105px]`}
            >
                {/* Desktop Navigation */}
                <div
                    className="hidden items-center justify-between lg:flex"
                    style={{ width: 1326, height: 62.5 }}
                >
                    <Logo />

                    {/* Navigation Links - Desktop */}
                    <div className="flex h-full justify-center">
                        <div
                            className="flex items-center gap-11 rounded-full border-[1px] px-14"
                            style={{ borderColor: "rgba(255, 255, 255, 0.2)" }}
                        >
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.label}
                                    href={item.href}
                                    isActive={item.isActive}
                                >
                                    <span className="text-body-xl font-medium">
                                        {item.label}
                                    </span>
                                </NavLink>
                            ))}
                        </div>

                        <div className="w-3"></div>

                        <LanguageSelector className="flex" />
                    </div>

                    <div className="h-full">
                        <Button
                            size="md"
                            rightIcon={<Rocket className="ml-2 h-4 w-4" />}
                            className="min-w-[140px]"
                        >
                            Get Started
                        </Button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div
                    className="flex w-full items-center justify-between px-2 md:hidden"
                    style={{ height: 45 }}
                >
                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleDrawer}
                        className="z-50 flex flex-col items-center justify-center gap-1"
                    >
                        {isDrawerOpen ? (
                            <X className="h-6 w-6 text-white" />
                        ) : (
                            <Menu
                                className="text-white"
                                style={{ width: 35, height: 35 }}
                            />
                        )}
                    </button>

                    {/* Mobile Right Section */}
                    <div className="flex items-center gap-3">
                        <LanguageSelector className="flex" />
                        <Button
                            size="lg"
                            rightIcon={<Rocket className="ml-1 h-3 w-3" />}
                            className="min-w-[100px] text-sm"
                            style={{
                                padding: "8px 16px",
                                width: "117px",
                                height: 45,
                            }}
                        >
                            Get Started
                        </Button>
                    </div>
                </div>
            </nav>

            {/* Mobile Drawer Overlay */}
            {isDrawerOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
                    onClick={closeDrawer}
                ></div>
            )}

            {/* Mobile Left Drawer */}
            <div
                className={`fixed left-0 top-0 z-50 h-full w-80 transform bg-gray-900 transition-transform duration-300 ease-in-out lg:hidden ${
                    isDrawerOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div className="flex h-full flex-col">
                    {/* Drawer Header */}
                    <div className="flex items-center justify-between border-b border-gray-700 p-6">
                        <Logo />
                        <button
                            onClick={closeDrawer}
                            className="h-6 w-6 text-white hover:text-gray-300"
                        >
                            <X className="h-6 w-6" />
                        </button>
                    </div>

                    {/* Navigation Items */}
                    <div className="flex-1 py-6">
                        <div className="flex flex-col gap-2">
                            {navItems.map((item) => (
                                <div key={item.label} className="px-6">
                                    <NavLink
                                        href={item.href}
                                        isActive={item.isActive}
                                        onClick={closeDrawer}
                                    >
                                        <span className="block py-3 text-lg font-medium">
                                            {item.label}
                                        </span>
                                    </NavLink>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Drawer Footer */}
                    <div className="border-t border-gray-700 p-6">
                        <div className="flex flex-col gap-4">
                            <LanguageSelector className="flex w-full" />
                            <Button
                                size="md"
                                rightIcon={<Rocket className="ml-2 h-4 w-4" />}
                                className="w-full"
                                onClick={closeDrawer}
                            >
                                Get Started
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
