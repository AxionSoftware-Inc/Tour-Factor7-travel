import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <section id="about" class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row items-center gap-12">
          <div class="md:w-1/2">
            <div class="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-green-700 uppercase bg-green-100 rounded-full">
              Kompaniya haqida
            </div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Sizning ishonchli sayohat hamkoringiz
            </h2>
            <p class="text-gray-600 leading-relaxed mb-6">
              Bizning turizm agentligimiz ko'p yillik tajribaga ega bo'lib, mijozlarimizga xavfsiz va unutilmas sayohatlarni taqdim etadi. Biz har bir turni shon-sharaf va mas'uliyat bilan tashkil qilamiz.
            </p>
            <ul class="space-y-4">
              {['Litsenziyalangan xizmatlar', '24/7 mijozlarni qo\'llab-quvvatlash', 'Eng hamyonbop narxlar'].map((item) => (
                <li key={item} class="flex items-center text-gray-700">
                  <svg class="w-5 h-5 mr-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div class="md:w-1/2 relative">
             <div class="aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                <img src="https://images.unsplash.com/photo-1436491865332-7a61a109c0f3" alt="Travel" class="w-full h-full object-cover" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
});