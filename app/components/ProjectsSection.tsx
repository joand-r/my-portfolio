"use client";

import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { GithubIcon, GoldLineDividerCenter, GoldLineDividerBottom } from "./Icons";
import { ExternalLink, Server, Code, Layers, ShieldCheck, Terminal, Rocket } from "lucide-react";
import { SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiDocker, SiLinux, SiCisco } from "react-icons/si";

export default function ProjectsSection() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<"servers" | "web" | "design">("servers");
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  const projects = [
    {
      id: "portafolio-jdr",
      num: "01",
      title: "Portafolio Personal JDR",
      category: "web",
      subtitle: "Next.js React TypeScript +2",
      description: "Plataforma web de alto rendimiento inspirada en La Velada del Año VI y douglaspadilla.dev. Desarrollada con Next.js 16, React 19, Tailwind CSS V4 e i18n bilingüe.",
      techPills: [
        { name: "Next.js", icon: <SiNextdotjs className="w-3.5 h-3.5" /> },
        { name: "React", icon: <SiReact className="w-3.5 h-3.5 text-[#61DAFB]" /> },
        { name: "TypeScript", icon: <SiTypescript className="w-3.5 h-3.5 text-[#3178C6]" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="w-3.5 h-3.5 text-[#06B6D4]" /> },
      ],
      github: "https://github.com/joanrobles/portafolio-jdr",
      demo: "#hero",
      imageGrad: "from-[#080C18] via-[#1E1B4B] to-[#D4AF37]",
      icon: <Code className="w-7 h-7 text-[#D4AF37]" />,
      delay: "delay-100",
    },
    {
      id: "server-infra-automation",
      num: "02",
      title: "Servidores & Deployment Linux",
      category: "servers",
      subtitle: "Linux RHEL Docker Kubernetes +2",
      description: "Despliegue automatizado de infraestructura de producción Linux con contenedores Docker, orquestación Kubernetes, scripts Shell y balanceo de carga.",
      techPills: [
        { name: "Linux RHEL", icon: <SiLinux className="w-3.5 h-3.5 text-yellow-400" /> },
        { name: "Docker", icon: <SiDocker className="w-3.5 h-3.5 text-blue-400" /> },
        { name: "DevOps", icon: <Server className="w-3.5 h-3.5 text-sky-400" /> },
      ],
      github: "https://github.com/joanrobles/server-infra-automation",
      demo: "https://github.com/joanrobles",
      imageGrad: "from-[#050811] via-[#0A0F1F] to-[#D4AF37]",
      icon: <Server className="w-7 h-7 text-sky-400" />,
      delay: "delay-200",
    },
    {
      id: "cisco-mikrotik-netops",
      num: "03",
      title: "Arquitectura de Redes Cisco",
      category: "servers",
      subtitle: "Cisco IOS MikroTik VLANs +2",
      description: "Diseño e implementación de topología de red empresarial con VLANs segmentadas, enrutamiento OSPF/BGP, cortafuegos UFW y monitoreo en tiempo real.",
      techPills: [
        { name: "Cisco IOS", icon: <SiCisco className="w-3.5 h-3.5 text-cyan-400" /> },
        { name: "Firewalls", icon: <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" /> },
      ],
      github: "https://github.com/joanrobles/cisco-mikrotik-netops",
      demo: "https://github.com/joanrobles",
      imageGrad: "from-[#050811] via-[#1E1B4B] to-[#AA7C11]",
      icon: <ShieldCheck className="w-7 h-7 text-[#D4AF37]" />,
      delay: "delay-300",
    },
    {
      id: "sysadmin-bash-tools",
      num: "04",
      title: "Suite de Scripts SysAdmin",
      category: "web",
      subtitle: "Bash Shell Linux Git +2",
      description: "Conjunto de herramientas CLI en Bash y Shell para respaldos automáticos, auditoría de logs de servidor y monitoreo de conectividad.",
      techPills: [
        { name: "Bash", icon: <Terminal className="w-3.5 h-3.5 text-emerald-400" /> },
        { name: "Linux", icon: <SiLinux className="w-3.5 h-3.5 text-yellow-400" /> },
      ],
      github: "https://github.com/joanrobles/sysadmin-bash-tools",
      demo: "https://github.com/joanrobles",
      imageGrad: "from-[#050811] via-[#0A0F1F] to-[#D4AF37]",
      icon: <Terminal className="w-8 h-8 text-emerald-400" />,
      delay: "delay-400",
    },
    {
      id: "cyber-network-dashboard",
      num: "05",
      title: "Dashboard de Monitoreo de Redes",
      category: "design",
      subtitle: "React Tailwind Dataviz +2",
      description: "Desarrollo frontend de panel de control interactivo para visualización de estado de nodos de red, latencia y tráfico en tiempo real.",
      techPills: [
        { name: "React", icon: <SiReact className="w-3.5 h-3.5 text-[#61DAFB]" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="w-3.5 h-3.5 text-[#06B6D4]" /> },
      ],
      github: "https://github.com/joanrobles/cyber-network-dashboard",
      demo: "https://github.com/joanrobles",
      imageGrad: "from-[#0A0F1F] via-[#311B92] to-[#D4AF37]",
      icon: <Layers className="w-7 h-7 text-purple-400" />,
      delay: "delay-500",
    },
  ];

  const filteredProjects = projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 theme-bg transition-colors relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pl-4 lg:pl-24">
        
        {/* La Velada Center Line Emblem */}
        <div className="max-w-xs mx-auto mb-4 animate-stack">
          <GoldLineDividerCenter className="my-0" />
        </div>

        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-2 mb-10 animate-stack delay-100">
          <h2 className="text-3xl md:text-5xl font-extrabold font-cinzel velada-gold-text tracking-[0.15em] uppercase">
            {t("projects.title")}
          </h2>
          <p className="font-cinzel text-xs font-bold tracking-[0.25em] text-[#D4AF37] uppercase max-w-xl">
            {t("projects.subtitle")}
          </p>
        </div>

        {/* Category Switcher Tabs (Removed "Todos") */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 pb-3 border-b theme-border animate-stack delay-200">
          <button
            onClick={() => setFilter("servers")}
            className={`px-4 py-2 rounded-xl font-cinzel text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              filter === "servers"
                ? "bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#050811] shadow-md scale-105"
                : "theme-bg-card theme-text theme-border-gold hover:border-[#D4AF37]"
            }`}
          >
            {t("projects.filter_servers")}
          </button>
          <button
            onClick={() => setFilter("web")}
            className={`px-4 py-2 rounded-xl font-cinzel text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              filter === "web"
                ? "bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#050811] shadow-md scale-105"
                : "theme-bg-card theme-text theme-border-gold hover:border-[#D4AF37]"
            }`}
          >
            {t("projects.filter_web")}
          </button>
          <button
            onClick={() => setFilter("design")}
            className={`px-4 py-2 rounded-xl font-cinzel text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              filter === "design"
                ? "bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#050811] shadow-md scale-105"
                : "theme-bg-card theme-text theme-border-gold hover:border-[#D4AF37]"
            }`}
          >
            {t("projects.filter_design")}
          </button>
        </div>

        {/* Douglaspadilla Interactive Project Cards Grid (Screenshot Exact Match) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const isHoveredOrActive = activeCardId === project.id;
            return (
              <div
                key={project.id}
                onMouseEnter={() => setActiveCardId(project.id)}
                onMouseLeave={() => setActiveCardId(null)}
                onClick={() => setActiveCardId(activeCardId === project.id ? null : project.id)}
                className={`infolavelada-card corner-brackets-top corner-brackets-bottom card-spotlight flex flex-col justify-between group cursor-pointer animate-stack ${project.delay} min-h-[380px]`}
              >
                {/* Visual Banner Canvas */}
                <div className={`relative w-full ${isHoveredOrActive ? "h-36 sm:h-40" : "h-64 sm:h-72"} bg-gradient-to-br ${project.imageGrad} p-5 flex flex-col justify-between transition-all duration-400 ease-out overflow-hidden`}>
                  
                  {/* Top Bar: Number & Online Badge */}
                  <div className="flex justify-between items-center z-10">
                    <span className="font-mono font-bold text-sm text-[#F3E5AB]">
                      {project.num}
                    </span>
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/60 text-emerald-400 text-[10px] font-mono font-bold tracking-wider uppercase">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      En línea
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="z-10 self-start">
                    <div className="p-3 rounded-xl bg-black/60 backdrop-blur-md border border-[#D4AF37]/40 shadow-lg">
                      {project.icon}
                    </div>
                  </div>
                </div>

                {/* Normal State Card Info (Right Card in User Screenshot) */}
                {!isHoveredOrActive && (
                  <div className="p-5 space-y-1.5 transition-all duration-300">
                    <h3 className="text-base font-extrabold font-cinzel theme-text-title tracking-wider uppercase">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono theme-text-muted">
                      {project.subtitle}
                    </p>
                  </div>
                )}

                {/* Expanded Active / Hover Overlay State (Left Card in User Screenshot) */}
                {isHoveredOrActive && (
                  <div className="p-5 space-y-4 transition-all duration-300 animate-stack">
                    {/* Glowing Separator Line */}
                    <div className="h-[2px] w-full bg-gradient-to-r from-teal-400 via-[#D4AF37] to-indigo-500 rounded-full"></div>

                    <div className="space-y-2">
                      <h3 className="text-lg font-extrabold font-cinzel theme-text-title tracking-wider uppercase">
                        {project.title}
                      </h3>
                      <p className="text-xs theme-text-muted leading-relaxed font-sans">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Pills with Icons */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.techPills.map((tech, idx) => (
                        <span
                          key={idx}
                          className="flex items-center gap-1 text-[10px] font-mono font-bold px-2.5 py-1 rounded-full theme-bg border theme-border-gold theme-text"
                        >
                          {tech.icon}
                          <span>{tech.name}</span>
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons: Código & Demo (User Screenshot Left Card Exact Match) */}
                    <div className="flex items-center gap-3 pt-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 py-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white font-cinzel font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-slate-700 shadow-md transition-all cursor-pointer"
                      >
                        <GithubIcon className="w-4 h-4 text-white" />
                        <span>Código</span>
                      </a>

                      <a
                        href={project.demo}
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-cinzel font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-blue-500/20 transition-all cursor-pointer"
                      >
                        <Rocket className="w-4 h-4 text-white" />
                        <span>Demo</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Line Divider */}
        <GoldLineDividerBottom className="mt-14 mb-0 opacity-60" />

      </div>
    </section>
  );
}
