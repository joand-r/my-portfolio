"use client";

import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { GoldLineDividerCenter, GoldLineDividerBottom, WhatsAppIcon, GithubIcon, LinkedinIcon, InstagramIcon, FacebookIcon } from "./Icons";
import { Mail, Send, Check, ShieldCheck, MapPin } from "lucide-react";

export default function ContactSection() {
  const { t } = useLanguage();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const email = "joandanielrr@gmail.com";
  const phone = "+591 60864448";

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-20 theme-bg transition-colors relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pl-4 lg:pl-24">
        
        {/* Center Line Emblem Above Title */}
        <div className="max-w-xs mx-auto mb-4">
          <GoldLineDividerCenter className="my-0" />
        </div>

        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-2 mb-10">
          <h2 className="text-3xl md:text-5xl font-extrabold font-cinzel velada-gold-text tracking-[0.15em] uppercase">
            {t("contact.title")}
          </h2>
          <p className="font-cinzel text-xs font-bold tracking-[0.25em] text-[#D4AF37] uppercase max-w-xl">
            {t("contact.subtitle")}
          </p>
        </div>

        {/* Form Container (Clean Layout) */}
        <div className="max-w-3xl mx-auto p-6 sm:p-10 rounded-2xl infolavelada-card corner-brackets-top corner-brackets-bottom space-y-6">
          
          {/* Top Quick Contact Icon Links Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b theme-border">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
              <h3 className="text-sm font-bold font-cinzel theme-text-title tracking-wider uppercase">
                FORMULARIO DE CONTACTO RÁPIDO
              </h3>
            </div>

            {/* Quick Action Icons */}
            <div className="flex items-center space-x-3">
              <a
                href="https://wa.me/59160864448"
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp: +591 60864448"
                className="w-9 h-9 rounded-lg bg-emerald-900/60 border border-emerald-500/40 text-emerald-400 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all shadow-sm"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${email}`}
                title={`Email: ${email}`}
                className="w-9 h-9 rounded-lg theme-bg border theme-border-gold text-[#D4AF37] flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#050811] transition-all shadow-sm"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="w-9 h-9 rounded-lg theme-bg border theme-border-gold theme-text flex items-center justify-center hover:border-[#D4AF37] transition-all shadow-sm"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href="https://linkedin.com/in/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="w-9 h-9 rounded-lg theme-bg border theme-border-gold text-[#D4AF37] flex items-center justify-center hover:border-[#D4AF37] transition-all shadow-sm"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {formSubmitted && (
            <div className="p-3.5 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-mono flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>{t("contact.form_success")}</span>
            </div>
          )}

          {/* Form Body */}
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-cinzel theme-text-muted mb-1.5 uppercase tracking-wider">
                  {t("contact.form_name")}
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Carlos Mendoza"
                  className="w-full px-4 py-3 rounded-xl theme-bg border theme-border-gold theme-text text-xs focus:border-[#D4AF37] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-cinzel theme-text-muted mb-1.5 uppercase tracking-wider">
                  {t("contact.form_email")}
                </label>
                <input
                  type="email"
                  required
                  placeholder="ejemplo@empresa.com"
                  className="w-full px-4 py-3 rounded-xl theme-bg border theme-border-gold theme-text text-xs focus:border-[#D4AF37] focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-cinzel theme-text-muted mb-1.5 uppercase tracking-wider">
                {t("contact.form_message")}
              </label>
              <textarea
                rows={4}
                required
                placeholder="Escribe tu mensaje o consulta..."
                className="w-full px-4 py-3 rounded-xl theme-bg border theme-border-gold theme-text text-xs focus:border-[#D4AF37] focus:outline-none transition-colors"
              ></textarea>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <div className="flex items-center gap-1.5 text-xs font-mono theme-text-muted">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Santa Cruz, Bolivia</span>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#AA7C11] to-[#664B07] text-[#050811] font-cinzel font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md hover:scale-105"
              >
                <Send className="w-4 h-4" />
                <span>{t("contact.form_send")}</span>
              </button>
            </div>
          </form>

        </div>

        {/* Bottom Line Divider */}
        <GoldLineDividerBottom className="mt-14 mb-0 opacity-60" />

      </div>
    </section>
  );
}
