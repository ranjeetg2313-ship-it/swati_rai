"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useStore, CartItem } from "@/store/useStore";
import { 
  Trash2, 
  Minus, 
  Plus, 
  ShoppingBag, 
  ArrowRight, 
  Check, 
  Percent, 
  ShieldCheck, 
  Wrench, 
  Truck 
} from "lucide-react";

export default function CartPage() {
  const [mounted, setMounted] = useState(false);
  const cart = useStore((state) => state.cart);
  const updateQuantity = useStore((state) => state.updateQuantity);
  const removeFromCart = useStore((state) => state.removeFromCart);
  
  // Coupon state
  const [couponCode, setCouponCode] = useState("");
  const [activeCoupon, setActiveCoupon] = useState<string | null>(null);
  const [couponError, setCouponError] = useState("");

  // Simulated order placement state
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

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

  // Calculations
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  
  // Standard fitting & balancing fee: 399 per tyre
  const fittingCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const fittingFee = subtotal > 0 ? fittingCount * 399 : 0;
  
  // Free delivery standard
  const deliveryFee = 0;

  // Coupon discount calculation
  let discount = 0;
  if (activeCoupon === "TREADX20") {
    discount = Math.round(subtotal * 0.20);
  }

  const grandTotal = subtotal + fittingFee + deliveryFee - discount;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    setCouponError("");
    if (couponCode.toUpperCase() === "TREADX20") {
      setActiveCoupon("TREADX20");
    } else {
      setCouponError("Invalid coupon code. Try 'TREADX20' for 20% off!");
    }
  };

  const handleRemoveCoupon = () => {
    setActiveCoupon(null);
    setCouponCode("");
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderPlaced(true);
      // We can clear cart here
      useStore.getState().clearCart();
    }, 2000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F8F9FA] dark:bg-[#0B0F14] text-[#0B0F14] dark:text-white transition-colors duration-300">
      <Header />

      <main className="flex-1 container mx-auto px-4 max-w-7xl py-10">
        {orderPlaced ? (
          /* Order Placement Success State */
          <div className="max-w-md mx-auto my-16 bg-white dark:bg-[#161B22] border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-[#FF5A00]" />
            <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-black mb-3">Order Confirmed!</h2>
            <p className="text-zinc-550 dark:text-zinc-400 text-sm mb-6 leading-relaxed">
              Thank you for driving with Tread X. Your tyre fitting reservation is confirmed. We have sent the confirmation summary to your registered email address.
            </p>
            <Link 
              href="/" 
              onClick={() => setOrderPlaced(false)}
              className="w-full bg-[#FF5A00] hover:bg-[#E04D00] text-white font-bold text-xs uppercase tracking-widest py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#FF5A00]/25 cursor-pointer"
            >
              RETURN TO HOME
            </Link>
          </div>
        ) : cart.length === 0 ? (
          /* Empty Cart State */
          <div className="max-w-xl mx-auto my-12 text-center bg-white dark:bg-[#161B22] border border-zinc-200/60 dark:border-zinc-800/80 rounded-3xl p-10 md:p-14 shadow-xl">
            <div className="w-16 h-16 bg-zinc-100 dark:bg-zinc-800 text-[#FF5A00] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-black mb-3">Your Cart is Empty</h2>
            <p className="text-zinc-550 dark:text-zinc-450 text-sm max-w-md mx-auto mb-8 font-medium">
              You haven't added any premium tyres to your cart yet. Browse our top brands and find the perfect match for your vehicle.
            </p>
            <Link 
              href="/"
              className="bg-[#FF5A00] hover:bg-[#E04D00] text-white font-bold text-[11px] uppercase tracking-widest px-8 py-3.5 rounded-xl inline-flex items-center gap-2 transition-all shadow-lg shadow-[#FF5A00]/20 cursor-pointer"
            >
              FIND TYRES NOW <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          /* Cart & Summary Columns */
          <div>
            {/* Title Row */}
            <div className="mb-8">
              <h1 className="text-3xl font-black tracking-tight mb-2">Shopping Cart</h1>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 font-bold uppercase tracking-wider">
                {cart.reduce((sum, item) => sum + item.quantity, 0)} Items Selected
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Items List Column */}
              <div className="lg:col-span-2 space-y-4">
                {cart.map((item) => (
                  <div 
                    key={item.id}
                    className="bg-white dark:bg-[#161B22] border border-zinc-200/60 dark:border-zinc-800/80 rounded-2xl p-4 md:p-5 flex flex-col md:flex-row items-center gap-5 relative group hover:border-[#FF5A00]/20 transition-all duration-300 shadow-sm"
                  >
                    {/* Tyre Image Box */}
                    <div className="w-24 h-24 bg-zinc-50 dark:bg-zinc-900/60 rounded-xl flex items-center justify-center shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-20 h-20 object-contain filter drop-shadow-md"
                      />
                    </div>

                    {/* Tyre Name & Specs */}
                    <div className="flex-1 text-center md:text-left">
                      <p className="text-[10px] font-black uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-0.5">{item.brand}</p>
                      <h3 className="text-sm font-black text-[#0B0F14] dark:text-white leading-tight mb-1">{item.name}</h3>
                      
                      {/* Selected Size Badge */}
                      <span className="inline-block bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 text-[10px] font-bold px-2.5 py-1 rounded-md border border-zinc-200/60 dark:border-zinc-700/50">
                        Size: {item.size}
                      </span>
                    </div>

                    {/* Quantity Selector */}
                    <div className="flex items-center bg-zinc-50 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 rounded-xl px-2.5 py-1.5 shrink-0 select-none">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="text-zinc-450 hover:text-[#FF5A00] p-1 transition-colors cursor-pointer"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-8 text-center text-xs font-black text-[#0B0F14] dark:text-white">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="text-zinc-450 hover:text-[#FF5A00] p-1 transition-colors cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Prices */}
                    <div className="text-center md:text-right shrink-0 min-w-[100px]">
                      <div className="text-lg font-black text-[#FF5A00]">₹{(item.price * item.quantity).toLocaleString()}</div>
                      <div className="text-[10px] text-zinc-400 font-bold">₹{item.price.toLocaleString()} each</div>
                    </div>

                    {/* Delete Item */}
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="absolute top-4 right-4 md:static text-zinc-400 hover:text-red-500 p-1.5 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-all cursor-pointer"
                      title="Remove Item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}

                {/* Additional Perks Info Card */}
                <div className="bg-gradient-to-r from-zinc-50 to-zinc-100/50 dark:from-zinc-900/20 dark:to-zinc-900/10 border border-zinc-200/50 dark:border-zinc-800/80 rounded-2xl p-5 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-bold">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#FF5A00]/10 flex items-center justify-center text-[#FF5A00]">
                      <Wrench className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-zinc-800 dark:text-zinc-200">Professional Fitting</h4>
                      <p className="text-[10px] text-zinc-500 dark:text-zinc-450 font-normal">Expert balancing & alignment</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                      <Truck className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-zinc-800 dark:text-zinc-200">Free Safe Delivery</h4>
                      <p className="text-[10px] text-zinc-500 dark:text-zinc-450 font-normal">Shipped to local fitting garage</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-zinc-800 dark:text-zinc-200">Tread X Warranty</h4>
                      <p className="text-[10px] text-zinc-500 dark:text-zinc-450 font-normal">Full mileage & road damage protection</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Summary & Coupon Column */}
              <div className="space-y-6">
                
                {/* Coupon Box */}
                <div className="bg-white dark:bg-[#161B22] border border-zinc-200/60 dark:border-zinc-800/80 rounded-2xl p-5 shadow-sm">
                  <h3 className="text-sm font-black mb-3 flex items-center gap-1.5">
                    <Percent className="w-4 h-4 text-[#FF5A00]" /> Promo Coupon
                  </h3>
                  
                  {activeCoupon ? (
                    <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-450 rounded-xl p-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4" />
                        <span className="text-xs font-black">Applied: {activeCoupon} (20% Off)</span>
                      </div>
                      <button 
                        onClick={handleRemoveCoupon}
                        className="text-[10px] font-black uppercase text-zinc-450 hover:text-red-500 underline cursor-pointer"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleApplyCoupon} className="flex gap-2">
                      <input 
                        type="text"
                        placeholder="Try 'TREADX20'"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        className="flex-1 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl px-3 py-2 text-xs font-bold outline-none focus:border-[#FF5A00] transition-colors uppercase placeholder:normal-case"
                      />
                      <button 
                        type="submit"
                        className="bg-zinc-900 dark:bg-zinc-850 hover:bg-zinc-800 dark:hover:bg-zinc-800 text-white dark:text-zinc-200 text-[10px] font-black uppercase tracking-widest px-4 rounded-xl border border-zinc-850 transition-colors cursor-pointer"
                      >
                        Apply
                      </button>
                    </form>
                  )}
                  {couponError && (
                    <p className="text-[10px] text-red-500 font-bold mt-2">{couponError}</p>
                  )}
                </div>

                {/* Calculator Summary Box */}
                <div className="bg-white dark:bg-[#161B22] border border-zinc-200/60 dark:border-zinc-800/80 rounded-2xl p-5 shadow-sm relative overflow-hidden">
                  <h3 className="text-sm font-black mb-4 pb-3 border-b border-zinc-100 dark:border-zinc-800/60">Order Summary</h3>
                  
                  <div className="space-y-3 text-xs font-bold text-zinc-650 dark:text-zinc-400">
                    <div className="flex justify-between">
                      <span>Tyre Subtotal</span>
                      <span className="text-[#0B0F14] dark:text-white">₹{subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="flex items-center gap-1">Fitting & Balancing <span className="text-[10px] font-normal text-zinc-450">(₹399 per tyre)</span></span>
                      <span className="text-[#0B0F14] dark:text-white">₹{fittingFee.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Delivery Fee</span>
                      <span className="text-emerald-500">FREE</span>
                    </div>
                    {discount > 0 && (
                      <div className="flex justify-between text-emerald-500">
                        <span>Coupon Discount (20%)</span>
                        <span>-₹{discount.toLocaleString()}</span>
                      </div>
                    )}
                  </div>

                  <div className="my-5 border-t border-dashed border-zinc-200 dark:border-zinc-800" />

                  <div className="flex justify-between items-baseline mb-6">
                    <span className="text-xs font-black uppercase text-[#0B0F14] dark:text-white">Grand Total</span>
                    <span className="text-2xl font-black text-[#FF5A00]">₹{grandTotal.toLocaleString()}</span>
                  </div>

                  <button 
                    onClick={handleCheckout}
                    disabled={isCheckingOut}
                    className="w-full bg-[#FF5A00] hover:bg-[#E04D00] text-white font-bold text-xs uppercase tracking-widest py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#FF5A00]/25 disabled:bg-zinc-400 disabled:shadow-none cursor-pointer"
                  >
                    {isCheckingOut ? (
                      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    ) : (
                      <>PROCEED TO SECURE PAY <ArrowRight className="w-4 h-4" /></>
                    )}
                  </button>
                </div>

              </div>

            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
