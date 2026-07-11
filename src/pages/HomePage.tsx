import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Github, Linkedin, Mail, Twitter, ArrowRight, Layers, Smartphone, Server, Code2 } from 'lucide-react';
import { FaMediumM } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import InteractiveBackground from '../components/ui/InteractiveBackground';
import FeaturedProjects from '../components/sections/FeaturedProjects';
import ServicesSection from '../components/sections/ServicesSection';
import AchievementsSection from '../components/sections/AchievementsSection';
import ContactSection from '../components/sections/ContactSection';

const languages = [
    { name: 'PHP', tag: 'Web Development / CI3', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" alt="PHP" className="w-10 h-10 drop-shadow-md group-hover:drop-shadow-[0_0_12px_rgba(119,123,179,0.6)] transition-all duration-300" /> },
    { name: 'Java', tag: 'Android / Enterprise', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="Java" className="w-10 h-10 drop-shadow-md group-hover:drop-shadow-[0_0_12px_rgba(237,139,0,0.6)] transition-all duration-300" /> },
    { name: 'Python', tag: 'Data & Scripting', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" className="w-10 h-10 drop-shadow-md group-hover:drop-shadow-[0_0_12px_rgba(55,115,166,0.6)] transition-all duration-300" /> },
    { name: 'MySQL / SQL', tag: 'Database Architecture', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" alt="MySQL" className="w-10 h-10 drop-shadow-md group-hover:drop-shadow-[0_0_12px_rgba(0,117,143,0.6)] transition-all duration-300" /> },
];

const HomePage: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    // Fetch top 5 projects for the featured carousel

    useEffect(() => {
        // Complex GSAP Entrance Animation
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ delay: 0.2 });

            tl.from('.hero-badge', { y: 20, opacity: 0, duration: 0.6, ease: 'back.out(1.7)' })
                .from('.hero-title-line', { y: 40, opacity: 0, rotationX: -20, duration: 0.8, stagger: 0.15, ease: 'power3.out' }, "-=0.3")
                .from('.hero-desc', { y: 20, opacity: 0, duration: 0.6, ease: 'power2.out' }, "-=0.4")
                .from('.hero-metrics .metric-item', { scale: 0.8, opacity: 0, duration: 0.5, stagger: 0.1, ease: 'back.out(1.5)' }, "-=0.2")
                .from('.hero-buttons', { y: 20, opacity: 0, duration: 0.5, ease: 'power2.out' }, "-=0.3")
                .fromTo('.hero-socials', { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, "-=0.2")
                .from('.content-section', { y: 40, opacity: 0, duration: 0.8, stagger: 0.2, ease: 'power2.out' }, "-=0.2");
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="relative min-h-[calc(100vh-4rem)] bg-dark-300">
            <Helmet>
                <title>Fauzi Hartanto - Information Systems Student & Developer</title>
                <meta name="description" content="Portfolio of Fauzi Hartanto - Information Systems Student & Developer" />
                <link rel="canonical" href="https://www.fauzihartanto.com/" />
            </Helmet>

            {/* High-Performance Canvas Interactive Layer */}
            <InteractiveBackground />

            {/* Animated Blue Gradient Background Setup (Alpha 0.3) */}
            <div className="fixed inset-0 z-0 animate-gradient-bg bg-[length:400%_400%] bg-gradient-to-br from-[#0a192f]/30 via-[#0f2d59]/30 to-[#020c1b]/30 pointer-events-none opacity-100 mix-blend-screen"></div>

            {/* Main Content Overlay */}
            <div ref={containerRef} className="relative z-10 w-full pt-20">
                <section className="container mx-auto px-4 max-w-5xl flex flex-col items-center text-center mb-32">

                    {/* Badge */}
                    <div className="hero-badge inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-dark-100 border border-gray-800 text-primary-400 text-sm font-semibold mb-8 shadow-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                        </span>
                        Mahasiswa Sistem Informasi & Developer
                    </div>

                    {/* Title Elements */}
                    <div className="perspective-1000 mb-6">
                        <h1 className="hero-title-line text-5xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tight text-white leading-[1.1]">
                            Halo, Saya <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-cyan-400">Fauzi Hartanto</span>
                        </h1>
                        <h2 className="hero-title-line text-3xl md:text-5xl font-display font-medium text-gray-300 mt-2">
                            Web & Android Developer
                        </h2>
                    </div>

                    {/* Description Details */}
                    <p className="hero-desc text-lg md:text-xl text-gray-400 max-w-4xl mb-12 leading-relaxed">
                        Mahasiswa Sistem Informasi di <span className="text-white font-semibold">Universitas Teknologi Yogyakarta</span>. Berpengalaman dalam membangun aplikasi web manajemen inventaris menggunakan <span className="text-primary-400">CodeIgniter 3 (PHP)</span> dan mengembangkan aplikasi Android native menggunakan <span className="text-cyan-400">Java (Android Studio)</span>. Selain itu, saya memiliki dasar yang kuat dalam teknik mesin, desain CAD (<span className="text-cyan-400">Solid Edge</span>), dan dokumentasi industri.
                    </p>

                    {/* Quick Metrics / Tech Stack */}
                    <div className="hero-metrics flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
                        <div className="metric-item flex flex-col items-center p-4 bg-dark-200/60 backdrop-blur-md rounded-2xl border border-gray-800 shadow-sm min-w-[150px]">
                            <Code2 className="text-primary-500 mb-2" size={28} />
                            <span className="font-bold text-white text-lg">Pengembangan Web</span>
                            <span className="text-xs text-gray-400">CodeIgniter 3 & PHP</span>
                        </div>
                        <div className="metric-item flex flex-col items-center p-4 bg-dark-200/60 backdrop-blur-md rounded-2xl border border-gray-800 shadow-sm min-w-[150px]">
                            <Smartphone className="text-primary-500 mb-2" size={28} />
                            <span className="font-bold text-white text-lg">Android Dev</span>
                            <span className="text-xs text-gray-400">Java & Android Studio</span>
                        </div>
                        <div className="metric-item flex flex-col items-center p-4 bg-dark-200/60 backdrop-blur-md rounded-2xl border border-gray-800 shadow-sm min-w-[150px]">
                            <Layers className="text-cyan-500 mb-2" size={28} />
                            <span className="font-bold text-white text-lg">Pemodelan 3D</span>
                            <span className="text-xs text-gray-400">Solid Edge & CAD</span>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="hero-buttons flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 mb-14 w-full px-4 sm:px-0">
                        <Link to="/projects" className="flex w-full sm:w-auto items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white font-bold transition-all shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 transform hover:-translate-y-1">
                            Lihat Proyek Saya <ArrowRight size={20} />
                        </Link>
                        <a href="mailto:hartantofauzi14@gmail.com" className="flex w-full sm:w-auto items-center justify-center gap-2 px-8 py-4 rounded-full bg-dark-100 border border-gray-800 hover:border-primary-500/50 text-white font-bold transition-all transform hover:-translate-y-1">
                            Hubungi Saya
                        </a>
                    </div>

                    {/* Socials */}
                    <div className="hero-socials flex items-center gap-6 text-gray-400">
                        <a href="https://linkedin.com/in/fauzi-hartanto-09525228a" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-3 bg-dark-200 rounded-full shadow-sm hover:text-[#0a66c2] hover:bg-white hover:scale-110 transition-all border border-gray-800 flex items-center justify-center">
                            <Linkedin size={22} />
                        </a>
                        <a href="https://github.com/FauziHrtnt" target="_blank" rel="noopener noreferrer" aria-label="Github" className="p-3 bg-dark-200 rounded-full shadow-sm hover:text-white hover:bg-gray-800 hover:scale-110 transition-all border border-gray-800 flex items-center justify-center">
                            <Github size={22} />
                        </a>
                    </div>
                </section>

                {/* Services Section */}
                <ServicesSection />

                {/* Programming Languages Section */}
                <section className="content-section container mx-auto px-4 max-w-5xl mb-32">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-3xl font-display font-bold text-white flex items-center gap-3">
                            <Code2 className="text-primary-500" /> Bahasa Pemrograman Utama
                        </h3>
                    </div>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-5">
                        {languages.map(lang => (
                            <div key={lang.name} className="flex md:flex-row flex-col items-center justify-center md:justify-start gap-2 md:gap-5 bg-dark-200/80 border border-gray-800/80 hover:border-primary-500/50 p-4 md:p-6 rounded-2xl transition-all backdrop-blur-md group hover:shadow-lg hover:shadow-primary-500/10 aspect-square md:aspect-auto">
                                <div className="group-hover:scale-110 transition-transform bg-dark-100 p-3 rounded-xl border border-gray-800 shadow-inner flex-shrink-0">
                                    {lang.icon}
                                </div>
                                <div className="hidden md:block">
                                    <h4 className="font-bold text-lg text-white group-hover:text-primary-400 transition-colors">{lang.name}</h4>
                                    <p className="text-xs text-gray-400">{lang.tag}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Featured Projects Component */}
                <FeaturedProjects />

                {/* Achievements & Organizations Section */}
                <AchievementsSection />

                {/* GitHub CTA Section */}
                <section className="content-section container mx-auto px-4 max-w-5xl mb-32 mt-20 relative group">
                    <div className="relative z-10 p-10 md:p-14 rounded-[3rem] bg-gradient-to-br from-dark-200/90 to-dark-100 border border-gray-800 shadow-2xl overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10 transform transition-all duration-500 hover:border-primary-500/30">
                        {/* Background glowing effects */}
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 transition-opacity duration-700 group-hover:opacity-100 opacity-60"></div>
                        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-cyan-600/10 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4 transition-opacity duration-700 group-hover:opacity-100 opacity-60"></div>

                        <div className="relative z-10 flex-1 text-center md:text-left">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-dark-300/80 border border-gray-700 text-gray-300 text-xs font-bold uppercase tracking-widest mb-6 shadow-sm backdrop-blur-md">
                                <Github size={14} className="text-white" /> Open Source
                            </div>
                            <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-5 tracking-tight">
                                Jelajahi <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-cyan-400">Semua Proyek</span>
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
                                Telusuri repositori GitHub saya untuk menemukan koleksi proyek publik, algoritma sumber terbuka (open-source), dan eksperimen kode pemrograman yang dibangun dengan berbagai teknologi.
                            </p>
                        </div>

                        <div className="relative z-10 flex-shrink-0 mt-4 md:mt-0">
                            <a href="https://github.com/FauziHrtnt" target="_blank" rel="noopener noreferrer" className="group/btn relative inline-flex items-center justify-center gap-3 px-8 py-5 bg-white text-black font-extrabold text-lg rounded-full overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.6)]">
                                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-10 bg-gradient-to-b from-transparent via-transparent to-black pointer-events-none"></span>
                                <div className="absolute inset-0 bg-gradient-to-r from-primary-100 to-cyan-100 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                                <Github size={24} className="relative z-10 group-hover/btn:rotate-12 transition-transform duration-300" />
                                <span className="relative z-10 text-black">Lihat Profil GitHub</span>
                                <ArrowRight size={20} className="relative z-10 text-black group-hover/btn:translate-x-1.5 transition-transform duration-300" />
                            </a>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <ContactSection />
            </div>

            {/* Ambient gradients to blend with canvas */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary-900/10 to-transparent pointer-events-none z-0"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none z-0"></div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .hide-scrollbar::-webkit-scrollbar { display: none; }
            `}} />
        </div>
    );
};

export default HomePage;
