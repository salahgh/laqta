"use client"

import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';

const LeqtaForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        firstName: 'Sarah',
        lastName: '',
        email: 'e.g. sarah benyamina@email.com',
        phone: '0 000 000',
        message: '',
        // Project info fields
        projectType: '',
        budget: '',
        timeline: '',
        projectDescription: '',
        // Payment info fields
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        cardholderName: '',
        billingAddress: '',
        city: '',
        zipCode: '',
        country: ''
    });

    const steps = [
        {
            id: 1,
            title: 'Personal infos',
            subtitle: 'So we can know u better',
            completed: currentStep > 1
        },
        {
            id: 2,
            title: 'Project infos',
            subtitle: 'Let us understand your project',
            completed: currentStep > 2
        },
        {
            id: 3,
            title: 'Payment infos',
            subtitle: 'Please fill your payment infos to get started',
            completed: currentStep > 3
        }
    ];

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleNext = () => {
        if (currentStep === 3) {
            setIsSubmitted(true);
        } else {
            setCurrentStep(prev => prev + 1);
        }
    };

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep(prev => prev - 1);
        }
    };

    const goToMainPage = () => {
        setIsSubmitted(false);
        setCurrentStep(1);
    };

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900 relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute top-1/2 right-[-200px] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl transform -translate-y-1/2"></div>
                <div className="absolute bottom-[-300px] left-[-200px] w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl"></div>

                <div className="relative z-10 min-h-screen flex flex-col">
                    {/* Header */}
                    <header className="flex items-center p-6">
                        <div className="flex items-center">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mr-3 flex items-center justify-center">
                                <div className="w-3 h-3 bg-white rounded-full"></div>
                            </div>
                            <span className="text-white text-xl font-bold">LEQTA</span>
                        </div>
                        <button
                            onClick={goToMainPage}
                            className="ml-10 flex items-center px-5 py-2.5 bg-white/10 hover:bg-white/15 border border-white/20 rounded-full text-white/80 hover:text-white text-sm transition-all duration-300"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Go Back
                        </button>
                    </header>

                    {/* Main Content */}
                    <div className="flex-1 flex items-center justify-between max-w-6xl mx-auto px-10 w-full">
                        {/* Progress Sidebar */}
                        <div className="w-80 flex-shrink-0">
                            {steps.map((step, index) => (
                                <div key={step.id} className="flex items-start mb-8 relative">
                                    {index < steps.length - 1 && (
                                        <div className={`absolute left-5 top-12 w-0.5 h-10 ${
                                            step.completed ? 'bg-blue-400' : 'bg-white/20'
                                        }`}></div>
                                    )}
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 ${
                                        step.completed
                                            ? 'bg-blue-500 border-2 border-blue-500'
                                            : 'bg-white/10 border-2 border-white/20'
                                    }`}>
                                        {step.completed ? (
                                            <Check className="w-5 h-5 text-white" />
                                        ) : (
                                            <span className="text-white/60 text-lg">{step.id}</span>
                                        )}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-white font-semibold text-base mb-1">{step.title}</h3>
                                        <p className="text-white/60 text-sm leading-tight">{step.subtitle}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Success Content */}
                        <div className="flex-1 max-w-2xl">
                            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-16 text-center">
                                <h1 className="text-6xl font-bold text-white mb-6">Succeed !</h1>
                                <p className="text-white/80 text-lg mb-12">Form has been Submitted succesfully</p>
                                <button
                                    onClick={goToMainPage}
                                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                                >
                                    Go Back to Main Page
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <footer className="bg-black/20 mt-auto">
                        <div className="max-w-6xl mx-auto px-10 py-12">
                            <div className="grid grid-cols-4 gap-12 mb-12">
                                <div className="col-span-1">
                                    <div className="flex items-center mb-6">
                                        <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mr-3 flex items-center justify-center">
                                            <div className="w-3 h-3 bg-white rounded-full"></div>
                                        </div>
                                        <span className="text-white text-xl font-bold">LEQTA</span>
                                    </div>
                                    <div className="mb-6">
                                        <h4 className="text-white font-semibold mb-4">Newsletter</h4>
                                        <p className="text-white/70 text-sm mb-4 leading-relaxed">Keep up out latest update, subscribe to our newsletter</p>
                                        <div className="flex">
                                            <input
                                                type="email"
                                                placeholder="Email Address"
                                                className="flex-1 px-4 py-3 bg-black/30 border border-white/20 rounded-l-full text-white text-sm placeholder-white/50 focus:outline-none focus:border-blue-400"
                                            />
                                            <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-r-full text-sm font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300">
                                                Subscribe Now
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-white font-semibold mb-6">Company</h4>
                                    <ul className="space-y-3">
                                        {['About us', 'Our services', 'Our works', 'Testimonials', 'Contact us', 'FAQ', 'Blog'].map((item) => (
                                            <li key={item}><a href="#" className="text-white/70 hover:text-white text-sm transition-colors duration-300">{item}</a></li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-white font-semibold mb-6">Utility Pages</h4>
                                    <ul className="space-y-3">
                                        {['Terms & Condition', 'Privacy Policy'].map((item) => (
                                            <li key={item}><a href="#" className="text-white/70 hover:text-white text-sm transition-colors duration-300">{item}</a></li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-white font-semibold mb-6">Social Media</h4>
                                    <ul className="space-y-3">
                                        {['Facebook', 'Instagram', 'Twitter', 'LinkedIn'].map((item) => (
                                            <li key={item}><a href="#" className="text-white/70 hover:text-white text-sm transition-colors duration-300">{item}</a></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="flex items-center justify-between pt-6 border-t border-white/10">
                                <p className="text-white/60 text-sm">Copyright © 2025 LEQTA. All Rights Reserved</p>
                                <div className="flex space-x-4">
                                    {['X', 'f', 'ig', 'in'].map((social) => (
                                        <div key={social} className="w-8 h-8 bg-blue-500 rounded text-white text-xs flex items-center justify-center font-bold cursor-pointer hover:bg-blue-600 transition-colors duration-300">
                                            {social}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Large LEQTA watermark */}
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white/5 text-9xl font-bold pointer-events-none">
                            LEQTA
                        </div>
                    </footer>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-1/2 right-[-200px] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl transform -translate-y-1/2"></div>
            <div className="absolute bottom-[-300px] left-[-200px] w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl"></div>

            <div className="relative z-10 min-h-screen flex flex-col">
                {/* Header */}
                <header className="flex items-center p-6">
                    <div className="flex items-center">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mr-3 flex items-center justify-center">
                            <div className="w-3 h-3 bg-white rounded-full"></div>
                        </div>
                        <span className="text-white text-xl font-bold">LEQTA</span>
                    </div>
                    <button
                        onClick={handleBack}
                        className="ml-10 flex items-center px-5 py-2.5 bg-white/10 hover:bg-white/15 border border-white/20 rounded-full text-white/80 hover:text-white text-sm transition-all duration-300"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Go Back
                    </button>
                </header>

                {/* Main Content */}
                <div className="flex-1 flex max-w-6xl mx-auto px-10 py-8 gap-16 w-full">
                    {/* Progress Sidebar */}
                    <div className="w-80 flex-shrink-0">
                        {steps.map((step, index) => (
                            <div key={step.id} className="flex items-start mb-8 relative">
                                {index < steps.length - 1 && (
                                    <div className={`absolute left-5 top-12 w-0.5 h-10 ${
                                        step.completed || currentStep > step.id ? 'bg-blue-400' : 'bg-white/20'
                                    }`}></div>
                                )}
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 ${
                                    step.completed
                                        ? 'bg-blue-500 border-2 border-blue-500'
                                        : currentStep === step.id
                                            ? 'bg-blue-500/20 border-2 border-blue-400'
                                            : 'bg-white/10 border-2 border-white/20'
                                }`}>
                                    {step.completed ? (
                                        <Check className="w-5 h-5 text-white" />
                                    ) : (
                                        <span className={`text-lg ${
                                            currentStep === step.id ? 'text-blue-400' : 'text-white/60'
                                        }`}>{step.id}</span>
                                    )}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-white font-semibold text-base mb-1">{step.title}</h3>
                                    <p className="text-white/60 text-sm leading-tight">{step.subtitle}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Form Container */}
                    <div className="flex-1 max-w-2xl">
                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10">
                            {currentStep === 1 && (
                                <div>
                                    <div className="grid grid-cols-2 gap-6 mb-6">
                                        <div>
                                            <label className="block text-white text-sm font-medium mb-2">First Name</label>
                                            <input
                                                type="text"
                                                value={formData.firstName}
                                                onChange={(e) => handleInputChange('firstName', e.target.value)}
                                                className="w-full px-5 py-4 bg-black/30 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:bg-black/40 transition-all duration-300"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-white text-sm font-medium mb-2">Last Name</label>
                                            <input
                                                type="text"
                                                placeholder="e.g. Benyamina"
                                                value={formData.lastName}
                                                onChange={(e) => handleInputChange('lastName', e.target.value)}
                                                className="w-full px-5 py-4 bg-black/30 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:bg-black/40 transition-all duration-300"
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <label className="block text-white text-sm font-medium mb-2">Email Address</label>
                                        <input
                                            type="email"
                                            placeholder="e.g. sarah.benyamina@email.com"
                                            value={formData.email}
                                            onChange={(e) => handleInputChange('email', e.target.value)}
                                            className="w-full px-5 py-4 bg-black/30 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:bg-black/40 transition-all duration-300"
                                        />
                                    </div>

                                    <div className="mb-6">
                                        <label className="block text-white text-sm font-medium mb-2">Phone number</label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                value={formData.phone}
                                                onChange={(e) => handleInputChange('phone', e.target.value)}
                                                className="w-full px-5 py-4 bg-black/30 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:bg-black/40 transition-all duration-300 appearance-none"
                                            />
                                            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                                                <svg className="w-4 h-4 text-white/60" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-8">
                                        <label className="block text-white text-sm font-medium mb-2">Message</label>
                                        <textarea
                                            placeholder="Tell us more about what you're looking for..."
                                            value={formData.message}
                                            onChange={(e) => handleInputChange('message', e.target.value)}
                                            rows={5}
                                            className="w-full px-5 py-4 bg-black/30 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:bg-black/40 transition-all duration-300 resize-none"
                                        />
                                    </div>
                                </div>
                            )}

                            {currentStep === 2 && (
                                <div>
                                    <div className="grid grid-cols-2 gap-6 mb-6">
                                        <div>
                                            <label className="block text-white text-sm font-medium mb-2">Project Type</label>
                                            <div className="relative">
                                                <select
                                                    value={formData.projectType}
                                                    onChange={(e) => handleInputChange('projectType', e.target.value)}
                                                    className="w-full px-5 py-4 bg-black/30 border border-white/20 rounded-xl text-white focus:outline-none focus:border-blue-400 focus:bg-black/40 transition-all duration-300 appearance-none"
                                                >
                                                    <option value="" className="bg-slate-800">Select project type</option>
                                                    <option value="web-development" className="bg-slate-800">Web Development</option>
                                                    <option value="mobile-app" className="bg-slate-800">Mobile App</option>
                                                    <option value="ui-ux-design" className="bg-slate-800">UI/UX Design</option>
                                                    <option value="branding" className="bg-slate-800">Branding</option>
                                                    <option value="other" className="bg-slate-800">Other</option>
                                                </select>
                                                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                                    <svg className="w-4 h-4 text-white/60" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-white text-sm font-medium mb-2">Budget Range</label>
                                            <div className="relative">
                                                <select
                                                    value={formData.budget}
                                                    onChange={(e) => handleInputChange('budget', e.target.value)}
                                                    className="w-full px-5 py-4 bg-black/30 border border-white/20 rounded-xl text-white focus:outline-none focus:border-blue-400 focus:bg-black/40 transition-all duration-300 appearance-none"
                                                >
                                                    <option value="" className="bg-slate-800">Select budget range</option>
                                                    <option value="5k-10k" className="bg-slate-800">$5,000 - $10,000</option>
                                                    <option value="10k-25k" className="bg-slate-800">$10,000 - $25,000</option>
                                                    <option value="25k-50k" className="bg-slate-800">$25,000 - $50,000</option>
                                                    <option value="50k+" className="bg-slate-800">$50,000+</option>
                                                </select>
                                                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                                    <svg className="w-4 h-4 text-white/60" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <label className="block text-white text-sm font-medium mb-2">Project Timeline</label>
                                        <div className="relative">
                                            <select
                                                value={formData.timeline}
                                                onChange={(e) => handleInputChange('timeline', e.target.value)}
                                                className="w-full px-5 py-4 bg-black/30 border border-white/20 rounded-xl text-white focus:outline-none focus:border-blue-400 focus:bg-black/40 transition-all duration-300 appearance-none"
                                            >
                                                <option value="" className="bg-slate-800">Select timeline</option>
                                                <option value="1-2-weeks" className="bg-slate-800">1-2 weeks</option>
                                                <option value="1-month" className="bg-slate-800">1 month</option>
                                                <option value="2-3-months" className="bg-slate-800">2-3 months</option>
                                                <option value="3-6-months" className="bg-slate-800">3-6 months</option>
                                                <option value="6-months+" className="bg-slate-800">6+ months</option>
                                            </select>
                                            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                                <svg className="w-4 h-4 text-white/60" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-8">
                                        <label className="block text-white text-sm font-medium mb-2">Project Description</label>
                                        <textarea
                                            placeholder="Describe your project in detail..."
                                            value={formData.projectDescription}
                                            onChange={(e) => handleInputChange('projectDescription', e.target.value)}
                                            rows={5}
                                            className="w-full px-5 py-4 bg-black/30 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:bg-black/40 transition-all duration-300 resize-none"
                                        />
                                    </div>
                                </div>
                            )}

                            {currentStep === 3 && (
                                <div>
                                    <div className="mb-6">
                                        <label className="block text-white text-sm font-medium mb-2">Cardholder Name</label>
                                        <input
                                            type="text"
                                            placeholder="Full name on card"
                                            value={formData.cardholderName}
                                            onChange={(e) => handleInputChange('cardholderName', e.target.value)}
                                            className="w-full px-5 py-4 bg-black/30 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:bg-black/40 transition-all duration-300"
                                        />
                                    </div>

                                    <div className="mb-6">
                                        <label className="block text-white text-sm font-medium mb-2">Card Number</label>
                                        <input
                                            type="text"
                                            placeholder="1234 5678 9012 3456"
                                            value={formData.cardNumber}
                                            onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                                            className="w-full px-5 py-4 bg-black/30 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:bg-black/40 transition-all duration-300"
                                        />
                                    </div>

                                    <div className="grid grid-cols-2 gap-6 mb-6">
                                        <div>
                                            <label className="block text-white text-sm font-medium mb-2">Expiry Date</label>
                                            <input
                                                type="text"
                                                placeholder="MM/YY"
                                                value={formData.expiryDate}
                                                onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                                                className="w-full px-5 py-4 bg-black/30 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:bg-black/40 transition-all duration-300"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-white text-sm font-medium mb-2">CVV</label>
                                            <input
                                                type="text"
                                                placeholder="123"
                                                value={formData.cvv}
                                                onChange={(e) => handleInputChange('cvv', e.target.value)}
                                                className="w-full px-5 py-4 bg-black/30 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:bg-black/40 transition-all duration-300"
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <label className="block text-white text-sm font-medium mb-2">Billing Address</label>
                                        <input
                                            type="text"
                                            placeholder="Street address"
                                            value={formData.billingAddress}
                                            onChange={(e) => handleInputChange('billingAddress', e.target.value)}
                                            className="w-full px-5 py-4 bg-black/30 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:bg-black/40 transition-all duration-300"
                                        />
                                    </div>

                                    <div className="grid grid-cols-3 gap-6 mb-8">
                                        <div>
                                            <label className="block text-white text-sm font-medium mb-2">City</label>
                                            <input
                                                type="text"
                                                placeholder="City"
                                                value={formData.city}
                                                onChange={(e) => handleInputChange('city', e.target.value)}
                                                className="w-full px-5 py-4 bg-black/30 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:bg-black/40 transition-all duration-300"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-white text-sm font-medium mb-2">ZIP Code</label>
                                            <input
                                                type="text"
                                                placeholder="12345"
                                                value={formData.zipCode}
                                                onChange={(e) => handleInputChange('zipCode', e.target.value)}
                                                className="w-full px-5 py-4 bg-black/30 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:bg-black/40 transition-all duration-300"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-white text-sm font-medium mb-2">Country</label>
                                            <div className="relative">
                                                <select
                                                    value={formData.country}
                                                    onChange={(e) => handleInputChange('country', e.target.value)}
                                                    className="w-full px-5 py-4 bg-black/30 border border-white/20 rounded-xl text-white focus:outline-none focus:border-blue-400 focus:bg-black/40 transition-all duration-300 appearance-none"
                                                >
                                                    <option value="" className="bg-slate-800">Select country</option>
                                                    <option value="us" className="bg-slate-800">United States</option>
                                                    <option value="ca" className="bg-slate-800">Canada</option>
                                                    <option value="uk" className="bg-slate-800">United Kingdom</option>
                                                    <option value="au" className="bg-slate-800">Australia</option>
                                                    <option value="de" className="bg-slate-800">Germany</option>
                                                    <option value="fr" className="bg-slate-800">France</option>
                                                    <option value="other" className="bg-slate-800">Other</option>
                                                </select>
                                                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                                    <svg className="w-4 h-4 text-white/60" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Form Navigation */}
                            <div className="flex items-center justify-between">
                                <button
                                    onClick={handleBack}
                                    className="flex items-center px-6 py-3 bg-white/10 hover:bg-white/15 border border-white/20 rounded-full text-white/80 hover:text-white text-sm transition-all duration-300"
                                    disabled={currentStep === 1}
                                >
                                    <ArrowLeft className="w-4 h-4 mr-2" />
                                    Go Back
                                </button>

                                <button
                                    onClick={handleNext}
                                    className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                                >
                                    {currentStep === 3 ? 'Complete Payment' : `Next ${currentStep}/4`}
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <footer className="bg-black/20 mt-auto">
                    <div className="max-w-6xl mx-auto px-10 py-12">
                        <div className="grid grid-cols-4 gap-12 mb-12">
                            <div className="col-span-1">
                                <div className="flex items-center mb-6">
                                    <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mr-3 flex items-center justify-center">
                                        <div className="w-3 h-3 bg-white rounded-full"></div>
                                    </div>
                                    <span className="text-white text-xl font-bold">LEQTA</span>
                                </div>
                                <div className="mb-6">
                                    <h4 className="text-white font-semibold mb-4">Newsletter</h4>
                                    <p className="text-white/70 text-sm mb-4 leading-relaxed">Keep up out latest update, subscribe to our newsletter</p>
                                    <div className="flex">
                                        <input
                                            type="email"
                                            placeholder="Email Address"
                                            className="flex-1 px-4 py-3 bg-black/30 border border-white/20 rounded-l-full text-white text-sm placeholder-white/50 focus:outline-none focus:border-blue-400"
                                        />
                                        <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-r-full text-sm font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300">
                                            Subscribe Now
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-white font-semibold mb-6">Company</h4>
                                <ul className="space-y-3">
                                    {['About us', 'Our services', 'Our works', 'Testimonials', 'Contact us', 'FAQ', 'Blog'].map((item) => (
                                        <li key={item}><a href="#" className="text-white/70 hover:text-white text-sm transition-colors duration-300">{item}</a></li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-white font-semibold mb-6">Utility Pages</h4>
                                <ul className="space-y-3">
                                    {['Terms & Condition', 'Privacy Policy'].map((item) => (
                                        <li key={item}><a href="#" className="text-white/70 hover:text-white text-sm transition-colors duration-300">{item}</a></li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-white font-semibold mb-6">Social Media</h4>
                                <ul className="space-y-3">
                                    {['Facebook', 'Instagram', 'Twitter', 'LinkedIn'].map((item) => (
                                        <li key={item}><a href="#" className="text-white/70 hover:text-white text-sm transition-colors duration-300">{item}</a></li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="flex items-center justify-between pt-6 border-t border-white/10">
                            <p className="text-white/60 text-sm">Copyright © 2025 LEQTA. All Rights Reserved</p>
                            <div className="flex space-x-4">
                                {['X', 'f', 'ig', 'in'].map((social) => (
                                    <div key={social} className="w-8 h-8 bg-blue-500 rounded text-white text-xs flex items-center justify-center font-bold cursor-pointer hover:bg-blue-600 transition-colors duration-300">
                                        {social}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Large LEQTA watermark */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white/5 text-9xl font-bold pointer-events-none">
                        LEQTA
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default LeqtaForm;