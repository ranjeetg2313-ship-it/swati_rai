"use client";

import React from "react";
import { Truck, RotateCcw, ShieldCheck, Headset, ArrowRight } from "lucide-react";

export function UpgradeDriveBanner() {
  return (
    <section className="py-8 pb-12 bg-white dark:bg-[#0B0F14]">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* Full-bleed mountain road banner */}
        <div className="rounded-3xl overflow-hidden relative shadow-2xl">

          {/* Mountain road background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/mountain_road_1781107638083.png')" }}
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F14]/95 via-[#0B0F14]/80 to-[#0B0F14]/40" />

          <div className="relative z-10 flex flex-col lg:flex-row items-stretch">

            {/* Left: 4 Feature Icons */}
            <div className="w-full lg:w-[58%] grid grid-cols-2 text-left py-10 px-8 gap-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#FF5A00]/20 border border-[#FF5A00]/30 flex items-center justify-center shrink-0">
                  <Truck className="w-5 h-5 text-[#FF5A00]" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm mb-0.5">Free Delivery</h4>
                  <p className="text-zinc-400 text-xs font-medium">On all orders</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#FF5A00]/20 border border-[#FF5A00]/30 flex items-center justify-center shrink-0">
                  <RotateCcw className="w-5 h-5 text-[#FF5A00]" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm mb-0.5">7 Days Return</h4>
                  <p className="text-zinc-400 text-xs font-medium">Hassle-free returns</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#FF5A00]/20 border border-[#FF5A00]/30 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-[#FF5A00]" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm mb-0.5">Secure Payment</h4>
                  <p className="text-zinc-400 text-xs font-medium">100% safe checkout</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#FF5A00]/20 border border-[#FF5A00]/30 flex items-center justify-center shrink-0">
                  <Headset className="w-5 h-5 text-[#FF5A00]" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm mb-0.5">24/7 Support</h4>
                  <p className="text-zinc-400 text-xs font-medium">We're always here</p>
                </div>
              </div>
            </div>

            {/* Vertical Divider */}
            <div className="hidden lg:block w-px bg-white/10 my-10" />

            {/* Right: CTA with floating tyre */}
            <div className="w-full lg:w-[42%] px-8 lg:px-12 py-10 relative flex flex-col justify-center text-left border-t lg:border-t-0 border-white/10">
              {/* Floating tyre image */}
              <div className="absolute right-0 bottom-0 w-[200px] h-[200px] pointer-events-none overflow-hidden">
                <img
                  src="/images/PremiumTyre.png"
                  alt=""
                  className="absolute right-[-20%] bottom-[-10%] w-full object-contain opacity-20"
                />
              </div>

              <div className="relative z-10">
                <p className="text-[#FF5A00] font-bold text-[10px] tracking-widest uppercase mb-3">Drive Further</p>
                <h3 className="text-3xl lg:text-4xl font-black text-white mb-3 leading-tight">
                  Ready to Upgrade<br />Your Drive?
                </h3>
                <p className="text-zinc-400 text-sm mb-8 max-w-[260px] leading-relaxed font-medium">
                  Explore our range of premium tyres and enjoy unmatched performance on every road.
                </p>
                <button className="bg-[#FF5A00] text-white font-bold uppercase tracking-widest text-xs px-8 py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#E04D00] transition-all w-max shadow-xl shadow-[#FF5A00]/30 transform hover:-translate-y-0.5">
                  SHOP NOW <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
