import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city'; // Sahifalararo o'tish uchun

export default component$(() => {
  return (
    <header class="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-green-100">
      <div class="container mx-auto px-6 py-3 flex justify-between items-center">
        
        {/* Logo va Brend nomi */}
        <Link href="/" class="flex items-center gap-3 group">
          <img 
            src="/logo.png" 
            alt="Factor7 Travel Logo" 
            width={45} 
            height={45} 
            class="object-contain group-hover:rotate-6 transition-transform duration-300"
          />
          <div class="flex flex-col">
            <span class="text-xl font-black tracking-tighter text-gray-900 leading-none">
              FACTOR<span class="text-green-600">7</span>
            </span>
            <span class="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
              Travel Agency
            </span>
          </div>
        </Link>

        {/* Navigatsiya Linklari */}
        <nav class="hidden md:flex space-x-8 text-gray-600 font-bold text-xs uppercase tracking-widest">
          <Link 
            href="/" 
            class="hover:text-green-600 transition-colors py-2 border-b-2 border-transparent hover:border-green-600"
          >
            Asosiy
          </Link>
          <Link 
            href="/tours" 
            class="hover:text-green-600 transition-colors py-2 border-b-2 border-transparent hover:border-green-600"
          >
            Turlar
          </Link>
          <Link 
            href="/about" 
            class="hover:text-green-600 transition-colors py-2 border-b-2 border-transparent hover:border-green-600"
          >
            Biz haqimizda
          </Link>
          <Link 
            href="/contact" 
            class="hover:text-green-600 transition-colors py-2 border-b-2 border-transparent hover:border-green-600"
          >
            Kontakt
          </Link>
        </nav>

        {/* CTA Tugmasi */}
        <div class="flex items-center gap-4">
          <Link 
            href="/contact" 
            class="hidden sm:block bg-green-600 text-white px-6 py-2.5 rounded-xl text-xs font-bold hover:bg-green-700 shadow-lg shadow-green-100 transition-all active:scale-95"
          >
            BOG'LANISH
          </Link>
          
          {/* Mobil Menyu Tugmasi (Gamburger) */}
          <button class="md:hidden p-2 text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

      </div>
    </header>
  );
});