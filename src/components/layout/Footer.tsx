"use client";

import React from "react";
import Link from "next/link";
import { Send, ArrowUp } from "lucide-react";

// Minimal social icons
const Facebook = (props: any) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
const Instagram = (props: any) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>;
const Youtube = (props: any) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>;
const Twitter = (props: any) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>;

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B0F14] text-white pt-12 pb-6 relative">
      <div className="container mx-auto px-4 max-w-7xl">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo & Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-0 mb-6">
              <span className="text-3xl font-black italic tracking-tighter text-white">TREAD</span>
              <span className="text-3xl font-black italic tracking-tighter text-[#FF5A00]">X</span>
            </Link>
            <p className="text-zinc-500 text-[10px] mb-6 leading-relaxed max-w-[200px]">
              Your trusted partner for premium tyres. Quality, safety & performance — every mile.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-zinc-400 hover:text-white transition-colors"><Facebook className="w-3.5 h-3.5" /></a>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors"><Instagram className="w-3.5 h-3.5" /></a>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors"><Youtube className="w-3.5 h-3.5" /></a>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors"><Twitter className="w-3.5 h-3.5" /></a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-bold mb-6 text-[10px] uppercase text-white">SHOP</h4>
            <ul className="space-y-3 text-zinc-400 text-[11px]">
              <li><Link href="#" className="hover:text-white transition-colors">All Tyres</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">By Vehicle</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">By Size</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">By Brand</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Offers</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-6 text-[10px] uppercase text-white">COMPANY</h4>
            <ul className="space-y-3 text-zinc-400 text-[11px]">
              <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="font-bold mb-6 text-[10px] uppercase text-white">POLICIES</h4>
            <ul className="space-y-3 text-zinc-400 text-[11px]">
              <li><Link href="#" className="hover:text-white transition-colors">Shipping Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Return Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h4 className="font-bold mb-6 text-[10px] uppercase text-white">NEWSLETTER</h4>
            <p className="text-zinc-400 text-[10px] mb-4">
              Subscribe to get exclusive deals & updates.
            </p>
            <div className="flex bg-[#11151A] rounded-xl overflow-hidden border border-white/5 focus-within:border-[#FF5A00]/40 transition-colors">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-transparent text-white px-4 py-2.5 text-[11px] w-full focus:outline-none placeholder:text-zinc-600 dark:text-zinc-400"
              />
              <button className="bg-[#FF5A00] text-white px-4 flex items-center justify-center hover:bg-[#E04D00] transition-colors">
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-zinc-550 text-[9px] uppercase tracking-wider">
          <p>© 2026 TREAD X. All Rights Reserved.</p>
          
          <div className="flex items-center gap-4 text-zinc-400 font-bold">
            <span className="hover:text-white transition-colors cursor-pointer text-[#FFB800]">VISA</span>
            <span className="hover:text-white transition-colors cursor-pointer text-[#FF0000]">MasterCard</span>
            <span className="hover:text-white transition-colors cursor-pointer">UPI</span>
            <span className="hover:text-white transition-colors cursor-pointer text-[#00AEEF]">PayTM</span>
          </div>
        </div>

        {/* Scroll to Top */}
        <button 
          onClick={scrollToTop}
          className="absolute right-4 bottom-4 bg-[#FF5A00] text-white p-3 rounded-xl hover:bg-[#E04D00] transition-all transform hover:-translate-y-0.5 active:scale-95 shadow-lg shadow-[#FF5A00]/10"
        >
          <ArrowUp className="w-4 h-4" />
        </button>

      </div>
    </footer>
  );
}
