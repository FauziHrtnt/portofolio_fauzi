import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import SkillsPage from './pages/SkillsPage';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';

function App() {
    useEffect(() => {
        // Enforce pure Dark Mode layout
        document.documentElement.classList.add('dark');
    }, []);

    return (
        <BrowserRouter>
            <ScrollToTop />

            <Helmet>
                {/* Maximum SEO Limits for CSR */}
                <title>Fauzi Hartanto - Web & Android Developer</title>
                <meta name="description" content="Fauzi Hartanto's Portfolio Site. Exploring web development, Android studio applications, and software engineering." />
                <meta name="keywords" content="Fauzi Hartanto, Software Engineer, Web Developer, Android Developer, CodeIgniter, PHP, Java, Python, SQL" />
                <meta name="author" content="Fauzi Hartanto" />

                {/* Open Graph / Social Media Metatags */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://github.com/FauziHrtnt" />
                <meta property="og:title" content="Fauzi Hartanto - Portfolio" />
                <meta property="og:description" content="Explore Fauzi's project showcases and engineering capabilities." />
                <meta property="og:image" content="" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Fauzi Hartanto - Web & Android Developer" />
                <meta name="twitter:description" content="Personal portfolio showcasing web and mobile development work." />
                <meta name="twitter:image" content="" />

                {/* JSON-LD Structured Data for Rich Snippets */}
                <script type="application/ld+json">
                    {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Fauzi Hartanto",
              "jobTitle": "Web & Android Developer",
              "url": "https://github.com/FauziHrtnt",
              "sameAs": [
                "https://linkedin.com/in/fauzi-hartanto-09525228a"
              ],
              "knowsAbout": ["Web Development", "Android Development", "PHP", "Java", "Python", "SQL", "CodeIgniter"]
            }
          `}
                </script>
            </Helmet>

            <div className="flex flex-col min-h-screen bg-white dark:bg-dark-300 text-gray-900 dark:text-gray-100 transition-colors duration-300">
                <Navbar />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/projects" element={<ProjectsPage />} />
                        <Route path="/project/:id" element={<ProjectDetailsPage />} />
                        <Route path="/skills" element={<SkillsPage />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
