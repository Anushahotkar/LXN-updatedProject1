import React, { useState } from 'react';
import Logo from '../components/Logo';
import BarChartIcon from '../icons/BarChartIcon';
import UsersIcon from '../icons/UsersIcon';
import TargetIcon from '../icons/TargetIcon';
import TrendingUpIcon from '../icons/TrendingUpIcon';
import MapIcon from '../icons/MapIcon';
import FileTextIcon from '../icons/FileTextIcon';
// --- Landing Page Components ---




const LandingPage = ({ setPage }) => {
     const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
 return (
    <div className="min-h-screen bg-primaryDark text-textLight">
        <header className="container mx-auto px-6 py-4 flex justify-between items-center relative z-10">
            <Logo />
             {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
                <a href="#features" className="hover:text-primaryAccent transition-colors">Features</a>
                <a href="#personas" className="hover:text-primaryAccent transition-colors">Personas</a>
                <a href="#contact" className="hover:text-primaryAccent transition-colors">Contact</a>
            </nav>

             {/* Mobile menu button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="text-primaryAccent focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            {mobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

             {/* Desktop login button */}
            <button
                onClick={() => setPage('login')}
                className="hidden md:inline-block bg-primaryAccent text-black hover:text-gray-500 font-bold py-2 px-6 rounded-lg hover:opacity-90 transition-all shadow-lg"
            >
                Platform Login
            </button>
        </header>


        {/* --- Mobile Nav --- */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-primaryDark px-6 py-4 space-y-4 text-center z-10">
                    <a href="#features" className="block hover:text-primaryAccent">Features</a>
                    <a href="#personas" className="block hover:text-primaryAccent">Personas</a>
                    <a href="#contact" className="block hover:text-primaryAccent">Contact</a>
                    <button
                        onClick={() => setPage('login')}
                        className="w-full bg-primaryAccent text-black hover:text-gray-500 font-bold py-2 px-6 rounded-lg hover:opacity-90 transition-all shadow-lg"
                    >
                        Platform Login
                    </button>
                </div>
            )}

        <main className="container mx-auto px-6 text-center pt-24 pb-12 relative z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
                The Decisive Advantage in Modern Politics.
            </h1>
            <p className="text-lg md:text-xl text-textMuted max-w-3xl mx-auto mb-8">
                LXN is the AI-powered intelligence platform that transforms campaign data into winning strategies. Make informed decisions, optimize resources, and connect with voters like never before.
            </p>
           <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
    <button
        onClick={() => setPage('login')}
        className="bg-primaryAccent text-black hover:text-gray-500 font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-all text-lg shadow-xl w-full md:w-auto"
    >
        Get Started
    </button>
    <a
        href="#features"
        className="bg-transparent border-2 border-textMuted text-textMuted font-bold py-3 px-8 rounded-lg hover:bg-textMuted hover:text-primaryDark transition-colors text-lg w-full md:w-auto text-center"
    >
        Learn More
    </a>
</div>

        </main>

        {/* Features */}
        <section id="features" className="py-20 bg-darkBg relative z-10">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12">Actionable Intelligence at Your Fingertips</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { icon: <BarChartIcon size={32} />, title: "Central Dashboard", desc: "Your campaign's command center with real-time KPIs and geospatial visualizations." },
                        { icon: <UsersIcon size={32} />, title: "Voter Segmentation", desc: "Go beyond demographics with AI-powered analysis to find swing, persuadable, and loyal voters." },
                        { icon: <TargetIcon size={32} />, title: "Campaign Optimization", desc: "Allocate resources effectively, optimize canvassing routes, and A/B test messaging." },
                        { icon: <TrendingUpIcon size={32} />, title: "Sentiment Monitoring", desc: "Track public conversation across social media, news, and forums in real-time." },
                        { icon: <MapIcon size={32} />, title: "Predictive Analytics", desc: "Forecast election outcomes, voter turnout, and fundraising potential with our ML models." },
                        { icon: <FileTextIcon size={32} />, title: "Data Integration", desc: "Seamlessly merge public voter files, census data, and your internal campaign data." },
                    ].map(f => (
                        <div key={f.title} className="bg-cardDark p-8 rounded-lg text-center transform hover:-translate-y-2 transition-transform">
                            <div className="text-primaryAccent mb-4 inline-block">{f.icon}</div>
                            <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                            <p className="text-textMuted">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <footer className="bg-primaryDark py-8 text-center text-textMuted relative z-10">
            <p>&copy; {new Date().getFullYear()} LXN Technologies. All Rights Reserved.</p>
        </footer>
    </div>
 );
};
export default LandingPage;
