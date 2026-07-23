"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "es" | "en";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  es: {
    // Navigation
    "nav.home": "Inicio",
    "nav.about": "Sobre Mí",
    "nav.skills": "Habilidades & Stack",
    "nav.projects": "Proyectos",
    "nav.contact": "Contacto",
    "nav.lang": "ES",
    "nav.theme_dark": "Modo Oscuro",
    "nav.theme_light": "Modo Claro",

    // Hero
    "hero.badge": "INGENIERO EN SISTEMAS // SANTA CRUZ, BOLIVIA",
    "hero.greeting": "Hola, mi nombre es",
    "hero.name": "JOAN DANIEL ROBLES",
    "hero.title_suffix": "INGENIERO EN SISTEMAS & ESPECIALISTA TI",
    "hero.subtitle": "Ingeniero graduado en Ingeniería en Sistemas especializado en administración de servidores Linux, infraestructura de redes y desarrollo de software moderno. Ubicado en Santa Cruz, Bolivia.",
    "hero.btn_projects": "Ver Proyectos",
    "hero.btn_contact": "Contactar Ahora",
    "hero.btn_cv": "Descargar CV",
    "hero.follow_me": "SÍGUEME EN REDES",
    "hero.terminal_title": "jdr-node-bolivia.sys",
    "hero.stat_exp": "Años de Experiencia",
    "hero.stat_servers": "Servidores Configurados",
    "hero.stat_networks": "Redes Desplegadas",
    "hero.stat_projects": "Proyectos Exitosos",

    // About
    "about.title": "SOBRE MÍ",
    "about.subtitle": "Ingeniero en Sistemas apasionado por la Infraestructura, Redes y Software de Alto Rendimiento",
    "about.paragraph1": "Mi nombre es Joan Daniel Robles, profesional graduado en Ingeniería en Sistemas en Santa Cruz, Bolivia. Me especializo en diseñar y gestionar infraestructura de servidores Linux, redes empresariales y desarrollar aplicaciones web modernas.",
    "about.paragraph2": "Con enfoque orientado a resultados y estándares internacionales de calidad, ofrezco soluciones integrales de TI para empresas y proyectos.",
    "about.degree": "Ingeniería en Sistemas",
    "about.degree_desc": "Formación profesional en ciencias de la computación, arquitectura de software, bases de datos y redes.",
    "about.location": "Santa Cruz, Bolivia",
    "about.location_desc": "Ubicación base para integración en equipos de ingeniería y tecnología.",
    "about.spec_servers": "Servidores & Cloud",
    "about.spec_servers_desc": "Administración de Linux (Ubuntu/RHEL), Docker, Kubernetes y virtualización de servidores.",
    "about.spec_networks": "Infraestructura de Redes",
    "about.spec_networks_desc": "Configuración de Routers/Switches Cisco y MikroTik, Firewalls, VLANs y Monitoreo.",

    // Skills & Stack
    "skills.title": "TECNOLOGÍAS & STACK",
    "skills.subtitle": "Lenguajes, Frameworks, Bases de Datos, Cloud & Herramientas",
    "skills.cat_all": "Todos",
    "skills.cat_languages": "Lenguajes",
    "skills.cat_frameworks": "Frameworks",
    "skills.cat_databases": "Bases de Datos",
    "skills.cat_cloud": "Cloud & Despliegue",
    "skills.cat_methodology": "Metodología & Arq",
    "skills.cat_servers": "Servidores & Redes",

    // Projects
    "projects.title": "PROYECTOS DESTACADOS",
    "projects.subtitle": "Portafolio de Infraestructura, Aplicaciones Web y Soluciones de TI",
    "projects.filter_all": "Todos",
    "projects.filter_servers": "Servidores / Redes",
    "projects.filter_web": "Desarrollo Web",
    "projects.filter_design": "Diseño UI/UX",
    "projects.btn_repo": "Código GitHub",
    "projects.btn_demo": "Previsualización",

    // Contact
    "contact.title": "CONTACTO DIRECTO",
    "contact.subtitle": "Canales de Comunicación & Consultoría Técnica",
    "contact.wa_status": "ONLINE",
    "contact.wa_title": "Canal Directo de WhatsApp",
    "contact.wa_desc": "Envía un mensaje directo a mi número (+591 60864448):",
    "contact.wa_type_server": "Servidores & Redes",
    "contact.wa_type_web": "Desarrollo Web",
    "contact.wa_type_consult": "Consultoría TI",
    "contact.wa_btn": "Iniciar Chat en WhatsApp",
    "contact.form_name": "Nombre Completo",
    "contact.form_email": "Correo Electrónico",
    "contact.form_message": "Mensaje o Requerimiento del Proyecto",
    "contact.form_send": "Enviar Mensaje Directo",
    "contact.form_success": "¡Mensaje enviado con éxito! Te responderé en breve.",

    // Footer
    "footer.role": "Ingeniero en Sistemas // Especialista TI & Software",
    "footer.rights": "Todos los derechos reservados. Santa Cruz, Bolivia.",
    "footer.location": "Santa Cruz, Bolivia"
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About Me",
    "nav.skills": "Skills & Stack",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.lang": "EN",
    "nav.theme_dark": "Dark Mode",
    "nav.theme_light": "Light Mode",

    // Hero
    "hero.badge": "SYSTEMS ENGINEER // SANTA CRUZ, BOLIVIA",
    "hero.greeting": "Hello, my name is",
    "hero.name": "JOAN DANIEL ROBLES",
    "hero.title_suffix": "SYSTEMS ENGINEER & IT SPECIALIST",
    "hero.subtitle": "Systems Engineering graduate specialized in Linux server administration, network infrastructure, and modern software development. Located in Santa Cruz, Bolivia.",
    "hero.btn_projects": "View Projects",
    "hero.btn_contact": "Contact Now",
    "hero.btn_cv": "Download CV",
    "hero.follow_me": "FOLLOW ME ON SOCIALS",
    "hero.terminal_title": "jdr-node-bolivia.sys",
    "hero.stat_exp": "Years of Experience",
    "hero.stat_servers": "Configured Servers",
    "hero.stat_networks": "Deployed Networks",
    "hero.stat_projects": "Successful Projects",

    // About
    "about.title": "ABOUT ME",
    "about.subtitle": "Systems Engineer Passionate About Infrastructure, Networks & High Performance Software",
    "about.paragraph1": "My name is Joan Daniel Robles, a Systems Engineering graduate in Santa Cruz, Bolivia. I specialize in designing Linux server infrastructure, enterprise networks, and building modern web applications.",
    "about.paragraph2": "Focused on results and international quality standards, I offer comprehensive IT solutions for companies and projects.",
    "about.degree": "Systems Engineering",
    "about.degree_desc": "Professional training in computer science, software architecture, databases, and network engineering.",
    "about.location": "Santa Cruz, Bolivia",
    "about.location_desc": "Base location for integration into engineering teams.",
    "about.spec_servers": "Servers & Cloud",
    "about.spec_servers_desc": "Linux (Ubuntu/RHEL), Docker, Kubernetes, and server virtualization.",
    "about.spec_networks": "Network Infrastructure",
    "about.spec_networks_desc": "Cisco & MikroTik Router/Switch configuration, Firewalls, VLANs, and Monitoring.",

    // Skills & Stack
    "skills.title": "TECH STACK & TOOLS",
    "skills.subtitle": "Languages, Frameworks, Databases, Cloud & Architecture",
    "skills.cat_all": "All",
    "skills.cat_languages": "Languages",
    "skills.cat_frameworks": "Frameworks",
    "skills.cat_databases": "Databases",
    "skills.cat_cloud": "Cloud & Deploy",
    "skills.cat_methodology": "Methodology & Arch",
    "skills.cat_servers": "Servers & Nets",

    // Projects
    "projects.title": "FEATURED PROJECTS",
    "projects.subtitle": "Infrastructure, Web Applications & IT Solutions Portfolio",
    "projects.filter_all": "All",
    "projects.filter_servers": "Servers / Networks",
    "projects.filter_web": "Web Development",
    "projects.filter_design": "UI/UX Design",
    "projects.btn_repo": "GitHub Code",
    "projects.btn_demo": "Live Preview",

    // Contact
    "contact.title": "DIRECT CONTACT",
    "contact.subtitle": "Communication Channels & Technical Consultancy",
    "contact.wa_status": "ONLINE",
    "contact.wa_title": "Direct WhatsApp Channel",
    "contact.wa_desc": "Send a direct message to (+591 60864448):",
    "contact.wa_type_server": "Servers & Networks",
    "contact.wa_type_web": "Web Development",
    "contact.wa_type_consult": "IT Consultancy",
    "contact.wa_btn": "Start WhatsApp Chat",
    "contact.form_name": "Full Name",
    "contact.form_email": "Email Address",
    "contact.form_message": "Message or Project Details",
    "contact.form_send": "Send Direct Message",
    "contact.form_success": "Message sent successfully! I will reply shortly.",

    // Footer
    "footer.role": "Systems Engineer // IT Specialist & Software Developer",
    "footer.rights": "All rights reserved. Santa Cruz, Bolivia.",
    "footer.location": "Santa Cruz, Bolivia"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>("es");

  useEffect(() => {
    const saved = localStorage.getItem("jdr_lang") as Language;
    if (saved && (saved === "es" || saved === "en")) {
      setLang(saved);
    }
  }, []);

  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem("jdr_lang", newLang);
  };

  const toggleLang = () => {
    const nextLang = lang === "es" ? "en" : "es";
    handleSetLang(nextLang);
  };

  const t = (key: string): string => {
    return translations[lang][key] || translations["es"][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
