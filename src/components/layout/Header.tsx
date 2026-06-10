"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Search, 
  User, 
  Heart, 
  ShoppingCart, 
  Menu, 
  X,
  Home,
  ShoppingBag,
  Award,
  Flame,
  Info,
  PhoneCall,
  Wrench
} from "lucide-react";
import { useStore } from "@/store/useStore";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const cart = useStore((state) => state.cart);
  const wishlist = useStore((state) => state.wishlist);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const cartCount = mounted ? cart.reduce((sum, item) => sum + item.quantity, 0) : 0;
  const wishlistCount = mounted ? wishlist.length : 0;

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Shop", href: "#", icon: ShoppingBag },
    { name: "Services", href: "#services", icon: Wrench },
    { name: "Brands", href: "#", icon: Award },
    { name: "Deals", href: "#", icon: Flame },
    { name: "About Us", href: "#", icon: Info },
    { name: "Contact", href: "/contact", icon: PhoneCall },
  ];

  return (
    <>
      <header className="bg-[#0B0F14] py-4 w-full sticky top-0 z-50 border-b border-zinc-800/40 shadow-xl">
        <div className="container mx-auto px-4 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-0">
            <span className="text-2xl font-black italic tracking-tighter text-white">TREAD</span>
            <span className="text-2xl font-black italic tracking-tighter text-[#FF5A00]">X</span>
          </Link>

          {/* Desktop Navigation with Icons */}
          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href} 
                className="flex items-center gap-1.5 text-xs font-bold text-zinc-300 hover:text-[#FF5A00] hover:scale-105 transition-all group"
              >
                <item.icon className="w-3.5 h-3.5 text-zinc-500 group-hover:text-[#FF5A00] transition-colors" />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Icons & Theme Toggle */}
          <div className="hidden md:flex items-center gap-5 text-white">
            <ThemeToggle />
            <button className="hover:text-[#FF5A00] hover:scale-110 transition-all"><Search className="w-5 h-5" /></button>
            <button className="hover:text-[#FF5A00] hover:scale-110 transition-all"><User className="w-5 h-5" /></button>
            <Link href="/wishlist" className="hover:text-[#FF5A00] hover:scale-110 transition-all relative">
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#FF5A00] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-lg shadow-[#FF5A00]/25">
                  {wishlistCount}
                </span>
              )}
            </Link>
            <Link href="/cart" className="relative hover:text-[#FF5A00] hover:scale-110 transition-all">
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#FF5A00] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-lg shadow-[#FF5A00]/25">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-4">
            <ThemeToggle />
            <button 
              className="text-white hover:text-[#FF5A00] transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#0B0F14]/95 backdrop-blur-md border-t border-zinc-800 shadow-2xl py-5 px-5 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href} 
                className="flex items-center gap-3.5 text-base font-bold text-white hover:text-[#FF5A00] transition-colors py-3 border-b border-zinc-850"
                onClick={() => setMobileMenuOpen(false)}
              >
                <item.icon className="w-4.5 h-4.5 text-[#FF5A00]" />
                <span>{item.name}</span>
              </Link>
            ))}
            <div className="flex items-center justify-around text-white pt-5 mt-2">
              <button className="flex flex-col items-center gap-1.5 hover:text-[#FF5A00] transition-colors"><Search className="w-5 h-5 text-zinc-450" /><span className="text-[10px] font-bold">Search</span></button>
              <button className="flex flex-col items-center gap-1.5 hover:text-[#FF5A00] transition-colors"><User className="w-5 h-5 text-zinc-450" /><span className="text-[10px] font-bold">Account</span></button>
              <Link 
                href="/wishlist" 
                className="flex flex-col items-center gap-1.5 hover:text-[#FF5A00] transition-colors relative"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Heart className="w-5 h-5 text-zinc-450" />
                <span className="text-[10px] font-bold">Saved</span>
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 right-2 bg-[#FF5A00] text-white text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </Link>
              <Link 
                href="/cart" 
                className="relative flex flex-col items-center gap-1.5 hover:text-[#FF5A00] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <ShoppingCart className="w-5 h-5 text-zinc-450" />
                <span className="text-[10px] font-bold">Cart</span>
                {cartCount > 0 && (
                  <span className="absolute -top-1 right-2 bg-[#FF5A00] text-white text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
