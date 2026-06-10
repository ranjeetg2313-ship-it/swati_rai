"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useStore, Tyre } from "@/store/useStore";
import { 
  Star, 
  Heart, 
  Trash2, 
  ShoppingCart, 
  ArrowRight,
  TrendingDown,
  ShieldCheck,
  Bell,
  SlidersHorizontal,
  ChevronDown,
  Sparkles,
  CheckCircle2,
  X,
  Truck,
  Wrench,
  Tag,
  LayoutGrid,
  List,
  Filter,
  Percent
} from "lucide-react";

export default function WishlistPage() {
  const [mounted, setMounted] = useState(false);

  // State from Zustand Store
  const wishlist = useStore((state) => state.wishlist);
  const toggleWishlist = useStore((state) => state.toggleWishlist);
  const addToCart = useStore((state) => state.addToCart);

  // Layout state
  const [isGridView, setIsGridView] = useState(true);
  const [sortBy, setSortBy] = useState("Recently Added");

  // Interactive feature states
  const [priceAlerts, setPriceAlerts] = useState(true);
  const [comparedTyres, setComparedTyres] = useState<string[]>([]);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);
  const [quickViewTyre, setQuickViewTyre] = useState<Tyre | null>(null);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Filters State
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [maxPrice, setMaxPrice] = useState(20000);
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);
  const [selectedSeasons, setSelectedSeasons] = useState<string[]>([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#0B0F14] flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-[#FF5A00] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  // Dynamic stats
  const savedCount = wishlist.length;
  const totalSavings = wishlist.reduce((sum, tyre) => {
    const price = parseInt(tyre.price.replace(/,/g, ""), 10) || 0;
    const oldPrice = parseInt(tyre.oldPrice.replace(/,/g, ""), 10) || 0;
    return sum + (oldPrice - price);
  }, 0);

  const getTyreSeason = (name: string): string => {
    const n = name.toLowerCase();
    if (n.includes("crossclimate") || n.includes("all season") || n.includes("weather")) return "All Season";
    if (n.includes("winter") || n.includes("ice") || n.includes("snow")) return "Winter";
    return "Summer";
  };

  const getTyreCategory = (name: string): string => {
    const n = name.toLowerCase();
    if (n.includes("eco") || n.includes("green") || n.includes("energy")) return "ECO";
    return "SPORT";
  };

  const availableBrands = Array.from(new Set(wishlist.map(t => t.brand)));
  const brandCounts = availableBrands.reduce((acc, brand) => {
    acc[brand] = wishlist.filter(t => t.brand === brand).length;
    return acc;
  }, {} as Record<string, number>);

  const ratingsCount = [5, 4, 3, 2, 1].reduce((acc, rating) => {
    acc[rating] = wishlist.filter(t => Math.floor(t.rating) === rating).length;
    return acc;
  }, {} as Record<number, number>);

  const seasonCounts = ["Summer", "All Season", "Winter"].reduce((acc, season) => {
    acc[season] = wishlist.filter(t => getTyreSeason(t.name) === season).length;
    return acc;
  }, {} as Record<string, number>);

  const handleMoveAllToCart = () => {
    wishlist.forEach(item => addToCart(item));
    wishlist.forEach(item => toggleWishlist(item));
  };

  const handleToggleCompare = (tyreId: string) => {
    setComparedTyres(prev =>
      prev.includes(tyreId)
        ? prev.filter(id => id !== tyreId)
        : prev.length < 3 ? [...prev, tyreId] : prev
    );
  };

  let filteredTyres = [...wishlist];
  if (selectedBrands.length > 0) filteredTyres = filteredTyres.filter(t => selectedBrands.includes(t.brand));
  filteredTyres = filteredTyres.filter(t => (parseInt(t.price.replace(/,/g, ""), 10) || 0) <= maxPrice);
  if (selectedRatings.length > 0) filteredTyres = filteredTyres.filter(t => selectedRatings.includes(Math.floor(t.rating)));
  if (selectedSeasons.length > 0) filteredTyres = filteredTyres.filter(t => selectedSeasons.includes(getTyreSeason(t.name)));

  if (sortBy === "Price: Low to High") filteredTyres.sort((a, b) => (parseInt(a.price.replace(/,/g, ""), 10) || 0) - (parseInt(b.price.replace(/,/g, ""), 10) || 0));
  else if (sortBy === "Price: High to Low") filteredTyres.sort((a, b) => (parseInt(b.price.replace(/,/g, ""), 10) || 0) - (parseInt(a.price.replace(/,/g, ""), 10) || 0));
  else if (sortBy === "Rating: High to Low") filteredTyres.sort((a, b) => b.rating - a.rating);

  const advisorTyre: Tyre = {
    brand: "Michelin",
    name: "Pilot Sport 5",
    rating: 4.9,
    reviews: 324,
    price: "13,499",
    oldPrice: "16,500",
    image: "/images/PremiumTyre_transparent.png",
    badge: "TOP RATED",
    discount: "18%",
    tag: "bg-[#FF5A00]",
    sizes: ["225/45 R17", "245/40 R18"]
  };

  const handleBrandChange = (brand: string) => setSelectedBrands(prev => prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]);
  const handleRatingChange = (rating: number) => setSelectedRatings(prev => prev.includes(rating) ? prev.filter(r => r !== rating) : [...prev, rating]);
  const handleSeasonChange = (season: string) => setSelectedSeasons(prev => prev.includes(season) ? prev.filter(s => s !== season) : [...prev, season]);

  const hasActiveFilters = selectedBrands.length > 0 || selectedRatings.length > 0 || selectedSeasons.length > 0 || maxPrice < 20000;

  // Shared Filters Panel
  const FiltersPanel = () => (
    <div className="space-y-5">
      {/* Filter Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-xs font-black uppercase tracking-widest text-zinc-900 dark:text-white flex items-center gap-2">
          <Filter className="w-3.5 h-3.5 text-[#FF5A00]" /> Filters
        </h3>
        {hasActiveFilters && (
          <button
            onClick={() => { setSelectedBrands([]); setMaxPrice(20000); setSelectedRatings([]); setSelectedSeasons([]); }}
            className="text-[9px] font-black uppercase tracking-widest text-[#FF5A00] hover:text-[#E04D00] transition-colors cursor-pointer"
          >
            Clear All
          </button>
        )}
      </div>

      {/* Brand */}
      <div>
        <p className="text-[9px] font-black uppercase tracking-widest text-zinc-400 mb-2.5 flex items-center gap-1.5">
          <ChevronDown className="w-3 h-3" /> Brand
        </p>
        <div className="space-y-2">
          {["Continental", "Michelin", "Bridgestone", "Hankook", "Kumho", "Uniroyal"].map((brand) => {
            const count = brandCounts[brand] || 0;
            const isChecked = selectedBrands.includes(brand);
            return (
              <label key={brand} className={`flex items-center justify-between cursor-pointer select-none group ${count === 0 ? "opacity-40 cursor-not-allowed" : ""}`}>
                <div className="flex items-center gap-2.5">
                  <div
                    onClick={() => count > 0 && handleBrandChange(brand)}
                    className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-all shrink-0 cursor-pointer ${isChecked ? "bg-[#FF5A00] border-[#FF5A00]" : "border-zinc-300 dark:border-zinc-700 group-hover:border-[#FF5A00]/60"}`}
                  >
                    {isChecked && <CheckCircle2 className="w-2.5 h-2.5 text-white" />}
                  </div>
                  <span className={`text-xs font-semibold transition-colors ${isChecked ? "text-[#FF5A00]" : "text-zinc-700 dark:text-zinc-300"}`}>{brand}</span>
                </div>
                <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-600">({count})</span>
              </label>
            );
          })}
        </div>
      </div>

      <div className="border-t border-zinc-100 dark:border-zinc-800"></div>

      {/* Price Range */}
      <div>
        <p className="text-[9px] font-black uppercase tracking-widest text-zinc-400 mb-2.5 flex items-center gap-1.5">
          <ChevronDown className="w-3 h-3" /> Price Range
        </p>
        <input
          type="range" min="5000" max="20000" step="500"
          value={maxPrice}
          onChange={(e) => setMaxPrice(parseInt(e.target.value))}
          className="w-full h-1.5 rounded-full appearance-none cursor-pointer accent-[#FF5A00] bg-zinc-200 dark:bg-zinc-700"
        />
        <div className="flex justify-between text-[10px] font-bold mt-1.5">
          <span className="text-zinc-500">₹5,000</span>
          <span className="text-[#FF5A00]">₹{maxPrice.toLocaleString()}</span>
        </div>
      </div>

      <div className="border-t border-zinc-100 dark:border-zinc-800"></div>

      {/* Rating */}
      <div>
        <p className="text-[9px] font-black uppercase tracking-widest text-zinc-400 mb-2.5 flex items-center gap-1.5">
          <ChevronDown className="w-3 h-3" /> Rating
        </p>
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((rating) => {
            const count = ratingsCount[rating] || 0;
            const isChecked = selectedRatings.includes(rating);
            return (
              <label key={rating} className={`flex items-center justify-between cursor-pointer ${count === 0 ? "opacity-40 cursor-not-allowed" : ""}`}>
                <div className="flex items-center gap-2.5">
                  <div
                    onClick={() => count > 0 && handleRatingChange(rating)}
                    className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-all shrink-0 cursor-pointer ${isChecked ? "bg-[#FF5A00] border-[#FF5A00]" : "border-zinc-300 dark:border-zinc-700"}`}
                  >
                    {isChecked && <CheckCircle2 className="w-2.5 h-2.5 text-white" />}
                  </div>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-2.5 h-2.5 ${i < rating ? "fill-[#FF5A00] text-[#FF5A00]" : "text-zinc-200 dark:text-zinc-700"}`} />
                    ))}
                  </div>
                </div>
                <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-600">({count})</span>
              </label>
            );
          })}
        </div>
      </div>

      <div className="border-t border-zinc-100 dark:border-zinc-800"></div>

      {/* Season */}
      <div>
        <p className="text-[9px] font-black uppercase tracking-widest text-zinc-400 mb-2.5 flex items-center gap-1.5">
          <ChevronDown className="w-3 h-3" /> Season
        </p>
        <div className="space-y-2">
          {["Summer", "All Season", "Winter"].map((season) => {
            const count = seasonCounts[season] || 0;
            const isChecked = selectedSeasons.includes(season);
            return (
              <label key={season} className={`flex items-center justify-between cursor-pointer ${count === 0 ? "opacity-40 cursor-not-allowed" : ""}`}>
                <div className="flex items-center gap-2.5">
                  <div
                    onClick={() => count > 0 && handleSeasonChange(season)}
                    className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-all shrink-0 cursor-pointer ${isChecked ? "bg-[#FF5A00] border-[#FF5A00]" : "border-zinc-300 dark:border-zinc-700"}`}
                  >
                    {isChecked && <CheckCircle2 className="w-2.5 h-2.5 text-white" />}
                  </div>
                  <span className={`text-xs font-semibold ${isChecked ? "text-[#FF5A00]" : "text-zinc-700 dark:text-zinc-300"}`}>{season}</span>
                </div>
                <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-600">({count})</span>
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 dark:bg-[#0B0F14] text-zinc-900 dark:text-white transition-colors duration-300">
      <Header />

      <main className="flex-1">

        {/* ─── Hero Banner ─── */}
        <section className="relative bg-[#0B0F14] overflow-hidden">
          {/* Orange glow */}
          <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-[#FF5A00]/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#FF5A00]/5 blur-[80px] rounded-full pointer-events-none" />

          <div className="container mx-auto px-4 max-w-7xl py-10 md:py-14 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
              {/* Left */}
              <div>
                <span className="inline-flex items-center gap-1.5 text-[#FF5A00] font-bold text-[10px] tracking-widest uppercase mb-3">
                  <Heart className="w-3 h-3 fill-current" /> Your Saved Tyres
                </span>
                <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-3 tracking-tight">
                  My <span className="text-[#FF5A00]">Wishlist</span>
                </h1>
                <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                  {savedCount > 0
                    ? <><span className="text-white font-bold">{savedCount} premium tyre{savedCount !== 1 ? "s" : ""}</span> saved · Save up to <span className="text-[#FF5A00] font-bold">₹{totalSavings.toLocaleString()}</span> on MRP</>
                    : "Save your favourite tyres and compare them side by side."
                  }
                </p>
                {savedCount > 0 && (
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() => { if (wishlist.length > 0) { setComparedTyres(wishlist.map(t => `${t.brand}-${t.name}`)); setIsCompareModalOpen(true); } }}
                      className="bg-[#FF5A00] hover:bg-[#E04D00] text-white font-bold text-[10px] tracking-widest uppercase px-5 py-3 rounded-xl flex items-center gap-2 transition-all cursor-pointer shadow-lg shadow-[#FF5A00]/25 hover:-translate-y-0.5 transform"
                    >
                      <SlidersHorizontal className="w-3.5 h-3.5" /> Compare All
                    </button>
                    <button
                      onClick={handleMoveAllToCart}
                      className="border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-bold text-[10px] tracking-widest uppercase px-5 py-3 rounded-xl flex items-center gap-2 transition-all cursor-pointer hover:bg-zinc-800/50 hover:-translate-y-0.5 transform"
                    >
                      <ShoppingCart className="w-3.5 h-3.5" /> Move All to Cart
                    </button>
                  </div>
                )}
              </div>

              {/* Right: Stats + Tyre Image */}
              <div className="relative hidden md:flex items-center justify-end">
                <img
                  src="/images/premium_tyre_1781107650559_transparent.png"
                  alt="Premium Tyre"
                  className="w-[280px] lg:w-[340px] object-contain drop-shadow-[0_20px_50px_rgba(255,90,0,0.2)] translate-x-8 hover:translate-x-2 transition-all duration-700"
                />
                {/* Floating offer badge */}
                <div className="absolute left-4 top-0 bg-[#FF5A00] text-white rounded-2xl px-4 py-3 text-center shadow-xl">
                  <div className="text-[10px] font-bold uppercase">Savings</div>
                  <div className="text-xl font-black">₹{totalSavings > 0 ? totalSavings.toLocaleString() : "0"}</div>
                  <div className="text-[9px] opacity-80">on MRP</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Stats Bar ─── */}
        <section className="bg-white dark:bg-[#161B22] border-b border-zinc-100 dark:border-zinc-800">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-zinc-100 dark:divide-zinc-800">
              {[
                { icon: <Heart className="w-4 h-4" />, label: "Saved Items", value: savedCount.toString(), sub: "in wishlist" },
                { icon: <Percent className="w-4 h-4" />, label: "Total Savings", value: `₹${totalSavings.toLocaleString()}`, sub: "vs MRP" },
                { icon: <ShieldCheck className="w-4 h-4" />, label: "Best Price", value: "100%", sub: "guaranteed" },
                { icon: <Bell className="w-4 h-4" />, label: "Price Alerts", value: priceAlerts ? "ON" : "OFF", sub: "we'll notify you", toggle: true },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-3 px-4 md:px-6 py-4">
                  <div className="w-9 h-9 rounded-xl bg-[#FF5A00]/10 text-[#FF5A00] flex items-center justify-center shrink-0">
                    {stat.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[9px] text-zinc-400 font-bold uppercase tracking-wider truncate">{stat.label}</div>
                    <div className="text-base font-black text-zinc-900 dark:text-white">{stat.value}</div>
                    <div className="text-[9px] text-zinc-400">{stat.sub}</div>
                  </div>
                  {stat.toggle && (
                    <button
                      onClick={() => setPriceAlerts(p => !p)}
                      className={`w-9 h-5 rounded-full p-0.5 transition-colors cursor-pointer shrink-0 ${priceAlerts ? "bg-[#FF5A00]" : "bg-zinc-200 dark:bg-zinc-700"}`}
                    >
                      <div className={`w-4 h-4 rounded-full bg-white transition-transform ${priceAlerts ? "translate-x-4" : "translate-x-0"}`} />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Main Content ─── */}
        <div className="container mx-auto px-4 max-w-7xl py-8">
          {wishlist.length === 0 ? (
            /* Empty State */
            <div className="max-w-md mx-auto text-center py-20">
              <div className="w-20 h-20 bg-[#FF5A00]/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-[#FF5A00]" />
              </div>
              <h2 className="text-2xl font-black mb-3 text-zinc-900 dark:text-white">Your Wishlist is Empty</h2>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-8 leading-relaxed">
                Browse our premium tyre catalogue and save your favourites here for easy comparison and purchase.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-[#FF5A00] hover:bg-[#E04D00] text-white font-bold text-[11px] uppercase tracking-widest px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-[#FF5A00]/25"
              >
                Browse Tyres <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ) : (
            <div className="flex gap-6 items-start">

              {/* ─── Desktop Sidebar ─── */}
              <aside className="hidden lg:block w-64 shrink-0">
                <div className="bg-white dark:bg-[#161B22] border border-zinc-100 dark:border-zinc-800 rounded-2xl p-5 sticky top-24">
                  <FiltersPanel />
                </div>
              </aside>

              {/* ─── Main Grid Area ─── */}
              <div className="flex-1 min-w-0 space-y-5">

                {/* Toolbar */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-white dark:bg-[#161B22] border border-zinc-100 dark:border-zinc-800 rounded-2xl px-4 py-3">
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    {/* Mobile filter trigger */}
                    <button
                      onClick={() => setIsMobileFilterOpen(true)}
                      className="lg:hidden flex items-center gap-1.5 text-xs font-bold text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 px-3 py-2 rounded-xl hover:border-[#FF5A00] hover:text-[#FF5A00] transition-colors cursor-pointer"
                    >
                      <Filter className="w-3.5 h-3.5" />
                      Filters {hasActiveFilters && <span className="bg-[#FF5A00] text-white text-[8px] font-black px-1.5 py-0.5 rounded-full">!</span>}
                    </button>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                      <span className="font-bold text-zinc-800 dark:text-white">{filteredTyres.length}</span> of {savedCount} tyres
                    </span>
                  </div>
                  <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                    {/* Sort */}
                    <div className="flex items-center gap-1.5 text-xs">
                      <span className="text-zinc-400 hidden sm:inline">Sort:</span>
                      <select
                        value={sortBy}
                        onChange={e => setSortBy(e.target.value)}
                        className="bg-transparent text-zinc-800 dark:text-white text-xs font-bold outline-none cursor-pointer"
                      >
                        <option value="Recently Added" className="bg-white dark:bg-[#161B22]">Recently Added</option>
                        <option value="Price: Low to High" className="bg-white dark:bg-[#161B22]">Price: Low to High</option>
                        <option value="Price: High to Low" className="bg-white dark:bg-[#161B22]">Price: High to Low</option>
                        <option value="Rating: High to Low" className="bg-white dark:bg-[#161B22]">Rating: High to Low</option>
                      </select>
                    </div>
                    {/* View toggles */}
                    <div className="flex items-center gap-0.5 bg-zinc-100 dark:bg-zinc-800/60 p-1 rounded-lg">
                      <button
                        onClick={() => setIsGridView(true)}
                        className={`p-1.5 rounded-md transition-all cursor-pointer ${isGridView ? "bg-white dark:bg-zinc-700 text-[#FF5A00] shadow-sm" : "text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"}`}
                      >
                        <LayoutGrid className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => setIsGridView(false)}
                        className={`p-1.5 rounded-md transition-all cursor-pointer ${!isGridView ? "bg-white dark:bg-zinc-700 text-[#FF5A00] shadow-sm" : "text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"}`}
                      >
                        <List className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Empty filter result */}
                {filteredTyres.length === 0 ? (
                  <div className="bg-white dark:bg-[#161B22] border border-dashed border-zinc-200 dark:border-zinc-700 rounded-2xl p-12 text-center">
                    <SlidersHorizontal className="w-8 h-8 text-zinc-400 mx-auto mb-3" />
                    <h3 className="font-bold text-sm mb-1 text-zinc-800 dark:text-white">No Matching Tyres</h3>
                    <p className="text-zinc-500 text-xs">Try adjusting your filters</p>
                  </div>
                ) : isGridView ? (
                  /* ─── GRID VIEW ─── */
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                    {filteredTyres.map(tyre => {
                      const tyreId = `${tyre.brand}-${tyre.name}`;
                      const isCompared = comparedTyres.includes(tyreId);
                      const isSport = getTyreCategory(tyre.name) === "SPORT";
                      return (
                        <div
                          key={tyreId}
                          className="bg-white dark:bg-[#161B22] border border-zinc-100 dark:border-zinc-800 rounded-2xl overflow-hidden flex flex-col group hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-200/50 dark:hover:shadow-black/30 hover:border-[#FF5A00]/30 transition-all duration-300"
                        >
                          {/* Image area */}
                          <div className="relative bg-zinc-50 dark:bg-[#0B0F14] h-44 flex items-center justify-center overflow-hidden">
                            {/* Badges */}
                            <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
                              <span className={`text-white text-[7px] font-black tracking-wider px-2 py-0.5 rounded-full uppercase ${isSport ? "bg-[#FF5A00]" : "bg-emerald-600"}`}>
                                {getTyreCategory(tyre.name)}
                              </span>
                            </div>
                            {/* Discount badge */}
                            <span className="absolute top-3 right-12 z-10 bg-[#FF5A00] text-white text-[8px] font-black px-2 py-0.5 rounded-full">
                              -{tyre.discount}
                            </span>
                            {/* Remove heart */}
                            <button
                              onClick={() => toggleWishlist(tyre)}
                              className="absolute top-3 right-3 z-10 w-7 h-7 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 flex items-center justify-center transition-all cursor-pointer hover:scale-110 shadow-sm"
                            >
                              <Heart className="w-3.5 h-3.5 fill-current" />
                            </button>
                            <img
                              src={tyre.image}
                              alt={tyre.name}
                              className="w-32 h-32 object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,0.12)] group-hover:scale-105 group-hover:-rotate-2 transition-transform duration-500"
                            />
                          </div>

                          {/* Content */}
                          <div className="p-4 flex flex-col flex-1">
                            <span className="text-[8px] font-black uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-0.5">{tyre.brand}</span>
                            <h4 className="font-black text-sm text-zinc-900 dark:text-white mb-1 leading-tight group-hover:text-[#FF5A00] transition-colors">{tyre.name}</h4>

                            {/* Stars */}
                            <div className="flex items-center gap-1.5 mb-3">
                              <div className="flex items-center gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                  <Star key={i} className={`w-2.5 h-2.5 ${i < Math.floor(tyre.rating) ? "fill-[#FF5A00] text-[#FF5A00]" : "text-zinc-200 dark:text-zinc-700"}`} />
                                ))}
                              </div>
                              <span className="text-[9px] text-zinc-400 font-medium">({tyre.reviews})</span>
                            </div>

                            {/* Price */}
                            <div className="flex items-baseline gap-2 mb-3">
                              <span className="text-lg font-black text-zinc-900 dark:text-white">₹{tyre.price}</span>
                              <span className="text-[10px] text-zinc-400 line-through">₹{tyre.oldPrice}</span>
                            </div>

                            {/* Stock / Delivery */}
                            <div className="flex items-center justify-between text-[9px] font-semibold text-zinc-500 dark:text-zinc-400 border-t border-zinc-100 dark:border-zinc-800 pt-2.5 mb-3">
                              <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span>In Stock</span>
                              <span>🚚 {getTyreSeason(tyre.name) === "Winter" ? "2 Days" : "Tomorrow"}</span>
                            </div>

                            {/* Action buttons */}
                            <div className="grid grid-cols-2 gap-2 mb-2.5">
                              <button
                                onClick={() => handleToggleCompare(tyreId)}
                                className={`py-2 text-[9px] font-bold border rounded-xl flex items-center justify-center gap-1 transition-all cursor-pointer ${isCompared ? "bg-[#FF5A00]/10 border-[#FF5A00] text-[#FF5A00]" : "border-zinc-200 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400 hover:border-[#FF5A00]/50 hover:text-[#FF5A00]"}`}
                              >
                                <SlidersHorizontal className="w-2.5 h-2.5" />
                                {isCompared ? "Selected" : "Compare"}
                              </button>
                              <button
                                onClick={() => setQuickViewTyre(tyre)}
                                className="py-2 text-[9px] font-bold border border-zinc-200 dark:border-zinc-700 rounded-xl flex items-center justify-center gap-1 text-zinc-500 dark:text-zinc-400 hover:border-[#FF5A00]/50 hover:text-[#FF5A00] transition-all cursor-pointer"
                              >
                                Quick View
                              </button>
                            </div>

                            <button
                              onClick={() => addToCart(tyre)}
                              className="w-full bg-[#FF5A00] hover:bg-[#E04D00] text-white font-black text-[10px] tracking-widest uppercase py-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-md shadow-[#FF5A00]/20"
                            >
                              <ShoppingCart className="w-3.5 h-3.5" /> Add to Cart
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  /* ─── LIST VIEW ─── */
                  <div className="space-y-3">
                    {filteredTyres.map(tyre => {
                      const tyreId = `${tyre.brand}-${tyre.name}`;
                      const isCompared = comparedTyres.includes(tyreId);
                      return (
                        <div
                          key={tyreId}
                          className="bg-white dark:bg-[#161B22] border border-zinc-100 dark:border-zinc-800 rounded-2xl p-4 flex flex-col sm:flex-row items-center gap-4 hover:border-[#FF5A00]/30 hover:shadow-lg transition-all duration-300"
                        >
                          {/* Image */}
                          <div className="w-24 h-24 bg-zinc-50 dark:bg-[#0B0F14] rounded-xl flex items-center justify-center shrink-0">
                            <img src={tyre.image} alt={tyre.name} className="w-18 h-18 object-contain" />
                          </div>
                          {/* Info */}
                          <div className="flex-1 text-center sm:text-left min-w-0">
                            <div className="flex items-center justify-center sm:justify-start gap-2 mb-1 flex-wrap">
                              <span className="text-[8px] font-black uppercase tracking-widest text-zinc-400">{tyre.brand}</span>
                              <span className="text-[7px] bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 px-2 py-0.5 rounded-full font-bold border border-zinc-200 dark:border-zinc-700">{getTyreSeason(tyre.name)}</span>
                            </div>
                            <h4 className="font-black text-sm text-zinc-900 dark:text-white mb-1">{tyre.name}</h4>
                            <div className="flex items-center justify-center sm:justify-start gap-1 mb-1">
                              {[...Array(5)].map((_, i) => <Star key={i} className={`w-2.5 h-2.5 ${i < Math.floor(tyre.rating) ? "fill-[#FF5A00] text-[#FF5A00]" : "text-zinc-200 dark:text-zinc-700"}`} />)}
                              <span className="text-[9px] text-zinc-400">({tyre.reviews})</span>
                            </div>
                          </div>
                          {/* Price */}
                          <div className="text-center shrink-0">
                            <div className="text-lg font-black text-zinc-900 dark:text-white">₹{tyre.price}</div>
                            <div className="text-[10px] text-zinc-400 line-through">₹{tyre.oldPrice}</div>
                            <span className="text-[8px] text-emerald-500 font-black">-{tyre.discount}</span>
                          </div>
                          {/* Actions */}
                          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto shrink-0">
                            <button
                              onClick={() => handleToggleCompare(tyreId)}
                              className={`px-4 py-2 text-[9px] font-bold border rounded-xl transition-all cursor-pointer ${isCompared ? "bg-[#FF5A00]/10 border-[#FF5A00] text-[#FF5A00]" : "border-zinc-200 dark:border-zinc-700 text-zinc-500 hover:text-[#FF5A00] hover:border-[#FF5A00]/50"}`}
                            >
                              {isCompared ? "✓ Selected" : "Compare"}
                            </button>
                            <button
                              onClick={() => addToCart(tyre)}
                              className="bg-[#FF5A00] hover:bg-[#E04D00] text-white font-black text-[9px] tracking-widest uppercase px-4 py-2 rounded-xl flex items-center gap-1 transition-colors cursor-pointer shadow-md shadow-[#FF5A00]/20 whitespace-nowrap"
                            >
                              <ShoppingCart className="w-3.5 h-3.5" /> Add to Cart
                            </button>
                            <button
                              onClick={() => toggleWishlist(tyre)}
                              className="text-zinc-400 hover:text-red-500 p-2 rounded-xl transition-all cursor-pointer border border-zinc-200 dark:border-zinc-700 hover:border-red-300"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* ─── Bottom Widgets ─── */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">

                  {/* AI Advisor */}
                  <div className="bg-[#0B0F14] dark:bg-[#0B0F14] border border-[#FF5A00]/20 rounded-2xl p-5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-[#FF5A00] text-white text-[8px] font-black tracking-widest px-3 py-1 rounded-bl-xl uppercase">Beta</div>
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="w-4 h-4 text-[#FF5A00] animate-pulse" />
                      <h3 className="text-xs font-black uppercase tracking-wider text-white">AI Tyre Advisor</h3>
                    </div>
                    <p className="text-[10px] text-zinc-400 mb-4 leading-relaxed">Based on your saved tyres, we recommend this top-rated match:</p>
                    <div className="bg-white/5 border border-zinc-800 rounded-xl p-3 flex items-center gap-3">
                      <div className="w-14 h-14 bg-zinc-900 rounded-lg flex items-center justify-center shrink-0">
                        <img src={advisorTyre.image} alt={advisorTyre.name} className="w-10 h-10 object-contain" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[8px] text-zinc-500 font-bold uppercase">{advisorTyre.brand}</div>
                        <div className="text-xs font-black text-white truncate">{advisorTyre.name}</div>
                        <div className="flex items-center gap-1 mt-0.5">
                          {[...Array(5)].map((_, i) => <Star key={i} className="w-2 h-2 fill-[#FF5A00] text-[#FF5A00]" />)}
                        </div>
                        <div className="text-[9px] text-[#FF5A00] font-black uppercase tracking-wider mt-0.5">98% Match</div>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="text-sm font-black text-white">₹{advisorTyre.price}</div>
                        <div className="text-[9px] text-zinc-500 line-through">₹{advisorTyre.oldPrice}</div>
                      </div>
                    </div>
                    <button
                      onClick={() => addToCart(advisorTyre)}
                      className="w-full mt-3 border border-zinc-700 hover:border-[#FF5A00] text-zinc-300 hover:text-[#FF5A00] font-bold text-[9px] tracking-widest uppercase py-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                    >
                      Add Recommendation <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>

                  {/* Compare Panel */}
                  <div className="bg-white dark:bg-[#161B22] border border-zinc-100 dark:border-zinc-800 rounded-2xl p-5 flex flex-col">
                    <h3 className="text-xs font-black uppercase tracking-wider mb-1 text-zinc-900 dark:text-white flex items-center gap-2">
                      <SlidersHorizontal className="w-3.5 h-3.5 text-[#FF5A00]" /> Compare Tyres
                    </h3>
                    <p className="text-[9px] text-zinc-400 mb-4">Select up to 3 tyres to compare</p>
                    <div className="space-y-2.5 flex-1 mb-4">
                      {wishlist.slice(0, 3).map(tyre => {
                        const tyreId = `${tyre.brand}-${tyre.name}`;
                        const isChecked = comparedTyres.includes(tyreId);
                        return (
                          <div
                            key={tyreId}
                            onClick={() => handleToggleCompare(tyreId)}
                            className={`flex items-center gap-3 cursor-pointer p-2.5 rounded-xl transition-all border ${isChecked ? "border-[#FF5A00]/30 bg-[#FF5A00]/5" : "border-zinc-100 dark:border-zinc-800 hover:border-zinc-200 dark:hover:border-zinc-700"}`}
                          >
                            <div className={`w-4 h-4 rounded border-2 flex items-center justify-center shrink-0 transition-all ${isChecked ? "bg-[#FF5A00] border-[#FF5A00]" : "border-zinc-300 dark:border-zinc-700"}`}>
                              {isChecked && <CheckCircle2 className="w-2.5 h-2.5 text-white" />}
                            </div>
                            <img src={tyre.image} alt={tyre.name} className="w-8 h-8 object-contain shrink-0" />
                            <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200 truncate">{tyre.brand} {tyre.name}</span>
                          </div>
                        );
                      })}
                      {wishlist.length === 0 && <p className="text-[10px] text-zinc-400">Save tyres to compare</p>}
                    </div>
                    <button
                      onClick={() => comparedTyres.length > 0 && setIsCompareModalOpen(true)}
                      disabled={comparedTyres.length === 0}
                      className="w-full bg-[#FF5A00] hover:bg-[#E04D00] disabled:bg-zinc-100 dark:disabled:bg-zinc-800 disabled:text-zinc-400 dark:disabled:text-zinc-600 text-white font-black text-[9px] tracking-widest uppercase py-3 rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer disabled:cursor-not-allowed shadow-md shadow-[#FF5A00]/20 disabled:shadow-none"
                    >
                      <SlidersHorizontal className="w-3 h-3" /> Compare Now ({comparedTyres.length})
                    </button>
                  </div>
                </div>

              </div>
            </div>
          )}
        </div>

        {/* ─── Trust Bar ─── */}
        <section className="bg-white dark:bg-[#161B22] border-t border-zinc-100 dark:border-zinc-800 py-6 mt-6">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
              {[
                { icon: <Truck className="w-4 h-4" />, title: "Free Delivery", sub: "On all orders" },
                { icon: <Wrench className="w-4 h-4" />, title: "Installation", sub: "2500+ centres" },
                { icon: <TrendingDown className="w-4 h-4" />, title: "Easy Returns", sub: "7 days policy" },
                { icon: <ShieldCheck className="w-4 h-4" />, title: "Secure Pay", sub: "100% safe" },
                { icon: <Tag className="w-4 h-4" />, title: "Best Price", sub: "Guaranteed" },
              ].map((item, i) => (
                <div key={i} className={`flex flex-col items-center gap-2 ${i === 3 || i === 4 ? "col-span-1" : ""}`}>
                  <div className="w-8 h-8 bg-[#FF5A00]/10 text-[#FF5A00] rounded-xl flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-wider text-zinc-700 dark:text-zinc-300">{item.title}</div>
                    <div className="text-[9px] text-zinc-400 mt-0.5">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* ─── Mobile Filter Drawer ─── */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsMobileFilterOpen(false)} />
          <div className="absolute bottom-0 left-0 right-0 bg-white dark:bg-[#161B22] rounded-t-3xl p-6 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-black text-sm uppercase tracking-wider text-zinc-900 dark:text-white">Filters</h3>
              <button onClick={() => setIsMobileFilterOpen(false)} className="text-zinc-400 hover:text-zinc-700 dark:hover:text-white cursor-pointer p-1">
                <X className="w-5 h-5" />
              </button>
            </div>
            <FiltersPanel />
            <button
              onClick={() => setIsMobileFilterOpen(false)}
              className="w-full mt-6 bg-[#FF5A00] hover:bg-[#E04D00] text-white font-black text-[11px] tracking-widest uppercase py-3.5 rounded-xl transition-colors cursor-pointer"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}

      {/* ─── Compare Modal ─── */}
      {isCompareModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-[#161B22] border border-zinc-200 dark:border-zinc-800 rounded-3xl w-full max-w-4xl max-h-[88vh] overflow-y-auto p-6 md:p-8 relative shadow-2xl">
            <button
              onClick={() => setIsCompareModalOpen(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-900 dark:hover:text-white p-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-xl cursor-pointer transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-lg font-black mb-6 flex items-center gap-2 text-zinc-900 dark:text-white">
              <SlidersHorizontal className="text-[#FF5A00] w-5 h-5" /> Side-by-Side Comparison
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-semibold text-zinc-700 dark:text-zinc-300 border-collapse">
                <thead>
                  <tr className="border-b border-zinc-200 dark:border-zinc-800">
                    <th className="py-3 pr-4 text-zinc-400 font-bold uppercase text-[10px] tracking-wider">Spec</th>
                    {wishlist.filter(t => comparedTyres.includes(`${t.brand}-${t.name}`)).map(tyre => (
                      <th key={`${tyre.brand}-${tyre.name}`} className="py-3 px-4 text-center font-black text-zinc-900 dark:text-white min-w-[140px]">
                        <img src={tyre.image} alt={tyre.name} className="w-12 h-12 mx-auto mb-2 object-contain" />
                        <div className="text-xs">{tyre.brand}</div>
                        <div className="text-[10px] text-zinc-400 font-semibold">{tyre.name}</div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                  {[
                    { label: "Price", render: (t: Tyre) => <span className="text-[#FF5A00] font-black text-sm">₹{t.price}</span> },
                    { label: "Rating", render: (t: Tyre) => <div className="flex items-center justify-center gap-1 text-[#FF5A00]"><Star className="w-3 h-3 fill-current" /><span className="text-zinc-900 dark:text-white">{t.rating} ({t.reviews})</span></div> },
                    { label: "Season", render: (t: Tyre) => <span className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-2.5 py-0.5 rounded-full text-[10px] border border-zinc-200 dark:border-zinc-700">{getTyreSeason(t.name)}</span> },
                    { label: "Profile", render: (t: Tyre) => <span className="text-zinc-500">{getTyreCategory(t.name)}</span> },
                    { label: "Sizes", render: (t: Tyre) => <span className="text-zinc-500 text-[10px]">{t.sizes.join(", ")}</span> },
                  ].map(row => (
                    <tr key={row.label}>
                      <td className="py-3.5 pr-4 text-zinc-400 uppercase text-[10px] font-black tracking-wider">{row.label}</td>
                      {wishlist.filter(t => comparedTyres.includes(`${t.brand}-${t.name}`)).map(tyre => (
                        <td key={`${tyre.brand}-${tyre.name}`} className="py-3.5 px-4 text-center">{row.render(tyre)}</td>
                      ))}
                    </tr>
                  ))}
                  <tr>
                    <td className="py-3.5 pr-4"></td>
                    {wishlist.filter(t => comparedTyres.includes(`${t.brand}-${t.name}`)).map(tyre => (
                      <td key={`${tyre.brand}-${tyre.name}`} className="py-3.5 px-4 text-center">
                        <button
                          onClick={() => { addToCart(tyre); setIsCompareModalOpen(false); }}
                          className="bg-[#FF5A00] hover:bg-[#E04D00] text-white font-black text-[9px] uppercase tracking-widest py-2.5 px-4 rounded-xl cursor-pointer transition-colors"
                        >
                          Add to Cart
                        </button>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ─── Quick View Modal ─── */}
      {quickViewTyre && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-[#161B22] border border-zinc-200 dark:border-zinc-800 rounded-3xl w-full max-w-md p-6 relative shadow-2xl">
            <button
              onClick={() => setQuickViewTyre(null)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-900 dark:hover:text-white p-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-xl cursor-pointer transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="text-center">
              <span className="text-[#FF5A00] font-bold text-[9px] uppercase tracking-widest block mb-1">{quickViewTyre.brand}</span>
              <h3 className="text-xl font-black text-zinc-900 dark:text-white mb-4">{quickViewTyre.name}</h3>
              <div className="w-40 h-40 bg-zinc-50 dark:bg-[#0B0F14] rounded-2xl flex items-center justify-center mx-auto mb-5 border border-zinc-100 dark:border-zinc-800">
                <img src={quickViewTyre.image} alt={quickViewTyre.name} className="w-32 h-32 object-contain" />
              </div>
              <div className="flex items-center justify-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(quickViewTyre.rating) ? "fill-[#FF5A00] text-[#FF5A00]" : "text-zinc-200 dark:text-zinc-700"}`} />)}
                <span className="text-zinc-400 text-xs ml-1">({quickViewTyre.reviews})</span>
              </div>
              <div className="text-2xl font-black text-zinc-900 dark:text-white mb-1">₹{quickViewTyre.price}</div>
              <div className="text-sm text-zinc-400 line-through mb-6">₹{quickViewTyre.oldPrice}</div>
              <div className="space-y-2.5">
                <button
                  onClick={() => { addToCart(quickViewTyre); setQuickViewTyre(null); }}
                  className="w-full bg-[#FF5A00] hover:bg-[#E04D00] text-white font-black text-xs uppercase tracking-widest py-3.5 rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-lg shadow-[#FF5A00]/25"
                >
                  <ShoppingCart className="w-4 h-4" /> Add to Cart
                </button>
                <button
                  onClick={() => { toggleWishlist(quickViewTyre); setQuickViewTyre(null); }}
                  className="w-full bg-transparent hover:bg-red-50 dark:hover:bg-red-950/20 text-red-500 border border-red-200 dark:border-red-900/50 font-bold text-xs uppercase tracking-widest py-3.5 rounded-xl transition-colors cursor-pointer"
                >
                  Remove from Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
