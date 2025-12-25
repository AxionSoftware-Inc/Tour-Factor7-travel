import { component$ } from '@builder.io/qwik';

interface TourProps {
  title: string;
  image: string;
  price: string;
  duration: string;
  category: string;
}

export default component$((props: TourProps) => {
  return (
    <div class="group bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
      {/* Rasm qismi */}
      <div class="relative h-64 overflow-hidden">
        <img 
          src={props.image} 
          alt={props.title} 
          class="w-full h-full object-cover group-hover:scale-110 transition duration-700" 
        />
        <div class="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1 rounded-full text-xs font-bold text-green-700 uppercase tracking-widest">
          {props.category}
        </div>
      </div>

      {/* Ma'lumot qismi */}
      <div class="p-8">
        <div class="flex justify-between items-center mb-4">
          <span class="text-sm text-gray-400 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {props.duration}
          </span>
        </div>
        <h3 class="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition">
          {props.title}
        </h3>
        <div class="flex justify-between items-center border-t border-gray-50 pt-6">
          <div>
            <span class="text-gray-400 text-xs block uppercase font-semibold">Narxi</span>
            <span class="text-2xl font-black text-green-600">{props.price}</span>
          </div>
          <button class="bg-gray-900 text-white p-3 rounded-xl hover:bg-green-600 transition shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
});