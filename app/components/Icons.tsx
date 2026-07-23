import React from "react";

export const InstagramIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export const GithubIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

export const FacebookIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

export const LinkedinIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

/* AI TOOL ICONS */

// Claude (Anthropic Star Emblem)
export const ClaudeIcon = ({ className = "w-7 h-7" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L14.5 8.5L21 11L14.5 13.5L12 20L9.5 13.5L3 11L9.5 8.5L12 2Z" />
  </svg>
);

// OpenAI (ChatGPT Spiral Emblem)
export const OpenAIIcon = ({ className = "w-7 h-7" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 3a9 9 0 0 1 6.36 15.36L12 12" />
    <path d="M12 12L5.64 5.64" />
    <path d="M12 12v9" />
  </svg>
);

// Google Antigravity (Sparkle Diamond Emblem)
export const AntigravityIcon = ({ className = "w-7 h-7" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15 9 22 12 15 15 12 22 9 15 2 12 9 9 12 2" />
  </svg>
);

// OpenCode (AI Code Terminal Bot Emblem)
export const OpenCodeIcon = ({ className = "w-7 h-7" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="16" rx="3" />
    <path d="M7 9l3 3-3 3" />
    <path d="M13 15h4" />
  </svg>
);

/* ELEGANT LINE DIVIDERS (NO STARS) */

export const GoldLineDividerCenter = ({ className = "my-6" }: { className?: string }) => (
  <div className={`flex items-center justify-center gap-4 w-full ${className}`}>
    <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-[#D4AF37]"></div>
    <div className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37] shadow-sm"></div>
    <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#D4AF37]/50 to-[#D4AF37]"></div>
  </div>
);

export const GoldLineDividerBottom = ({ className = "w-full my-4" }: { className?: string }) => (
  <div className={`flex items-center gap-2 w-full ${className}`}>
    <div className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37] shadow-sm"></div>
    <div className="h-[1px] flex-1 bg-gradient-to-r from-[#D4AF37] via-[#D4AF37]/40 to-transparent"></div>
  </div>
);
