import { component$ } from '@builder.io/qwik';
import Header from '~/components/layout/header';
import Footer from '~/components/layout/footer';

export default component$(() => {
  return (
    <div class="bg-white min-h-screen">
      <Header />
      
      <main>
        {/* 1. Internal Hero Section */}
        <section class="bg-green-50 py-16 border-b border-green-100">
          <div class="container mx-auto px-6 text-center">
            <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Biz Haqimizda
            </h1>
            <p class="text-green-700 font-medium tracking-wide uppercase text-sm">
              Sizning xavfsiz va maroqli sayohatingiz kafolati
            </p>
          </div>
        </section>

        {/* 2. Story & Mission */}
        <section class="py-20">
          <div class="container mx-auto px-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 class="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-green-600 pl-4">
                  Bizning Missiyamiz
                </h2>
                <p class="text-gray-600 leading-relaxed mb-6 text-lg">
                  TRAVELUZ jamoasi O'zbekistonning turizm salohiyatini dunyoga tanitish va vatandoshlarimizga dunyo bo'ylab eng yuqori darajadagi xizmatlarni taqdim etish maqsadida tashkil etilgan. 
                </p>
                <p class="text-gray-600 leading-relaxed mb-8">
                  Biz uchun har bir mijoz — bu shon-sharaf va mas'uliyat demakdir. Biz shunchaki tur sotmaymiz, biz unutilmas xotiralarni yaratishda ko'maklashamiz.
                </p>
                <div class="grid grid-cols-2 gap-6">
                  <div class="p-4 bg-green-50 rounded-2xl border border-green-100 text-center">
                    <div class="text-3xl font-bold text-green-700">1000+</div>
                    <div class="text-sm text-gray-500">Mamnun mijozlar</div>
                  </div>
                  <div class="p-4 bg-green-50 rounded-2xl border border-green-100 text-center">
                    <div class="text-3xl font-bold text-green-700">50+</div>
                    <div class="text-sm text-gray-500">Yo'nalishlar</div>
                  </div>
                </div>
              </div>
              <div class="relative">
                <div class="rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition duration-500">
                  <img src="https://i.pinimg.com/736x/20/98/8b/20988b8f1c41ca05a7e2b6ed1096bcee.jpg" alt="Sayohat" class="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Core Values (Qadriyatlar) */}
        <section class="py-20 bg-gray-50">
          <div class="container mx-auto px-6">
            <h2 class="text-3xl font-bold text-center mb-16">Nega bizni tanlashadi?</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                { title: "Ishonchlilik", desc: "Barcha xizmatlarimiz davlat litsenziyasiga ega va qonuniy asoslangan.", icon: "🛡️" },
                { title: "Sifat", desc: "Mehmonxonalar va transport vositalari eng yuqori standartlarga javob beradi.", icon: "⭐" },
                { title: "Narx", desc: "Mijozlarimiz uchun yashirin to'lovlarsiz eng shaffof narxlarni taklif etamiz.", icon: "💰" }
              ].map((val) => (
                <div key={val.title} class="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:border-green-300 transition group">
                  <div class="text-4xl mb-6 group-hover:scale-110 transition duration-300">{val.icon}</div>
                  <h3 class="text-xl font-bold mb-4 text-gray-900">{val.title}</h3>
                  <p class="text-gray-500 leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Legal / License Section (Litsenziya uchun maxsus) */}
        <section class="py-20">
          <div class="container mx-auto px-6 text-center">
            <div class="max-w-3xl mx-auto p-12 rounded-3xl border-2 border-dashed border-green-200 bg-green-50/30">
              <h2 class="text-2xl font-bold text-gray-900 mb-6">Rasmiy Ma'lumotlar</h2>
              <p class="text-gray-600 mb-8">
                Bizning faoliyatimiz O'zbekiston Respublikasi Turizm qo'mitasi tomonidan berilgan litsenziya asosida tartibga solinadi. Biz xalqaro turizm standartlariga to'liq rioya qilamiz.
              </p>
              <div class="flex flex-wrap justify-center gap-8 text-sm font-semibold text-green-800">
                <span class="flex items-center"><span class="w-2 h-2 bg-green-500 rounded-full mr-2"></span> STIR: ---</span>
                <span class="flex items-center"><span class="w-2 h-2 bg-green-500 rounded-full mr-2"></span> Litsenziya: № (Jarayonda)</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
});