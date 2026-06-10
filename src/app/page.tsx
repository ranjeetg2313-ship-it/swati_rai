"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { VehicleCategories } from "@/components/home/VehicleCategories";
import { FeaturedTyres } from "@/components/home/FeaturedTyres";
import { TopBrands } from "@/components/home/TopBrands";
import { HowItWorks } from "@/components/home/HowItWorks";
import { SizeGuide } from "@/components/home/SizeGuide";
import { Testimonials } from "@/components/home/Testimonials";
import { MotServiceBanner } from "@/components/home/MotServiceBanner";
import { FAQ } from "@/components/home/FAQ";
import { News } from "@/components/home/News";
import { UpgradeDriveBanner } from "@/components/home/UpgradeDriveBanner";

export interface SearchQuery {
  type: "vehicle" | "size" | "model" | "reg" | "popular";
  vehicleType?: string;
  make?: string;
  model?: string;
  year?: string;
  width?: string;
  aspect?: string;
  rim?: string;
  speedLoad?: string;
  regNumber?: string;
  queryText?: string;
  tyreBrand?: string;
  tyreModel?: string;
}

export default function Home() {
  const [searchQuery, setSearchQuery] = useState<SearchQuery | null>(null);

  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col bg-white dark:bg-[#0B0F14]">
        <Hero onSearch={(q) => setSearchQuery(q)} />
        <WhyChooseUs />
        <VehicleCategories />
        <FeaturedTyres searchQuery={searchQuery} onClearSearch={() => setSearchQuery(null)} />
        <TopBrands />
        <HowItWorks />
        <SizeGuide />
        <Testimonials />
        <MotServiceBanner />
        <FAQ />
        <News />
        <UpgradeDriveBanner />
      </main>
      <Footer />
    </>
  );
}
