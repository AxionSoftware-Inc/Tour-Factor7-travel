import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import Header from '~/components/layout/header';
import Footer from '~/components/layout/footer';
import TourCard from '~/components/cards/tour-card';
import { Link } from 'flowbite-qwik';
import { getServerApiUrl } from '~/utils/api';

// Tour interfeysi
interface Tour {
  id: number;
  title: string;
  category_name: string;
  duration: string;
  price: string;
  image: string | null;
  slug: string;
}

const FALLBACK_TOUR_IMAGE = '/travel_hero_background_1773558886260.png';

export const useTours = routeLoader$(async (requestEvent) => {
  const apiUrl = getServerApiUrl(
    requestEvent.url,
    requestEvent.env.get('PUBLIC_API_URL') || requestEvent.env.get('INTERNAL_API_URL')
  );
  const backendUrl = apiUrl.replace('/api', '');

  try {
    const response = await fetch(`${apiUrl}/tours/`);
    if (!response.ok) {
      throw new Error('API request failed');
    }

    const data = await response.json();
    return (data as Tour[]).map((tour) => ({
      ...tour,
      image: tour.image
        ? tour.image.startsWith('http')
          ? tour.image
          : `${backendUrl}${tour.image}`
        : FALLBACK_TOUR_IMAGE,
    }));
  } catch (error) {
    console.error('Tours loader error:', error);
    return [];
  }
});

export default component$(() => {
  const toursSignal = useTours();

  return (
    <div class="bg-white min-h-screen">
      <Header />
      
      <main>
        {/* Sahifa Sarlavhasi */}
        <section class="py-20 bg-gray-50 border-b border-gray-100">
          <div class="container mx-auto px-6">
            <h1 class="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Bizning <span class="text-green-600">Turlarimiz</span>
            </h1>
            <p class="text-gray-500 text-lg max-w-2xl">
              Dunyoning istalgan nuqtasiga eng ishonchli va sifatli turlarni taqdim etamiz. O'zingizga mos yo'nalishni tanlang.
            </p>
          </div>
        </section>

        {/* Turlar Gridi */}
        <section class="py-20">
          <div class="container mx-auto px-6">
            {/* Filter (Vizual uchun) */}
            <div class="flex flex-wrap gap-4 mb-12">
              {['Barchasi', 'Ziyorat', 'Ekshursiya', 'Ichki'].map((cat) => (
                <button key={cat} class="px-6 py-2 rounded-full border border-gray-200 text-sm font-bold hover:bg-green-600 hover:text-white hover:border-green-600 transition">
                  {cat}
                </button>
              ))}
            </div>

            {toursSignal.value.length > 0 ? (
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {toursSignal.value.map((tour) => (
                  <TourCard 
                    key={tour.id}
                    title={tour.title}
                    image={tour.image}
                    price={tour.price}
                    duration={tour.duration}
                    category={tour.category_name}
                  />
                ))}
              </div>
            ) : (
              <div class="text-center py-20">
                <h3 class="text-2xl font-bold text-gray-500">Hozircha turlar mavjud emas.</h3>
                <p class="text-gray-400 mt-2">Tez orada yangi turlarni qo'shamiz!</p>
              </div>
            )}
          </div>
        </section>

        {/* Call to Action (CTA) */}
        <section class="container mx-auto px-6 mb-20">
          <div class="bg-green-600 rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
             <div class="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
             <h2 class="text-3xl font-bold mb-6 relative z-10">Maxsus tur paket kerakmi?</h2>
             <p class="mb-8 text-green-100 relative z-10">Biz bilan bog'laning va biz sizning xohishingizga ko'ra individual tur shakllantirib beramiz.</p>
             <Link href="/contact" class="bg-white text-green-700 px-10 py-4 rounded-2xl font-bold hover:bg-gray-100 transition relative z-10 shadow-xl">
               Menejer bilan bog'lanish
             </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
});
