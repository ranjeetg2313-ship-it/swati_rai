"use client";

import React from "react";
import { ArrowRight, BookOpen, Clock } from "lucide-react";

const news = [
  {
    tag: "Buying Guide",
    title: "Understanding the New EU Tyre Label",
    desc: "A comprehensive guide to understanding what the new EU tyre labels mean for your next purchase decision.",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=600&auto=format&fit=crop",
    readTime: "5 min read"
  },
  {
    tag: "Seasonal Tips",
    title: "Top 5 Winter Tyres for 2026",
    desc: "Prepare for the cold weather with our expert picks for the best winter tyres this season.",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=600&auto=format&fit=crop",
    readTime: "4 min read"
  },
  {
    tag: "Safety",
    title: "How to Check Your Tyre Tread Depth",
    desc: "Ensure you are driving legally and safely by checking your tread depth using our simple 20p coin test.",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=600&auto=format&fit=crop",
    readTime: "3 min read"
  }
];

export function News() {
  return (
    <section className="py-16 bg-white dark:bg-[#0B0F14] border-t border-zinc-100 dark:border-zinc-800/50 relative">
      {/* Ambient background — contained so it doesn't cause page overflow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#FF5A00]/3 dark:bg-[#FF5A00]/5 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div>
            <p className="text-[#FF5A00] font-bold text-[10px] tracking-widest uppercase mb-2">Latest from TREAD X</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#0B0F14] dark:text-white tracking-tight">
              News & Guides
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-3 max-w-lg font-medium">
              Stay informed with our expert tyre guides, seasonal tips, and the latest automotive news.
            </p>
          </div>
          <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest border border-zinc-200 dark:border-zinc-800 rounded-lg px-5 py-2.5 hover:border-[#FF5A00] hover:text-[#FF5A00] transition-colors bg-white dark:bg-zinc-900/60 text-[#0B0F14] dark:text-white self-start md:self-auto whitespace-nowrap">
            SEE ALL ARTICLES <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {news.map((item, i) => (
            <div
              key={i}
              className="bg-white dark:bg-zinc-900/40 border border-zinc-200/60 dark:border-zinc-800/80 rounded-2xl overflow-hidden flex flex-col group hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#FF5A00]/5 hover:border-[#FF5A00]/25 transition-all duration-300"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Tag overlay */}
                <div className="absolute top-4 left-4">
                  <span className="bg-[#FF5A00] text-white text-[9px] font-black tracking-wider px-3 py-1 rounded uppercase">
                    {item.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-1.5 mb-3 text-zinc-400 dark:text-zinc-500">
                  <Clock className="w-3 h-3" />
                  <span className="text-[10px] font-bold">{item.readTime}</span>
                </div>
                <h3 className="font-black text-[#0B0F14] dark:text-white text-base mb-2 leading-snug group-hover:text-[#FF5A00] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-6 flex-1 leading-relaxed font-medium">
                  {item.desc}
                </p>
                <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#FF5A00] hover:gap-3 transition-all duration-200">
                  <BookOpen className="w-3 h-3" /> READ ARTICLE <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
