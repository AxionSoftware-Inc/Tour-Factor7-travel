import { component$, useSignal, $ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  const isMenuOpen = useSignal(false);

  const toggleMenu = $(() => (isMenuOpen.value = !isMenuOpen.value));
  const closeMenu = $(() => (isMenuOpen.value = false));

  const menuLinks = [
    { name: 'Asosiy', href: '/' },
    { name: 'Turlar', href: '/tours' },
    { name: 'Biz haqimizda', href: '/about' },
    { name: 'Kontakt', href: '/contact' },
  ];

  return (
    <header class="bg-white sticky top-0 z-[100] border-b border-gray-100 w-full">
      <div class="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* LOGO - Har doim menyu ustida turishi uchun z-[120] */}
        <Link href="/" class="flex items-center gap-2 z-[120]" onClick$={closeMenu}>
          <img src="/logo.png" alt="Logo" width={40} height={40} class="w-8 h-8 md:w-10 md:h-10" />
          <span class="text-xl font-black text-gray-900 tracking-tighter uppercase">
            FACTOR<span class="text-green-600">7</span>
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav class="hidden md:flex space-x-8 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-600">
          {menuLinks.map((link) => (
            <Link key={link.name} href={link.href} class="hover:text-green-600 transition-colors">
              {link.name}
            </Link>
          ))}
        </nav>

        {/* GAMBURGER TUGMASI - z-[120] */}
        <button 
          onClick$={toggleMenu} 
          class="md:hidden z-[120] p-2 text-gray-900 focus:outline-none"
          aria-label="Menu"
        >
          <div class="w-6 h-5 relative flex flex-col justify-between">
            <span class={`h-0.5 w-full bg-current transition-all duration-300 ${isMenuOpen.value ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span class={`h-0.5 w-full bg-current transition-all duration-300 ${isMenuOpen.value ? 'opacity-0' : ''}`}></span>
            <span class={`h-0.5 w-full bg-current transition-all duration-300 ${isMenuOpen.value ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>

        {/* MOBIL MENYU - TO'LIQ OQ FON */}
        <div 
          class={`fixed inset-0 bg-white transition-all duration-500 ease-in-out md:hidden ${
            isMenuOpen.value ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-full'
          } z-[110]`}
        >
          <div class="flex flex-col h-full items-center justify-center p-8 space-y-10">
            {menuLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href}
                class="text-4xl font-black text-gray-900 uppercase tracking-tighter hover:text-green-600 transition-colors"
                onClick$={closeMenu}
              >
                {link.name}
              </Link>
            ))}
            
            <Link 
              href="/contact" 
              onClick$={closeMenu} 
              class="bg-green-600 text-white px-12 py-4 rounded-2xl font-bold text-lg shadow-2xl shadow-green-200 mt-6"
            >
              BOG'LANISH
            </Link>

            {/* Pastki qismdagi qo'shimcha info */}
            <div class="absolute bottom-12 flex flex-col items-center gap-2">
                <p class="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Factor7 Travel Agency</p>
                <p class="text-xs text-gray-500">+998 90 123 45 67</p>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
});