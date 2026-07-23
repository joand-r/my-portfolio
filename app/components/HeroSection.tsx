"use client";

import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { GoldLineDividerCenter, GoldLineDividerBottom } from "./Icons";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";

export default function HeroSection() {
  const { t } = useLanguage();
  const [imageError, setImageError] = useState(false);

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden theme-bg bg-gold-lines transition-colors">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full blur-[150px] pointer-events-none animate-ambient"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pl-4 lg:pl-24">
        
        {/* Center Line Emblem Above Title */}
        <RevealOnScroll delay={100} className="max-w-xs mx-auto mb-6">
          <GoldLineDividerCenter className="my-0" />
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Clean Scannable Hero Typography */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            
            <RevealOnScroll delay={200} className="space-y-2">
              <p className="theme-text-muted font-cinzel text-xs tracking-[0.3em] uppercase">
                {t("hero.greeting")}
              </p>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[0.08em] font-cinzel velada-gold-text leading-[1.1] uppercase">
                JOAN DANIEL ROBLES
              </h1>
              
              <h2 className="text-sm sm:text-base font-cinzel font-bold text-[#D4AF37] tracking-[0.2em] uppercase pt-1">
                INGENIERO EN SISTEMAS
              </h2>
            </RevealOnScroll>

            {/* Action CTA Buttons */}
            <RevealOnScroll delay={350} className="flex flex-wrap gap-3 pt-4">
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#050811] font-cinzel font-bold text-xs tracking-widest uppercase shadow-md hover:scale-105 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>{t("hero.btn_projects")}</span>
                <ArrowRight className="w-4 h-4 text-[#050811]" />
              </a>

              <a
                href="#contact"
                className="px-6 py-3.5 rounded-xl theme-bg-card border theme-border-gold theme-text font-cinzel font-bold text-xs tracking-widest uppercase hover:border-[#D4AF37] shadow-sm transition-all flex items-center gap-2 cursor-pointer"
              >
                {t("hero.btn_contact")}
              </a>

              <a
                href="#contact"
                className="px-4 py-3.5 rounded-xl theme-bg-card border theme-border theme-text-muted hover:theme-text hover:border-[#D4AF37] transition-all flex items-center gap-1.5 font-mono text-xs cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#D4AF37]" />
                <span>{t("hero.btn_cv")}</span>
              </a>
            </RevealOnScroll>

          </div>

          {/* Right Column: Clean PNG Photo Frame Only */}
          <div className="lg:col-span-5 flex justify-center">
            <RevealOnScroll delay={300} className="w-full max-w-sm flex justify-center">
              <div className="infolavelada-card corner-brackets-top corner-brackets-bottom card-spotlight p-5 w-full flex items-center justify-center shadow-2xl">
                
                {/* PNG Photo Container */}
                <div className="w-56 h-64 sm:w-64 sm:h-72 rounded-xl overflow-hidden border border-[#D4AF37]/30 theme-bg flex items-center justify-center relative shadow-inner">
                  {!imageError ? (
                    <Image
                      src="/images/profile.png"
                      alt="Joan Daniel Robles"
                      width={256}
                      height={288}
                      className="object-cover w-full h-full"
                      onError={() => setImageError(true)}
                      priority
                    />
                  ) : (
                    /* Clean Fallback Badge */
                    <div className="flex flex-col items-center justify-center text-[#D4AF37] p-4 space-y-2">
                      <span className="text-xl font-cinzel font-extrabold tracking-wider theme-text-title">JDR</span>
                      <span className="text-xs font-cinzel font-bold tracking-wider theme-text">JOAN DANIEL ROBLES</span>
                      <span className="text-[10px] font-mono theme-text-muted">INGENIERO EN SISTEMAS</span>
                    </div>
                  )}
                </div>

              </div>
            </RevealOnScroll>
          </div>

        </div>

        {/* Bottom Line Divider */}
        <RevealOnScroll delay={450}>
          <GoldLineDividerBottom className="mt-14 mb-0 opacity-60" />
        </RevealOnScroll>

      </div>
    </section>
  );
}
