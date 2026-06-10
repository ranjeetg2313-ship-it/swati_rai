"use client";

import React, { useState } from "react";
import { 
  ChevronDown, 
  ArrowRight, 
  CheckCircle2, 
  Truck, 
  Tag, 
  Calendar 
} from "lucide-react";

const VEHICLE_TYPES = ["Car", "SUV", "Truck", "Motorcycle"];
const MAKES_MODELS: Record<string, string[]> = {
  "Audi": ["A3", "A4", "A6", "Q3", "Q5", "Q7"],
  "BMW": ["3 Series", "5 Series", "X1", "X3", "X5"],
  "Maruti Suzuki": ["Swift", "Baleno", "Brezza", "Dzire", "Alto"],
  "Tata": ["Nexon", "Harrier", "Safari", "Punch", "Altroz"],
  "Mahindra": ["Thar", "XUV700", "Scorpio", "Bolero"],
  "Ford": ["Endeavour", "EcoSport", "Mustang", "Figo"],
  "Hyundai": ["Creta", "i20", "Verna", "Venue", "Grand i10"],
  "Honda": ["City", "Civic", "Amaze", "Jazz", "WR-V"]
};
const YEARS = ["2026", "2025", "2024", "2023", "2022", "2021", "2020", "2019", "2018"];

const WIDTHS = ["145", "165", "175", "185", "195", "205", "215", "225", "235", "245"];
const ASPECTS = ["40", "45", "50", "55", "60", "65", "70", "75", "80"];
const RIMS = ["R12", "R13", "R14", "R15", "R16", "R17", "R18", "R19", "R20", "R21"];
const SPEED_LOADS = ["82V", "88H", "91V", "91W", "94V", "95W", "98Y", "101Y"];

const TYRE_BRANDS_MODELS: Record<string, string[]> = {
  "Bridgestone": ["Potenza S001", "Turanza 6"],
  "Continental": ["Eco Contact 6", "Sport Contact 7"],
  "Hankook": ["Kinergy Eco 2", "Ventus S1 Evo 3"],
  "Kumho": ["Ecsta Sport S PS72", "Ecowing ES31"],
  "Michelin": ["CrossClimate 3", "Pilot Sport 5"],
  "Uniroyal": ["RainExpert 3", "RainSport 5"]
};

export function Hero({ onSearch }: { onSearch: (query: any) => void }) {
  const [activeTab, setActiveTab] = useState<"vehicle" | "size" | "model" | "reg">("vehicle");

  // Vehicle states
  const [vehicleType, setVehicleType] = useState("Car");
  const [make, setMake] = useState("Audi");
  const [model, setModel] = useState("A4");
  const [year, setYear] = useState("2020");

  const [isVehicleOpen, setIsVehicleOpen] = useState(false);
  const [isMakeOpen, setIsMakeOpen] = useState(false);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [isYearOpen, setIsYearOpen] = useState(false);

  // Size states
  const [width, setWidth] = useState("205");
  const [aspect, setAspect] = useState("55");
  const [rim, setRim] = useState("R16");
  const [speedLoad, setSpeedLoad] = useState("91V");

  const [isWidthOpen, setIsWidthOpen] = useState(false);
  const [isAspectOpen, setIsAspectOpen] = useState(false);
  const [isRimOpen, setIsRimOpen] = useState(false);
  const [isSpeedLoadOpen, setIsSpeedLoadOpen] = useState(false);

  // Tyre brand/model states
  const [tyreBrand, setTyreBrand] = useState("Michelin");
  const [tyreModel, setTyreModel] = useState("Pilot Sport 5");

  const [isTyreBrandOpen, setIsTyreBrandOpen] = useState(false);
  const [isTyreModelOpen, setIsTyreModelOpen] = useState(false);

  // Reg state
  const [regNumber, setRegNumber] = useState("");

  const closeAllDropdowns = () => {
    setIsVehicleOpen(false);
    setIsMakeOpen(false);
    setIsModelOpen(false);
    setIsYearOpen(false);
    setIsWidthOpen(false);
    setIsAspectOpen(false);
    setIsRimOpen(false);
    setIsSpeedLoadOpen(false);
    setIsTyreBrandOpen(false);
    setIsTyreModelOpen(false);
  };

  const selectVehicleType = (val: string) => {
    setVehicleType(val);
    setIsVehicleOpen(false);
  };

  const selectMake = (val: string) => {
    setMake(val);
    const models = MAKES_MODELS[val] || [];
    if (models.length > 0) {
      setModel(models[0]);
    }
    setIsMakeOpen(false);
  };

  const selectModel = (val: string) => {
    setModel(val);
    setIsModelOpen(false);
  };

  const selectYear = (val: string) => {
    setYear(val);
    setIsYearOpen(false);
  };

  const selectWidth = (val: string) => {
    setWidth(val);
    setIsWidthOpen(false);
  };

  const selectAspect = (val: string) => {
    setAspect(val);
    setIsAspectOpen(false);
  };

  const selectRim = (val: string) => {
    setRim(val);
    setIsRimOpen(false);
  };

  const selectSpeedLoad = (val: string) => {
    setSpeedLoad(val);
    setIsSpeedLoadOpen(false);
  };

  const selectTyreBrand = (val: string) => {
    setTyreBrand(val);
    const models = TYRE_BRANDS_MODELS[val] || [];
    if (models.length > 0) {
      setTyreModel(models[0]);
    }
    setIsTyreBrandOpen(false);
  };

  const selectTyreModel = (val: string) => {
    setTyreModel(val);
    setIsTyreModelOpen(false);
  };

  const handleSearch = () => {
    let query: any = {};
    if (activeTab === "vehicle") {
      query = {
        type: "vehicle",
        vehicleType,
        make,
        model,
        year
      };
    } else if (activeTab === "size") {
      query = {
        type: "size",
        width,
        aspect,
        rim,
        speedLoad
      };
    } else if (activeTab === "model") {
      query = {
        type: "model",
        tyreBrand,
        tyreModel
      };
    } else if (activeTab === "reg") {
      if (!regNumber.trim()) return;
      query = {
        type: "reg",
        regNumber: regNumber.toUpperCase()
      };
    }
    onSearch(query);
    closeAllDropdowns();

    const target = document.getElementById("featured-tyres");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlePopularClick = (sizeString: string) => {
    const parts = sizeString.split(/[\/\s]+/);
    if (parts.length >= 3) {
      const w = parts[0];
      const a = parts[1];
      const r = parts[2];
      const query = {
        type: "popular",
        width: w,
        aspect: a,
        rim: r,
        queryText: sizeString
      };
      onSearch(query);
      const target = document.getElementById("featured-tyres");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="relative font-sans overflow-hidden bg-white dark:bg-[#0B0F14]">
      {/* Main Hero Section */}
      <section className="relative min-h-[550px] lg:min-h-[650px] flex items-center overflow-hidden">
        
        {/* Right Side Background Image */}
        <div
          className="absolute top-0 right-0 w-full lg:w-[50%] h-full bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/images/mountain_road_1781107638083.png')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white dark:from-[#0B0F14] via-white/50 dark:via-[#0B0F14]/50 lg:via-white/20 to-transparent"></div>
        </div>

        {/* Diagonal Skewed Shape */}
        <div 
          className="absolute top-0 right-[25%] lg:right-[32%] w-[40%] h-full bg-zinc-100/10 dark:bg-[#0B3B60]/20 backdrop-blur-sm z-10 hidden md:block border-l border-white/10"
          style={{ transform: "skewX(-20deg)", transformOrigin: "bottom" }}
        ></div>

        {/* Floating circular offer badge */}
        <div className="absolute top-[22%] right-[32%] lg:right-[38%] z-30 hidden lg:flex w-[100px] h-[100px] bg-white rounded-full flex-col items-center justify-center shadow-2xl border border-zinc-150 transform hover:scale-110 transition-transform duration-300">
          <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Up To</span>
          <span className="text-xl font-black text-[#FF5A00] leading-none">30%</span>
          <span className="text-[11px] text-[#FF5A00] font-black uppercase">Off</span>
        </div>

        {/* Hero Tyre Image */}
        <div className="absolute top-[12%] right-[8%] lg:right-[18%] z-20 hidden md:block">
          <img
            src="/images/premium_tyre_1781107650559_transparent.png"
            alt="Premium Tyre"
            className="w-[340px] lg:w-[480px] object-contain filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
            style={{ animation: 'float-slow 6s ease-in-out infinite' }}
          />
        </div>

        {/* Content Container */}
        <div className="container mx-auto px-4 lg:px-12 relative z-30 pt-12 pb-20 lg:pt-16 lg:pb-24">
          <div className="max-w-[650px]">
            <p className="text-[#FF5A00] font-bold tracking-widest text-[11px] mb-4 uppercase">
              Premium Performance
            </p>
            
            <h1 className="text-5xl md:text-[72px] font-black text-[#0B0F14] dark:text-white leading-[1.05] mb-5 tracking-tight">
              Drive with <br />
              <span className="text-[#FF5A00]">Confidence</span>
            </h1>

            <p className="text-zinc-600 dark:text-zinc-450 text-sm md:text-base max-w-[460px] mb-10 font-medium leading-relaxed">
              High-quality tyres for ultimate safety, comfort & performance.
            </p>

            {/* Features Row */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
              {/* Trustpilot */}
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <div key={star} className="w-4 h-4 bg-[#FF5A00] flex items-center justify-center rounded-xs">
                      <svg viewBox="0 0 24 24" fill="white" className="w-2.5 h-2.5"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col text-[11px] leading-none">
                  <span className="font-bold text-[#0B0F14] dark:text-white">4.8 Excellent</span>
                </div>
              </div>

              {/* Lowest Price */}
              <div className="flex items-center gap-2 text-[#0B0F14] dark:text-white">
                <Tag className="w-4 h-4 text-[#FF5A00]" />
                <span className="text-[11px] font-bold">Lowest Price Guarantee</span>
              </div>

              {/* Same Day */}
              <div className="flex items-center gap-2 text-[#0B0F14] dark:text-white">
                <Calendar className="w-4 h-4 text-[#FF5A00]" />
                <span className="text-[11px] font-bold">Same Day Fitting</span>
              </div>

              {/* Free Delivery */}
              <div className="flex items-center gap-2 text-[#0B0F14] dark:text-white">
                <Truck className="w-4 h-4 text-[#FF5A00]" />
                <span className="text-[11px] font-bold">Free Delivery</span>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Floating Search Widget */}
      <div className="px-4 max-w-7xl mx-auto relative z-40 -mt-[40px] pb-12">
        <div className="bg-[#0B0F14] rounded-3xl p-6 lg:p-8 w-full shadow-2xl border border-zinc-800/40">
          <p className="text-zinc-500 font-bold text-[10px] tracking-widest uppercase mb-4">Find The Perfect Tyres</p>
          
          {/* Tabs header */}
          <div className="flex gap-6 border-b border-zinc-800 pb-4 mb-6">
            <button 
              onClick={() => { setActiveTab("vehicle"); closeAllDropdowns(); }}
              className={`text-xs font-bold transition-all relative pb-4 ${
                activeTab === "vehicle" ? "text-white" : "text-zinc-400 hover:text-white"
              }`}
            >
              Search by Vehicle
              {activeTab === "vehicle" && (
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FF5A00]" />
              )}
            </button>
            <button 
              onClick={() => { setActiveTab("size"); closeAllDropdowns(); }}
              className={`text-xs font-bold transition-all relative pb-4 ${
                activeTab === "size" ? "text-white" : "text-zinc-400 hover:text-white"
              }`}
            >
              Search by Tyre Size
              {activeTab === "size" && (
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FF5A00]" />
              )}
            </button>
            <button 
              onClick={() => { setActiveTab("model"); closeAllDropdowns(); }}
              className={`text-xs font-bold transition-all relative pb-4 ${
                activeTab === "model" ? "text-white" : "text-zinc-400 hover:text-white"
              }`}
            >
              Search by Tyre Model
              {activeTab === "model" && (
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FF5A00]" />
              )}
            </button>
            <button 
              onClick={() => { setActiveTab("reg"); closeAllDropdowns(); }}
              className={`text-xs font-bold transition-all relative pb-4 ${
                activeTab === "reg" ? "text-white" : "text-zinc-400 hover:text-white"
              }`}
            >
              Search by Reg Number
              {activeTab === "reg" && (
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FF5A00]" />
              )}
            </button>
          </div>
          
          {/* Inputs Row */}
          <div className="flex flex-col lg:flex-row gap-4 items-end">
            
            {/* Inputs based on Active Tab */}
            {activeTab === "vehicle" && (
              <>
                {/* Vehicle Type */}
                <div className="relative flex-1 w-full">
                  <div 
                    onClick={() => {
                      const state = !isVehicleOpen;
                      closeAllDropdowns();
                      setIsVehicleOpen(state);
                    }}
                    className="w-full bg-[#161B22] rounded-xl flex items-center px-4 py-3 cursor-pointer border border-zinc-800 hover:border-zinc-700 transition-colors select-none"
                  >
                    <div className="flex-1">
                      <span className="text-[9px] text-zinc-500 block font-bold mb-0.5 uppercase tracking-wider">Select Vehicle Type</span>
                      <span className="font-bold text-white text-xs">{vehicleType}</span>
                    </div>
                    <ChevronDown className={`w-4 h-4 text-zinc-400 transition-transform ${isVehicleOpen ? 'rotate-180' : ''}`} />
                  </div>
                  {isVehicleOpen && (
                    <div className="absolute top-[105%] left-0 w-full bg-[#161B22] border border-zinc-800 rounded-xl shadow-2xl z-50 max-h-60 overflow-y-auto py-2">
                      {VEHICLE_TYPES.map((type) => (
                        <div 
                          key={type}
                          onClick={() => selectVehicleType(type)}
                          className="px-4 py-2 text-xs text-zinc-300 hover:text-white hover:bg-zinc-850 font-bold cursor-pointer transition-colors"
                        >
                          {type}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Make */}
                <div className="relative flex-1 w-full">
                  <div 
                    onClick={() => {
                      const state = !isMakeOpen;
                      closeAllDropdowns();
                      setIsMakeOpen(state);
                    }}
                    className="w-full bg-[#161B22] rounded-xl flex items-center px-4 py-3 cursor-pointer border border-zinc-800 hover:border-zinc-700 transition-colors select-none"
                  >
                    <div className="flex-1">
                      <span className="text-[9px] text-zinc-500 block font-bold mb-0.5 uppercase tracking-wider">Select Make</span>
                      <span className="font-bold text-white text-xs">{make}</span>
                    </div>
                    <ChevronDown className={`w-4 h-4 text-zinc-400 transition-transform ${isMakeOpen ? 'rotate-180' : ''}`} />
                  </div>
                  {isMakeOpen && (
                    <div className="absolute top-[105%] left-0 w-full bg-[#161B22] border border-zinc-800 rounded-xl shadow-2xl z-50 max-h-60 overflow-y-auto py-2">
                      {Object.keys(MAKES_MODELS).map((m) => (
                        <div 
                          key={m}
                          onClick={() => selectMake(m)}
                          className="px-4 py-2 text-xs text-zinc-300 hover:text-white hover:bg-zinc-850 font-bold cursor-pointer transition-colors"
                        >
                          {m}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Model */}
                <div className="relative flex-1 w-full">
                  <div 
                    onClick={() => {
                      const state = !isModelOpen;
                      closeAllDropdowns();
                      setIsModelOpen(state);
                    }}
                    className="w-full bg-[#161B22] rounded-xl flex items-center px-4 py-3 cursor-pointer border border-zinc-800 hover:border-zinc-700 transition-colors select-none"
                  >
                    <div className="flex-1">
                      <span className="text-[9px] text-zinc-500 block font-bold mb-0.5 uppercase tracking-wider">Select Model</span>
                      <span className="font-bold text-white text-xs">{model}</span>
                    </div>
                    <ChevronDown className={`w-4 h-4 text-zinc-400 transition-transform ${isModelOpen ? 'rotate-180' : ''}`} />
                  </div>
                  {isModelOpen && (
                    <div className="absolute top-[105%] left-0 w-full bg-[#161B22] border border-zinc-800 rounded-xl shadow-2xl z-50 max-h-60 overflow-y-auto py-2">
                      {(MAKES_MODELS[make] || ["Standard"]).map((mod) => (
                        <div 
                          key={mod}
                          onClick={() => selectModel(mod)}
                          className="px-4 py-2 text-xs text-zinc-300 hover:text-white hover:bg-zinc-850 font-bold cursor-pointer transition-colors"
                        >
                          {mod}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Year */}
                <div className="relative flex-1 w-full">
                  <div 
                    onClick={() => {
                      const state = !isYearOpen;
                      closeAllDropdowns();
                      setIsYearOpen(state);
                    }}
                    className="w-full bg-[#161B22] rounded-xl flex items-center px-4 py-3 cursor-pointer border border-zinc-800 hover:border-zinc-700 transition-colors select-none"
                  >
                    <div className="flex-1">
                      <span className="text-[9px] text-zinc-500 block font-bold mb-0.5 uppercase tracking-wider">Select Year</span>
                      <span className="font-bold text-white text-xs">{year}</span>
                    </div>
                    <ChevronDown className={`w-4 h-4 text-zinc-400 transition-transform ${isYearOpen ? 'rotate-180' : ''}`} />
                  </div>
                  {isYearOpen && (
                    <div className="absolute top-[105%] left-0 w-full bg-[#161B22] border border-zinc-800 rounded-xl shadow-2xl z-50 max-h-60 overflow-y-auto py-2">
                      {YEARS.map((y) => (
                        <div 
                          key={y}
                          onClick={() => selectYear(y)}
                          className="px-4 py-2 text-xs text-zinc-300 hover:text-white hover:bg-zinc-855 font-bold cursor-pointer transition-colors"
                        >
                          {y}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </>
            )}

            {activeTab === "size" && (
              <>
                {/* Width */}
                <div className="relative flex-1 w-full">
                  <div 
                    onClick={() => {
                      const state = !isWidthOpen;
                      closeAllDropdowns();
                      setIsWidthOpen(state);
                    }}
                    className="w-full bg-[#161B22] rounded-xl flex items-center px-4 py-3 cursor-pointer border border-zinc-800 hover:border-zinc-700 transition-colors select-none"
                  >
                    <div className="flex-1">
                      <span className="text-[9px] text-zinc-500 block font-bold mb-0.5 uppercase tracking-wider">Width</span>
                      <span className="font-bold text-white text-xs">{width}</span>
                    </div>
                    <ChevronDown className={`w-4 h-4 text-zinc-400 transition-transform ${isWidthOpen ? 'rotate-180' : ''}`} />
                  </div>
                  {isWidthOpen && (
                    <div className="absolute top-[105%] left-0 w-full bg-[#161B22] border border-zinc-800 rounded-xl shadow-2xl z-50 max-h-60 overflow-y-auto py-2">
                      {WIDTHS.map((w) => (
                        <div 
                          key={w}
                          onClick={() => selectWidth(w)}
                          className="px-4 py-2 text-xs text-zinc-300 hover:text-white hover:bg-zinc-850 font-bold cursor-pointer transition-colors"
                        >
                          {w}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Aspect Ratio */}
                <div className="relative flex-1 w-full">
                  <div 
                    onClick={() => {
                      const state = !isAspectOpen;
                      closeAllDropdowns();
                      setIsAspectOpen(state);
                    }}
                    className="w-full bg-[#161B22] rounded-xl flex items-center px-4 py-3 cursor-pointer border border-zinc-800 hover:border-zinc-700 transition-colors select-none"
                  >
                    <div className="flex-1">
                      <span className="text-[9px] text-zinc-500 block font-bold mb-0.5 uppercase tracking-wider">Aspect Ratio</span>
                      <span className="font-bold text-white text-xs">{aspect}</span>
                    </div>
                    <ChevronDown className={`w-4 h-4 text-zinc-400 transition-transform ${isAspectOpen ? 'rotate-180' : ''}`} />
                  </div>
                  {isAspectOpen && (
                    <div className="absolute top-[105%] left-0 w-full bg-[#161B22] border border-zinc-800 rounded-xl shadow-2xl z-50 max-h-60 overflow-y-auto py-2">
                      {ASPECTS.map((a) => (
                        <div 
                          key={a}
                          onClick={() => selectAspect(a)}
                          className="px-4 py-2 text-xs text-zinc-300 hover:text-white hover:bg-zinc-850 font-bold cursor-pointer transition-colors"
                        >
                          {a}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Rim Size */}
                <div className="relative flex-1 w-full">
                  <div 
                    onClick={() => {
                      const state = !isRimOpen;
                      closeAllDropdowns();
                      setIsRimOpen(state);
                    }}
                    className="w-full bg-[#161B22] rounded-xl flex items-center px-4 py-3 cursor-pointer border border-zinc-800 hover:border-zinc-700 transition-colors select-none"
                  >
                    <div className="flex-1">
                      <span className="text-[9px] text-zinc-500 block font-bold mb-0.5 uppercase tracking-wider">Rim Size</span>
                      <span className="font-bold text-white text-xs">{rim}</span>
                    </div>
                    <ChevronDown className={`w-4 h-4 text-zinc-400 transition-transform ${isRimOpen ? 'rotate-180' : ''}`} />
                  </div>
                  {isRimOpen && (
                    <div className="absolute top-[105%] left-0 w-full bg-[#161B22] border border-zinc-800 rounded-xl shadow-2xl z-50 max-h-60 overflow-y-auto py-2">
                      {RIMS.map((r) => (
                        <div 
                          key={r}
                          onClick={() => selectRim(r)}
                          className="px-4 py-2 text-xs text-zinc-300 hover:text-white hover:bg-zinc-850 font-bold cursor-pointer transition-colors"
                        >
                          {r}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Speed / Load */}
                <div className="relative flex-1 w-full">
                  <div 
                    onClick={() => {
                      const state = !isSpeedLoadOpen;
                      closeAllDropdowns();
                      setIsSpeedLoadOpen(state);
                    }}
                    className="w-full bg-[#161B22] rounded-xl flex items-center px-4 py-3 cursor-pointer border border-zinc-800 hover:border-zinc-700 transition-colors select-none"
                  >
                    <div className="flex-1">
                      <span className="text-[9px] text-zinc-500 block font-bold mb-0.5 uppercase tracking-wider">Speed / Load</span>
                      <span className="font-bold text-white text-xs">{speedLoad}</span>
                    </div>
                    <ChevronDown className={`w-4 h-4 text-zinc-400 transition-transform ${isSpeedLoadOpen ? 'rotate-180' : ''}`} />
                  </div>
                  {isSpeedLoadOpen && (
                    <div className="absolute top-[105%] left-0 w-full bg-[#161B22] border border-zinc-800 rounded-xl shadow-2xl z-50 max-h-60 overflow-y-auto py-2">
                      {SPEED_LOADS.map((sl) => (
                        <div 
                          key={sl}
                          onClick={() => selectSpeedLoad(sl)}
                          className="px-4 py-2 text-xs text-zinc-300 hover:text-white hover:bg-zinc-850 font-bold cursor-pointer transition-colors"
                        >
                          {sl}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </>
            )}

            {/* Tyre Model Search */}
            {activeTab === "model" && (
              <>
                {/* Brand */}
                <div className="relative flex-1 w-full">
                  <div 
                    onClick={() => {
                      const state = !isTyreBrandOpen;
                      closeAllDropdowns();
                      setIsTyreBrandOpen(state);
                    }}
                    className="w-full bg-[#161B22] rounded-xl flex items-center px-4 py-3 cursor-pointer border border-zinc-800 hover:border-zinc-700 transition-colors select-none"
                  >
                    <div className="flex-1">
                      <span className="text-[9px] text-zinc-500 block font-bold mb-0.5 uppercase tracking-wider">Select Tyre Brand</span>
                      <span className="font-bold text-white text-xs">{tyreBrand}</span>
                    </div>
                    <ChevronDown className={`w-4 h-4 text-zinc-400 transition-transform ${isTyreBrandOpen ? 'rotate-180' : ''}`} />
                  </div>
                  {isTyreBrandOpen && (
                    <div className="absolute top-[105%] left-0 w-full bg-[#161B22] border border-zinc-800 rounded-xl shadow-2xl z-50 max-h-60 overflow-y-auto py-2">
                      {Object.keys(TYRE_BRANDS_MODELS).map((brand) => (
                        <div 
                          key={brand}
                          onClick={() => selectTyreBrand(brand)}
                          className="px-4 py-2 text-xs text-zinc-300 hover:text-white hover:bg-zinc-850 font-bold cursor-pointer transition-colors"
                        >
                          {brand}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Model */}
                <div className="relative flex-1 w-full">
                  <div 
                    onClick={() => {
                      const state = !isTyreModelOpen;
                      closeAllDropdowns();
                      setIsTyreModelOpen(state);
                    }}
                    className="w-full bg-[#161B22] rounded-xl flex items-center px-4 py-3 cursor-pointer border border-zinc-800 hover:border-zinc-700 transition-colors select-none"
                  >
                    <div className="flex-1">
                      <span className="text-[9px] text-zinc-500 block font-bold mb-0.5 uppercase tracking-wider">Select Tyre Model</span>
                      <span className="font-bold text-white text-xs">{tyreModel}</span>
                    </div>
                    <ChevronDown className={`w-4 h-4 text-zinc-400 transition-transform ${isTyreModelOpen ? 'rotate-180' : ''}`} />
                  </div>
                  {isTyreModelOpen && (
                    <div className="absolute top-[105%] left-0 w-full bg-[#161B22] border border-zinc-800 rounded-xl shadow-2xl z-50 max-h-60 overflow-y-auto py-2">
                      {(TYRE_BRANDS_MODELS[tyreBrand] || []).map((mod) => (
                        <div 
                          key={mod}
                          onClick={() => selectTyreModel(mod)}
                          className="px-4 py-2 text-xs text-zinc-300 hover:text-white hover:bg-zinc-850 font-bold cursor-pointer transition-colors"
                        >
                          {mod}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                <div className="flex-1 w-full hidden lg:block" />
                <div className="flex-1 w-full hidden lg:block" />
              </>
            )}

            {activeTab === "reg" && (
              <>
                <div className="flex-[3] w-full bg-[#161B22] rounded-xl flex items-center px-5 py-4 border border-zinc-800">
                  <div className="flex-1">
                    <span className="text-[9px] text-zinc-550 block font-bold mb-1 uppercase tracking-wider">Enter Registration Number</span>
                    <input 
                      type="text" 
                      placeholder="e.g. AB12 CDE" 
                      value={regNumber}
                      onChange={(e) => setRegNumber(e.target.value)}
                      className="bg-transparent border-none outline-none text-white font-bold text-sm w-full uppercase placeholder:text-zinc-650"
                    />
                  </div>
                </div>
                <div className="flex-1" />
              </>
            )}

            <button 
              onClick={handleSearch}
              className="bg-[#FF5A00] hover:bg-[#E04D00] text-white font-bold rounded-xl px-8 py-3.5 flex items-center justify-center gap-2 transition-all text-[12px] tracking-widest uppercase whitespace-nowrap shadow-lg shadow-[#FF5A00]/20 transform hover:-translate-y-0.5 shrink-0 w-full lg:w-auto cursor-pointer"
            >
              FIND TYRES <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Popular Searches */}
          <div className="flex flex-wrap items-center gap-3 mt-6 pt-5 border-t border-zinc-800/60 text-[11px]">
            <span className="text-zinc-500 font-bold uppercase tracking-wider">Popular Searches:</span>
            {["205/55 R16", "195/65 R15", "225/45 R17", "245/40 R18"].map((size) => (
              <button 
                key={size} 
                onClick={() => handlePopularClick(size)}
                className="bg-[#161B22] hover:bg-zinc-800 text-zinc-300 font-bold py-1.5 px-3 rounded-full border border-zinc-800/80 transition-colors cursor-pointer"
              >
                {size}
              </button>
            ))}
            <button 
              onClick={() => handlePopularClick("205/55 R16")}
              className="text-[#FF5A00] hover:underline font-bold ml-1 flex items-center gap-1 cursor-pointer"
            >
              More sizes <ArrowRight className="w-3 h-3" />
            </button>
          </div>

        </div>
      </div>
      
    </div>
  );
}
