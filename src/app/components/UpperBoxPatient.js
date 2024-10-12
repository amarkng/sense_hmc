import React from 'react';
import { FaUserMd, FaStethoscope, FaClipboardList } from 'react-icons/fa';

export default function UpperBoxPatient() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-6'>
      <div className='bg-blue-600 text-white p-6 rounded-lg shadow-lg flex items-center space-x-4'>
        <FaUserMd className='text-4xl' />
        <div>
          <h3 className='text-lg font-semibold'>Total Konsultasi</h3>
          <p className='text-3xl font-bold'>1</p>
          <p className='text-sm'>1 Dokter</p>
        </div>
      </div>

      <div className='bg-blue-600 text-white p-6 rounded-lg shadow-lg flex items-center space-x-4'>
        <FaStethoscope className='text-4xl' />
        <div>
          <h3 className='text-lg font-semibold'>Total Diagnosis</h3>
          <p className='text-3xl font-bold'>2</p>
          <p className='text-sm'>2 Jenis Penyakit</p>
        </div>
      </div>

      <div className='bg-blue-600 text-white p-6 rounded-lg shadow-lg flex items-center space-x-4'>
        <FaClipboardList className='text-4xl' />
        <div>
          <h3 className='text-lg font-semibold'>Menunggu Verifikasi</h3>
          <p className='text-3xl font-bold'>3</p>
          <p className='text-sm'>3 menunggu verifikasi dokter</p>
        </div>
      </div>
    </div>
  );
}
