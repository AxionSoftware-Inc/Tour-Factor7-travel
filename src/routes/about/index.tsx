import { component$ } from '@builder.io/qwik';
import Header from '~/components/layout/header';
import Footer from '~/components/layout/footer';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div class="bg-white min-h-screen font-sans selection:bg-emerald-500 selection:text-white">
      <Header />
      
      <main class="pt-20">
        {/* 1. Hero Section - Premium Dark Style */}
        <section class="relative bg-slate-950 py-24 md:py-32 overflow-hidden">
          {/* Background Effects */}
          <div class="absolute inset-0 opacity-20">
             <div class="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-600 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2"></div>
             <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>
             {/* Grid Pattern */}
             <div class="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:40px_40px] opacity-10"></div>
          </div>

          <div class="max-w-screen-xl mx-auto px-6 relative z-10 text-center md:text-left">
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8 backdrop-blur-md">
              <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Bizning Tariximiz
            </div>
            <h1 class="text-5xl md:text-7xl font-black text-white mb-8 uppercase tracking-tighter leading-none">
              Sizning ishonchli <br /> <span class="text-emerald-500 italic">Hamkoringiz</span>
            </h1>
            <p class="text-slate-400 text-lg md:text-xl max-w-2xl font-medium leading-relaxed border-l-4 border-emerald-600 pl-6">
              FACTOR7 — O'zbekistonning turizm salohiyatini dunyoga tanitish va vatandoshlarimizga xavfsiz, sifatli va unutilmas sayohatlarni taqdim etish maqsadida tashkil etilgan.
            </p>
          </div>
        </section>

        {/* 2. Mission & Director Section */}
        <section class="py-24 bg-white relative">
          <div class="max-w-screen-xl mx-auto px-6">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Image Block (Director & Atmosphere) */}
              <div class="relative">
                <div class="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-slate-50 relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop" 
                    alt="Office Atmosphere" 
                    class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                  />
                  
                  {/* Floating Director Card */}
                  <div class="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-xl p-6 rounded-3xl shadow-xl border border-white/50">
                     <p class="text-[10px] font-black uppercase tracking-widest text-emerald-600 mb-2">Bosh Direktor</p>
                     <h3 class="text-xl font-black text-slate-900 uppercase leading-tight mb-4">
                       Turobova Niginabonu <br/> Xasanboy qizi
                     </h3>
                     <div class="flex items-center gap-3 pt-4 border-t border-slate-100">
                        <div class="h-8 w-8 rounded-full bg-slate-900 flex items-center justify-center text-white text-xs">TN</div>
                        <span class="text-xs font-bold text-slate-500">Factor7 Travel Agency</span>
                     </div>
                  </div>
                </div>
                {/* Decorative Element */}
                <div class="absolute -z-10 top-12 -left-12 w-full h-full border-2 border-emerald-100 rounded-[3.5rem]"></div>
              </div>

              {/* Content Block */}
              <div class="space-y-10">
                <div>
                   <h2 class="text-4xl font-black text-slate-900 uppercase tracking-tighter mb-6 leading-tight">
                     Bizning <span class="text-emerald-600">Missiyamiz</span> va <br/> Maqsadimiz
                   </h2>
                   <div class="w-24 h-2 bg-slate-900 rounded-full"></div>
                </div>
                
                <div class="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">
                  <p>
                    Biz uchun har bir mijoz — bu shon-sharaf va ulkan mas'uliyat demakdir. Biz shunchaki tur sotmaymiz, biz sizning oilangiz va yaqinlaringiz uchun unutilmas xotiralarni yaratishda ko'maklashamiz.
                  </p>
                  <p>
                    Kompaniyamiz xalqaro turizm standartlariga to'liq rioya qilgan holda, eng so'nggi texnologiyalar va tajribali mutaxassislar yordamida xizmat ko'rsatadi.
                  </p>
                </div>

                {/* Stats Grid */}
                <div class="grid grid-cols-2 gap-6">
                  <div class="p-6 bg-slate-50 rounded-2xl border border-slate-100 text-center hover:bg-emerald-50 hover:border-emerald-200 transition-colors duration-300">
                    <div class="text-4xl font-black text-slate-900 mb-1">1000+</div>
                    <div class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Mamnun mijozlar</div>
                  </div>
                  <div class="p-6 bg-slate-50 rounded-2xl border border-slate-100 text-center hover:bg-emerald-50 hover:border-emerald-200 transition-colors duration-300">
                    <div class="text-4xl font-black text-slate-900 mb-1">50+</div>
                    <div class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Yo'nalishlar</div>
                  </div>
                </div>
                
                <Link href="/contact" class="inline-flex items-center gap-2 font-black text-sm uppercase tracking-widest text-slate-900 border-b-2 border-slate-900 pb-1 hover:text-emerald-600 hover:border-emerald-600 transition-all">
                  Biz bilan bog'lanish <span>→</span>
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* 3. Core Values (Why Us?) */}
        <section class="py-24 bg-slate-50">
          <div class="max-w-screen-xl mx-auto px-6">
            <div class="text-center mb-16">
               <h2 class="text-4xl font-black text-slate-900 uppercase tracking-tighter mb-4">Nega aynan biz?</h2>
               <p class="text-slate-500 font-medium max-w-2xl mx-auto">Sayohat davomida xotirjamlik va qulaylikni ta'minlovchi asosiy ustunlarimiz.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Rasmiy Faoliyat", desc: "Barcha xizmatlarimiz davlat litsenziyasiga ega va O'zbekiston qonunchiligi asosida himoyalangan.", icon: "⚖️" },
                { title: "Yuqori Sifat", desc: "Mehmonxonalar va transport vositalari eng yuqori standartlarga javob beradi. Biz faqat tekshirilgan hamkorlar bilan ishlaymiz.", icon: "💎" },
                { title: "Shaffof Narxlar", desc: "Mijozlarimiz uchun yashirin to'lovlarsiz eng shaffof va hamyonbop narxlarni taklif etamiz.", icon: "📊" }
              ].map((val) => (
                <div key={val.title} class="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:border-emerald-300 hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500 group">
                  <div class="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500">
                    {val.icon}
                  </div>
                  <h3 class="text-xl font-black text-slate-900 mb-4 uppercase tracking-tight">{val.title}</h3>
                  <p class="text-slate-500 leading-relaxed text-sm font-medium">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Official Info Block (Trust Section) */}
        <section class="py-24">
          <div class="max-w-screen-xl mx-auto px-6">
            <div class="bg-slate-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center md:text-left">
              {/* Decorative Glow */}
              <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-600/20 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
              
              <div class="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                 <div class="space-y-6 max-w-2xl">
                    <h2 class="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter">Rasmiy Ma'lumotlar</h2>
                    <p class="text-slate-400 font-medium leading-relaxed">
                      Bizning faoliyatimiz O'zbekiston Respublikasi Turizm qo'mitasi tomonidan berilgan litsenziya asosida tartibga solinadi. Biz xalqaro turizm standartlariga to'liq rioya qilamiz.
                    </p>
                    
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                       <div class="bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-sm">
                          <p class="text-[10px] text-emerald-400 uppercase font-black tracking-widest mb-1">STIR (INN)</p>
                          <p class="text-white font-mono text-lg font-bold">307 230 444</p>
                       </div>
                       <div class="bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-sm">
                          <p class="text-[10px] text-emerald-400 uppercase font-black tracking-widest mb-1">Pochta Indeksi</p>
                          <p class="text-white font-mono text-lg font-bold">100001</p>
                       </div>
                       <div class="bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-sm sm:col-span-2">
                          <p class="text-[10px] text-emerald-400 uppercase font-black tracking-widest mb-1">Yuridik Manzil</p>
                          <p class="text-white font-bold">Toshkent sh., Kichik halqa yo'li, 151A/1-uy</p>
                       </div>
                    </div>
                 </div>

                 {/* Certificate Icon / Graphic */}
                 <div class="shrink-0 relative group">
                    <div class="absolute inset-0 bg-emerald-500 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <div class="w-48 h-64 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex flex-col items-center justify-center p-6 text-center rotate-3 group-hover:rotate-0 transition-transform duration-500">
                       <div class="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center text-3xl mb-4 shadow-lg">📜</div>
                       <p class="text-xs font-bold text-white uppercase tracking-widest mb-1">Litsenziya</p>
                       <p class="text-[10px] text-emerald-300 font-bold uppercase">Jarayonda</p>
                    </div>
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