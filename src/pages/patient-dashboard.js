// src/pages/dashboard-pasien.js

import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function DashboardPasien() {
  const router = useRouter();

  useEffect(() => {
    // Simulasi jika pengguna tidak memiliki role pasien, kembalikan ke halaman login
    const role = localStorage.getItem('role');
    if (role !== 'Pasien') {
      alert('Anda tidak memiliki akses ke halaman ini.');
      router.push('/signin');
    }
  }, [router]);

  return (
    <div className='min-h-screen bg-white p-8'>
      <div className='max-w-7xl mx-auto'>
        <h1 className='text-4xl font-bold text-green-600 mb-8'>
          Dashboard Pasien
        </h1>
        <p className='text-lg text-gray-700'>
          Selamat datang di portal pasien kami!
        </p>
        <div className='mt-8'>
          <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
            Riwayat Konsultasi
          </h2>
          <ul className='list-disc list-inside space-y-2'>
            <li>10 Maret 2024 - Konsultasi Batuk - Dr. Ananda</li>
            <li>5 April 2024 - Pemeriksaan Rutin - Dr. Budi</li>
            <li>20 April 2024 - Konsultasi Demam - Dr. Clara</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
