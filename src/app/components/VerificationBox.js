import React from 'react';
import { FaClipboardCheck } from 'react-icons/fa';

export default function VerificationBox() {
  return (
    <div className='bg-blue-600 text-white p-6 rounded-lg shadow-lg flex items-center'>
      <div className='mr-4'>
        <FaClipboardCheck className='text-4xl' />{' '}
      </div>
      <div>
        <h2 className='text-xl font-bold'>Menunggu Verifikasi Diagnosis</h2>
        <p className='text-3xl mt-2'>15</p>
        <p className='mt-2'>15 Data menunggu verifikasi</p>
      </div>
    </div>
  );
}
