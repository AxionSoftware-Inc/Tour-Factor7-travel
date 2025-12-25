import { component$ } from "@builder.io/qwik";
import { Link } from "flowbite-qwik";

export default component$(() => {
  return (
    <section class="relative w-full bg-gray-900 text-white py-16 md:py-32 px-4 overflow-hidden">
      {/* Background */}
      <div class="absolute inset-0 opacity-40 bg-[url('https://chip.travel/uploads/blog/i/mOAnTvpnNP689353495a5a9.jpg')] bg-cover bg-center"></div>
      
      <div class="relative max-w-screen-xl mx-auto text-center z-10">
        {/* Sarlavha: Mobilda text-3xl, Kompyuterda text-6xl */}
        <h1 class="text-3xl md:text-6xl font-black mb-4 leading-tight uppercase tracking-tighter">
          Sayohatlaringizni <br /> <span class="text-green-500">Biz Bilan</span> Rejalashtiring
        </h1>
        
        {/* Ta'rif: Mobilda kichraytirilgan */}
        <p class="text-sm md:text-lg mb-8 max-w-lg mx-auto text-gray-300 px-4">
          O'zbekistondagi eng ishonchli va litsenziyalangan turistik xizmatlar markazi.
        </p>
        
        {/* Tugmalar: Mobilda yonma-yon emas, ustma-ust bo'lgani ma'qul */}
        <div class="flex flex-col sm:flex-row justify-center gap-3 px-6">
          <Link href="/tours" class="bg-green-600 text-white px-8 py-3.5 rounded-xl font-bold text-sm transition">
            Turlarni ko'rish
          </Link>
          <Link href="/about" class="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-3.5 rounded-xl font-bold text-sm">
            Batafsil ma'lumot
          </Link>
        </div>
      </div>
    </section>
  );
});