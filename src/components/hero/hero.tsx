import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <section class="relative w-full min-h-[92vh] flex items-center justify-center overflow-hidden bg-slate-950 text-white">
      <div
        class="absolute inset-0 z-0 bg-cover bg-center scale-110"
        style={{ backgroundImage: "url('/tour.jpg')" }}
      ></div>
      <div class="absolute inset-0 z-0 bg-linear-to-b from-slate-950/78 via-slate-950/58 to-slate-950/92"></div>
      <div class="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.22),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(245,158,11,0.18),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_22%)]"></div>
      <div class="absolute -left-24 top-24 z-0 h-72 w-72 rounded-full bg-emerald-400/18 blur-3xl"></div>
      <div class="absolute -right-20 bottom-16 z-0 h-64 w-64 rounded-full bg-amber-300/12 blur-3xl"></div>

      <div class="relative z-10 container mx-auto px-6">
        <div class="mx-auto max-w-5xl text-center animate-reveal">
          <div class="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-emerald-200">
            <span class="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Premium yo'nalishlar va tayyor paketlar
          </div>

          <h1 class="mt-8 text-5xl font-black uppercase tracking-tighter md:text-8xl leading-[0.9]">
            Sayohat
            <br />
            <span class="text-gradient drop-shadow-[0_16px_50px_rgba(16,185,129,0.35)]">
              Yangi O'lchamda
            </span>
          </h1>

          <p class="mx-auto mt-8 max-w-3xl text-lg font-medium leading-relaxed text-slate-100/90 md:text-xl">
            Factor 7 faqatgina sayohat emas, bu hayotingizdagi eng yorqin xotiralarni yaratish san'atidir.
            Biz bilan yangi manzillarni ishonch bilan kashf eting.
          </p>

          <div class="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/tours" class="rounded-2xl bg-primary px-10 py-5 text-sm font-black uppercase tracking-widest text-white shadow-2xl shadow-emerald-500/20 transition-all hover:scale-105 hover:bg-primary-dark active:scale-95">
              Turlarni ko'rish
            </Link>
            <Link href="/about" class="rounded-2xl border border-white/30 glass px-10 py-5 text-sm font-black uppercase tracking-widest text-white transition-all hover:bg-white/20">
              Biz haqimizda
            </Link>
          </div>

          <div class="mt-14 grid gap-4 text-left sm:grid-cols-3">
            <div class="rounded-[1.75rem] border border-white/10 bg-white/8 p-5 backdrop-blur-md">
              <p class="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-200">Yo'nalishlar</p>
              <p class="mt-3 text-2xl font-black text-white">Umra, Turkiya, ichki turizm</p>
            </div>
            <div class="rounded-[1.75rem] border border-white/10 bg-white/8 p-5 backdrop-blur-md">
              <p class="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-200">Xizmat</p>
              <p class="mt-3 text-2xl font-black text-white">Viza, transfer, joylashuv</p>
            </div>
            <div class="rounded-[1.75rem] border border-white/10 bg-white/8 p-5 backdrop-blur-md">
              <p class="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-200">Qo'llab-quvvatlash</p>
              <p class="mt-3 text-2xl font-black text-white">Safar davomida hamroh menejer</p>
            </div>
          </div>
        </div>
      </div>

      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
        <div class="flex h-10 w-6 justify-center rounded-full border-2 border-white/30 p-2">
          <div class="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
});
