import React from 'react';
import { FaUser } from 'react-icons/fa'; // Import ikon pasien

export default function PatientBox() {
  return (
    <div className='bg-blue-600 text-white p-6 rounded-lg shadow-lg flex items-center'>
      <div className='mr-4'>
        <FaUser className='text-4xl' /> {/* Ikon pasien */}
      </div>
      <div>
        <h2 className='text-xl font-bold'>Pasien</h2>
        <p className='text-3xl mt-2'>7</p>
        <p className='mt-2'>7 Pasien terdaftar</p>
      </div>
    </div>
  );
}
