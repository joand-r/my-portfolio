"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { GoldLineDividerBottom } from "./Icons";
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

      // Track active section for floating pill indicator
      const sections = ["hero", "about", "skills", "projects", "contact"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
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
    { id: "hero", name: t("nav.home"), href: "#hero", icon: <Home className="w-3.5 h-3.5" /> },
    { id: "about", name: t("nav.about"), href: "#about", icon: <User className="w-3.5 h-3.5" /> },
    { id: "skills", name: t("nav.skills"), href: "#skills", icon: <Cpu className="w-3.5 h-3.5" /> },
    { id: "projects", name: t("nav.projects"), href: "#projects", icon: <Briefcase className="w-3.5 h-3.5" /> },
    { id: "contact", name: t("nav.contact"), href: "#contact", icon: <Mail className="w-3.5 h-3.5" /> },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      
      {/* 1. INITIAL TOP HEADER (Scrolled === false) */}
      <div
        className={`w-full pointer-events-auto transition-all duration-500 theme-bg-secondary shadow-md backdrop-blur-md ${
          scrolled ? "opacity-0 -translate-y-full pointer-events-none absolute" : "opacity-100 translate-y-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <span className="font-cinzel text-sm font-bold tracking-[0.25em] theme-text-title uppercase hover:text-[#D4AF37] transition-colors">
             PORTAFOLIO
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="velada-nav-link"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Control Toggles */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full border theme-border-gold theme-bg-card text-xs font-cinzel font-bold theme-text hover:border-[#D4AF37] transition-all cursor-pointer"
              title="Cambiar Idioma / Switch Language"
            >
              <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="tracking-widest">{lang === "es" ? "ES" : "EN"}</span>
            </button>

            <button
              onClick={toggleTheme}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full border theme-border-gold theme-bg-card text-xs font-cinzel font-bold theme-text hover:border-[#D4AF37] transition-all cursor-pointer"
              title="Cambiar Tema / Switch Theme"
            >
              {theme === "dark" ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                  <span className="tracking-widest">CLARO</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-indigo-500" />
                  <span className="tracking-widest">OSCURO</span>
                </>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleLang}
              className="px-2 py-1 rounded border theme-border-gold text-xs font-cinzel font-bold text-[#D4AF37]"
            >
              {lang.toUpperCase()}
            </button>
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded border theme-border-gold theme-text"
            >
              {theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-500" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded text-[#D4AF37]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Clean Header Bottom Gold Line */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GoldLineDividerBottom className="my-0 opacity-80" />
        </div>
      </div>

      {/* 2. FLOATING SCROLL GLASS PILL NAVBAR (Scrolled === true - Douglas Padilla Image Exact Match) */}
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
        <div className="md:hidden theme-bg-secondary border-b theme-border-gold px-4 pt-3 pb-5 space-y-2 pointer-events-auto">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-xs font-cinzel font-bold tracking-widest uppercase theme-text hover:text-[#D4AF37] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}

    </header>
  );
}
