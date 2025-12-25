import { component$ } from '@builder.io/qwik';
import Header from '~/components/layout/header';
import Footer from '~/components/layout/footer';
import TourCard from '~/components/cards/tour-card';

export default component$(() => {
  // Mock ma'lumotlar (Buni keyinchalik Django API'dan olasiz)
  const tours = [
    { title: "Antaliya Sayohati", category: "Plyaj", duration: "7 kun / 6 kecha", price: "$450", image: "https://images.unsplash.com/photo-15420518418c7-d19301017062" },
    { title: "Umra Safari 2025", category: "Ziyorat", duration: "14 kun", price: "$1200", image: "https://images.unsplash.com/photo-1564769662533-4f00a87b4056" },
    { title: "Yevropa Bo'ylab", category: "Ekshursiya", duration: "10 kun", price: "$1500", image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b" },
    { title: "Misr Piramidalari", category: "Tarix", duration: "5 kun", price: "$380", image: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368" },
    { title: "Dubay", category: "Hordiq", duration: "4 kun", price: "$700", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c" },
    { title: "Samarqand & Buxoro", category: "Ichki", duration: "3 kun", price: "2 mln so'm", image: "https://images.unsplash.com/photo-1528154291023-a6525fabe5b4" },
  ];

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

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {tours.map((tour, index) => (
                <TourCard 
                  key={index}
                  title={tour.title}
                  image={tour.image}
                  price={tour.price}
                  duration={tour.duration}
                  category={tour.category}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action (CTA) */}
        <section class="container mx-auto px-6 mb-20">
          <div class="bg-green-600 rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
             <div class="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
             <h2 class="text-3xl font-bold mb-6 relative z-10">Maxsus tur paket kerakmi?</h2>
             <p class="mb-8 text-green-100 relative z-10">Biz bilan bog'laning va biz sizning xohishingizga ko'ra individual tur shakllantirib beramiz.</p>
             <button class="bg-white text-green-700 px-10 py-4 rounded-2xl font-bold hover:bg-gray-100 transition relative z-10 shadow-xl">
               Menejer bilan bog'lanish
             </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
});