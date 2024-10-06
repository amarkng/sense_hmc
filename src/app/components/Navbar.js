import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-white shadow-md py-4'>
      <div className='container mx-auto px-6 md:px-12 flex items-center justify-between'>
        <Link href='/' className='text-2xl font-bold font-sans text-blue-600'>
          Symptosense
        </Link>

        <div className='hidden md:flex space-x-8'>
          <Link
            href='#about'
            className='text-gray-800 hover:text-blue-600 transition'
          >
            Tentang Kami
          </Link>
          <Link
            href='#artikel'
            className='text-gray-800 hover:text-blue-600 transition'
          >
            Artikel
          </Link>
          <Link
            href='#obat'
            className='text-gray-800 hover:text-blue-600 transition'
          >
            Obat & Vitamin
          </Link>
          <Link
            href='/Diagnosis'
            className='text-gray-800 hover:text-blue-600 transition'
          >
            Diagnosis
          </Link>
        </div>

        <div className='hidden md:flex space-x-4'>
          <Link href='/SignUp'>
            <button className='px-4 py-2 border-2 border-blue-600 text-blue-600 font-semibold rounded-md hover:bg-blue-600 hover:text-white transition'>
              Registrasi
            </button>
          </Link>

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
          <Link
            href='#about'
            className='block text-gray-800 py-2 hover:text-blue-600 transition'
          >
            Tentang Kami
          </Link>
          <Link
            href='#artikel'
            className='block text-gray-800 py-2 hover:text-blue-600 transition'
          >
            Artikel
          </Link>
          <Link
            href='#obat'
            className='block text-gray-800 py-2 hover:text-blue-600 transition'
          >
            Obat & Vitamin
          </Link>
          <Link
            href='/Diagnosis'
            className='block text-gray-800 py-2 hover:text-blue-600 transition'
          >
            Diagnosis
          </Link>

          <Link href='/SignUp'>
            <button className='w-full mt-4 px-4 py-2 border-2 border-blue-600 text-blue-600 font-semibold rounded-md hover:bg-blue-600 hover:text-white transition'>
              Registrasi
            </button>
          </Link>

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
