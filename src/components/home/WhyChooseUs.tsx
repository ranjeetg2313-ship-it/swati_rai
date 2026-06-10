"use client";

import React from "react";
import { ShieldCheck, Shield, Clock, Users } from "lucide-react";

export function WhyChooseUs() {
  return (
    <section className="pt-16 pb-12 bg-white dark:bg-[#0B0F14] relative">
      {/* Background glow highlights — contained to prevent page scroll */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#0B3B60]/5 dark:bg-[#0B3B60]/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#FF5A00]/5 dark:bg-[#FF5A00]/10 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative flex flex-col lg:flex-row items-center z-10 gap-12">

        {/* Left: Text + Feature Cards */}
        <div className="w-full lg:w-[58%]">
          <p className="text-[#FF5A00] font-bold text-[11px] tracking-widest uppercase mb-2">Why Choose TREAD X?</p>
          <h2 className="text-3xl md:text-[40px] font-black text-[#0B0F14] dark:text-white mb-8 tracking-tight">
            Performance You Can Trust
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Box 1 */}
            <div className="flex flex-col items-start bg-white dark:bg-zinc-900/40 border border-zinc-200/50 dark:border-zinc-800/80 shadow-[0_8px_30px_rgba(0,0,0,0.02)] rounded-3xl p-6 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#FF5A00]/5 hover:border-[#FF5A00]/30 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-2xl border border-[#0B3B60]/20 dark:border-zinc-850 flex items-center justify-center mb-6 text-[#FF5A00] bg-zinc-50 dark:bg-zinc-950/50 group-hover:bg-[#FF5A00] group-hover:text-white group-hover:border-transparent transition-all duration-300">
                <ShieldCheck className="w-5 h-5" strokeWidth={2} />
              </div>
              <h3 className="font-bold text-[#0B0F14] dark:text-white text-[13px] mb-1">Premium Quality</h3>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-500 font-medium">Top global brands</p>
            </div>

            {/* Box 2 */}
            <div className="flex flex-col items-start bg-white dark:bg-zinc-900/40 border border-zinc-200/50 dark:border-zinc-800/80 shadow-[0_8px_30px_rgba(0,0,0,0.02)] rounded-3xl p-6 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#FF5A00]/5 hover:border-[#FF5A00]/30 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-2xl border border-[#0B3B60]/20 dark:border-zinc-850 flex items-center justify-center mb-6 text-[#FF5A00] bg-zinc-50 dark:bg-zinc-950/50 group-hover:bg-[#FF5A00] group-hover:text-white group-hover:border-transparent transition-all duration-300">
                <Shield className="w-5 h-5" strokeWidth={2} />
              </div>
              <h3 className="font-bold text-[#0B0F14] dark:text-white text-[13px] mb-1">Safe & Reliable</h3>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-500 font-medium">Tested for your safety</p>
            </div>

            {/* Box 3 */}
            <div className="flex flex-col items-start bg-white dark:bg-zinc-900/40 border border-zinc-200/50 dark:border-zinc-800/80 shadow-[0_8px_30px_rgba(0,0,0,0.02)] rounded-3xl p-6 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#FF5A00]/5 hover:border-[#FF5A00]/30 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-2xl border border-[#0B3B60]/20 dark:border-zinc-850 flex items-center justify-center mb-6 text-[#FF5A00] bg-zinc-50 dark:bg-zinc-950/50 group-hover:bg-[#FF5A00] group-hover:text-white group-hover:border-transparent transition-all duration-300">
                <Clock className="w-5 h-5" strokeWidth={2} />
              </div>
              <h3 className="font-bold text-[#0B0F14] dark:text-white text-[13px] mb-1">Long Lasting</h3>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-500 font-medium">Built for endurance</p>
            </div>

            {/* Box 4 */}
            <div className="flex flex-col items-start bg-white dark:bg-zinc-900/40 border border-zinc-200/50 dark:border-zinc-800/80 shadow-[0_8px_30px_rgba(0,0,0,0.02)] rounded-3xl p-6 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#FF5A00]/5 hover:border-[#FF5A00]/30 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-2xl border border-[#0B3B60]/20 dark:border-zinc-850 flex items-center justify-center mb-6 text-[#FF5A00] bg-zinc-50 dark:bg-zinc-950/50 group-hover:bg-[#FF5A00] group-hover:text-white group-hover:border-transparent transition-all duration-300">
                <Users className="w-5 h-5" strokeWidth={2} />
              </div>
              <h3 className="font-bold text-[#0B0F14] dark:text-white text-[13px] mb-1">Expert Support</h3>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-500 font-medium">We're here to help</p>
            </div>
          </div>
        </div>

        {/* Right side: Car + Tyre stacked */}
        <div className="w-full lg:w-[42%] relative flex flex-col items-center justify-center animate-float-slow">
          {/* Glow behind images */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] bg-gradient-to-r from-[#FF5A00]/10 to-[#0B3B60]/10 blur-[80px] rounded-full pointer-events-none" />

          {/* Blue SUV image inside a premium rounded card that matches background */}
          <div className="relative z-10 w-full max-w-[460px] bg-zinc-50 dark:bg-zinc-900/40 rounded-3xl p-5 border border-zinc-200/60 dark:border-zinc-800/80 shadow-xl overflow-hidden flex items-center justify-center">
            <img
              src="/images/blue_suv_1781107663783_transparent.png"
              alt="Premium SUV"
              className="w-full h-auto object-contain relative z-10 transform hover:scale-105 transition-transform duration-500 filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)]"
            />
          </div>

          {/* Floating tyre badge */}
          <div className="absolute bottom-[-10px] right-2 z-20 flex items-center gap-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl px-4 py-3 shadow-xl">
            <img
              src="/images/premium_tyre_1781107650559_transparent.png"
              alt="Tyre"
              className="w-12 h-12 object-contain"
            />
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-[#FF5A00]">Perfect Fit</p>
              <p className="text-xs font-bold text-[#0B0F14] dark:text-white">Michelin Pilot Sport 5</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
