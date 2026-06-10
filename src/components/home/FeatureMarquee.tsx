"use client";

import React from "react";
import { Truck, Wrench, TrendingDown, ShieldCheck, Tag } from "lucide-react";

export function FeatureMarquee() {
  const features = [
    {
      title: "FREE DELIVERY",
      subtitle: "On all orders",
      icon: Truck,
    },
    {
      title: "INSTALLATION",
      subtitle: "2500+ centres",
      icon: Wrench,
    },
    {
      title: "EASY RETURNS",
      subtitle: "7 days policy",
      icon: TrendingDown,
    },
    {
      title: "SECURE PAY",
      subtitle: "100% safe",
      icon: ShieldCheck,
    },
    {
      title: "BEST PRICE",
      subtitle: "Guaranteed",
      icon: Tag,
    },
  ];

  // We duplicate the items 3 times and animate by 33.33% to create an infinite scroll.
  // The CSS class .marquee-track handles the scroll animation.
  return (
    <div className="w-full bg-white dark:bg-[#070A0F] py-8 border-b border-zinc-100 dark:border-zinc-800/60 overflow-hidden relative">
      <div className="flex w-max marquee-track">
        {[...Array(3)].map((_, arrayIndex) => (
          <div key={arrayIndex} className="flex gap-16 md:gap-32 px-8 md:px-16">
            {features.map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center min-w-[140px] text-center group cursor-default">
                <div className="w-14 h-14 rounded-full bg-[#FF5A00]/10 flex items-center justify-center text-[#FF5A00] mb-3 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6" strokeWidth={2} />
                </div>
                <h4 className="text-[13px] font-black text-zinc-900 dark:text-white uppercase tracking-wider mb-0.5">
                  {feature.title}
                </h4>
                <p className="text-[11px] text-zinc-500 dark:text-zinc-400 font-medium">
                  {feature.subtitle}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
      
      {/* Gradient Fades for Smooth Entry/Exit */}
      <div className="absolute top-0 left-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white dark:from-[#070A0F] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white dark:from-[#070A0F] to-transparent z-10 pointer-events-none" />
    </div>
  );
}
