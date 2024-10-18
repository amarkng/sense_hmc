import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='bg-[#1D2B44] text-white py-10'>
      <div className='container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div>
          <h3 className='text-2xl sm:text-3xl font-semibold'>Symptosense</h3>
          <p className='mt-4 text-sm sm:text-base text-gray-300'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit
            amet neque tortor.
          </p>
          <div className='flex space-x-4 mt-6'>
            <a
              href='#'
              className='p-3 rounded-md border-2 border-white text-white hover:text-red-600 hover:bg-white transition'
            >
              <FaYoutube size={20} />
            </a>
            <a
              href='#'
              className='p-3 rounded-md border-2 border-white text-white hover:text-blue-500 hover:bg-white transition'
            >
              <FaTwitter size={20} />
            </a>
            <a
              href='https://www.instagram.com/humicengineering/'
              className='p-3 rounded-md border-2 border-white text-white hover:text-pink-500 hover:bg-white transition  '
              target='_blank'
            >
              <FaInstagram size={20} />
            </a>
            <a
              href='#'
              className='p-3 rounded-md border-2 border-white text-white hover:text-blue-600 hover:bg-white transition'
            >
              <FaFacebookF size={20} />
            </a>
          </div>
        </div>

        <div>
          <h3 className='text-xl sm:text-2xl font-semibold'>Quick Links</h3>
          <ul className='mt-4 space-y-2 text-sm sm:text-base text-gray-300'>
            <li>
              <a href='#' className='hover:text-gray-100 transition'>
                Tentang Kami
              </a>
            </li>
            <li>
              <a href='/articleFull' className='hover:text-gray-100 transition'>
                Artikel
              </a>
            </li>
            <li>
              <a href='#ObatVitamin' className='hover:text-gray-100 transition'>
                Obat & Vitamin
              </a>
            </li>
            <li>
              <a href='/Diagnosis' className='hover:text-gray-100 transition'>
                Diagnosis
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className='text-xl sm:text-2xl font-semibold'>Contact Us</h3>
          <ul className='mt-4 space-y-2 text-sm sm:text-base text-gray-300'>
            <li className='flex items-center space-x-2'>
              <span>📧</span>
              <span>humic@telkomuniversity.ac.id</span>
            </li>
            <li className='flex items-start space-x-2'>
              <span>📍</span>
              <span>
                Jl. Telekomunikasi. 1, Terusan Buahbatu - Bojongsoang, Telkom
                University, Sukapura, Kec. Dayeuhkolot, Kabupaten Bandung, Jawa
                Barat 40257
              </span>
            </li>
            <li className='flex items-center space-x-2'>
              <span>📞</span>
              <span>+62 82123456789</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
