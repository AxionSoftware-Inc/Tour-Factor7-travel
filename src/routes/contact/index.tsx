import { component$ } from '@builder.io/qwik';
import Header from '~/components/layout/header';
import Footer from '~/components/layout/footer';

export default component$(() => {
  return (
    <div class="bg-white min-h-screen">
      <Header />
      
      <main>
        {/* 1. Header Section */}
        <section class="bg-green-600 py-20 text-white">
          <div class="container mx-auto px-6 text-center">
            <h1 class="text-4xl md:text-5xl font-bold mb-4">Biz bilan bog'laning</h1>
            <p class="text-green-100 max-w-2xl mx-auto text-lg">
              Sizni qiziqtirgan barcha savollarga javob berishga tayyormiz. Bizning ofisimizga tashrif buyuring yoki qo'ng'iroq qiling.
            </p>
          </div>
        </section>

        {/* 2. Contact Info Cards */}
        <section class="py-12 -mt-12">
          <div class="container mx-auto px-6">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Phone Card */}
              <div class="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 text-center hover:border-green-300 transition group">
                <div class="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-600 group-hover:text-white transition duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 class="text-xl font-bold mb-2">Telefon</h3>
                <p class="text-gray-600">+998 (99) 242 22 44</p>
              </div>

              {/* Address Card */}
              <div class="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 text-center hover:border-green-300 transition group">
                <div class="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-600 group-hover:text-white transition duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 class="text-xl font-bold mb-2">Manzil</h3>
                <p class="text-gray-600">Toshkent sh., Olmazor tumani,</p>
                <p class="text-gray-600">BERUNIY B-3 MAVZESI, 41-UY</p>
              </div>

              {/* Email Card */}
              <div class="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 text-center hover:border-green-300 transition group">
                <div class="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-600 group-hover:text-white transition duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 class="text-xl font-bold mb-2">Elektron pochta</h3>
                <p class="text-gray-600">Shabuka0707@gmail.com</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Map & Form Section */}
        <section class="py-20">
          <div class="container mx-auto px-6">
            <div class="flex flex-col lg:flex-row gap-12">
              {/* Contact Form */}
              <div class="lg:w-1/2">
                <h2 class="text-3xl font-bold mb-8 text-gray-900">Xabar yuboring</h2>
                <form class="space-y-6">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label class="block text-sm font-semibold text-gray-700 mb-2">To'liq ismingiz</label>
                      <input type="text" class="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-green-500 outline-none transition" placeholder="Masalan: Alisher Vohidov" />
                    </div>
                    <div>
                      <label class="block text-sm font-semibold text-gray-700 mb-2">Telefon raqamingiz</label>
                      <input type="tel" class="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-green-500 outline-none transition" placeholder="+998" />
                    </div>
                  </div>
                  <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-2">Mavzu</label>
                    <input type="text" class="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-green-500 outline-none transition" placeholder="Tur bo'yicha savol" />
                  </div>
                  <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-2">Sizning xabaringiz</label>
                    <textarea rows={5} class="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-green-500 outline-none transition resize-none" placeholder="Xabaringizni bu yerga yozing..."></textarea>
                  </div>
                  <button type="submit" class="bg-green-600 text-white px-10 py-4 rounded-2xl font-bold hover:bg-green-700 shadow-lg shadow-green-200 transition duration-300 w-full md:w-auto">
                    Xabarni yuborish
                  </button>
                </form>
              </div>

              {/* Map Holder */}
              <div class="lg:w-1/2">
                <h2 class="text-3xl font-bold mb-8 text-gray-900">Bizning joylashuv</h2>
                <div class="w-full h-[450px] bg-gray-100 rounded-3xl overflow-hidden shadow-inner border border-gray-100 relative">
                  {/* Google Maps Embed kodi shu yerga tushadi */}
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11992.834610125433!2d69.2039572!3d41.2781682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb03fd2792628ad%3A0x6e2f12f2c8d50456!2z0KfQuNC70L7QvdC30L7RgCwg0KLQvtGI0LrQtdC90YIsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1suz!2s!4v1700000000000" 
                    width="100%" 
                    height="100%" 
                    style="border:0;" 
                    allowFullscreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                  </iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
});