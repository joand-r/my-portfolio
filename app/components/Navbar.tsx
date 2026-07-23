"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { Sun, Moon, Globe, Menu, X, Home, User, Cpu, Briefcase, Mail } from "lucide-react";

export default function Navbar() {
  const { lang, toggleLang, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Track active section
      const sections = ["hero", "about", "skills", "projects", "contact"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 250) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "hero", name: t("nav.home"), href: "#hero", icon: <Home className="w-4 h-4" /> },
    { id: "about", name: t("nav.about"), href: "#about", icon: <User className="w-4 h-4" /> },
    { id: "skills", name: t("nav.skills"), href: "#skills", icon: <Cpu className="w-4 h-4" /> },
    { id: "projects", name: t("nav.projects"), href: "#projects", icon: <Briefcase className="w-4 h-4" /> },
    { id: "contact", name: t("nav.contact"), href: "#contact", icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none px-4 sm:px-6 pt-4">
      
      {/* 1. TOP MODERN FLOATING PILL NAVBAR (scrolled === false) */}
      <div
        className={`max-w-6xl mx-auto pointer-events-auto transition-all duration-500 rounded-full border border-[#D4AF37]/40 theme-bg-card shadow-2xl backdrop-blur-2xl px-6 py-3 flex items-center justify-between ${
          scrolled ? "opacity-0 -translate-y-10 scale-95 pointer-events-none absolute inset-x-4" : "opacity-100 translate-y-0 scale-100"
        }`}
      >
        {/* Brand Logo with Gold Emblem Pill */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#AA7C11] text-[#050811] font-cinzel font-black text-xs flex items-center justify-center shadow-md">
            JDR
          </span>
          <span className="font-cinzel text-xs sm:text-sm font-extrabold tracking-[0.25em] theme-text-title uppercase group-hover:text-[#D4AF37] transition-colors">
            PORTAFOLIO
          </span>
        </a>

        {/* Desktop Links Center */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`velada-nav-link text-xs font-bold font-cinzel tracking-[0.2em] transition-all ${
                  isActive ? "active text-[#D4AF37]" : ""
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Control Toggles Right */}
        <div className="hidden sm:flex items-center gap-2">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border theme-border-gold theme-bg text-xs font-mono font-bold theme-text hover:border-[#D4AF37] transition-all cursor-pointer shadow-sm"
            title="Idioma"
          >
            <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{lang.toUpperCase()}</span>
          </button>

          <button
            onClick={toggleTheme}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border theme-border-gold theme-bg text-xs font-mono font-bold theme-text hover:border-[#D4AF37] transition-all cursor-pointer shadow-sm"
            title="Tema"
          >
            {theme === "dark" ? (
              <>
                <Sun className="w-3.5 h-3.5 text-amber-400" />
                <span>CLARO</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-indigo-500" />
                <span>OSCURO</span>
              </>
            )}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border theme-border-gold theme-bg theme-text"
          >
            {theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-500" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full text-[#D4AF37] theme-bg border theme-border-gold"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* 2. COMPACT FLOATING SCROLL PILL NAVBAR (scrolled === true) */}
      <div
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 pointer-events-auto transition-all duration-500 ease-out ${
          scrolled ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-8 scale-90 pointer-events-none"
        }`}
      >
        <div className="flex items-center gap-1.5 p-1.5 rounded-full border border-[#D4AF37]/50 theme-bg-card shadow-2xl backdrop-blur-xl shadow-black/50">
          
          {/* Nav Links as Floating Golden Pills */}
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full font-cinzel text-xs font-bold tracking-wider transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#050811] shadow-md shadow-[#D4AF37]/30 scale-105"
                    : "theme-text hover:text-[#D4AF37] hover:bg-[#D4AF37]/10"
                }`}
              >
                {link.icon}
                <span className="hidden sm:inline-block uppercase">{link.name}</span>
              </a>
            );
          })}

          <div className="w-[1px] h-4 bg-[#D4AF37]/30 mx-1 hidden sm:block"></div>

          {/* Quick Controls inside Floating Pill */}
          <div className="hidden sm:flex items-center gap-1">
            <button
              onClick={toggleLang}
              className="p-1.5 rounded-full theme-text hover:text-[#D4AF37] text-xs font-mono font-bold"
              title="Idioma"
            >
              {lang.toUpperCase()}
            </button>
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-full theme-text hover:text-[#D4AF37]"
              title="Tema"
            >
              {theme === "dark" ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-indigo-500" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 theme-bg-card border border-theme-border-gold rounded-2xl p-4 space-y-2 pointer-events-auto shadow-2xl backdrop-blur-xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-xs font-cinzel font-bold tracking-widest uppercase theme-text hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}

    </header>
  );
}
