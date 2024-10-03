// src/app/components/Navbar.js
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-white shadow-md py-4'>
      <div className='container mx-auto px-6 md:px-12 flex items-center justify-between'>
        {/* Brand Name */}
        <div className='text-2xl font-bold font-sans text-blue-600'>
          Symptosense
        </div>

        {/* Navigation Links for Desktop */}
        <div className='hidden md:flex space-x-8'>
          <a
            href='#about'
            className='text-gray-800 hover:text-blue-600 transition'
          >
            Tentang Kami
          </a>
          <a
            href='#artikel'
            className='text-gray-800 hover:text-blue-600 transition'
          >
            Artikel
          </a>
          <a
            href='#obat'
            className='text-gray-800 hover:text-blue-600 transition'
          >
            Obat & Vitamin
          </a>
          <a
            href='#diagnosis'
            className='text-gray-800 hover:text-blue-600 transition'
          >
            Diagnosis
          </a>
        </div>

        {/* Buttons */}
        <div className='hidden md:flex space-x-4'>
          {/* Register Button - Link to SignUp Page */}
          <Link href='/SignUp'>
            <button className='px-4 py-2 border-2 border-blue-600 text-blue-600 font-semibold rounded-md hover:bg-blue-600 hover:text-white transition'>
              Registrasi
            </button>
          </Link>

          {/* SignIn Button - Link to SignIn Page */}
          <Link href='/SignIn'>
            <button className='px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition'>
              Masuk
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className='md:hidden'>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='text-gray-800 focus:outline-none'
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden bg-white px-6 py-4'>
          <a
            href='#about'
            className='block text-gray-800 py-2 hover:text-blue-600 transition'
          >
            Tentang Kami
          </a>
          <a
            href='#artikel'
            className='block text-gray-800 py-2 hover:text-blue-600 transition'
          >
            Artikel
          </a>
          <a
            href='#obat'
            className='block text-gray-800 py-2 hover:text-blue-600 transition'
          >
            Obat & Vitamin
          </a>
          <a
            href='#diagnosis'
            className='block text-gray-800 py-2 hover:text-blue-600 transition'
          >
            Diagnosis
          </a>

          {/* Register Button - Link to SignUp Page */}
          <Link href='/SignUp'>
            <button className='w-full mt-4 px-4 py-2 border-2 border-blue-600 text-blue-600 font-semibold rounded-md hover:bg-blue-600 hover:text-white transition'>
              Registrasi
            </button>
          </Link>

          {/* SignIn Button - Link to SignIn Page */}
          <Link href='/SignIn'>
            <button className='w-full mt-2 px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition'>
              Masuk
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}
