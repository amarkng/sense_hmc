import React from 'react';
import { useRouter } from 'next/router';
import {
  FaSignOutAlt,
  FaCog,
  FaHome,
  FaStethoscope,
  FaCommentMedical,
  FaFileAlt,
  FaBell,
} from 'react-icons/fa';

export default function NavbarDoc({ toggleSidebar, isSidebarOpen }) {
  const router = useRouter();

  const handleLogout = () => {
    router.push('/');
  };

  return (
    <aside
      className={`fixed inset-y-0 left-0 transform ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } md:relative md:translate-x-0 transition-transform duration-300 ease-in-out bg-white w-64 p-4 shadow-lg flex flex-col z-50`}
      style={{ maxHeight: '100vh', overflowY: 'auto' }}
    >
      <div className='flex items-center justify-between mb-8'>
        <h1 className='text-2xl font-bold text-blue-600'>SymptoSense</h1>
        <button className='md:hidden text-gray-700' onClick={toggleSidebar}>
          ✖️
        </button>
      </div>

      <div className='flex justify-between items-center bg-white p-4 rounded-lg mb-8'>
        <div className='flex items-center'>
          <img
            src='/path-to-doctor-image.jpg'
            alt='Doctor Profile'
            className='w-16 h-16 rounded-full mr-4'
          />
          <div>
            <p className='text-gray-600 text-sm'>Halo Dokter,</p>
            <p className='font-bold text-lg text-black'>Asep Julian</p>
          </div>
        </div>

        <div className='relative'>
          <FaBell className='text-3xl text-gray-700' />
          <span className='absolute top-0 right-0 block h-2 w-2 rounded-full bg-orange-500'></span>
        </div>
      </div>

      <nav className='flex flex-col space-y-2 flex-1'>
        <MenuLink Icon={FaHome} label='Beranda' />
        <MenuLink Icon={FaStethoscope} label='Verifikasi Diagnosis' />
        <MenuLink Icon={FaCommentMedical} label='Konsultasi' />
        <MenuLink Icon={FaFileAlt} label='Keluhan' />
      </nav>

      <div className='mt-auto space-y-4'>
        <MenuLink Icon={FaCog} label='Pengaturan' />
        <button
          onClick={handleLogout}
          className='flex items-center text-red-600 w-full hover:bg-gray-100 p-4 rounded-md'
        >
          <FaSignOutAlt className='mr-2' /> Logout
        </button>
      </div>
    </aside>
  );
}

function MenuLink({ Icon, label }) {
  return (
    <a
      href='#'
      className='flex items-center p-4 hover:bg-gray-100 rounded-md text-gray-800'
    >
      <Icon className='text-blue-600' />
      <span className='ml-4'>{label}</span>
    </a>
  );
}
