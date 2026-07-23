"use client";

import React from "react";
import { InstagramIcon, GithubIcon, FacebookIcon, LinkedinIcon, WhatsAppIcon } from "./Icons";

export default function SocialSidebar() {
  const socialLinks = [
    {
      name: "WhatsApp",
      href: "https://wa.me/59160864448",
      icon: <WhatsAppIcon className="w-5 h-5 text-emerald-400" />,
      color: "hover:border-emerald-500 hover:bg-emerald-500/10",
    },
    {
      name: "GitHub",
      href: "https://github.com/",
      icon: <GithubIcon className="w-5 h-5" />,
      color: "hover:text-[#D4AF37] hover:bg-[#D4AF37]/10",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/",
      icon: <LinkedinIcon className="w-5 h-5" />,
      color: "hover:text-[#D4AF37] hover:bg-[#D4AF37]/10",
    },
    {
      name: "Instagram",
      href: "https://instagram.com/",
      icon: <InstagramIcon className="w-5 h-5" />,
      color: "hover:text-[#D4AF37] hover:bg-[#D4AF37]/10",
    },
    {
      name: "Facebook",
      href: "https://facebook.com/",
      icon: <FacebookIcon className="w-5 h-5" />,
      color: "hover:text-[#D4AF37] hover:bg-[#D4AF37]/10",
    },
  ];

  return (
    <aside className="hidden lg:flex fixed left-8 bottom-0 top-24 flex-col items-center justify-end z-40 pb-12 pointer-events-auto">
      {/* Vertical Social Icons Only */}
      <div className="flex flex-col items-center space-y-4">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className={`w-10 h-10 rounded-full flex items-center justify-center border theme-border-gold theme-text theme-bg-card ${social.color} hover:border-[#D4AF37] transition-all hover:scale-110 shadow-lg group relative`}
          >
            {social.icon}
            {/* Tooltip */}
            <span className="absolute left-14 px-2.5 py-1 theme-bg theme-text-title text-xs font-mono rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border theme-border-gold shadow-lg z-50">
              {social.name}
            </span>
          </a>
        ))}
      </div>
    </aside>
  );
}
