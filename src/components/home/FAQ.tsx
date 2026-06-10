"use client";

import React, { useState } from "react";
import { 
  Plus, 
  Minus, 
  Gauge, 
  Sparkles, 
  Clock, 
  HelpCircle, 
  Wrench, 
  Globe, 
  ShoppingCart, 
  ShieldAlert 
} from "lucide-react";

const faqs = [
  {
    question: "What should my tyre pressure be?",
    answer: "The recommended tyre pressure will vary depending on the make, model and age of your vehicle. To find out what the recommended tyre is for your car, you can usually find it in the car's handbook or on the pressure label sticker - which is located on the driver's side door jamb or glove compartment.",
    icon: Gauge
  },
  {
    question: "How do I check my tyre tread?",
    answer: "There are 2 ways to check your tyre's tread depth is within legal limits. The quickest way is to place a 20p coin in between the grooves. If you can see inside of the rim, then your tyres are above the legal limit of 1.6mm. The other is a more accurate way, allowing you to know the exact depth left on your tyres - take a tread depth indicator and measure the exact depth of the tread.",
    icon: Sparkles
  },
  {
    question: "When should tyre pressure be checked?",
    answer: "Tyre pressures should be checked regularly, ideally at least once a month, to ensure they are properly inflated. It's a good idea to check the tyre pressures before long trips or if you notice any signs of underinflation or overinflation.",
    icon: Clock
  },
  {
    question: "What tyres do I need?",
    answer: "The type of tyres that you need will depend on the wheel size, your vehicle type, and the driving conditions. Consult your vehicle's handbook or a tyre specialist for guidance.",
    icon: HelpCircle
  },
  {
    question: "How do I change a tyre?",
    answer: "Changing a tyre is simple as long as you take it one step at a time and remain calm. 1. Pull over to a flat area, engage the handbrake and switch off the engine. 2. Set up a warning triangle and wear a bright jacket for visibility. 3. Retrieve the spare wheel, jack and wheel wrench from the boot. 4. Loosen wheel nuts with the wrench. 5. Slowly raise the car with the jack, remove the wheel nuts and replace the damaged tyre. 6. Place the new wheel, tighten wheel nuts partially. 7. Lower the car, tighten wheel nuts fully. 8. Store tools and old wheel in the boot. 9. Double-check the new wheel and tyre for correct placement.",
    icon: Wrench
  },
  {
    question: "Which is correct, tyre or tire?",
    answer: "In British English, \"tyre\" is the standard spelling for the rubber covering of a wheel. In American English, \"tire\" is used. Both refer to the exact same product!",
    icon: Globe
  },
  {
    question: "Is it better to buy tyres online?",
    answer: "Buying tyres online often provides a much wider selection and better prices compared to physical stores. You can easily compare brands, read reviews, and schedule a fitting at a local garage right from your home.",
    icon: ShoppingCart
  },
  {
    question: "Is it ok to fit cheap tyres?",
    answer: "While budget tyres meet legal safety standards, premium tyres offer significantly better grip, shorter stopping distances, improved fuel efficiency, and longer lifespans. Investing in quality tyres is highly recommended for safety and performance.",
    icon: ShieldAlert
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-zinc-50 dark:bg-zinc-950 py-16 overflow-hidden">
      {/* Background glow highlights */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#FF5A00]/5 rounded-full blur-[130px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#0B3B60]/5 dark:bg-[#0B3B60]/10 rounded-full blur-[130px]" />
      </div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 border-b border-zinc-200 dark:border-zinc-800/80 pb-6">
          <div>
            <p className="text-[#FF5A00] font-bold text-xs tracking-widest uppercase mb-2">Support Center</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#0B3B60] dark:text-white tracking-tight">
              Tyres: Frequently Asked Questions
            </h2>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-1.5 shrink-0 select-none">
            <span className="text-xl font-black italic tracking-tighter text-[#0B3B60] dark:text-white">TREAD</span>
            <span className="text-xl font-black italic tracking-tighter text-[#FF5A00]">X</span>
          </div>
        </div>

        {/* FAQ Cards List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const Icon = faq.icon;
            
            return (
              <div 
                key={index} 
                className={`bg-white dark:bg-zinc-900/40 border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen 
                    ? "border-[#FF5A00]/40 shadow-xl shadow-[#FF5A00]/5 bg-zinc-50/20 dark:bg-zinc-900/60" 
                    : "border-zinc-200/60 dark:border-zinc-850 hover:border-zinc-300 dark:hover:border-zinc-800 hover:shadow-md hover:shadow-zinc-200/20 dark:hover:shadow-none"
                }`}
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between py-5 px-5 md:px-7 text-left focus:outline-none group"
                >
                  <div className="flex items-center gap-4">
                    {/* Dynamic Icon Badge */}
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${
                      isOpen 
                        ? "bg-[#FF5A00]/10 text-[#FF5A00]" 
                        : "bg-zinc-100 dark:bg-zinc-800 text-[#0B3B60] dark:text-zinc-400 group-hover:bg-[#0B3B60]/10 group-hover:text-[#0B3B60] dark:group-hover:text-white"
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    
                    {/* Question Text */}
                    <span 
                      className={`text-base md:text-lg font-extrabold transition-colors duration-200 ${
                        isOpen ? "text-[#FF5A00]" : "text-[#0B3B60] dark:text-zinc-150 group-hover:text-[#FF5A00]"
                      }`}
                    >
                      {faq.question}
                    </span>
                  </div>

                  {/* Toggle Arrow/Indicator */}
                  <div className="shrink-0 ml-4">
                    <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      isOpen 
                        ? "border-[#FF5A00]/40 bg-[#FF5A00]/5 text-[#FF5A00]" 
                        : "border-zinc-200 dark:border-zinc-800 text-zinc-400 group-hover:border-zinc-300 dark:group-hover:border-zinc-700 group-hover:text-zinc-650"
                    }`}>
                      {isOpen ? (
                        <Minus className="w-4 h-4" strokeWidth={3} />
                      ) : (
                        <Plus className="w-4 h-4" strokeWidth={3} />
                      )}
                    </div>
                  </div>
                </button>
                
                {/* Accordion Answer Content */}
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="mx-5 md:mx-7 px-4 py-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-850/50">
                      <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-xs md:text-sm font-medium">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
