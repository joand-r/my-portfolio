"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { InstagramIcon, GithubIcon, FacebookIcon, LinkedinIcon, WhatsAppIcon, GoldLineDividerCenter } from "./Icons";
import { ArrowUp, Mail, Shield } from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();

  const socialLinks = [
    { name: "/WHATSAPP", href: "https://wa.me/59160864448", icon: <WhatsAppIcon className="w-4 h-4 text-emerald-400" /> },
    { name: "/EMAIL", href: "mailto:joandanielrr@gmail.com", icon: <Mail className="w-4 h-4 text-[#D4AF37]" /> },
    { name: "/GITHUB", href: "https://github.com/", icon: <GithubIcon className="w-4 h-4 theme-text" /> },
    { name: "/LINKEDIN", href: "https://linkedin.com/in/", icon: <LinkedinIcon className="w-4 h-4 text-[#D4AF37]" /> },
    { name: "/INSTAGRAM", href: "https://instagram.com/", icon: <InstagramIcon className="w-4 h-4 text-[#D4AF37]" /> },
    { name: "/FACEBOOK", href: "https://facebook.com/", icon: <FacebookIcon className="w-4 h-4 text-sky-500" /> },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="theme-bg-secondary theme-text-muted py-12 border-t theme-border-gold transition-colors relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pl-4 lg:pl-24 text-center">
        
        {/* Direct Action Icons Bar */}
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 pb-8 border-b theme-border">
          {socialLinks.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-cinzel text-xs font-bold tracking-[0.2em] theme-text hover:text-[#D4AF37] transition-colors group"
            >
              <span className="p-2 rounded-lg theme-bg border theme-border-gold group-hover:scale-110 transition-transform">
                {s.icon}
              </span>
              <span>{s.name}</span>
            </a>
          ))}
        </div>

        {/* Info Line */}
        <div className="py-6 flex flex-wrap justify-center items-center gap-4 font-cinzel text-xs font-bold tracking-[0.2em] theme-text-muted uppercase">
          <span>PORTAFOLIO DE <strong className="theme-text-title">JOAN DANIEL ROBLES</strong></span>
          <span className="text-[#D4AF37]">│</span>
          <span>INGENIERO EN SISTEMAS</span>
          <span className="text-[#D4AF37]">│</span>
          <span>2026</span>
        </div>

        {/* Center Emblem Line */}
        <div className="max-w-xs mx-auto mb-6">
          <GoldLineDividerCenter className="my-0" />
        </div>

        {/* Copyright & Sub-caption */}
        <div className="space-y-2 font-cinzel text-[11px] tracking-[0.25em] uppercase theme-text-muted">
          <p>© {new Date().getFullYear()} JOAN DANIEL ROBLES. TODOS LOS DERECHOS RESERVADOS.</p>
          <p className="text-[10px] theme-text-muted flex items-center justify-center gap-2">
            <Shield className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>DESARROLLADO EN SANTA CRUZ, BOLIVIA</span>
          </p>
        </div>

        {/* Back to Top */}
        <div className="pt-6 flex justify-center">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full theme-bg border theme-border-gold text-xs font-cinzel font-bold tracking-widest theme-text hover:text-[#D4AF37] transition-all cursor-pointer"
          >
            <span>INICIO</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#D4AF37]" />
          </button>
        </div>

      </div>
    </footer>
  );
}
