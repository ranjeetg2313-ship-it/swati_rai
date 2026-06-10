"use client";

import React from "react";
import { Download, CheckCircle2 } from "lucide-react";

export function SizeGuide() {
  const specs = [
    { code: "205", label: "Width", desc: "Width of the tyre tread in millimeters" },
    { code: "55",  label: "Aspect Ratio", desc: "Height of the sidewall as % of the width" },
    { code: "R",   label: "Construction", desc: "Radial construction — industry standard" },
    { code: "16",  label: "Rim Diameter", desc: "Wheel rim diameter in inches" },
    { code: "91",  label: "Load Index", desc: "Weight carrying capacity rating" },
    { code: "V",   label: "Speed Rating", desc: "Max speed capacity (V = 240 km/h)" },
  ];

  return (
    <section className="py-16 bg-white border-t border-zinc-100 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[600px] bg-[#0B3B60]/3 blur-[150px] rounded-full" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF5A00]/3 blur-[130px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-[#FF5A00] font-bold text-xs tracking-widest uppercase mb-2">Tyre Size Guide</p>
          <h2 className="text-3xl md:text-5xl font-black text-[#0B3B60] tracking-tight">Find Your Tyre Size</h2>
          <p className="text-zinc-500 text-sm mt-3 font-medium max-w-md mx-auto">
            Understand what the numbers on your tyre sidewall actually mean.
          </p>
        </div>

        {/* Main layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* LEFT — Tyre Diagram Circle */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-[300px] h-[300px] md:w-[350px] md:h-[350px] flex items-center justify-center">
              {/* Outer decorative circle with dashed border */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-zinc-200/80 animate-[spin_120s_linear_infinite]" />
              
              {/* Main premium white circular card */}
              <div className="absolute inset-4 rounded-full bg-zinc-50 border border-zinc-100 shadow-xl flex items-center justify-center overflow-hidden p-2">
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0B3B60]/5 to-transparent pointer-events-none" />
                
                {/* Tyre image — scaled up to cover the circle fully */}
                <img
                  src="/images/premium_tyre_1781107650559_transparent.png"
                  alt="Tyre Size"
                  className="w-[96%] h-[96%] object-contain relative z-10 hover:rotate-12 transition-transform duration-700"
                />
              </div>

              {/* Float-in Tyre Size overlay badge */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 bg-[#0B3B60] border border-white/10 px-6 py-2.5 rounded-2xl shadow-xl shadow-[#0B3B60]/20">
                <span className="text-white font-black text-xl md:text-2xl tracking-widest">205/55 R16</span>
              </div>
            </div>
          </div>

          {/* MIDDLE — Specs Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {specs.map((spec, idx) => (
              <div
                key={idx}
                className="bg-zinc-50/50 dark:bg-zinc-900/30 border border-zinc-150 rounded-2xl p-5 hover:border-[#FF5A00]/40 hover:bg-white hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-[#FF5A00] font-black text-2xl md:text-3xl leading-none">{spec.code}</span>
                  <span className="text-[10px] text-[#0B3B60] font-extrabold uppercase tracking-widest">{spec.label}</span>
                </div>
                <p className="text-zinc-600 text-xs leading-relaxed font-medium">{spec.desc}</p>
              </div>
            ))}
          </div>

          {/* RIGHT — Assistance Card + Brochure */}
          <div className="lg:col-span-3 flex flex-col gap-4">

            {/* Assistance card */}
            <div className="bg-zinc-50/50 dark:bg-zinc-900/30 border border-zinc-150 rounded-3xl p-6 text-left shadow-xs hover:bg-white hover:shadow-xl transition-all duration-300">
              <p className="text-[#FF5A00] text-[10px] font-black uppercase tracking-widest mb-2">Need Help?</p>
              <h3 className="font-black text-xl text-[#0B3B60] mb-2 leading-tight">Need Assistance?</h3>
              <p className="text-zinc-500 text-xs mb-5 leading-relaxed font-medium">
                Check your current tyre sidewall or grab our printable guide booklet to find the perfect fit.
              </p>
              <div className="space-y-2.5 mb-6">
                {["Free printable PDF", "All brands covered", "Expert recommendations"].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#FF5A00] shrink-0" />
                    <span className="text-zinc-700 text-xs font-semibold">{item}</span>
                  </div>
                ))}
              </div>
              <button className="w-full bg-[#FF5A00] text-white font-bold text-[10px] tracking-widest uppercase px-4 py-3.5 flex items-center justify-center gap-2 hover:bg-[#E04D00] transition-colors rounded-xl shadow-lg shadow-[#FF5A00]/25">
                DOWNLOAD GUIDE <Download className="w-4 h-4" />
              </button>
            </div>

            {/* Brochure cover card */}
            <div className="bg-gradient-to-br from-[#0B3B60] to-[#082C48] rounded-3xl p-6 flex items-center justify-between border border-white/5 relative overflow-hidden shadow-lg shadow-[#0B3B60]/10 min-h-[140px]">
              {/* Tyre watermark background */}
              <div className="absolute right-[-10%] bottom-[-20%] w-[150px] h-[150px] pointer-events-none opacity-15">
                <img src="/images/PremiumTyre.png" alt="" className="w-full h-full object-contain mix-blend-overlay" />
              </div>

              <div className="relative z-10">
                <div className="flex gap-1.5 mb-4">
                  <div className="w-1.5 h-8 bg-[#FF5A00] rounded-full animate-pulse" />
                  <div className="w-1.5 h-8 bg-[#FF5A00]/60 rounded-full" />
                  <div className="w-1.5 h-8 bg-[#FF5A00]/20 rounded-full" />
                </div>
                <h3 className="text-white font-black text-xl leading-tight">TREAD X<br />SIZE<br />GUIDE</h3>
                <p className="text-white/45 text-[10px] font-bold mt-2 uppercase tracking-widest">2025 Edition</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
