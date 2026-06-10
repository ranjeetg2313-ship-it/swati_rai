"use client";

import React from "react";
import { Search, MapPin, CalendarCheck, Zap } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Find Your Tyre",
    desc: "Enter your vehicle type or tyre size to instantly browse our catalogue of 1000+ premium tyres.",
    highlight: "Fast & Easy Search"
  },
  {
    icon: MapPin,
    title: "Pick a Fitting Centre",
    desc: "Choose from over 500 certified fitting centres near you. Professional installation guaranteed.",
    highlight: "500+ Locations"
  },
  {
    icon: CalendarCheck,
    title: "Book a Convenient Slot",
    desc: "Select a date and time that works for you — same-day and weekend appointments available.",
    highlight: "Flexible Scheduling"
  },
  {
    icon: Zap,
    title: "Drive with Confidence",
    desc: "Our expert technicians fit your tyres quickly and safely. Zero hidden fees, 100% satisfaction.",
    highlight: "Expert Fitting"
  }
];

export function HowItWorks() {
  return (
    <section className="py-16 bg-[#0B0F14] relative">
      {/* Ambient glow — contained so they don't cause scroll */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-[20%] w-[500px] h-[300px] bg-[#FF5A00]/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-[20%] w-[400px] h-[250px] bg-[#0B3B60]/8 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-[#FF5A00] font-bold text-[10px] tracking-widest uppercase mb-2">Simple Process</p>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            How TREAD X Works
          </h2>
          <p className="text-zinc-400 text-sm mt-4 max-w-md mx-auto font-medium">
            From search to smooth road — we make tyre buying effortless in 4 simple steps.
          </p>
        </div>

        {/* Steps — using flex so connectors sit between cards naturally */}
        <div className="flex flex-col sm:flex-row gap-0 items-stretch">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isLast = i === steps.length - 1;
            return (
              <React.Fragment key={i}>
                {/* Card */}
                <div className="group flex-1 flex flex-col bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 hover:border-[#FF5A00]/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#FF5A00]/5 transition-all duration-300 backdrop-blur-sm relative overflow-hidden">
                  {/* Step number watermark */}
                  <div className="absolute top-3 right-4 text-[56px] font-black text-white/[0.04] select-none leading-none pointer-events-none">
                    {i + 1}
                  </div>

                  {/* Icon */}
                  <div className="w-11 h-11 rounded-xl bg-[#FF5A00]/10 border border-[#FF5A00]/20 flex items-center justify-center mb-5 text-[#FF5A00] group-hover:bg-[#FF5A00] group-hover:border-transparent group-hover:text-white transition-all duration-300 shrink-0">
                    <Icon className="w-5 h-5" strokeWidth={2} />
                  </div>

                  {/* Step label */}
                  <span className="text-[9px] font-black uppercase tracking-widest text-[#FF5A00] mb-2">
                    Step {i + 1}
                  </span>

                  <h3 className="font-black text-white text-base mb-2 leading-snug">{step.title}</h3>
                  <p className="text-zinc-400 text-xs leading-relaxed font-medium flex-1">{step.desc}</p>

                  {/* Highlight tag */}
                  <div className="mt-4 pt-4 border-t border-zinc-800/60">
                    <span className="text-[9px] font-black text-[#FF5A00]/80 uppercase tracking-widest">
                      {step.highlight}
                    </span>
                  </div>
                </div>

                {/* Arrow connector between cards */}
                {!isLast && (
                  <div className="hidden sm:flex items-center justify-center w-8 shrink-0">
                    <div className="w-7 h-7 rounded-full bg-[#FF5A00] flex items-center justify-center shadow-lg shadow-[#FF5A00]/30">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Bottom Trust Badges */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex items-center gap-3 bg-zinc-900/40 border border-zinc-800/80 rounded-xl px-5 py-4">
            <div className="w-9 h-9 rounded-full bg-[#FF5A00] flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
              </svg>
            </div>
            <div>
              <p className="text-white font-bold text-sm">Rated Excellent</p>
              <p className="text-zinc-400 text-[10px] font-medium">100,000+ verified reviews</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-zinc-900/40 border border-zinc-800/80 rounded-xl px-5 py-4">
            <div className="w-9 h-9 rounded-full bg-[#0B3B60] flex items-center justify-center shrink-0">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <p className="text-white font-bold text-sm">100% Genuine Tyres</p>
              <p className="text-zinc-400 text-[10px] font-medium">Certified & quality-assured</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-zinc-900/40 border border-zinc-800/80 rounded-xl px-5 py-4">
            <div className="w-9 h-9 rounded-full bg-[#FFB800] flex items-center justify-center shrink-0">
              <svg className="w-4 h-4 text-[#0B0F14]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <p className="text-white font-bold text-sm">Same-Day Fitting</p>
              <p className="text-zinc-400 text-[10px] font-medium">Available at select locations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
