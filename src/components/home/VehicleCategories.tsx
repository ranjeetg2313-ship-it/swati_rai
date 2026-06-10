"use client";

import React, { useState } from "react";
import { Car, Truck, Bike, Bus, Tractor } from "lucide-react";

const initialVehicles = [
  { name: "Car", icon: <Car className="w-6 h-6" /> },
  { name: "SUV", icon: <Car className="w-6 h-6" /> },
  { name: "Truck", icon: <Truck className="w-6 h-6" /> },
  { name: "Motorcycle", icon: <Bike className="w-6 h-6" /> },
  { name: "Van", icon: <Truck className="w-6 h-6" /> },
  { name: "Bus", icon: <Bus className="w-6 h-6" /> },
  { name: "Off-Road", icon: <Tractor className="w-6 h-6" /> },
];

export function VehicleCategories() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-14 bg-white dark:bg-[#0B0F14] border-t border-zinc-100 dark:border-zinc-800/50 relative overflow-hidden">
      {/* Subtle blur highlights behind */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[150px] bg-gradient-to-r from-[#FF5A00]/5 to-[#0B3B60]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 text-center max-w-5xl relative z-10">
        <p className="text-[#FF5A00] font-bold text-[10px] tracking-widest uppercase mb-2">Shop by Vehicle Type</p>
        <h2 className="text-3xl font-black text-[#0B0F14] dark:text-white mb-8">Find Tyres for Your Vehicle</h2>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {initialVehicles.map((v, i) => {
            const isActive = activeIndex === i;
            return (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`flex flex-col items-center justify-center cursor-pointer group w-24 h-28 p-4 rounded-2xl border transition-all duration-300 ${
                  isActive 
                    ? 'border-[#FF5A00] bg-zinc-50 dark:bg-zinc-900/60 shadow-lg shadow-[#FF5A00]/5 text-[#FF5A00]' 
                    : 'border-zinc-200/60 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/20 text-zinc-500 hover:border-[#FF5A00]/50 hover:text-[#FF5A00] hover:bg-zinc-50/50 dark:hover:bg-zinc-900/40 hover:-translate-y-1'
                }`}
              >
                <div className={`mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 ${isActive ? 'scale-110 text-[#FF5A00]' : ''}`}>
                  {v.icon}
                </div>
                <span className={`text-[11px] font-bold tracking-wide transition-colors ${isActive ? 'text-[#FF5A00]' : 'text-zinc-600 dark:text-zinc-400 group-hover:text-[#FF5A00]'}`}>
                  {v.name}
                </span>
                {isActive && (
                  <div className="w-6 h-0.5 bg-[#FF5A00] mt-2 rounded-full animate-pulse"></div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
