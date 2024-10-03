// src/app/components/ObatVitamin.js
import { useState } from 'react';

export default function ObatVitamin() {
  const items = [
    {
      name: 'Gatal',
      icon: '🤚',
      details: {
        penjelasan: 'Gatal adalah kondisi dimana kulit terasa ingin digaruk.',
        penyebab: 'Alergi, infeksi kulit, atau gigitan serangga.',
        obat: 'Antihistamin, lotion pelembab, salep antijamur.',
      },
    },
    {
      name: 'Batuk',
      icon: '🗣️',
      details: {
        penjelasan:
          'Batuk adalah refleks untuk membersihkan saluran pernapasan.',
        penyebab: 'Infeksi virus, alergi, asma.',
        obat: 'Sirup obat batuk, permen pelega tenggorokan, minum air hangat.',
      },
    },
    {
      name: 'Pencernaan',
      icon: '🦠',
      details: {
        penjelasan: 'Masalah pencernaan seperti diare, sembelit, atau kembung.',
        penyebab: 'Makanan pedas, stres, infeksi bakteri.',
        obat: 'Probiotik, antasida, diet makanan berserat.',
      },
    },
    {
      name: 'Pusing',
      icon: '🤯',
      details: {
        penjelasan: 'Pusing adalah sensasi kepala berputar atau ringan.',
        penyebab: 'Dehidrasi, anemia, tekanan darah rendah.',
        obat: 'Minum air putih, obat anti vertigo, istirahat yang cukup.',
      },
    },
  ];

  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className='bg-blue-50 py-16 px-6'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center'>
          Obat & Vitamin
        </h2>

        {/* Grid Layout */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
          {items.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedItem(item)}
              className='flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:bg-blue-100 hover:shadow-lg transition cursor-pointer'
            >
              <div className='text-5xl'>{item.icon}</div>
              <p className='text-lg font-semibold text-gray-800 mt-4'>
                {item.name}
              </p>
            </div>
          ))}
        </div>

        {/* Modal Pop-up */}
        {selectedItem && (
          <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4 py-8 overflow-y-auto'>
            <div className='bg-white rounded-lg shadow-lg w-[90vw] max-w-[500px] p-6 mx-auto'>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                {selectedItem.name}
              </h3>

              <div className='mb-4'>
                <h4 className='text-lg font-semibold text-gray-800'>
                  Penjelasan
                </h4>
                <p className='text-gray-700'>
                  {selectedItem.details.penjelasan}
                </p>
              </div>

              <div className='mb-4'>
                <h4 className='text-lg font-semibold text-gray-800'>
                  Penyebab
                </h4>
                <p className='text-gray-700'>{selectedItem.details.penyebab}</p>
              </div>

              <div className='mb-4'>
                <h4 className='text-lg font-semibold text-gray-800'>
                  Obat yang Cocok
                </h4>
                <p className='text-gray-700'>{selectedItem.details.obat}</p>
              </div>

              <button
                onClick={() => setSelectedItem(null)}
                className='mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition'
              >
                Tutup
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
