import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  const currentYear = new Date().getFullYear();

  return (
    <footer class="bg-slate-950 text-slate-400 pt-20 pb-10 border-t border-emerald-900/30 font-sans">
      <div class="max-w-screen-xl mx-auto px-6">
        
        {/* Main Grid */}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* 1. Brand & Mission */}
          <div class="space-y-6">
            <Link href="/" class="block">
              <span class="text-2xl font-black text-white tracking-tighter uppercase">
                TRAVEL<span class="text-emerald-500">UZ</span>
              </span>
            </Link>
            <p class="text-sm leading-relaxed font-medium">
              O'zbekistonda turizmni rivojlantirish va sifatli xizmat ko'rsatish bizning oliy maqsadimizdir.
            </p>
          </div>

          {/* 2. Menu */}
          <div>
            <h4 class="text-white font-black uppercase tracking-widest text-xs mb-6">Menyu</h4>
            <ul class="space-y-3 text-sm font-medium">
              <li><Link href="/" class="hover:text-emerald-500 transition-colors">Asosiy sahifa</Link></li>
              <li><Link href="/tours" class="hover:text-emerald-500 transition-colors">Turlar</Link></li>
              <li><Link href="/about" class="hover:text-emerald-500 transition-colors">Biz haqimizda</Link></li>
              <li><Link href="/contact" class="hover:text-emerald-500 transition-colors">Aloqa</Link></li>
            </ul>
          </div>

          {/* 3. Huquqiy Ma'lumot (YANGILANDI) */}
          <div>
            <h4 class="text-white font-black uppercase tracking-widest text-xs mb-6">Huquqiy Ma'lumot</h4>
            <ul class="space-y-3 text-sm font-medium">
              <li><Link href="/privacy" class="hover:text-white transition">Ommaviy oferta</Link></li>
              <li><Link href="/privacy" class="hover:text-white transition">Maxfiylik siyosati</Link></li>
              
              <li class="pt-4 mt-4 border-t border-white/10 space-y-3">
                 <div>
                   <span class="text-[10px] text-slate-500 uppercase block font-bold">STIR (INN)</span>
                   <span class="text-white font-mono">307 230 444</span>
                 </div>
                 <div>
                   <span class="text-[10px] text-slate-500 uppercase block font-bold">Direktor</span>
                   <span class="text-white text-xs">Turobova Niginabonu X.</span>
                 </div>
              </li>
            </ul>
          </div>

          {/* 4. Ofis va Ish vaqti (YANGILANDI) */}
          <div>
            <h4 class="text-white font-black uppercase tracking-widest text-xs mb-6">Aloqa</h4>
            <div class="space-y-5 text-sm font-medium">
              <div>
                <span class="block text-emerald-500 text-[10px] font-black uppercase mb-1">Manzil:</span>
                <p class="leading-tight text-white">Toshkent sh., Kichik halqa yo'li, 151A/1-uy</p>
                <p class="text-slate-500 text-[10px] mt-1 italic">Indeks: 100001</p>
              </div>
              <div>
                <span class="block text-emerald-500 text-[10px] font-black uppercase mb-1">Ish vaqti:</span>
                <p>Dush - Shan: 09:00 - 18:00</p>
                <p class="text-slate-500 mt-1">Yakshanba: Dam olish</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div class="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-slate-500">
          <p>© {currentYear} TRAVELUZ. Barcha huquqlar himoyalangan.</p>
          <div class="flex gap-6">
             <a href="#" class="hover:text-emerald-500 transition">Instagram</a>
             <a href="#" class="hover:text-emerald-500 transition">Telegram</a>
             <a href="#" class="hover:text-emerald-500 transition">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
});