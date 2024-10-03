// src/pages/dashboard-dokter.js

import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function DashboardDokter() {
  const router = useRouter();

  useEffect(() => {
    // Simulasi jika pengguna tidak memiliki role dokter, kembalikan ke halaman login
    const role = localStorage.getItem('role');
    if (role !== 'Dokter') {
      alert('Anda tidak memiliki akses ke halaman ini.');
      router.push('/signin');
    }
  }, [router]);

  return (
    <div className='min-h-screen bg-white p-8'>
      <div className='max-w-7xl mx-auto'>
        <h1 className='text-4xl font-bold text-green-600 mb-8'>
          Dashboard Dokter
        </h1>
        <p className='text-lg text-gray-700'>Selamat datang, Dokter!</p>
        <div className='mt-8'>
          <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
            Daftar Pasien
          </h2>
          <ul className='list-disc list-inside space-y-2'>
            <li>Pasien 1: John Doe - Keluhan: Batuk</li>
            <li>Pasien 2: Jane Smith - Keluhan: Demam</li>
            <li>Pasien 3: William Johnson - Keluhan: Sakit Kepala</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
