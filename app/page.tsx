"use client";

import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import SocialSidebar from "./components/SocialSidebar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between">
      {/* Douglas Padilla Style Initial Preloader Screen */}
      <Preloader />

      {/* Top Header Navigation */}
      <Navbar />

      {/* Fixed Left Social Sidebar */}
      <SocialSidebar />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
