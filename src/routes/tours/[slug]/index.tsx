import { component$ } from '@builder.io/qwik';
import { Link, routeLoader$ } from '@builder.io/qwik-city';
import Footer from '~/components/layout/footer';
import Header from '~/components/layout/header';
import { getServerApiUrl } from '~/utils/api';
import { Tour, normalizeTour } from '~/utils/tours';

export const useTour = routeLoader$(async (requestEvent) => {
  const apiUrl = getServerApiUrl(
    requestEvent.url,
    requestEvent.env.get('PUBLIC_API_URL') || requestEvent.env.get('INTERNAL_API_URL'),
  );
  const backendUrl = apiUrl.replace('/api', '');
  const slug = requestEvent.params.slug;

  try {
    const response = await fetch(`${apiUrl}/tours/${slug}/`);

    if (response.status === 404) {
      requestEvent.status(404);
      return null;
    }

    if (!response.ok) {
      throw new Error(`API request failed with ${response.status}`);
    }

    const data = (await response.json()) as Tour;
    return normalizeTour(data, backendUrl);
  } catch (error) {
    console.error('Tour detail loader error:', error);
    requestEvent.status(500);
    return null;
  }
});

export default component$(() => {
  const tourSignal = useTour();
  const tour = tourSignal.value;

  if (!tour) {
    return (
      <div class="bg-white min-h-screen">
        <Header />
        <main class="container mx-auto px-6 py-24">
          <div class="max-w-2xl mx-auto text-center bg-slate-50 border border-slate-100 rounded-[2.5rem] p-12">
            <p class="text-xs font-black uppercase tracking-[0.35em] text-emerald-600 mb-4">404</p>
            <h1 class="text-4xl font-black text-slate-900 mb-4">Tur topilmadi</h1>
            <p class="text-slate-500 mb-8">
              So'ralgan tur mavjud emas yoki vaqtincha o'chirilgan bo'lishi mumkin.
            </p>
            <Link
              href="/tours"
              class="inline-flex items-center gap-3 rounded-2xl bg-slate-900 px-8 py-4 text-sm font-black uppercase tracking-widest text-white transition hover:bg-emerald-600"
            >
              Turlarga qaytish
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const detailParagraphs = tour.description
    .split('\n')
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
  const tourTags = tour.tags_names?.length
    ? tour.tags_names
    : ['Transfer', 'Joylashuv', "Yo'l ko'rsatma"];

  return (
    <div class="bg-white min-h-screen">
      <Header />

      <main>
        <section class="relative overflow-hidden bg-slate-950">
          <div class="absolute inset-0 bg-linear-to-br from-emerald-600/20 via-transparent to-amber-400/10"></div>
          <div class="container mx-auto px-6 py-16 lg:py-24 relative z-10">
            <Link
              href="/tours"
              class="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-xs font-black uppercase tracking-[0.3em] text-white/80 transition hover:border-emerald-400 hover:text-white"
            >
              <span aria-hidden="true">&lt;</span>
              Barcha turlar
            </Link>

            <div class="mt-8 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
              <div class="space-y-8 text-white">
                <div class="flex flex-wrap gap-3">
                  <span class="rounded-full bg-emerald-500/15 px-4 py-2 text-[11px] font-black uppercase tracking-[0.3em] text-emerald-200">
                    {tour.category_name}
                  </span>
                  <span class="rounded-full bg-white/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.3em] text-white/80">
                    {tour.duration}
                  </span>
                </div>

                <div>
                  <h1 class="max-w-3xl text-4xl font-black leading-tight text-white md:text-6xl">
                    {tour.title}
                  </h1>
                  <p class="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                    {tour.description}
                  </p>
                </div>

                <div class="grid gap-4 sm:grid-cols-3">
                  <div class="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xs">
                    <p class="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Narx</p>
                    <p class="mt-3 text-3xl font-black text-emerald-300">{tour.price || "So'rov asosida"}</p>
                  </div>
                  <div class="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xs">
                    <p class="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Davomiyligi</p>
                    <p class="mt-3 text-2xl font-black text-white">{tour.duration}</p>
                  </div>
                  <div class="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xs">
                    <p class="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Ko'rishlar</p>
                    <p class="mt-3 text-2xl font-black text-white">{tour.views || 0}</p>
                  </div>
                </div>

                <div class="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    class="inline-flex items-center justify-center rounded-2xl bg-emerald-500 px-8 py-4 text-sm font-black uppercase tracking-[0.2em] text-slate-950 transition hover:bg-emerald-400"
                  >
                    Bron qilish
                  </Link>
                  <Link
                    href="/tours"
                    class="inline-flex items-center justify-center rounded-2xl border border-white/15 px-8 py-4 text-sm font-black uppercase tracking-[0.2em] text-white transition hover:border-white hover:bg-white/5"
                  >
                    Boshqa turlar
                  </Link>
                </div>
              </div>

              <div class="relative">
                <div class="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-emerald-500/20 blur-3xl"></div>
                <div class="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-amber-300/20 blur-3xl"></div>
                <div class="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-xs">
                  <img
                    src={tour.image || '/tour.jpg'}
                    alt={tour.title}
                    width={900}
                    height={700}
                    class="h-[420px] w-full rounded-[2rem] object-cover md:h-[520px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="container mx-auto px-6 py-20">
          <div class="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div class="rounded-[2.5rem] border border-slate-100 bg-white p-10 shadow-sm">
              <p class="text-[11px] font-black uppercase tracking-[0.35em] text-emerald-600">
                Tur haqida
              </p>
              <h2 class="mt-4 text-3xl font-black text-slate-900">Sayohat tafsilotlari</h2>
              <div class="mt-6 space-y-5 text-base leading-8 text-slate-600">
                {(detailParagraphs.length ? detailParagraphs : [tour.description]).map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div class="space-y-8">
              <div class="rounded-[2.5rem] border border-slate-100 bg-slate-50 p-8">
                <p class="text-[11px] font-black uppercase tracking-[0.35em] text-slate-500">Asosiy ma'lumot</p>
                <div class="mt-6 space-y-5">
                  <div class="flex items-center justify-between gap-6 border-b border-slate-200 pb-4">
                    <span class="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">Kategoriya</span>
                    <span class="text-right text-lg font-black text-slate-900">{tour.category_name}</span>
                  </div>
                  <div class="flex items-center justify-between gap-6 border-b border-slate-200 pb-4">
                    <span class="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">Davomiyligi</span>
                    <span class="text-right text-lg font-black text-slate-900">{tour.duration}</span>
                  </div>
                  <div class="flex items-center justify-between gap-6">
                    <span class="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">Narx</span>
                    <span class="text-right text-lg font-black text-emerald-600">
                      {tour.price || "So'rov asosida"}
                    </span>
                  </div>
                </div>
              </div>

              <div class="rounded-[2.5rem] border border-emerald-100 bg-emerald-50 p-8">
                <p class="text-[11px] font-black uppercase tracking-[0.35em] text-emerald-700">Afzalliklar</p>
                <div class="mt-5 flex flex-wrap gap-3">
                  {tourTags.map((tag) => (
                    <span
                      key={tag}
                      class="rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-bold text-emerald-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p class="mt-6 text-sm leading-7 text-emerald-900/80">
                  Batafsil bron va safar rejasini aniqlashtirish uchun menejer bilan bog'laning.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
});
