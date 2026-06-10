"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { 
  Phone, 
  Mail, 
  AtSign, 
  Headset, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Send,
  MessageSquare,
  HelpCircle,
  Package,
  ChevronDown
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    enquiry: "",
  });
  
  const [isRobotChecked, setIsRobotChecked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isRobotChecked) return;
    
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        interest: "",
        enquiry: "",
      });
      setIsRobotChecked(false);
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F8F9FA] dark:bg-[#070A0F] text-zinc-900 dark:text-white transition-colors duration-300 selection:bg-[#FF5A00] selection:text-white overflow-x-hidden">
      <Header />

      <main className="flex-1">
        
        {/* ─── Hero Section ─── */}
        <section className="relative pt-24 pb-40 overflow-hidden bg-[#0B0F14] group">
          {/* Background Image & Overlay */}
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center opacity-40 mix-blend-luminosity scale-105 group-hover:scale-110 transition-transform duration-[10000ms] ease-out"
            style={{ backgroundImage: "url('/images/mountain_road_1781107638083.png')" }}
          />
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0B0F14]/95 via-[#0B0F14]/80 to-[#0B0F14]" />
          
          {/* Decorative Floating Icons (Left Side) */}
          <div className="absolute left-[5%] top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-8 z-10 perspective-1000">
            <div className="w-16 h-16 rounded-2xl border border-[#FF5A00]/30 bg-[#FF5A00]/10 backdrop-blur-md flex items-center justify-center text-[#FF5A00] animate-float-slow shadow-[0_0_40px_rgba(255,90,0,0.2)] hover:scale-125 transition-transform cursor-pointer">
              <Phone className="w-7 h-7" />
            </div>
            <div className="w-16 h-16 rounded-2xl border border-[#FF5A00]/30 bg-[#FF5A00]/10 backdrop-blur-md flex items-center justify-center text-[#FF5A00] animate-float-slower ml-16 shadow-[0_0_40px_rgba(255,90,0,0.2)] hover:scale-125 transition-transform cursor-pointer">
              <Mail className="w-7 h-7" />
            </div>
            <div className="w-16 h-16 rounded-2xl border border-[#FF5A00]/30 bg-[#FF5A00]/10 backdrop-blur-md flex items-center justify-center text-[#FF5A00] animate-float-slow ml-32 shadow-[0_0_40px_rgba(255,90,0,0.2)] hover:scale-125 transition-transform cursor-pointer">
              <AtSign className="w-7 h-7" />
            </div>
          </div>

          {/* Glowing Accents */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF5A00]/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FF5A00]/5 blur-[100px] rounded-full pointer-events-none" />

          {/* Hero Content */}
          <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
            <h4 className="text-[#FF5A00] font-black text-xs md:text-sm tracking-[0.25em] uppercase mb-6 animate-fade-in-up">
              We're Here To Help
            </h4>
            <h1 className="text-6xl md:text-[80px] font-black text-white mb-8 tracking-tighter drop-shadow-2xl">
              Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A00] to-amber-500">Us</span>
            </h1>
            <p className="text-zinc-400 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
              Have a question or need assistance? Our expert team is ready to help you with everything from tyre selection to fitting appointments.
            </p>
          </div>
        </section>

        {/* ─── Floating Stats Bar ─── */}
        <div className="container mx-auto px-4 max-w-5xl relative z-20 -mt-20 mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {/* Quick Support */}
            <div className="bg-white/5 dark:bg-[#161B22]/80 backdrop-blur-xl border border-zinc-200/50 dark:border-zinc-800 rounded-3xl p-6 flex items-center gap-5 shadow-2xl hover:-translate-y-2 hover:border-[#FF5A00]/50 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-[#FF5A00]/10 text-[#FF5A00] flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <Headset className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-zinc-900 dark:text-white font-black text-base mb-1">Quick Support</h4>
                <p className="text-zinc-500 dark:text-zinc-400 text-xs font-semibold">We reply within 24 hours</p>
              </div>
            </div>
            
            {/* Trusted Service */}
            <div className="bg-white/5 dark:bg-[#161B22]/80 backdrop-blur-xl border border-zinc-200/50 dark:border-zinc-800 rounded-3xl p-6 flex items-center gap-5 shadow-2xl hover:-translate-y-2 hover:border-[#FF5A00]/50 transition-all duration-300 group delay-75">
              <div className="w-14 h-14 rounded-2xl bg-[#FF5A00]/10 text-[#FF5A00] flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:-rotate-6 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-zinc-900 dark:text-white font-black text-base mb-1">Trusted Service</h4>
                <p className="text-zinc-500 dark:text-zinc-400 text-xs font-semibold">Over 100K+ happy customers</p>
              </div>
            </div>
            
            {/* Operating Hours */}
            <div className="bg-white/5 dark:bg-[#161B22]/80 backdrop-blur-xl border border-zinc-200/50 dark:border-zinc-800 rounded-3xl p-6 flex items-center gap-5 shadow-2xl hover:-translate-y-2 hover:border-[#FF5A00]/50 transition-all duration-300 group delay-150">
              <div className="w-14 h-14 rounded-2xl bg-[#FF5A00]/10 text-[#FF5A00] flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-transform">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-zinc-900 dark:text-white font-black text-base mb-1">Mon - Sun</h4>
                <p className="text-zinc-500 dark:text-zinc-400 text-xs font-semibold">08:00 AM - 08:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Main Content Grid ─── */}
        <section className="container mx-auto px-4 max-w-6xl pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            
            {/* Left Column: Get In Touch */}
            <div className="lg:col-span-4 bg-white dark:bg-[#161B22] border border-zinc-100 dark:border-zinc-800/80 rounded-[2rem] p-8 lg:p-10 shadow-xl shadow-zinc-200/40 dark:shadow-none hover:shadow-2xl transition-shadow flex flex-col">
              <div className="flex items-center gap-3 mb-10 pb-6 border-b border-zinc-100 dark:border-zinc-800/60">
                <div className="w-12 h-12 rounded-xl bg-[#FF5A00]/10 flex items-center justify-center">
                  <Headset className="w-6 h-6 text-[#FF5A00]" />
                </div>
                <h2 className="text-3xl font-black text-zinc-900 dark:text-white tracking-tight">Get In Touch</h2>
              </div>

              <div className="space-y-8 flex-1">
                {/* Address */}
                <div className="flex gap-5 group cursor-default">
                  <div className="w-12 h-12 rounded-2xl bg-[#FF5A00]/5 dark:bg-[#FF5A00]/10 text-[#FF5A00] flex items-center justify-center shrink-0 mt-1 group-hover:bg-[#FF5A00] group-hover:text-white transition-colors duration-300 shadow-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-2">Address</h5>
                    <p className="text-base font-bold text-zinc-900 dark:text-white mb-1 group-hover:text-[#FF5A00] transition-colors">MS Tyre Leicester Ltd</p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">229, Abbey Lane, Leicester,<br/>LE45QH, UK</p>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex gap-5 group cursor-default">
                  <div className="w-12 h-12 rounded-2xl bg-[#FF5A00]/5 dark:bg-[#FF5A00]/10 text-[#FF5A00] flex items-center justify-center shrink-0 mt-1 group-hover:bg-[#FF5A00] group-hover:text-white transition-colors duration-300 shadow-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-2">Telephone</h5>
                    <div className="flex flex-col gap-1 text-base font-black text-zinc-900 dark:text-white mb-2">
                      <a href="tel:01162611680" className="hover:text-[#FF5A00] transition-colors w-max">01162 611680</a>
                      <a href="tel:07448179028" className="hover:text-[#FF5A00] transition-colors w-max">07448 179028</a>
                    </div>
                    <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800/50 inline-block px-2.5 py-1 rounded-md">Mon - Sun: 08:00 - 20:00</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-5 group cursor-default">
                  <div className="w-12 h-12 rounded-2xl bg-[#FF5A00]/5 dark:bg-[#FF5A00]/10 text-[#FF5A00] flex items-center justify-center shrink-0 mt-1 group-hover:bg-[#FF5A00] group-hover:text-white transition-colors duration-300 shadow-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-2">Email</h5>
                    <a href="mailto:ravidulvpreet2006@gmail.com" className="text-sm font-bold text-zinc-900 dark:text-white hover:text-[#FF5A00] transition-colors mb-2 block">
                      ravidulvpreet2006@gmail.com
                    </a>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">We'll get back to you ASAP</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-8 bg-white dark:bg-[#161B22] border border-zinc-100 dark:border-zinc-800/80 rounded-[2rem] p-8 lg:p-10 shadow-xl shadow-zinc-200/40 dark:shadow-none relative overflow-hidden flex flex-col">
              
              {isSuccess && (
                <div className="absolute inset-0 z-20 bg-white/95 dark:bg-[#161B22]/95 backdrop-blur-md flex flex-col items-center justify-center text-center p-8 transition-opacity duration-500">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#FF5A00] to-amber-500 rounded-full flex items-center justify-center text-white mb-6 shadow-[0_0_60px_rgba(255,90,0,0.5)] animate-bounce">
                    <ShieldCheck className="w-12 h-12" />
                  </div>
                  <h3 className="text-4xl font-black text-zinc-900 dark:text-white mb-3 tracking-tight">Message Sent!</h3>
                  <p className="text-zinc-500 dark:text-zinc-400 text-lg max-w-md font-medium">Thank you for reaching out to TREAD X. Our support team is on it and will reply shortly.</p>
                </div>
              )}

              <div className="flex items-center gap-3 mb-10 pb-6 border-b border-zinc-100 dark:border-zinc-800/60">
                <div className="w-12 h-12 rounded-xl bg-[#FF5A00]/10 flex items-center justify-center">
                  <Send className="w-6 h-6 text-[#FF5A00]" />
                </div>
                <h2 className="text-3xl font-black text-zinc-900 dark:text-white tracking-tight">Send Us a Message</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="group">
                    <label className="block text-[11px] font-black uppercase tracking-widest text-zinc-500 mb-2 group-focus-within:text-[#FF5A00] transition-colors">
                      Your Name<span className="text-[#FF5A00]">*</span>
                    </label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Enter your full name"
                      className="w-full bg-zinc-50 dark:bg-[#0B0F14] border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white text-sm font-medium rounded-xl px-5 py-4 focus:outline-none focus:border-[#FF5A00] focus:ring-2 focus:ring-[#FF5A00]/20 hover:border-[#FF5A00]/50 transition-all placeholder:text-zinc-400 dark:placeholder:text-zinc-600 shadow-inner"
                    />
                  </div>
                  {/* Email */}
                  <div className="group">
                    <label className="block text-[11px] font-black uppercase tracking-widest text-zinc-500 mb-2 group-focus-within:text-[#FF5A00] transition-colors">
                      E-Mail Address<span className="text-[#FF5A00]">*</span>
                    </label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="Enter your email address"
                      className="w-full bg-zinc-50 dark:bg-[#0B0F14] border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white text-sm font-medium rounded-xl px-5 py-4 focus:outline-none focus:border-[#FF5A00] focus:ring-2 focus:ring-[#FF5A00]/20 hover:border-[#FF5A00]/50 transition-all placeholder:text-zinc-400 dark:placeholder:text-zinc-600 shadow-inner"
                    />
                  </div>
                  {/* Phone */}
                  <div className="group">
                    <label className="block text-[11px] font-black uppercase tracking-widest text-zinc-500 mb-2 group-focus-within:text-[#FF5A00] transition-colors">
                      Phone Number
                    </label>
                    <input 
                      type="tel" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="Enter your phone number"
                      className="w-full bg-zinc-50 dark:bg-[#0B0F14] border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white text-sm font-medium rounded-xl px-5 py-4 focus:outline-none focus:border-[#FF5A00] focus:ring-2 focus:ring-[#FF5A00]/20 hover:border-[#FF5A00]/50 transition-all placeholder:text-zinc-400 dark:placeholder:text-zinc-600 shadow-inner"
                    />
                  </div>
                  {/* Interest */}
                  <div className="group">
                    <label className="block text-[11px] font-black uppercase tracking-widest text-zinc-500 mb-2 group-focus-within:text-[#FF5A00] transition-colors">
                      Interest<span className="text-[#FF5A00]">*</span>
                    </label>
                    <div className="relative">
                      <select 
                        required
                        value={formData.interest}
                        onChange={(e) => setFormData({...formData, interest: e.target.value})}
                        className="w-full bg-zinc-50 dark:bg-[#0B0F14] border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white text-sm font-medium rounded-xl px-5 py-4 focus:outline-none focus:border-[#FF5A00] focus:ring-2 focus:ring-[#FF5A00]/20 hover:border-[#FF5A00]/50 transition-all appearance-none cursor-pointer disabled:opacity-50 shadow-inner"
                      >
                        <option value="" disabled className="text-zinc-400">Select your interest</option>
                        <option value="Tyre Fitting">Tyre Fitting</option>
                        <option value="MOT & Servicing">MOT & Servicing</option>
                        <option value="General Enquiry">General Enquiry</option>
                        <option value="Order Status">Order Status</option>
                      </select>
                      <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Enquiry */}
                <div className="group flex-1 flex flex-col">
                  <label className="block text-[11px] font-black uppercase tracking-widest text-zinc-500 mb-2 group-focus-within:text-[#FF5A00] transition-colors">
                    Enquiry<span className="text-[#FF5A00]">*</span>
                  </label>
                  <textarea 
                    required
                    value={formData.enquiry}
                    onChange={(e) => setFormData({...formData, enquiry: e.target.value})}
                    placeholder="How can we help you?"
                    className="w-full flex-1 min-h-[120px] bg-zinc-50 dark:bg-[#0B0F14] border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white text-sm font-medium rounded-xl px-5 py-4 focus:outline-none focus:border-[#FF5A00] focus:ring-2 focus:ring-[#FF5A00]/20 hover:border-[#FF5A00]/50 transition-all resize-none placeholder:text-zinc-400 dark:placeholder:text-zinc-600 shadow-inner"
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/60">
                  {/* Mock reCAPTCHA */}
                  <div className="bg-zinc-50 dark:bg-[#0B0F14] border border-zinc-200 dark:border-zinc-800 rounded-xl p-3 px-4 inline-flex items-center gap-4 shadow-sm hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors w-max">
                    <div 
                      onClick={() => setIsRobotChecked(!isRobotChecked)}
                      className="w-7 h-7 bg-white dark:bg-[#161B22] border-2 border-zinc-300 dark:border-zinc-600 rounded flex items-center justify-center cursor-pointer hover:border-[#FF5A00] transition-colors group"
                    >
                      <div className={`w-3.5 h-3.5 rounded-sm transition-all ${isRobotChecked ? 'bg-[#FF5A00] scale-100' : 'bg-transparent scale-0'}`} />
                    </div>
                    <span className="text-sm font-bold text-zinc-700 dark:text-zinc-300 select-none cursor-pointer" onClick={() => setIsRobotChecked(!isRobotChecked)}>
                      I'm not a robot
                    </span>
                    <div className="ml-6 flex flex-col items-center">
                      <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" className="w-7 mb-1 opacity-80 dark:invert" />
                      <span className="text-[6px] text-zinc-400 font-bold uppercase tracking-wider text-center leading-tight">reCAPTCHA<br/>Privacy</span>
                    </div>
                  </div>

                  {/* Submit */}
                  <button 
                    type="submit"
                    disabled={!isRobotChecked || isSubmitting}
                    className="bg-[#FF5A00] hover:bg-[#E04D00] disabled:bg-zinc-200 dark:disabled:bg-zinc-800 disabled:text-zinc-400 disabled:cursor-not-allowed text-white font-black text-sm uppercase tracking-widest px-8 py-4 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer shadow-[0_10px_30px_rgba(255,90,0,0.3)] hover:shadow-[0_15px_40px_rgba(255,90,0,0.4)] hover:-translate-y-1 active:translate-y-0 disabled:hover:translate-y-0 disabled:shadow-none w-full sm:w-auto min-w-[220px]"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" /> SEND MESSAGE
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* ─── Bottom Quick Links Banner ─── */}
        <section className="bg-white dark:bg-[#161B22] border-y border-zinc-100 dark:border-zinc-800/80 py-10">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-zinc-100 dark:divide-zinc-800/80">
              
              {/* Live Chat */}
              <div className="flex items-center gap-5 lg:px-8 group">
                <div className="w-14 h-14 rounded-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 flex items-center justify-center text-[#FF5A00] shrink-0 group-hover:scale-110 group-hover:bg-[#FF5A00] group-hover:text-white transition-all cursor-pointer shadow-[0_0_20px_rgba(255,90,0,0.1)] group-hover:shadow-[0_0_25px_rgba(255,90,0,0.3)]">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-zinc-900 dark:text-white font-black text-base mb-1 group-hover:text-[#FF5A00] transition-colors">Live Chat</h4>
                  <p className="text-xs text-zinc-500 font-medium mb-1.5">Chat with our support team</p>
                  <a href="#" className="text-[#FF5A00] text-[10px] font-black uppercase tracking-wider hover:underline inline-flex items-center gap-1">Start Chat <Send className="w-3 h-3 group-hover:translate-x-1 transition-transform" /></a>
                </div>
              </div>

              {/* FAQs */}
              <div className="flex items-center gap-5 lg:px-8 group">
                <div className="w-14 h-14 rounded-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 flex items-center justify-center text-[#FF5A00] shrink-0 group-hover:scale-110 group-hover:bg-[#FF5A00] group-hover:text-white transition-all cursor-pointer shadow-[0_0_20px_rgba(255,90,0,0.1)] group-hover:shadow-[0_0_25px_rgba(255,90,0,0.3)]">
                  <HelpCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-zinc-900 dark:text-white font-black text-base mb-1 group-hover:text-[#FF5A00] transition-colors">FAQs</h4>
                  <p className="text-xs text-zinc-500 font-medium mb-1.5">Find quick answers</p>
                  <a href="#" className="text-[#FF5A00] text-[10px] font-black uppercase tracking-wider hover:underline inline-flex items-center gap-1">View FAQs <Send className="w-3 h-3 group-hover:translate-x-1 transition-transform" /></a>
                </div>
              </div>

              {/* Track Order */}
              <div className="flex items-center gap-5 lg:px-8 group">
                <div className="w-14 h-14 rounded-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 flex items-center justify-center text-[#FF5A00] shrink-0 group-hover:scale-110 group-hover:bg-[#FF5A00] group-hover:text-white transition-all cursor-pointer shadow-[0_0_20px_rgba(255,90,0,0.1)] group-hover:shadow-[0_0_25px_rgba(255,90,0,0.3)]">
                  <Package className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-zinc-900 dark:text-white font-black text-base mb-1 group-hover:text-[#FF5A00] transition-colors">Track Order</h4>
                  <p className="text-xs text-zinc-500 font-medium mb-1.5">Check your order status</p>
                  <a href="#" className="text-[#FF5A00] text-[10px] font-black uppercase tracking-wider hover:underline inline-flex items-center gap-1">Track Now <Send className="w-3 h-3 group-hover:translate-x-1 transition-transform" /></a>
                </div>
              </div>

              {/* Call Us */}
              <div className="flex items-center gap-5 lg:px-8 group">
                <div className="w-14 h-14 rounded-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 flex items-center justify-center text-[#FF5A00] shrink-0 group-hover:scale-110 group-hover:bg-[#FF5A00] group-hover:text-white transition-all cursor-pointer shadow-[0_0_20px_rgba(255,90,0,0.1)] group-hover:shadow-[0_0_25px_rgba(255,90,0,0.3)]">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-zinc-900 dark:text-white font-black text-base mb-1 group-hover:text-[#FF5A00] transition-colors">Call Us</h4>
                  <p className="text-xs text-zinc-500 font-medium mb-1.5">Speak to our experts</p>
                  <a href="tel:01162611680" className="text-[#FF5A00] text-sm font-black hover:underline inline-block tracking-wide">01162 611680</a>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
