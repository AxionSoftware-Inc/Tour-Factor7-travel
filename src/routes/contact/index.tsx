import { component$, useSignal, $ } from '@builder.io/qwik';
import Header from '~/components/layout/header';
import Footer from '~/components/layout/footer';

export default component$(() => {
  // Formani yuborish holati (hozircha vizual)
  const isSending = useSignal(false);

  const handleSubmit = $(async (e: Event) => {
    // Bu yerda keyinchalik Django API ga ulaymiz
    isSending.value = true;
    await new Promise(resolve => setTimeout(resolve, 2000)); // Imitatsiya
    isSending.value = false;
    alert("Xabar yuborildi!");
  });

  return (
    <div class="bg-white min-h-screen font-sans selection:bg-emerald-500 selection:text-white">
      <Header />
      
      <main class="pt-20">
        {/* 1. Hero Section - Premium Dark */}
        <section class="relative bg-slate-950 py-20 overflow-hidden">
          <div class="absolute inset-0 opacity-10">
             <div class="absolute right-0 top-0 w-[600px] h-[600px] bg-emerald-600 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2"></div>
          </div>
          <div class="max-w-screen-xl mx-auto px-6 relative z-10 text-center">
            <h1 class="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter">
              Biz bilan <span class="text-emerald-500 italic">Bog'laning</span>
            </h1>
            <p class="text-slate-400 max-w-2xl mx-auto text-lg font-medium">
              Sizni qiziqtirgan barcha savollarga javob berishga va individual sayohat rejasini tuzishga tayyormiz.
            </p>
          </div>
        </section>

        {/* 2. Main Content: Form & Info */}
        <section class="py-20 bg-slate-50">
          <div class="max-w-screen-xl mx-auto px-6">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Chap taraf: Kontakt Ma'lumotlari */}
              <div class="lg:col-span-5 space-y-8">
                {/* Info Card */}
                <div class="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
                  <h3 class="text-xl font-black text-slate-900 mb-6 uppercase tracking-tight">Ofisimizga tashrif buyuring</h3>
                  
                  <div class="space-y-6">
                    <div class="flex items-start gap-4">
                      <div class="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      </div>
                      <div>
                        <p class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Manzil</p>
                        <p class="text-slate-900 font-medium leading-relaxed">
                          Toshkent sh., Kichik halqa yo'li, 151A/1-uy <br/>
                          (Pochta indeksi: 100001)
                        </p>
                      </div>
                    </div>

                    <div class="flex items-start gap-4">
                      <div class="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                      </div>
                      <div>
                        <p class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Telefon</p>
                        <p class="text-slate-900 font-bold text-lg">+998 (99) 242 22 44</p>
                      </div>
                    </div>

                    <div class="flex items-start gap-4">
                      <div class="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      </div>
                      <div>
                        <p class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email</p>
                        <p class="text-slate-900 font-medium">Shabuka0707@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Director Info Block */}
                <div class="bg-slate-900 p-8 rounded-[2rem] text-white relative overflow-hidden">
                   <div class="absolute -right-6 -bottom-6 w-32 h-32 bg-emerald-500 rounded-full blur-[50px] opacity-30"></div>
                   <p class="text-[10px] font-black uppercase tracking-widest text-emerald-500 mb-2">Bosh Direktor</p>
                   <h4 class="text-lg font-bold uppercase leading-tight mb-4">Turobova Niginabonu <br/> Xasanboy qizi</h4>
                   <div class="h-px w-full bg-white/10 mb-4"></div>
                   <div class="flex justify-between items-end">
                      <div>
                        <p class="text-[10px] text-slate-400 uppercase">STIR (INN)</p>
                        <p class="font-mono text-lg">307 230 444</p>
                      </div>
                      <div class="text-right">
                        <p class="text-[10px] text-slate-400 uppercase">Litsenziya</p>
                        <p class="text-emerald-400 text-sm font-bold">Jarayonda</p>
                      </div>
                   </div>
                </div>
              </div>

              {/* O'ng taraf: Forma va Xarita */}
              <div class="lg:col-span-7 flex flex-col gap-8">
                {/* Forma */}
                <div class="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]">
                  <h3 class="text-2xl font-black text-slate-900 mb-8">Xabar yuborish</h3>
                  <form preventdefault:submit onSubmit$={handleSubmit} class="space-y-6">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div class="space-y-2">
                         <label class="text-xs font-bold text-slate-500 uppercase ml-3">Ismingiz</label>
                         <input type="text" class="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-emerald-500 outline-none font-bold text-slate-900 transition-all" placeholder="Ismingizni kiriting" />
                      </div>
                      <div class="space-y-2">
                         <label class="text-xs font-bold text-slate-500 uppercase ml-3">Telefon</label>
                         <input type="tel" class="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-emerald-500 outline-none font-bold text-slate-900 transition-all" placeholder="+998" />
                      </div>
                    </div>
                    <div class="space-y-2">
                       <label class="text-xs font-bold text-slate-500 uppercase ml-3">Xabar matni</label>
                       <textarea rows={4} class="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-emerald-500 outline-none font-bold text-slate-900 transition-all resize-none" placeholder="Savolingizni yozing..."></textarea>
                    </div>
                    <button type="submit" class="w-full bg-slate-900 text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-900/10">
                      {isSending.value ? 'Yuborilmoqda...' : 'Yuborish'}
                    </button>
                  </form>
                </div>

                {/* Map */}
                <div class="h-[300px] w-full bg-slate-200 rounded-[2.5rem] overflow-hidden border-4 border-white shadow-xl relative group">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.0!2d69.2!3d41.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDE4JzAwLjAiTiA2OcKwMTInMDAuMCJF!5e0!3m2!1sen!2suz!4v1600000000000!5m2!1sen!2suz" 
                      width="100%" 
                      height="100%" 
                      style="border:0; filter: grayscale(100%) invert(90%) contrast(120%);" 
                      allowFullscreen={true} 
                      loading="lazy" 
                      class="group-hover:filter-none transition-all duration-700"
                    ></iframe>
                     <div class="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-xl text-xs font-bold shadow-md">
                        📍 Kichik halqa yo'li, 151A/1
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