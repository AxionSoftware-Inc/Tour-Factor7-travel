import { component$ } from '@builder.io/qwik';

export default component$(() => {
  // Google Maps manzili (Toshkent markazi misolida)
  // O'zingizning ofisingiz koordinatalarini "Share > Embed map" orqali olib, src qismiga qo'yishingiz mumkin
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.9!2d69.2064!3d41.3535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8db6d85918bb%3A0xc3b44615d183857e!2sBeruniy%20B-3!5e0!3m2!1sen!2suz!4v1703510000000";

  return (
    <section id="contact" class="py-24 bg-white">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Biz bilan bog'laning
          </h2>
          <p class="text-gray-500 max-w-2xl mx-auto">
            Sayohat bo'yicha savollaringiz bormi? Ma'lumotlaringizni qoldiring, biz sizga tez fursatda aloqaga chiqamiz.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* 1. Aloqa Formasi */}
          <div class="bg-gray-50 p-8 md:p-10 rounded-[2rem] border border-gray-100 shadow-sm">
            <form class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-bold text-gray-700 mb-2">Ismingiz</label>
                  <input 
                    type="text" 
                    placeholder="Alisher" 
                    class="w-full px-5 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label class="block text-sm font-bold text-gray-700 mb-2">Telefon</label>
                  <input 
                    type="tel" 
                    placeholder="+998" 
                    class="w-full px-5 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                  />
                </div>
              </div>
              <div>
                <label class="block text-sm font-bold text-gray-700 mb-2">Xabar</label>
                <textarea 
                  rows={4} 
                  placeholder="Sizni qaysi yo'nalish qiziqtiryapti?" 
                  class="w-full px-5 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition resize-none"
                ></textarea>
              </div>
              <button class="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-green-200 transition duration-300">
                Arizani yuborish
              </button>
            </form>
          </div>

          {/* 2. Xarita (Google Maps) */}
          <div class="w-full h-full min-h-[400px] lg:min-h-[500px] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white group relative">
            <div class="absolute inset-0 bg-green-600/5 pointer-events-none group-hover:bg-transparent transition duration-500"></div>
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style="border:0;"
              allowFullscreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              class="grayscale-[20%] hover:grayscale-0 transition duration-500"
            ></iframe>
            
            {/* Manzil haqida kichik info box (Floating) */}
            <div class="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-green-100 hidden md:block">
              <div class="flex items-start gap-4">
                <div class="bg-green-600 p-3 rounded-lg text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-bold text-gray-900">Factor7 Travel Ofisi</h4>
                  <p class="text-sm text-gray-600">Olmazor tumani, Beruniy B-3 mavzesi, 41-uy, 5-xona</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
});