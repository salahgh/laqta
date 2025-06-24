import React from 'react';
import { ArrowRight, Edit, BarChart3, Zap, RefreshCw, Eye, Clock, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

// Header Component
const Header = () => {
    const navItems = ['Home', 'About Us', 'Services', 'Blog', 'Contact Us'];

    return (
        <header className="flex items-center justify-between p-6 relative z-10">
            <div className="flex items-center">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-900 font-bold text-sm">L</span>
                </div>
                <span className="text-white font-bold text-xl">LEQTA</span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
                {navItems.map((item, index) => (
                    <a key={index} href="#" className="text-gray-300 hover:text-white transition-colors">
                        {item}
                    </a>
                ))}
                <div className="flex items-center ml-4">
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiByeD0iMiIgZmlsbD0iIzAwNTJBNSIvPgo8cGF0aCBkPSJNMCAwaDI0djEySDBoeiIgZmlsbD0iI0ZGRkZGRiIvPgo8L3N2Zz4K" alt="UK Flag" className="w-6 h-4 mr-2" />
                    <span className="text-gray-300">EN</span>
                </div>
            </nav>

            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full flex items-center transition-colors">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
            </button>
        </header>
    );
};

// Hero Section Component
const HeroSection = () => (
    <section className="flex items-center justify-between px-6 py-16 max-w-7xl mx-auto">
        <div className="flex-1 max-w-xl">
            <div className="inline-block bg-blue-900/30 text-blue-300 px-4 py-2 rounded-full text-sm mb-8">
                About Leqta
            </div>

            <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
                We are <span className="text-blue-400">LEQTA</span>
            </h1>

            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                A content marketing & film production agency based in Algiers. We serve brands, businesses, and changemakers with purposeful video content that blends creativity and strategy.
            </p>

            <div className="flex gap-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full flex items-center transition-colors">
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                </button>
                <button className="border border-gray-600 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
                    Contact Us
                </button>
            </div>
        </div>

        <div className="flex-1 flex justify-end">
            <div className="relative">
                <div className="absolute -top-8 -left-8 flex space-x-2">
                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                        <div className="w-8 h-8 bg-white rounded-full"></div>
                    </div>
                    <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center">
                        <div className="w-8 h-8 bg-white rounded-full"></div>
                    </div>
                    <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center">
                        <div className="w-8 h-8 bg-white rounded-full"></div>
                    </div>
                </div>
                <div className="w-80 h-64 bg-gray-800 rounded-2xl overflow-hidden">
                    <img
                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjI1NiIgdmlld0JveD0iMCAwIDMyMCAyNTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMjAiIGhlaWdodD0iMjU2IiBmaWxsPSIjNEE1NTY4Ii8+CjxyZWN0IHg9IjQwIiB5PSI0MCIgd2lkdGg9IjI0MCIgaGVpZ2h0PSIxNzYiIHJ4PSI4IiBmaWxsPSIjNjM3Mzk2Ii8+Cjx0ZXh0IHg9IjE2MCIgeT0iMTM2IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiNGRkZGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPldvcmsgRW52aXJvbm1lbnQ8L3RleHQ+Cjwvc3ZnPgo="
                        alt="Work Environment"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    </section>
);

// Purpose Section Component
const PurposeSection = () => {
    const values = [
        {
            icon: <Edit className="w-8 h-8" />,
            title: "Vision",
            description: "Leading Algeria's creative industry with impactful video content"
        },
        {
            icon: <BarChart3 className="w-8 h-8" />,
            title: "Mission",
            description: "Empowering businesses through innovative content and filmmaking"
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: "Signature",
            description: "Where creativity meets strategy"
        }
    ];

    return (
        <section className="py-16 px-6">
            <div className="max-w-6xl mx-auto text-center">
                <div className="inline-block bg-blue-900/30 text-blue-300 px-4 py-2 rounded-full text-sm mb-8">
                    Core Values
                </div>

                <h2 className="text-4xl font-bold text-white mb-6">Built with Purpose</h2>
                <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
                    At Leqta, clarity of purpose meets creative intent. Our vision, mission, and essence define how we think, work, and grow.
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                    {values.map((value, index) => (
                        <div key={index} className="bg-gradient-to-br from-blue-400/20 to-teal-400/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/20">
                            <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-400">
                                {value.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                            <p className="text-gray-300">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Competitive Edge Component
const CompetitiveEdge = () => {
    const advantages = [
        {
            icon: <Edit className="w-6 h-6" />,
            title: "Creativity with Professionalism"
        },
        {
            icon: <RefreshCw className="w-6 h-6" />,
            title: "Resilience & Perseverance"
        },
        {
            icon: <Eye className="w-6 h-6" />,
            title: "Attention to Detail"
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: "Commitment & Time Management"
        }
    ];

    return (
        <section className="py-16 px-6">
            <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-gray-100/10 to-blue-100/10 backdrop-blur-sm rounded-3xl p-12 border border-gray-200/20">
                    <div className="text-center mb-12">
                        <div className="inline-block bg-blue-400/20 text-blue-300 px-4 py-2 rounded-full text-sm mb-6">
                            The Leqta Difference
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-4">Our Competitive Edge</h2>
                        <p className="text-gray-300 max-w-2xl mx-auto">
                            At Leqta, we blend bold creativity with strategic marketing know-how. This balance ensures high-performing content with visual impact.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {advantages.map((advantage, index) => (
                            <div key={index} className="bg-blue-900/40 backdrop-blur-sm rounded-2xl p-6 border border-blue-400/20 flex items-center">
                                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mr-4 text-blue-400">
                                    {advantage.icon}
                                </div>
                                <h3 className="text-white font-semibold">{advantage.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

// Footer Component
const Footer = () => {
    const companyLinks = ['About us', 'Our services', 'Our works', 'Testimonials', 'Contact us'];
    const utilityLinks = ['Terms & Condition', 'Privacy Policy'];
    const socialLinks = [
        { icon: <Facebook className="w-5 h-5" />, name: 'Facebook' },
        { icon: <Instagram className="w-5 h-5" />, name: 'Instagram' },
        { icon: <Twitter className="w-5 h-5" />, name: 'Twitter' },
        { icon: <Linkedin className="w-5 h-5" />, name: 'LinkedIn' }
    ];

    return (
        <footer className="bg-blue-950/50 backdrop-blur-sm border-t border-blue-800/30 py-16 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    {/* Logo and Newsletter */}
                    <div>
                        <div className="flex items-center mb-6">
                            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                                <span className="text-blue-900 font-bold text-sm">L</span>
                            </div>
                            <span className="text-white font-bold text-xl">LEQTA</span>
                        </div>

                        <div>
                            <h4 className="text-white font-semibold mb-4">Newsletter</h4>
                            <p className="text-gray-400 text-sm mb-4">Keep up-to-date latest updates, subscribe to our newsletter</p>
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="flex-1 bg-blue-900/30 border border-blue-800/50 rounded-l-full px-4 py-2 text-white placeholder-gray-400 text-sm"
                                />
                                <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-r-full text-sm transition-colors">
                                    Subscribe Now
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Company</h4>
                        <ul className="space-y-3">
                            {companyLinks.map((link, index) => (
                                <li key={index}>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                        {link}
                                    </a>
                                </li>
                            ))}
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">FAQ</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Blog</a></li>
                        </ul>
                    </div>

                    {/* Utility Pages */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Utility Pages</h4>
                        <ul className="space-y-3">
                            {utilityLinks.map((link, index) => (
                                <li key={index}>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Social Media</h4>
                        <ul className="space-y-3">
                            {socialLinks.map((social, index) => (
                                <li key={index}>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center">
                                        <span className="mr-3">{social.icon}</span>
                                        {social.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Large LEQTA Text */}
                <div className="text-center mb-8">
                    <div className="text-6xl font-bold text-blue-900/20 tracking-wider">
                        LEQTA
                    </div>
                </div>

                {/* Copyright and Social Icons */}
                <div className="flex items-center justify-between pt-8 border-t border-blue-800/30">
                    <p className="text-gray-400 text-sm">Copyright © 2025 LEQTA. All Rights Reserved</p>
                    <div className="flex space-x-4">
                        {socialLinks.map((social, index) => (
                            <a key={index} href="#" className="w-10 h-10 bg-blue-800/30 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-700/50 transition-colors">
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

// Main Homepage Component
const LeqtaHomepage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-purple-900">
        <Header />
        <HeroSection />
        <PurposeSection />
        <CompetitiveEdge />
        <Footer />
    </div>
);

export default LeqtaHomepage;