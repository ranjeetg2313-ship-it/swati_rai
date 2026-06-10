"use client";

import React from "react";
import { Wrench, Truck, ShieldCheck } from "lucide-react";

export function CartFeatureMarquee() {
  const perks = [
    {
      title: "Professional Fitting",
      subtitle: "Expert balancing & alignment",
      icon: Wrench,
      color: "text-[#FF5A00]",
      bg: "bg-[#FF5A00]/10",
    },
    {
      title: "Free Safe Delivery",
      subtitle: "Shipped to local fitting garage",
      icon: Truck,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
    },
    {
      title: "Tread X Warranty",
      subtitle: "Full mileage & road damage protection",
      icon: ShieldCheck,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-zinc-50 to-zinc-100/50 dark:from-zinc-900/20 dark:to-zinc-900/10 border border-zinc-200/50 dark:border-zinc-800/80 rounded-2xl overflow-hidden relative mt-6">
      <div className="flex w-max marquee-track py-5">
        {[...Array(3)].map((_, arrayIndex) => (
          <div key={arrayIndex} className="flex gap-8 md:gap-16 px-4 md:px-8">
            {perks.map((perk, idx) => (
              <div key={idx} className="flex items-center gap-4 min-w-[280px] group cursor-default">
                <div className={`w-10 h-10 rounded-xl ${perk.bg} flex items-center justify-center ${perk.color} shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <perk.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-zinc-800 dark:text-zinc-200 font-bold text-[13px] mb-0.5">{perk.title}</h4>
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-450 font-normal">{perk.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      
      {/* Gradient Fades for Smooth Entry/Exit */}
      <div className="absolute top-0 left-0 bottom-0 w-12 bg-gradient-to-r from-zinc-50 dark:from-[#11161d] to-transparent z-10 pointer-events-none rounded-l-2xl" />
      <div className="absolute top-0 right-0 bottom-0 w-12 bg-gradient-to-l from-zinc-100/50 dark:from-[#131820] to-transparent z-10 pointer-events-none rounded-r-2xl" />
    </div>
  );
}
