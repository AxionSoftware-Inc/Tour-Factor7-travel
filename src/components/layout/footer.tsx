import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <footer class="bg-gray-900 text-gray-400 py-12 border-t-4 border-green-600">
      <div class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        <div class="col-span-1 md:col-span-1">
          <div class="text-2xl font-bold text-white mb-4">TRAVEL<span class="text-green-500">UZ</span></div>
          <p>O'zbekistonda turizmni rivojlantirish va sifatli xizmat ko'rsatish bizning oliy maqsadimizdir.</p>
        </div>
        <div>
          <h4 class="text-white font-bold mb-4 uppercase text-xs">Menyu</h4>
          <ul class="space-y-2">
            <li><a href="/" class="hover:text-green-400">Asosiy</a></li>
            <li><a href="#about" class="hover:text-green-400">Biz haqimizda</a></li>
            <li><a href="#contact" class="hover:text-green-400">Litsenziya</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-white font-bold mb-4 uppercase text-xs">Huquqiy</h4>
          <ul class="space-y-2">
            <li>Ommaviy oferta</li>
            <li>Maxfiylik siyosati</li>
            <li>STIR: 301234567</li>
          </ul>
        </div>
        <div>
          <h4 class="text-white font-bold mb-4 uppercase text-xs">Ish vaqti</h4>
          <p>Dush - Shan: 09:00 - 18:00</p>
          <p>Yakshanba: Dam olish kuni</p>
        </div>
      </div>
      <div class="container mx-auto px-6 mt-12 pt-8 border-t border-gray-800 text-center">
        © 2025 TRAVELUZ. Barcha huquqlar himoyalangan.
      </div>
    </footer>
  );
});