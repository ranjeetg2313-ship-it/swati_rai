"use client";

import React from "react";
import { Tag, Sparkles, Truck, Phone } from "lucide-react";

const announcements = [
  { icon: Tag, text: "Save up to 40% off high street prices!" },
  { icon: Truck, text: "Free delivery on all orders — nationwide!" },
  { icon: Sparkles, text: "New: Michelin Pilot Sport 5 — Now available!" },
  { icon: Phone, text: "24/7 Expert support: +91 1800-TREADX" },
];

export function AnnouncementBar() {
  return (
    <div className="bg-[#FF5A00] text-white py-2.5 overflow-hidden relative">
      {/* Shimmer overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] animate-[shimmer_4s_ease-in-out_infinite]" />

      <div className="flex w-[300%] announcement-marquee">
        {[...announcements, ...announcements, ...announcements].map((item, i) => {
          const Icon = item.icon;
          return (
            <div key={i} className="flex items-center gap-2 mx-12 shrink-0 whitespace-nowrap">
              <Icon className="w-3.5 h-3.5 text-white/80 shrink-0" />
              <span className="text-[11px] font-bold uppercase tracking-widest">{item.text}</span>
              <span className="text-white/40 mx-4 text-lg font-thin">|</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
