import React from 'react';

export default function UpperBoxPatient() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-6'>
      <div className='bg-blue-500 text-white p-4 rounded-lg shadow-md flex flex-col justify-center'>
        <h3 className='text-lg font-semibold mb-2'>Total Konsultasi</h3>
        <p className='text-2xl font-bold'>1</p>
        <p className='text-sm'>1 Dokter</p>
      </div>
      <div className='bg-blue-600 text-white p-4 rounded-lg shadow-md flex flex-col justify-center'>
        <h3 className='text-lg font-semibold mb-2'>Total Diagnosis</h3>
        <p className='text-2xl font-bold'>2</p>
        <p className='text-sm'>2 Jenis Penyakit</p>
      </div>
      <div className='bg-blue-700 text-white p-4 rounded-lg shadow-md flex flex-col justify-center'>
        <h3 className='text-lg font-semibold mb-2'>Menunggu Verifikasi</h3>
        <p className='text-2xl font-bold'>3</p>
        <p className='text-sm'>3 menunggu verifikasi dokter</p>
      </div>
    </div>
  );
}
