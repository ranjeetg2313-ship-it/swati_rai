"use client";

import React, { useState, useEffect, useRef } from "react";
import { Star, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

const reviews = [
  {
    name: "Ravi Sharma",
    verified: true,
    rating: 5,
    text: "Excellent service and fast delivery. The tyres are 100% genuine and fit perfectly.",
    avatar: "/images/avatar_one_1781107677048.png"
  },
  {
    name: "Anita Verma",
    verified: true,
    rating: 5,
    text: "Great quality tyres at the best price. Very satisfied! Will definitely buy again.",
    avatar: "/images/avatar_two_1781107690050.png"
  },
  {
    name: "Vikram Singh",
    verified: true,
    rating: 4,
    text: "Wide range of options and smooth shopping experience. Installation was quick too.",
    avatar: "/images/avatar_three_1781107702069.png"
  },
  {
    name: "Priya Patel",
    verified: true,
    rating: 5,
    text: "Loved the quick installation service. Extremely professional team and customer support!",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Rajesh Kumar",
    verified: true,
    rating: 5,
    text: "Unbeatable prices. Saved almost 35% compared to the local retail shops in my area.",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Sunita Rao",
    verified: true,
    rating: 5,
    text: "Tread X has the best selection of performance tyres. Highly recommended for car lovers.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Amit Patel",
    verified: true,
    rating: 5,
    text: "Outstanding customer support! They guided me through selecting the correct aspect ratio for my SUV. Will buy again!",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Shreya Ghoshal",
    verified: true,
    rating: 5,
    text: "Tread X has completely changed the tyre shopping game. Competitive pricing, premium brands, and effortless installation bookings.",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Kabir Singh",
    verified: true,
    rating: 5,
    text: "Top-notch performance from the Bridgestone tyres. Delivery was incredibly fast, arriving in less than 24 hours!",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Meera Nair",
    verified: true,
    rating: 4,
    text: "Affordable, authentic, and fast. The local garage fitting process was seamless and took only 20 minutes.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
  }
];

export function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [activeDotIndex, setActiveDotIndex] = useState(0);

  const extendedReviews = [...reviews, ...reviews, ...reviews];

  // Auto-scroll loop using requestAnimationFrame for 60fps smooth scrolling
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationFrameId: number;

    const scroll = () => {
      if (!isPaused && container) {
        container.scrollLeft += 0.8; // scroll speed (pixels per frame)

        const singleSetWidth = container.scrollWidth / 3;
        // Wrap scroll position seamlessly
        if (container.scrollLeft >= singleSetWidth * 2) {
          container.scrollLeft -= singleSetWidth;
        } else if (container.scrollLeft <= 0) {
          container.scrollLeft += singleSetWidth;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  // Track scroll position to update dot indicator
  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollLeft = container.scrollLeft;
      const singleSetWidth = container.scrollWidth / 3;
      const relativeScroll = scrollLeft % singleSetWidth;
      const ratio = relativeScroll / singleSetWidth;

      if (ratio < 0.33) {
        setActiveDotIndex(0);
      } else if (ratio < 0.66) {
        setActiveDotIndex(1);
      } else {
        setActiveDotIndex(2);
      }
    }
  };

  const scrollLeftBtn = () => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollBy({ left: -360, behavior: "smooth" });
    }
  };

  const scrollRightBtn = () => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollBy({ left: 360, behavior: "smooth" });
    }
  };

  const goToPage = (idx: number) => {
    const container = scrollContainerRef.current;
    if (container) {
      const singleSetWidth = container.scrollWidth / 3;
      const baseScroll = Math.floor(container.scrollLeft / singleSetWidth) * singleSetWidth;
      container.scrollTo({
        left: baseScroll + idx * (singleSetWidth / 3),
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="py-16 bg-white dark:bg-[#0B0F14] border-t border-zinc-100 dark:border-zinc-800/50 relative overflow-hidden">
      {/* Dynamic Animated AI Ambient Glow Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[800px] max-h-[400px] pointer-events-none z-0 opacity-80 select-none">
        <div className="absolute top-[10%] left-[20%] w-[320px] h-[320px] bg-[#FF5A00]/8 dark:bg-[#FF5A00]/12 rounded-full blur-[90px] animate-float-slow" />
        <div className="absolute bottom-[10%] right-[20%] w-[350px] h-[350px] bg-[#0B3B60]/12 dark:bg-[#0B3B60]/18 rounded-full blur-[100px] animate-float-slower" />
      </div>

      <div className="container mx-auto px-4 text-center max-w-7xl relative z-10">
        <p className="text-[#FF5A00] font-bold text-[10px] tracking-widest uppercase mb-2">Customer Reviews</p>
        <h2 className="text-3xl md:text-4xl font-black text-[#0B0F14] dark:text-white mb-12">What Our Customers Say</h2>

        <div className="flex items-center justify-center gap-2 md:gap-6 max-w-6xl mx-auto relative">
          <button 
            onClick={scrollLeftBtn}
            className="w-12 h-12 rounded-full bg-zinc-50 dark:bg-zinc-900/40 text-zinc-500 dark:text-zinc-400 hover:text-[#FF5A00] dark:hover:text-[#FF5A00] flex items-center justify-center hover:bg-zinc-100 dark:hover:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/80 transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-sm shrink-0 z-20"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Marquee scrollable track */}
          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="overflow-x-auto w-full py-4 flex gap-6 scrollbar-none scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {extendedReviews.map((review, i) => (
              <div 
                key={i} 
                className="w-[280px] md:w-[350px] shrink-0"
              >
                <div className="bg-white dark:bg-zinc-900/40 border border-zinc-200/60 dark:border-zinc-800/80 rounded-2xl p-6 text-left shadow-lg hover:shadow-xl hover:-translate-y-1 hover:border-[#FF5A00]/25 transition-all duration-300 backdrop-blur-md h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full object-cover border-2 border-zinc-100 dark:border-zinc-800" />
                      <div>
                        <h4 className="font-bold text-[#0B0F14] dark:text-white text-sm">{review.name}</h4>
                        {review.verified && (
                          <div className="flex items-center gap-1 text-[#FF5A00]">
                            <CheckCircle2 className="w-3 h-3" />
                            <span className="text-[10px] font-black uppercase tracking-wider">Verified Buyer</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, idx) => (
                        <Star key={idx} className={`w-3.5 h-3.5 ${idx < review.rating ? "fill-[#FFB800] text-[#FFB800]" : "fill-zinc-200 dark:fill-zinc-800 text-zinc-200 dark:text-zinc-800"}`} />
                      ))}
                    </div>
                    <p className="text-xs text-zinc-650 dark:text-zinc-400 leading-relaxed font-medium">
                      "{review.text}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button 
            onClick={scrollRightBtn}
            className="w-12 h-12 rounded-full bg-zinc-50 dark:bg-zinc-900/40 text-zinc-500 dark:text-zinc-400 hover:text-[#FF5A00] dark:hover:text-[#FF5A00] flex items-center justify-center hover:bg-zinc-100 dark:hover:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/80 transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-sm shrink-0 z-20"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Capped 3 Dot Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {[0, 1, 2].map((idx) => (
            <button
              key={idx}
              onClick={() => goToPage(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${activeDotIndex === idx ? 'bg-[#FF5A00] w-6' : 'bg-zinc-200 dark:bg-zinc-800'}`}
              aria-label={`Go to section ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
