import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <section class="relative w-full min-h-[90vh] flex items-center justify-center text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div class="absolute inset-0 z-0">
        <img 
          src="/travel_hero_background_1773558886260.png" 
          alt="Premium Travel" 
          class="w-full h-full object-cover scale-105 animate-[reveal_10s_ease-out_infinite_alternate]"
        />
        <div class="absolute inset-0 bg-linear-to-b from-slate-950/60 via-slate-950/40 to-white/10"></div>
      </div>
      
      <div class="relative container mx-auto px-6 z-10 text-center animate-reveal">
        {/* Floating Badge */}
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 text-emerald-300 text-[10px] font-black uppercase tracking-[0.3em]">
          <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Dunyo bo'ylab unutilmas sayohatlar
        </div>

        <h1 class="text-5xl md:text-8xl font-black mb-6 leading-[0.9] uppercase tracking-tighter decoration-emerald-500 underline-offset-8">
          Sayohat <br /> 
          <span class="text-gradient drop-shadow-2xl">Yangi O'lchamda</span>
        </h1>
        
        <p class="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-slate-100/90 font-medium leading-relaxed">
          Factor 7 — faqatgina sayohat emas, bu hayotingizdagi eng yorqin xotiralarni yaratish san'atidir. 
          Biz bilan chegaralarni zabt eting.
        </p>
        
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/tours" class="bg-primary hover:bg-primary-dark text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-2xl shadow-emerald-500/20 hover:scale-105 active:scale-95">
            Turlarni ko'rish
          </Link>
          <Link href="/about" class="glass text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white/20 transition-all border-white/30">
            Biz haqimizda
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
        <div class="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
          <div class="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
});