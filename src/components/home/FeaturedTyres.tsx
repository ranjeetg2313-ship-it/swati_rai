"use client";

import React from "react";
import { Star, Heart, ArrowRight, ShoppingCart } from "lucide-react";
import { SearchQuery } from "@/app/page";
import { useStore } from "@/store/useStore";

const tyres = [
  {
    brand: "Bridgestone",
    name: "Potenza S001",
    rating: 4.8,
    reviews: 145,
    price: "9,499",
    oldPrice: "11,500",
    image: "/images/premium_tyre_1781107650559_transparent.png",
    badge: "High Performance",
    discount: "17%",
    tag: "bg-[#FF5A00]",
    sizes: ["205/55 R16", "225/45 R17", "245/40 R18"],
    vehicles: ["Car", "SUV"],
    makes: ["Audi", "BMW", "Maruti Suzuki", "Honda", "Hyundai"]
  },
  {
    brand: "Bridgestone",
    name: "Turanza 6",
    rating: 4.7,
    reviews: 98,
    price: "8,299",
    oldPrice: "9,900",
    image: "/images/PremiumTyre_transparent.png",
    badge: "Premium Comfort",
    discount: "16%",
    tag: "bg-[#0B3B60]",
    sizes: ["205/55 R16", "195/65 R15", "215/65 R16"],
    vehicles: ["Car", "SUV"],
    makes: ["Audi", "BMW", "Maruti Suzuki", "Honda", "Hyundai"]
  },
  {
    brand: "Continental",
    name: "Eco Contact 6",
    rating: 4.6,
    reviews: 82,
    price: "7,199",
    oldPrice: "8,500",
    image: "/images/premium_tyre_1781107650559_transparent.png",
    badge: "Eco Friendly",
    discount: "15%",
    tag: "bg-emerald-600",
    sizes: ["195/65 R15", "185/65 R15", "175/65 R14"],
    vehicles: ["Car"],
    makes: ["Maruti Suzuki", "Tata", "Hyundai", "Honda"]
  },
  {
    brand: "Continental",
    name: "Sport Contact 7",
    rating: 4.9,
    reviews: 167,
    price: "12,999",
    oldPrice: "15,500",
    image: "/images/PremiumTyre_transparent.png",
    badge: "Max Performance",
    discount: "16%",
    tag: "bg-[#FF5A00]",
    sizes: ["225/45 R17", "245/40 R18", "245/45 R18"],
    vehicles: ["Car", "SUV"],
    makes: ["Audi", "BMW", "Ford"]
  },
  {
    brand: "Hankook",
    name: "Kinergy Eco 2",
    rating: 4.5,
    reviews: 74,
    price: "5,899",
    oldPrice: "7,200",
    image: "/images/premium_tyre_1781107650559_transparent.png",
    badge: "Best Value",
    discount: "18%",
    tag: "bg-purple-650",
    sizes: ["185/65 R15", "195/65 R15", "205/55 R16"],
    vehicles: ["Car"],
    makes: ["Maruti Suzuki", "Hyundai", "Honda", "Tata"]
  },
  {
    brand: "Hankook",
    name: "Ventus S1 Evo 3",
    rating: 4.8,
    reviews: 112,
    price: "9,899",
    oldPrice: "12,000",
    image: "/images/PremiumTyre_transparent.png",
    badge: "Sport Performance",
    discount: "17%",
    tag: "bg-[#0B3B60]",
    sizes: ["225/45 R17", "245/40 R18", "225/40 R18"],
    vehicles: ["Car", "SUV"],
    makes: ["Audi", "BMW", "Ford", "Hyundai"]
  },
  {
    brand: "Kumho",
    name: "Ecsta Sport S PS72",
    rating: 4.6,
    reviews: 59,
    price: "8,499",
    oldPrice: "10,500",
    image: "/images/premium_tyre_1781107650559_transparent.png",
    badge: "Ultra Performance",
    discount: "19%",
    tag: "bg-orange-600",
    sizes: ["225/45 R17", "245/40 R18", "205/55 R16"],
    vehicles: ["Car"],
    makes: ["Audi", "BMW", "Hyundai", "Honda"]
  },
  {
    brand: "Kumho",
    name: "Ecowing ES31",
    rating: 4.5,
    reviews: 63,
    price: "6,099",
    oldPrice: "7,800",
    image: "/images/PremiumTyre_transparent.png",
    badge: "Fuel Saver",
    discount: "21%",
    tag: "bg-teal-650",
    sizes: ["175/65 R14", "185/65 R15", "195/65 R15"],
    vehicles: ["Car"],
    makes: ["Maruti Suzuki", "Tata", "Hyundai", "Honda"]
  },
  {
    brand: "Michelin",
    name: "CrossClimate 3",
    rating: 4.9,
    reviews: 215,
    price: "11,299",
    oldPrice: "13,900",
    image: "/images/premium_tyre_1781107650559_transparent.png",
    badge: "All-Season King",
    discount: "18%",
    tag: "bg-emerald-650",
    sizes: ["205/55 R16", "225/45 R17", "215/65 R16"],
    vehicles: ["Car", "SUV"],
    makes: ["Audi", "BMW", "Maruti Suzuki", "Tata", "Mahindra", "Hyundai"]
  },
  {
    brand: "Michelin",
    name: "Pilot Sport 5",
    rating: 4.9,
    reviews: 184,
    price: "13,499",
    oldPrice: "16,500",
    image: "/images/PremiumTyre_transparent.png",
    badge: "Track Ready",
    discount: "18%",
    tag: "bg-[#FF5A00]",
    sizes: ["225/45 R17", "245/40 R18", "245/45 R18"],
    vehicles: ["Car", "SUV"],
    makes: ["Audi", "BMW", "Ford"]
  },
  {
    brand: "Uniroyal",
    name: "RainExpert 3",
    rating: 4.6,
    reviews: 91,
    price: "6,699",
    oldPrice: "8,200",
    image: "/images/premium_tyre_1781107650559_transparent.png",
    badge: "Wet Weather Pro",
    discount: "18%",
    tag: "bg-blue-600",
    sizes: ["195/65 R15", "205/55 R16", "185/65 R15"],
    vehicles: ["Car", "SUV"],
    makes: ["Maruti Suzuki", "Tata", "Hyundai", "Honda"]
  },
  {
    brand: "Uniroyal",
    name: "RainSport 5",
    rating: 4.7,
    reviews: 105,
    price: "8,999",
    oldPrice: "10,900",
    image: "/images/PremiumTyre_transparent.png",
    badge: "Rain Master",
    discount: "17%",
    tag: "bg-[#0B3B60]",
    sizes: ["205/55 R16", "225/45 R17", "245/40 R18"],
    vehicles: ["Car", "SUV"],
    makes: ["Audi", "BMW", "Tata", "Ford"]
  }
];

export function FeaturedTyres({ 
  searchQuery, 
  onClearSearch 
}: { 
  searchQuery: SearchQuery | null; 
  onClearSearch: () => void; 
}) {
  const addToCart = useStore((state) => state.addToCart);
  const toggleWishlist = useStore((state) => state.toggleWishlist);
  const wishlist = useStore((state) => state.wishlist);

  const isWishlisted = (tyre: any) => {
    return wishlist.some(
      (item) =>
        item.brand.toLowerCase() === tyre.brand.toLowerCase() &&
        item.name.toLowerCase() === tyre.name.toLowerCase()
    );
  };

  const getSearchLabel = () => {
    if (!searchQuery) return "";
    if (searchQuery.type === "vehicle") {
      return `${searchQuery.make} ${searchQuery.model} (${searchQuery.year})`;
    }
    if (searchQuery.type === "size") {
      return `${searchQuery.width}/${searchQuery.aspect} ${searchQuery.rim}`;
    }
    if (searchQuery.type === "model") {
      return `${searchQuery.tyreBrand} ${searchQuery.tyreModel}`;
    }
    if (searchQuery.type === "reg") {
      const firstChar = searchQuery.regNumber ? searchQuery.regNumber.trim().charAt(0).toUpperCase() : "";
      if (["A", "B", "C", "D", "E"].includes(firstChar)) return `Reg: ${searchQuery.regNumber} (Audi A4)`;
      if (["M", "N", "O", "P", "Q"].includes(firstChar)) return `Reg: ${searchQuery.regNumber} (Mahindra Thar)`;
      if (["T", "U", "V", "W", "X", "Y", "Z"].includes(firstChar)) return `Reg: ${searchQuery.regNumber} (Tata Nexon)`;
      return `Reg: ${searchQuery.regNumber} (Maruti Swift)`;
    }
    if (searchQuery.type === "popular") {
      return searchQuery.queryText || "Selected Size";
    }
    return "Search";
  };

  const getFilteredTyres = () => {
    if (!searchQuery) return tyres.slice(0, 4); // default display first 4 tyres

    let filtered = tyres;

    if (searchQuery.type === "vehicle") {
      const { vehicleType, make } = searchQuery;
      if (vehicleType) {
        filtered = filtered.filter(t => t.vehicles.includes(vehicleType));
      }
      if (make) {
        filtered = filtered.filter(t => t.makes.includes(make));
      }
    } 
    
    else if (searchQuery.type === "size" || searchQuery.type === "popular") {
      const { width, aspect, rim } = searchQuery;
      const targetSize = `${width}/${aspect} ${rim}`;
      filtered = filtered.filter(t => {
        return t.sizes.some(s => {
          const cleanS = s.replace(/\s+/g, "").toLowerCase();
          const cleanTarget = targetSize.replace(/\s+/g, "").toLowerCase();
          return cleanS === cleanTarget || cleanS.includes(cleanTarget);
        });
      });
    } 

    else if (searchQuery.type === "model") {
      const { tyreBrand, tyreModel } = searchQuery;
      if (tyreBrand) {
        filtered = filtered.filter(t => t.brand.toLowerCase() === tyreBrand.toLowerCase());
      }
      if (tyreModel) {
        filtered = filtered.filter(t => t.name.toLowerCase() === tyreModel.toLowerCase());
      }
    }
    
    else if (searchQuery.type === "reg") {
      const { regNumber } = searchQuery;
      const firstChar = regNumber ? regNumber.trim().charAt(0).toUpperCase() : "";
      
      let resolvedSize = "205/55 R16";
      let resolvedMake = "Audi";

      if (["A", "B", "C", "D", "E"].includes(firstChar)) {
        resolvedSize = "205/55 R16";
        resolvedMake = "Audi";
      } else if (["M", "N", "O", "P", "Q"].includes(firstChar)) {
        resolvedSize = "225/65 R17";
        resolvedMake = "Mahindra";
      } else if (["T", "U", "V", "W", "X", "Y", "Z"].includes(firstChar)) {
        resolvedSize = "215/65 R16";
        resolvedMake = "Tata";
      } else {
        resolvedSize = "195/65 R15";
        resolvedMake = "Maruti Suzuki";
      }

      filtered = tyres.filter(t => {
        const matchesMake = t.makes.includes(resolvedMake);
        const matchesSize = t.sizes.some(s => s.replace(/\s+/g, "").toLowerCase() === resolvedSize.replace(/\s+/g, "").toLowerCase());
        return matchesMake || matchesSize;
      });
    }

    return filtered;
  };

  const filteredTyres = getFilteredTyres();

  return (
    <section id="featured-tyres" className="py-14 bg-[#F8F9FA] dark:bg-[#0B0F14] border-t border-zinc-150 dark:border-zinc-800/50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-6">

          {/* Promo Banner Left */}
          <div className="w-full lg:w-[28%] bg-gradient-to-br from-[#0B0F14] to-[#141922] rounded-2xl overflow-hidden relative flex flex-col justify-between shadow-xl border border-zinc-800/40 min-h-[340px]">
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FF5A00]/30 via-[#0B3B60]/10 to-transparent pointer-events-none" />

            {/* Real tyre image background */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
              <img
                src="/images/PremiumTyre_transparent.png"
                alt="Tyre"
                className="w-full h-full object-cover opacity-15"
              />
            </div>

            <div className="relative z-10 p-8">
              <p className="text-[#FF5A00] font-bold text-[10px] tracking-widest uppercase mb-4">Limited Time Offer</p>
              <h3 className="text-white text-2xl font-bold mb-0.5">Up to</h3>
              <h2 className="text-[#FF5A00] text-7xl font-black leading-none tracking-tight mb-2">30%</h2>
              <h2 className="text-white text-4xl font-black leading-none tracking-tight mb-4">OFF</h2>
              <p className="text-zinc-300 mb-6 text-xs font-medium">On Selected Premium Tyres</p>
              <button className="bg-[#FF5A00] text-white font-bold text-[10px] uppercase tracking-widest px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-[#E04D00] transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-[#FF5A00]/30 w-max cursor-pointer">
                SHOP NOW <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Product Grid Right */}
          <div className="w-full lg:w-[72%]">
            <div className="flex justify-between items-end mb-5">
              <div>
                <p className="text-[#FF5A00] font-bold text-[10px] tracking-widest uppercase mb-1">
                  {searchQuery ? "Search Results" : "Featured Tyres"}
                </p>
                <h2 className="text-2xl font-black text-[#0B0F14] dark:text-white leading-tight">
                  {searchQuery ? `Matching Tyres for ${getSearchLabel()}` : "Top Picks for You"}
                </h2>
              </div>
              {searchQuery ? (
                <button 
                  onClick={onClearSearch}
                  className="text-[10px] font-bold uppercase tracking-widest bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900/60 dark:hover:bg-zinc-800 border border-zinc-250 dark:border-zinc-800 rounded-lg px-4 py-2.5 flex items-center gap-1.5 text-zinc-600 dark:text-zinc-300 transition-colors cursor-pointer"
                >
                  CLEAR SEARCH
                </button>
              ) : (
                <button className="text-[10px] font-bold uppercase tracking-widest border border-zinc-200 dark:border-zinc-800 rounded-lg px-4 py-2.5 flex items-center gap-1.5 hover:border-[#FF5A00] hover:text-[#FF5A00] transition-colors bg-white dark:bg-zinc-900/60 text-[#0B0F14] dark:text-white cursor-pointer">
                  VIEW ALL <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {filteredTyres.length === 0 ? (
              <div className="w-full py-16 flex flex-col items-center justify-center text-center bg-zinc-50 dark:bg-zinc-900/10 border border-dashed border-zinc-200 dark:border-zinc-800 rounded-2xl p-8">
                <div className="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-zinc-850 flex items-center justify-center mb-4 text-[#FF5A00]">
                  <Star className="w-6 h-6 text-zinc-400" />
                </div>
                <h3 className="text-base font-black text-[#0B0F14] dark:text-white mb-2">No Matching Tyres Found</h3>
                <p className="text-zinc-550 dark:text-zinc-450 text-xs max-w-sm mb-6 font-medium">
                  We couldn't find any exact tyre matches for your search criteria. Select a different size or clear the filter.
                </p>
                <button 
                  onClick={onClearSearch}
                  className="bg-[#FF5A00] text-white font-bold text-[10px] uppercase tracking-widest px-6 py-3 rounded-lg hover:bg-[#E04D00] transition-colors shadow-lg shadow-[#FF5A00]/25 cursor-pointer"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {filteredTyres.map((tyre, i) => (
                  <div key={i} className="bg-white dark:bg-zinc-900/40 border border-zinc-200/60 dark:border-zinc-800/80 rounded-2xl overflow-hidden flex flex-col relative group hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#FF5A00]/8 hover:border-[#FF5A00]/30 transition-all duration-300">
                    
                    {/* Image area — rounded grey bg so it looks very clean */}
                    <div className="relative h-52 bg-zinc-50 dark:bg-zinc-900/60 flex items-center justify-center overflow-hidden">
                      {/* Badge */}
                      <div className={`absolute top-3 left-3 z-10 ${tyre.tag} text-white text-[8px] font-black tracking-wider px-2.5 py-1 rounded-full uppercase shadow-md`}>
                        {tyre.badge}
                      </div>
                      {/* Discount */}
                      <div className="absolute top-3 right-3 z-10 bg-black/70 text-white text-[9px] font-black px-2 py-0.5 rounded-full">
                        -{tyre.discount}
                      </div>
                      {/* Wishlist */}
                      <button 
                        onClick={() => toggleWishlist(tyre)}
                        className="absolute bottom-3 right-3 w-7 h-7 rounded-full bg-white dark:bg-zinc-800 shadow-md flex items-center justify-center text-zinc-405 hover:text-red-500 transition-colors z-10 border border-zinc-100 dark:border-zinc-700 cursor-pointer"
                      >
                        <Heart 
                          className={`w-3.5 h-3.5 transition-colors ${
                            isWishlisted(tyre) ? "fill-red-500 text-red-500" : "text-zinc-400 hover:text-red-500"
                          }`} 
                        />
                      </button>

                      {/* Tyre Image — real transparency */}
                      <img
                        src={tyre.image}
                        alt={tyre.name}
                        className="w-44 h-44 object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_10px_25px_rgba(255,90,0,0.08)] group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-4 flex flex-col flex-1">
                      <h4 className="font-black text-[9px] uppercase text-zinc-400 dark:text-zinc-500 tracking-widest mb-0.5">{tyre.brand}</h4>
                      <h3 className="font-black text-[#0B0F14] dark:text-white text-sm mb-2 leading-tight">{tyre.name}</h3>

                      {/* Stars */}
                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(5)].map((_, idx) => (
                          <Star key={idx} className={`w-3 h-3 ${idx < Math.floor(tyre.rating) ? "fill-[#FFB800] text-[#FFB800]" : "fill-zinc-200 text-zinc-200"}`} />
                        ))}
                        <span className="text-[10px] font-bold text-zinc-500 ml-1">({tyre.reviews})</span>
                      </div>

                      <div className="mt-auto pt-3 border-t border-zinc-100 dark:border-zinc-800/50">
                        <div className="flex items-baseline gap-2 mb-3">
                          <span className="text-xl font-black text-[#0B0F14] dark:text-white">₹{tyre.price}</span>
                          <span className="text-[10px] text-zinc-400 line-through">₹{tyre.oldPrice}</span>
                        </div>
                        <button 
                          onClick={() => addToCart(tyre)}
                          className="w-full bg-[#FF5A00] text-white font-bold text-[9px] uppercase tracking-widest py-2.5 rounded-lg flex items-center justify-center gap-1.5 hover:bg-[#E04D00] transition-colors shadow-sm hover:shadow-md hover:shadow-[#FF5A00]/20 duration-200 cursor-pointer"
                        >
                          <ShoppingCart className="w-3 h-3" /> ADD TO CART
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
