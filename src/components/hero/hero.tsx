import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <section class="relative bg-gray-900 text-white py-24 px-4 overflow-hidden">
      {/* Background overlay */}
      <div class="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800')] bg-cover bg-center"></div>
      
      <div class="relative container mx-auto text-center">
        <h1 class="text-4xl md:text-6xl font-extrabold mb-6">
          Sayohatlaringizni Biz Bilan Rejalashtiring
        </h1>
        <p class="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-200">
          O'zbekistondagi eng ishonchli va litsenziyalangan turistik xizmatlar ko'rsatish markazi.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <a href="/tours" class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold transition">
            Turlarni ko'rish
          </a>
          <a href="/about" class="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white px-8 py-3 rounded-full font-bold transition border border-white/50">
            Batafsil ma'lumot
          </a>
        </div>
      </div>
    </section>
  );
});