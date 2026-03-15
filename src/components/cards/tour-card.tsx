import { component$ } from '@builder.io/qwik';

interface TourProps {
  title: string;
  image?: string | null;
  price: string;
  duration: string;
  category: string;
}

export default component$((props: TourProps) => {
  return (
    <div class="group relative bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-premium hover:shadow-hover transition-all duration-700 animate-reveal">
      {/* Image Container with Cinematic Zoom */}
      <div class="relative h-72 overflow-hidden">
        <img 
          src={props.image || '/tour.jpg'} 
          alt={props.title} 
          width={400}
          height={300}
          class="w-full h-full object-cover group-hover:scale-110 transition duration-1000" 
        />
        {/* Category Badge - Glassmorphism */}
        <div class="absolute top-6 left-6 glass px-5 py-2 rounded-2xl text-[10px] font-black text-emerald-700 uppercase tracking-widest">
          {props.category}
        </div>
        {/* Overlay for better text readability */}
        <div class="absolute inset-0 bg-linear-to-t from-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      </div>

      {/* Content Area */}
      <div class="p-8 relative bg-white">
        <div class="flex items-center gap-2 mb-4">
          <div class="w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span class="text-xs font-bold text-slate-400 uppercase tracking-widest">
            {props.duration}
          </span>
        </div>

        <h3 class="text-2xl font-black text-slate-900 mb-6 group-hover:text-primary transition-colors leading-tight">
          {props.title}
        </h3>

        <div class="flex justify-between items-end border-t border-slate-50 pt-6">
          <div class="space-y-1">
            <span class="text-[10px] text-slate-400 uppercase font-black tracking-widest">To'liq paket</span>
            <div class="text-3xl font-black text-primary">{props.price}</div>
          </div>
          <button class="bg-slate-900 text-white w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 hover:bg-primary shadow-xl hover:rotate-6 active:scale-90 active:-rotate-12 group-hover:translate-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
});
