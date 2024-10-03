// src/app/components/Hero.js

import Link from 'next/link';

export default function Hero() {
  return (
    <section className='relative flex flex-col items-center justify-center text-center min-h-screen bg-white'>
      {/* Circular background shape */}
      <div className='absolute inset-0 flex justify-center items-center'>
        <div className='w-[600px] h-[600px] bg-blue-100 rounded-full opacity-50'></div>
      </div>

      <h1 className='text-blue-600 text-5xl font-bold relative z-10'>
        Symptosense
      </h1>
      <h2 className='text-black text-4xl font-extrabold mt-2 relative z-10'>
        Solusi AI untuk Memprediksi Kesehatanmu!
      </h2>
      <p className='mt-6 text-lg text-gray-600 relative z-10'>
        Dengan teknologi AI canggih, ketahui kondisi kesehatanmu lebih awal.{' '}
        <br />
        Bergabunglah dengan SymptoSense dan jaga kesehatanmu dengan lebih
        proaktif.
      </p>
      <button className='mt-8 bg-blue-600 text-white py-3 px-6 rounded-full text-lg relative z-10 flex items-center'>
        <Link href='SignIn' className='flex items-center'>
          Mulai <span className='ml-2'>→</span>
        </Link>
      </button>
    </section>
  );
}
