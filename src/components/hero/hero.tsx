import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <section class="relative bg-gray-900 text-white py-20 md:py-32 px-6 overflow-hidden">
      {/* Background overlay - Rasm markazda va sifatli ko'rinishi uchun */}
      <div class="absolute inset-0 opacity-50 bg-[url('https://chip.travel/uploads/blog/i/mOAnTvpnNP689353495a5a9.jpg')] bg-cover bg-center scale-105"></div>
      
      {/* Gradient overlay - Matn yaxshi o'qilishi uchun */}
      <div class="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-transparent to-gray-900/80"></div>

      <div class="relative container mx-auto text-center z-10">
        <h1 class="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-[1.1] tracking-tighter uppercase">
          Sayohatlaringizni <br class="hidden md:block" /> <span class="text-green-500">Biz Bilan</span> Rejalashtiring
        </h1>
        <p class="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-gray-200 font-medium">
          O'zbekistondagi eng ishonchli va litsenziyalangan turistik xizmatlar ko'rsatish markazi.
        </p>
        
        {/* Tugmalar: Mobilda ustma-ust, kichik ekrandan boshlab yonma-yon */}
        <div class="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <a href="/tours" class="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-2xl font-bold transition-all transform active:scale-95 shadow-xl shadow-green-900/20">
            Turlarni ko'rish
          </a>
          <a href="/about" class="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-10 py-4 rounded-2xl font-bold transition-all border border-white/30 active:scale-95">
            Batafsil ma'lumot
          </a>
        </div>
      </div>
    </section>
  );
});