import Link from 'next/link';
import { useState } from 'react';
import {
  FaBars,
  FaHome,
  FaStethoscope,
  FaCommentMedical,
  FaFileAlt,
  FaCog,
  FaSignOutAlt,
} from 'react-icons/fa';

export default function DashboardDokter() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className='min-h-screen flex'>
      {/* Sidebar */}
      <div
        className={`bg-white shadow-lg ${
          isSidebarOpen ? 'w-64' : 'w-20'
        } transition-width duration-300`}
      >
        <div className='flex items-center justify-between p-4'>
          {/* Tampilkan logo FaBars ketika sidebar ditutup */}
          <FaBars className='text-2xl text-blue-600' onClick={toggleSidebar} />
          {isSidebarOpen && (
            <span className='text-2xl font-bold text-blue-600'>
              SymptoSense
            </span>
          )}
        </div>
        <nav className='mt-4 space-y-2'>
          <Link href='#' className='flex items-center p-4 hover:bg-gray-100'>
            <FaHome className='text-blue-600' />
            <span
              className={`${isSidebarOpen ? 'ml-4' : 'hidden'} text-gray-800`}
            >
              Beranda
            </span>
          </Link>
          <Link href='#' className='flex items-center p-4 hover:bg-gray-100'>
            <FaStethoscope className='text-blue-600' />
            <span
              className={`${isSidebarOpen ? 'ml-4' : 'hidden'} text-gray-800`}
            >
              Verifikasi Diagnosis
            </span>
          </Link>
          <Link href='#' className='flex items-center p-4 hover:bg-gray-100'>
            <FaCommentMedical className='text-blue-600' />
            <span
              className={`${isSidebarOpen ? 'ml-4' : 'hidden'} text-gray-800`}
            >
              Konsultasi
            </span>
          </Link>
          <Link href='#' className='flex items-center p-4 hover:bg-gray-100'>
            <FaFileAlt className='text-blue-600' />
            <span
              className={`${isSidebarOpen ? 'ml-4' : 'hidden'} text-gray-800`}
            >
              Keluhan
            </span>
          </Link>
        </nav>

        {/* Footer Menu */}
        <div className='absolute bottom-0 w-full'>
          <Link href='#' className='flex items-center p-4 hover:bg-gray-100'>
            <FaCog className='text-blue-600' />
            <span
              className={`${isSidebarOpen ? 'ml-4' : 'hidden'} text-gray-800`}
            >
              Pengaturan
            </span>
          </Link>
          <Link href='#' className='flex items-center p-4 hover:bg-gray-100'>
            <FaSignOutAlt className='text-blue-600' />
            <span
              className={`${isSidebarOpen ? 'ml-4' : 'hidden'} text-gray-800`}
            >
              Logout
            </span>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className='flex-1 p-6 bg-gray-50'>
        <h1 className='text-2xl font-bold text-gray-800'>
          Halo, Dokter {isSidebarOpen ? 'Ronaldo' : 'Suiiiii'}
        </h1>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6'>
          {/* Box Pasien */}
          <div className='bg-blue-500 text-white p-6 rounded-lg shadow-lg'>
            <h2 className='text-xl font-bold'>Pasien</h2>
            <p className='text-3xl mt-4'>15</p>
            <p className='mt-2'>15 Pasien terdaftar</p>
          </div>

          {/* Box Verifikasi Diagnosis */}
          <div className='bg-blue-500 text-white p-6 rounded-lg shadow-lg'>
            <h2 className='text-xl font-bold'>Menunggu Verifikasi Diagnosis</h2>
            <p className='text-3xl mt-4'>15</p>
            <p className='mt-2'>15 Data menunggu verifikasi</p>
          </div>

          {/* Box Overview Pasien */}
          <div className='bg-white p-6 rounded-lg shadow-lg'>
            <h2 className='text-xl font-bold text-gray-800'>Overview Pasien</h2>
            {/* Placeholder for content */}
            <p className='text-gray-600 mt-4'>Tidak ada data saat ini</p>
          </div>
        </div>

        {/* Antrian Meet Section */}
        <div className='bg-white mt-6 p-6 rounded-lg shadow-lg'>
          <h2 className='text-xl font-bold text-gray-800'>Antrian Meet</h2>
          {/* Placeholder for content */}
          <p className='text-gray-600 mt-4'>Belum ada antrian saat ini</p>
        </div>
      </div>
    </div>
  );
}
