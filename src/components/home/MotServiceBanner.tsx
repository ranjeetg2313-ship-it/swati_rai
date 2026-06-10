"use client";

import React from "react";
import { ArrowRight, Wrench, CheckCircle2 } from "lucide-react";

const services = [
  { title: "MOT Test", price: "From ₹1,499", desc: "Full statutory MOT inspection by certified technicians." },
  { title: "Full Service", price: "From ₹3,999", desc: "Comprehensive vehicle service including oil & filter change." },
  { title: "Tyre Fitting", price: "From ₹299/tyre", desc: "Expert fitting at 500+ partner garages nationwide." }
];

const perks = [
  "Certified expert technicians",
  "Transparent, upfront pricing",
  "Same-day availability",
  "Digital health report"
];

export function MotServiceBanner() {
  return (
    <section id="services" className="bg-white dark:bg-[#0B0F14] overflow-hidden border-t border-zinc-100 dark:border-zinc-800/50">
      <div className="container mx-auto px-4 max-w-7xl py-14">
        <div className="bg-gradient-to-br from-[#0B0F14] to-[#141922] rounded-3xl overflow-hidden relative border border-zinc-800/40 shadow-2xl">
          {/* Decorative glows */}
          <div className="absolute top-0 left-0 w-[400px] h-[300px] bg-[#FF5A00]/10 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[350px] h-[250px] bg-[#0B3B60]/15 blur-[80px] rounded-full pointer-events-none" />

          {/* Tyre watermark */}
          <div className="absolute right-[-5%] top-[-10%] w-[420px] h-[420px] opacity-[0.06] pointer-events-none">
            <img
              src="/images/premium_tyre_1781107650559_transparent.png"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left: Text + Perks */}
            <div className="p-10 lg:p-12 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#FF5A00] flex items-center justify-center shrink-0">
                  <Wrench className="w-5 h-5 text-white" strokeWidth={2.5} />
                </div>
                <p className="text-[#FF5A00] font-bold text-[10px] tracking-widest uppercase">TREAD X Workshop</p>
              </div>

              <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
                Book an MOT &<br />
                <span className="text-[#FF5A00]">Full Service</span> Today
              </h2>
              <p className="text-zinc-400 text-sm mb-8 leading-relaxed max-w-[380px] font-medium">
                Trust TREAD X's certified workshop network for fast, transparent, and expert vehicle care — all at competitive prices.
              </p>

              {/* Perks */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {perks.map((perk, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5A00] shrink-0" strokeWidth={2.5} />
                    <span className="text-zinc-300 text-[11px] font-medium">{perk}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <button className="bg-[#FF5A00] text-white font-bold text-[10px] uppercase tracking-widest px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-[#E04D00] transition-all shadow-lg shadow-[#FF5A00]/20 transform hover:-translate-y-0.5">
                  BOOK MOT <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button className="border border-white/20 text-white font-bold text-[10px] uppercase tracking-widest px-6 py-3 rounded-lg flex items-center gap-2 hover:border-[#FF5A00]/50 hover:text-[#FF5A00] transition-all">
                  BOOK SERVICE <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right: Service Cards */}
            <div className="p-10 lg:p-14 flex flex-col justify-center gap-4">
              <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mb-2">Our Services</p>
              {services.map((svc, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 flex items-center justify-between group hover:border-[#FF5A00]/30 hover:bg-white/8 transition-all duration-300 cursor-pointer"
                >
                  <div>
                    <h3 className="text-white font-black text-sm mb-0.5">{svc.title}</h3>
                    <p className="text-zinc-500 text-[10px] font-medium">{svc.desc}</p>
                  </div>
                  <div className="text-right ml-4 shrink-0">
                    <p className="text-[#FF5A00] font-black text-sm">{svc.price}</p>
                    <ArrowRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-[#FF5A00] group-hover:translate-x-1 transition-all mt-1 ml-auto" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
