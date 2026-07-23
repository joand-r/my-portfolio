"use client";

import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { GoldLineDividerCenter, GoldLineDividerBottom } from "./Icons";
import {
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiPython,
  SiHtml5,
  SiGnubash,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiAngular,
  SiNodedotjs,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiNetlify,
  SiVercel,
  SiGooglecloud,
  SiDocker,
  SiJira,
  SiDiagramsdotnet,
  SiGit,
  SiGithub,
  SiLinux,
  SiCisco,
} from "react-icons/si";
import { FaAws, FaCss3Alt } from "react-icons/fa6";
import { VscAzure } from "react-icons/vsc";
import { Code2, Server, Database, Cloud, Cpu, Compass } from "lucide-react";

export default function SkillsSection() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<
    "languages" | "frameworks" | "databases" | "cloud" | "methodology" | "servers"
  >("languages");

  const categories = [
    { id: "languages", label: t("skills.cat_languages"), icon: <Code2 className="w-4 h-4" /> },
    { id: "frameworks", label: t("skills.cat_frameworks"), icon: <Cpu className="w-4 h-4" /> },
    { id: "databases", label: t("skills.cat_databases"), icon: <Database className="w-4 h-4" /> },
    { id: "cloud", label: t("skills.cat_cloud"), icon: <Cloud className="w-4 h-4" /> },
    { id: "methodology", label: t("skills.cat_methodology"), icon: <Compass className="w-4 h-4" /> },
    { id: "servers", label: t("skills.cat_servers"), icon: <Server className="w-4 h-4" /> },
  ];

  const techStack = [
    // 1. Lenguajes de Programación
    { name: "JavaScript", cat: "languages", icon: <SiJavascript className="w-7 h-7 text-[#F7DF1E]" />, backGrad: "from-yellow-500 to-amber-700" },
    { name: "TypeScript", cat: "languages", icon: <SiTypescript className="w-7 h-7 text-[#3178C6]" />, backGrad: "from-blue-600 to-indigo-800" },
    { name: "PHP", cat: "languages", icon: <SiPhp className="w-7 h-7 text-[#777BB4]" />, backGrad: "from-indigo-500 to-purple-800" },
    { name: "Python", cat: "languages", icon: <SiPython className="w-7 h-7 text-[#3776AB]" />, backGrad: "from-sky-500 to-blue-700" },
    { name: "HTML5", cat: "languages", icon: <SiHtml5 className="w-7 h-7 text-[#E34F26]" />, backGrad: "from-orange-600 to-red-700" },
    { name: "CSS3", cat: "languages", icon: <FaCss3Alt className="w-7 h-7 text-[#1572B6]" />, backGrad: "from-blue-500 to-cyan-700" },
    { name: "Bash / Shell", cat: "languages", icon: <SiGnubash className="w-7 h-7 text-[#4EAA25]" />, backGrad: "from-emerald-600 to-green-800" },

    // 2. Frameworks & Librerías
    { name: "React.js", cat: "frameworks", icon: <SiReact className="w-7 h-7 text-[#61DAFB]" />, backGrad: "from-cyan-400 to-blue-600" },
    { name: "Next.js 16", cat: "frameworks", icon: <SiNextdotjs className="w-7 h-7 theme-text" />, backGrad: "from-slate-700 to-slate-900" },
    { name: "Vue.js", cat: "frameworks", icon: <SiVuedotjs className="w-7 h-7 text-[#4FC08D]" />, backGrad: "from-emerald-400 to-teal-700" },
    { name: "Angular", cat: "frameworks", icon: <SiAngular className="w-7 h-7 text-[#DD0031]" />, backGrad: "from-red-600 to-rose-800" },
    { name: "Node.js", cat: "frameworks", icon: <SiNodedotjs className="w-7 h-7 text-[#339933]" />, backGrad: "from-green-600 to-emerald-800" },
    { name: "Tailwind CSS", cat: "frameworks", icon: <SiTailwindcss className="w-7 h-7 text-[#06B6D4]" />, backGrad: "from-teal-400 to-cyan-600" },

    // 3. Bases de Datos
    { name: "PostgreSQL", cat: "databases", icon: <SiPostgresql className="w-7 h-7 text-[#4169E1]" />, backGrad: "from-blue-600 to-indigo-900" },
    { name: "MongoDB", cat: "databases", icon: <SiMongodb className="w-7 h-7 text-[#47A248]" />, backGrad: "from-emerald-500 to-green-700" },
    { name: "MySQL", cat: "databases", icon: <SiMysql className="w-7 h-7 text-[#4479A1]" />, backGrad: "from-sky-600 to-blue-800" },

    // 4. Cloud & Despliegue
    { name: "Netlify", cat: "cloud", icon: <SiNetlify className="w-7 h-7 text-[#00C7B7]" />, backGrad: "from-teal-400 to-cyan-700" },
    { name: "Vercel", cat: "cloud", icon: <SiVercel className="w-7 h-7 theme-text" />, backGrad: "from-slate-600 to-slate-900" },
    { name: "AWS Cloud", cat: "cloud", icon: <FaAws className="w-7 h-7 text-[#FF9900]" />, backGrad: "from-amber-500 to-orange-700" },
    { name: "Microsoft Azure", cat: "cloud", icon: <VscAzure className="w-7 h-7 text-[#0089D6]" />, backGrad: "from-blue-500 to-sky-700" },
    { name: "Google Cloud", cat: "cloud", icon: <SiGooglecloud className="w-7 h-7 text-[#4285F4]" />, backGrad: "from-blue-400 to-indigo-600" },
    { name: "Docker", cat: "cloud", icon: <SiDocker className="w-7 h-7 text-[#2496ED]" />, backGrad: "from-sky-500 to-blue-700" },

    // 5. Metodologías & Arquitectura
    { name: "Jira Software", cat: "methodology", icon: <SiJira className="w-7 h-7 text-[#0052CC]" />, backGrad: "from-blue-600 to-indigo-800" },
    { name: "Draw.io", cat: "methodology", icon: <SiDiagramsdotnet className="w-7 h-7 text-[#F08705]" />, backGrad: "from-orange-500 to-amber-700" },
    { name: "Software Architecture", cat: "methodology", icon: <Compass className="w-7 h-7 text-[#D4AF37]" />, backGrad: "from-yellow-600 to-amber-800" },
    { name: "Git", cat: "methodology", icon: <SiGit className="w-7 h-7 text-[#F05032]" />, backGrad: "from-orange-600 to-red-700" },
    { name: "GitHub", cat: "methodology", icon: <SiGithub className="w-7 h-7 theme-text" />, backGrad: "from-slate-700 to-zinc-900" },

    // 6. Servidores & Redes
    { name: "Linux (Ubuntu/RHEL)", cat: "servers", icon: <SiLinux className="w-7 h-7 text-[#FCC624]" />, backGrad: "from-amber-500 to-yellow-600" },
    { name: "Cisco IOS", cat: "servers", icon: <SiCisco className="w-7 h-7 text-[#1BA0D7]" />, backGrad: "from-cyan-600 to-blue-800" },
  ];

  const filtered = techStack.filter((t) => t.cat === activeCategory);

  return (
    <section id="skills" className="py-16 theme-bg transition-colors relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pl-4 lg:pl-24">
        
        {/* La Velada Center Line Divider */}
        <div className="max-w-xs mx-auto mb-4 animate-stack">
          <GoldLineDividerCenter className="my-0" />
        </div>

        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-2 mb-10 animate-stack delay-100">
          <h2 className="text-3xl md:text-5xl font-extrabold theme-text tracking-[0.15em] font-sans uppercase">
            {t("skills.title")}
          </h2>
          <p className="font-mono text-xs font-bold tracking-[0.2em] text-[#D4AF37] uppercase max-w-xl">
            {t("skills.subtitle")}
          </p>
        </div>

        {/* Category Switcher Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 pb-3 border-b theme-border animate-stack delay-200">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-3.5 py-2 rounded-xl font-mono text-xs font-bold uppercase transition-all cursor-pointer flex items-center gap-2 ${
                activeCategory === cat.id
                  ? "bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#060919] shadow-md scale-105"
                  : "theme-bg-card theme-text theme-border-gold hover:border-[#D4AF37]"
              }`}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Pure Icon 3D Squircle Grid (High Contrast Tooltip in Light/Dark Mode) */}
        <div className="flex flex-wrap justify-center gap-5 sm:gap-6">
          {filtered.map((item, idx) => (
            <div
              key={idx}
              className="squircle-card-wrapper cursor-pointer group animate-stack delay-300 relative"
              title={item.name}
            >
              {/* Double Layer 3D Card */}
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
                <div className={`squircle-card-back bg-gradient-to-br ${item.backGrad}`}></div>
                <div className="squircle-card-front w-full h-full flex items-center justify-center">
                  {item.icon}
                </div>
              </div>

              {/* High Contrast Tooltip Popup (Fixed for Light & Dark mode) */}
              <span className="absolute -bottom-9 left-1/2 -translate-x-1/2 px-3 py-1 rounded-md bg-slate-900 text-[#F3E5AB] text-[11px] font-mono font-bold tracking-wider opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-[#D4AF37]/60 shadow-2xl z-40">
                {item.name}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom La Velada Line Divider */}
        <GoldLineDividerBottom className="mt-14 mb-0 opacity-70" />

      </div>
    </section>
  );
}
