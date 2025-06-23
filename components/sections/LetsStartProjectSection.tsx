const LetsStartProjectSection = () => {
    return (
        <div
            className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden flex items-center justify-center">
            {/* Background decorative elements */}
            <div className="absolute inset-0">
                {/* Large curved shape on the left */}
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-96 h-96">
                    <div
                        className="w-full h-full bg-gradient-to-br from-slate-700/40 to-slate-600/20 rounded-full transform -translate-x-1/2 scale-150"></div>
                </div>

                {/* Diagonal stripe/beam effect */}
                <div
                    className="absolute top-0 right-0 w-32 h-full bg-gradient-to-b from-slate-600/30 to-transparent transform skew-x-12 translate-x-16"></div>

                {/* Additional curved elements */}
                <div
                    className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-purple-900/20 to-transparent rounded-full transform translate-x-1/4 translate-y-1/4"></div>

                {/* Subtle overlay gradients */}
                <div
                    className="absolute inset-0 bg-gradient-to-tr from-transparent via-slate-800/10 to-slate-700/20"></div>
            </div>

            {/* Main content */}
            <div className="relative z-10 text-center px-8 max-w-6xl mx-auto">
                <h1 className="text-7xl md:text-8xl lg:text-9xl font-black text-white leading-none tracking-tight">
                    LET'S<br/>
                    <span className="relative">
            START A<br/>
            PROJECT
                        {/* Curved accent line behind text */}
                        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-24 -z-10">
              <svg
                  viewBox="0 0 800 100"
                  className="w-full h-full opacity-30"
                  preserveAspectRatio="none"
              >
                <path
                    d="M0,50 Q200,20 400,50 T800,50"
                    stroke="url(#curveGradient)"
                    strokeWidth="8"
                    fill="none"
                />
                <defs>
                  <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#475569" stopOpacity="0.3"/>
                    <stop offset="50%" stopColor="#64748b" stopOpacity="0.6"/>
                    <stop offset="100%" stopColor="#475569" stopOpacity="0.3"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </span>
                </h1>
            </div>

            {/* Additional background elements for depth */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Subtle radial gradient overlay */}
                <div
                    className="absolute inset-0 bg-radial-gradient from-transparent via-slate-900/20 to-slate-900/40"></div>

                {/* Noise texture overlay */}
                <div className="absolute inset-0 opacity-5 bg-noise mix-blend-overlay"></div>
            </div>

            {/* Custom styles for radial gradient and noise (would be in CSS) */}
            {/*<style jsx>{`*/}
            {/*    .bg-radial-gradient {*/}
            {/*        background: radial-gradient(circle at center, transparent 0%, rgba(15, 23, 42, 0.2) 50%, rgba(15, 23, 42, 0.4) 100%);*/}
            {/*    }*/}

            {/*    .bg-noise {*/}
            {/*        background-image: radial-gradient(circle at 1px 1px, rgba(255, 255, 255, .15) 1px, transparent 0);*/}
            {/*        background-size: 20px 20px;*/}
            {/*    }*/}
            {/*`}</style>*/}
        </div>
    );
};

export default LetsStartProjectSection;