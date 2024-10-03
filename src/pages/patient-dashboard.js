import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function DashboardPasien() {
  const router = useRouter();
  const [userName, setUserName] = useState('Pasien');

  useEffect(() => {
    // Contoh penggunaan router query untuk role pasien
    const role = router.query.role;
    if (role !== 'patient') {
      router.push('/signin');
    }

    // Set nama pengguna jika ada
    setUserName('Pasien');
  }, [router]);

  return (
    <div className='min-h-screen bg-gray-100'>
      {/* Navbar */}
      <nav className='bg-blue-600 p-4'>
        <div className='max-w-7xl mx-auto flex justify-between'>
          <div className='text-white text-xl font-bold'>SymptoSense</div>
          <div>
            <a href='#' className='text-white hover:underline'>
              Logout
            </a>
          </div>
        </div>
      </nav>

      {/* Konten Dashboard */}
      <div className='max-w-7xl mx-auto p-6'>
        <h1 className='text-3xl font-bold text-gray-800 mb-6'>
          Halo, {userName}!
        </h1>

        <div className='bg-white rounded-lg shadow p-6'>
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
