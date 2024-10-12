import React from 'react';
import { FaUser, FaClipboardCheck } from 'react-icons/fa';

export default function UpperBoxDoctor() {
  return (
    <div className='flex flex-col gap-6 w-full'>
      <div className='bg-blue-600 text-white p-6 rounded-lg shadow-lg flex items-center space-x-4'>
        <FaUser className='text-4xl' />
        <div>
          <h3 className='text-lg font-semibold'>Pasien</h3>
          <p className='text-3xl font-bold'>15</p>
          <p className='text-sm'>15 Pasien terdaftar</p>
        </div>
      </div>

      <div className='bg-blue-600 text-white p-6 rounded-lg shadow-lg flex items-center space-x-4'>
        <FaClipboardCheck className='text-4xl' />
        <div>
          <h3 className='text-lg font-semibold'>
            Menunggu Verifikasi Diagnosis
          </h3>
          <p className='text-3xl font-bold'>48</p>
          <p className='text-sm'>48 Data menunggu verifikasi</p>
        </div>
      </div>
    </div>
  );
}
