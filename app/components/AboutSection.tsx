"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { GoldLineDividerCenter, GoldLineDividerBottom } from "./Icons";
import { GraduationCap, MapPin, Languages, Palette } from "lucide-react";

export default function AboutSection() {
  const { t } = useLanguage();

  const aboutItems = [
    {
      badge: "CARRERA",
      title: "INGENIERÍA EN SISTEMAS",
      icon: <GraduationCap className="w-6 h-6 text-[#D4AF37]" />,
      badgeColor: "bg-[#D4AF37]/10 text-[#D4AF37] border-theme-border-gold",
      iconBg: "bg-[#D4AF37]/10 border-[#D4AF37]/40 text-[#D4AF37]",
      delay: "delay-100",
    },
    {
      badge: "UBICACIÓN",
      title: "SANTA CRUZ, BOLIVIA",
      icon: <MapPin className="w-6 h-6 text-emerald-400" />,
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
      iconBg: "bg-emerald-500/10 border-emerald-500/40 text-emerald-400",
      delay: "delay-200",
    },
    {
      badge: "IDIOMA",
      title: "INGLÉS B1",
      icon: <Languages className="w-6 h-6 text-sky-400" />,
      badgeColor: "bg-sky-500/10 text-sky-400 border-sky-500/30",
      iconBg: "bg-sky-500/10 border-sky-500/40 text-sky-400",
      delay: "delay-300",
    },
    {
      badge: "PERFIL",
      title: "DISEÑADOR GRÁFICO",
      icon: <Palette className="w-6 h-6 text-purple-400" />,
      badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/30",
      iconBg: "bg-purple-500/10 border-purple-500/40 text-purple-400",
      delay: "delay-400",
    },
  ];

  return (
    <section id="about" className="py-20 theme-bg transition-colors relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pl-4 lg:pl-24">
        
        {/* La Velada Style Center Emblem Line Above Section Header */}
        <div className="max-w-xs mx-auto mb-4 animate-stack">
          <GoldLineDividerCenter className="my-0" />
        </div>

        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-2 mb-12 animate-stack delay-100">
          <h2 className="text-3xl md:text-5xl font-extrabold font-cinzel velada-gold-text tracking-[0.15em] uppercase">
            {t("about.title")}
          </h2>
        </div>

        {/* High-End Aligned Pantheon Cards Grid (Infolavelada Bracket Format) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {aboutItems.map((item, idx) => (
            <div
              key={idx}
              className={`infolavelada-card corner-brackets-top corner-brackets-bottom card-spotlight p-6 flex flex-col justify-between items-center text-center space-y-5 animate-stack ${item.delay} h-full min-h-[220px] shadow-xl group`}
            >
              {/* Top Badge */}
              <span className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-[0.2em] uppercase border shadow-sm ${item.badgeColor}`}>
                {item.badge}
              </span>

              {/* Center Icon */}
              <div className={`p-4 rounded-2xl border shadow-lg group-hover:scale-110 transition-transform ${item.iconBg}`}>
                {item.icon}
              </div>

              {/* Bottom Title (Equal Height Container for Perfect Alignment) */}
              <div className="h-12 flex items-center justify-center">
                <h3 className="text-sm sm:text-base font-extrabold font-cinzel theme-text-title tracking-[0.1em] uppercase group-hover:text-[#D4AF37] transition-colors leading-tight">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom La Velada Line Divider */}
        <GoldLineDividerBottom className="mt-14 mb-0 opacity-70" />

      </div>
    </section>
  );
}
