import { component$ } from '@builder.io/qwik';
import Header from '~/components/layout/header';
import Hero from '~/components/hero/hero'; // Avval yozgan yashil hero'ingizni ishlating
import About from '~/components/sections/about';
import Contact from '~/components/sections/contact';
import Footer from '~/components/layout/footer';

export default component$(() => {
  return (
    <div class="min-h-screen bg-white font-sans selection:bg-green-100 selection:text-green-900">
      <Header />
      <main>
        <Hero />
        <About />
        {/* Turlar bloki (avvalgi kodimizdagi kabi grid qilib qo'yishingiz mumkin) */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
});