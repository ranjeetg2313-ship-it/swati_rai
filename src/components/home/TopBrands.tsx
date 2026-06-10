"use client";

import React from "react";

const allBrands = [
  {
    name: "Bridgestone",
    src: "https://www.savingontyres.co.uk/assets/themes/agnsv1/image/tyrebrand-logo/bridgestone-logo.webp",
    href: "https://www.savingontyres.co.uk/tyres/manufacturers/bridgestone"
  },
  {
    name: "Nexen",
    src: "https://www.savingontyres.co.uk/assets/themes/agnsv1/image/tyrebrand-logo/nexen-logo.webp",
    href: "https://www.savingontyres.co.uk/tyres/manufacturers/nexen"
  },
  {
    name: "Dunlop",
    src: "https://www.savingontyres.co.uk/assets/themes/agnsv1/image/tyrebrand-logo/dunlop-logo.webp",
    href: "https://www.savingontyres.co.uk/tyres/manufacturers/dunlop"
  },
  {
    name: "Continental",
    src: "https://www.savingontyres.co.uk/assets/themes/agnsv1/image/tyrebrand-logo/continental-logo.webp",
    href: "https://www.savingontyres.co.uk/tyres/manufacturers/continental"
  },
  {
    name: "Goodyear",
    src: "https://www.savingontyres.co.uk/assets/themes/agnsv1/image/tyrebrand-logo/goodyear-logo.webp",
    href: "https://www.savingontyres.co.uk/tyres/manufacturers/goodyear"
  },
  {
    name: "Maxxis",
    src: "https://www.savingontyres.co.uk/assets/themes/agnsv1/image/tyrebrand-logo/maxxis-logo.webp",
    href: "https://www.savingontyres.co.uk/tyres/manufacturers/maxxis"
  },
  {
    name: "Michelin",
    src: "https://www.savingontyres.co.uk/assets/themes/agnsv1/image/tyrebrand-logo/michelin-logo.webp",
    href: "https://www.savingontyres.co.uk/tyres/manufacturers/michelin"
  },
  {
    name: "Pirelli",
    src: "https://www.savingontyres.co.uk/assets/themes/agnsv1/image/tyrebrand-logo/pirelli-logo.webp",
    href: "https://www.savingontyres.co.uk/tyres/manufacturers/pirelli"
  },
  {
    name: "Uniroyal",
    src: "https://www.savingontyres.co.uk/assets/themes/agnsv1/image/tyrebrand-logo/uniroyal-logo.webp",
    href: "https://www.savingontyres.co.uk/tyres/manufacturers/uniroyal"
  },
  {
    name: "Roadstone",
    src: "https://www.savingontyres.co.uk/assets/themes/agnsv1/image/tyrebrand-logo/roadstone-logo.webp",
    href: "https://www.savingontyres.co.uk/tyres/manufacturers/roadstone"
  },
  {
    name: "Matador",
    src: "https://www.savingontyres.co.uk/assets/themes/agnsv1/image/tyrebrand-logo/matador-logo.webp",
    href: "https://www.savingontyres.co.uk/tyres/manufacturers/matador"
  },
  {
    name: "Riken",
    src: "https://www.savingontyres.co.uk/assets/themes/agnsv1/image/tyrebrand-logo/riken-logo.webp",
    href: "https://www.savingontyres.co.uk/tyres/manufacturers/riken"
  },
];

const BrandCard = ({ brand }: { brand: typeof allBrands[0] }) => {
  return (
    <a
      href={brand.href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-[176px] h-[80px] bg-white dark:bg-white border border-zinc-200 dark:border-zinc-300/20 rounded-xl mx-3 shrink-0 group cursor-pointer transition-all duration-300 hover:scale-105 hover:border-[#FF5A00]/60 hover:shadow-xl hover:shadow-[#FF5A00]/15 overflow-hidden px-4"
    >
      <img
        src={brand.src}
        alt={brand.name}
        width={176}
        height={80}
        className="max-h-[54px] max-w-[140px] w-auto object-contain transition-all duration-300 group-hover:scale-105"
        loading="lazy"
      />
    </a>
  );
};

export function TopBrands() {
  return (
    <section className="bg-[#F8F9FA] dark:bg-[#0B0F14] py-14 border-t border-zinc-100 dark:border-zinc-800/50 relative">
      {/* Background glow — contained */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-[#FF5A00]/5 dark:bg-[#0B3B60]/10 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 mb-8 text-center relative z-10">
        <p className="text-[#FF5A00] font-bold text-[11px] tracking-widest uppercase mb-4">World Class Partners</p>
        <h2 className="text-3xl md:text-5xl font-black text-[#0B0F14] dark:text-white tracking-tight">
          Top Brands You Can Trust
        </h2>
      </div>

      {/* Marquee wrapper */}
      <div className="relative z-10 overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#F8F9FA] dark:from-[#0B0F14] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#F8F9FA] dark:from-[#0B0F14] to-transparent z-20 pointer-events-none" />

        {/* Scrolling track */}
        <div className="flex marquee-track py-3">
          {allBrands.map((brand, i) => <BrandCard key={`a-${i}`} brand={brand} />)}
          {allBrands.map((brand, i) => <BrandCard key={`b-${i}`} brand={brand} />)}
          {allBrands.map((brand, i) => <BrandCard key={`c-${i}`} brand={brand} />)}
        </div>
      </div>
    </section>
  );
}
