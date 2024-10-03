import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='bg-blue-600 text-white py-10'>
      <div className='container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8'>
        {/* Symptosense Section */}
        <div>
          <h3 className='text-lg font-semibold'>Symptosense</h3>
          <p className='mt-4'>
            Temukan Solusi Kesehatan Masa Depan dengan SymptoSense! Gabung
            sekarang dan biarkan AI canggih kami memprediksi kondisi kesehatanmu
            sebelum masalah datang!
          </p>
          <div className='flex space-x-4 mt-6'>
            <a href='#' className='bg-white p-2 rounded-full text-blue-600'>
              <FaTwitter size={20} />
            </a>
            <a href='#' className='bg-white p-2 rounded-full text-blue-600'>
              <FaInstagram size={20} />
            </a>
            <a href='#' className='bg-white p-2 rounded-full text-blue-600'>
              <FaFacebookF size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className='text-lg font-semibold'>Informasi Penting</h3>
          <ul className='mt-4 space-y-2'>
            <li>
              <a href='#' className='hover:text-gray-300 transition'>
                Tentang Kami
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-gray-300 transition'>
                Layanan Medis
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-gray-300 transition'>
                Jadwal Dokter
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-gray-300 transition'>
                Testimoni Pasien
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className='text-lg font-semibold'>Hubungi Kami</h3>
          <p className='mt-4'>info@symptosense.com</p>
          <p>Jl. Telekomunikasi, Bandung, Indonesia</p>
          <p>+62 88888888</p>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className='text-lg font-semibold'>Newsletter</h3>
          <form className='mt-4 flex'>
            <input
              type='email'
              placeholder='Masukkan email Anda'
              className='px-4 py-2 w-full rounded-l-full text-gray-700 focus:outline-none'
            />
            <button
              type='submit'
              className='bg-blue-500 px-6 py-2 rounded-r-full text-white hover:bg-blue-700 transition'
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
