"use client";

import React, { useState, useEffect } from "react";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("Inicializando...");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoaded(true), 300);
          return 100;
        }
        
        const next = prev + Math.floor(Math.random() * 8) + 4;
        if (next > 30 && next < 65) {
          setStatusText("Cargando servidores & redes...");
        } else if (next >= 65 && next < 95) {
          setStatusText("Optimizando experiencia...");
        } else if (next >= 95) {
          setStatusText("Completado");
        }
        return next > 100 ? 100 : next;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  if (isLoaded) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050811] text-slate-100 transition-opacity duration-700 ease-in-out ${
        progress >= 100 ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Orbital Spinning Rings */}
      <div className="relative w-36 h-36 flex items-center justify-center mb-8">
        
        {/* Outer Ring */}
        <div className="absolute inset-0 rounded-full border border-[#D4AF37]/20 animate-[spin_8s_linear_infinite]">
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#D4AF37] shadow-[0_0_12px_#D4AF37]"></div>
        </div>

        {/* Middle Ring */}
        <div className="absolute inset-3 rounded-full border border-[#D4AF37]/40 animate-[spin_4s_linear_infinite_reverse]">
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#F3E5AB] shadow-[0_0_8px_#F3E5AB]"></div>
        </div>

        {/* Central Emblem Logo */}
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#AA7C11] flex items-center justify-center shadow-lg shadow-[#D4AF37]/30">
          <span className="font-cinzel font-black text-lg text-[#050811] tracking-wider">
            JDR
          </span>
        </div>

      </div>

      {/* Brand & Subtitle (Removed Especialista TI) */}
      <div className="text-center space-y-1 mb-8 px-4">
        <h2 className="text-xl sm:text-2xl font-extrabold font-cinzel velada-gold-text tracking-[0.25em] uppercase">
          JOAN DANIEL ROBLES
        </h2>
        <p className="text-xs font-mono theme-text-muted tracking-widest uppercase">
          Ingeniero en Sistemas
        </p>
      </div>

      {/* Status Message */}
      <div className="font-mono text-xs text-[#D4AF37] tracking-widest mb-6 h-4 transition-all">
        {statusText}
      </div>

      {/* Progress Bar Container */}
      <div className="w-64 max-w-[80vw] space-y-2">
        <div className="w-full h-[2px] bg-slate-800 rounded-full overflow-hidden relative">
          <div
            className="h-full bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] transition-all duration-150 rounded-full shadow-[0_0_10px_#D4AF37]"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Percentage Labels */}
        <div className="flex justify-between items-center font-mono text-[10px] theme-text-muted">
          <span>0%</span>
          <span className="text-[#D4AF37] font-bold">{progress}%</span>
          <span>100%</span>
        </div>
      </div>

    </div>
  );
}
