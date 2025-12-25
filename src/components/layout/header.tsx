import { component$, useSignal, $ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  // 1. Mobil menyu holati
  const isMenuOpen = useSignal(false);

  // 2. Menyuni yopish funksiyasi (QRL bilan o'ralgan)
  const closeMenu = $(() => {
    isMenuOpen.value = false;
  });

  // 3. Menyuni ochish/yopish funksiyasi (QRL bilan o'ralgan)
  const toggleMenu = $(() => {
    isMenuOpen.value = !isMenuOpen.value;
  });

  const navLinks = [
    { name: 'Asosiy', href: '/' },
    { name: 'Turlar', href: '/tours' },
    { name: 'Biz haqimizda', href: '/about' },
    { name: 'Kontakt', href: '/contact' },
  ];

  return (
    <header class="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-green-100">
      <div class="container mx-auto px-6 py-3 flex justify-between items-center">
        
        {/* LOGO QISMI */}
        <Link href="/" class="flex items-center gap-3 z-[60]" onClick$={closeMenu}>
          <img 
            src="/logo.png" 
            alt="Factor7 Travel Logo" 
            width={45} 
            height={45} 
            class="object-contain"
          />
          <div class="flex flex-col">
            <span class="text-xl font-black tracking-tighter text-gray-900 leading-none uppercase">
              FACTOR<span class="text-green-600">7</span>
            </span>
            <span class="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
              Travel Agency
            </span>
          </div>
        </Link>

        {/* DESKTOP NAVIGATSIYA (Kompyuter uchun) */}
        <nav class="hidden md:flex space-x-8 text-gray-600 font-bold text-xs uppercase tracking-widest">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href} 
              class="hover:text-green-600 transition-colors py-2 border-b-2 border-transparent hover:border-green-600"
              onClick$={closeMenu}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* O'NG TOMON: CTA VA GAMBURGER */}
        <div class="flex items-center gap-4">
          <Link 
            href="/contact" 
            class="hidden sm:block bg-green-600 text-white px-6 py-2.5 rounded-xl text-xs font-bold hover:bg-green-700 shadow-lg shadow-green-100 transition-all active:scale-95"
          >
            BOG'LANISH
          </Link>

          {/* Gamburger Tugmasi */}
          <button 
            type="button"
            aria-label="Menyuni ochish"
            class="md:hidden p-2 text-gray-600 z-[60] focus:outline-none"
            onClick$={toggleMenu}
          >
            <div class="relative w-6 h-5">
              <span class={`absolute block h-0.5 w-6 bg-current transform transition duration-500 ease-in-out ${isMenuOpen.value ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span class={`absolute block h-0.5 w-6 bg-current transform transition duration-500 ease-in-out top-2 ${isMenuOpen.value ? 'opacity-0' : ''}`}></span>
              <span class={`absolute block h-0.5 w-6 bg-current transform transition duration-500 ease-in-out top-4 ${isMenuOpen.value ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* MOBIL MENYU (Telefonda ochiladigan qismi) */}
      <div 
        class={`fixed inset-0 bg-white z-[50] flex flex-col items-center justify-center space-y-8 transition-transform duration-500 ease-in-out md:hidden ${
          isMenuOpen.value ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav class="flex flex-col items-center space-y-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href} 
              class="text-3xl font-black text-gray-900 hover:text-green-600 uppercase tracking-tighter transition-colors"
              onClick$={closeMenu}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/contact" 
            class="bg-green-600 text-white px-10 py-4 rounded-2xl font-bold shadow-xl active:scale-95 transition-transform"
            onClick$={closeMenu}
          >
            BOG'LANISH
          </Link>
        </nav>

        {/* Bezak uchun fon yozuvi */}
        <div class="absolute bottom-10 text-gray-100 font-black text-7xl select-none -z-10 uppercase">
          Factor7
        </div>
      </div>
    </header>
  );
});