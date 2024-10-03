// src/app/page.js
'use client';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Article from './components/Article';
import ObatVitamin from './components/ObatVitamin';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Artikel Terbaru Section */}
      <section id='artikel'>
        <Article />
      </section>

      {/* Obat & Vitamin Section */}
      <section id='obat'>
        <ObatVitamin />
      </section>

      {/* Footer */}
      <section id='about'>
        <Footer />
      </section>
    </div>
  );
}
