import React, { useState } from 'react';
import NavbarDoc from '../app/components/NavbarDoc';
import {
  FaChevronLeft,
  FaChevronRight,
  FaBars,
  FaEllipsisV,
  FaTimes,
} from 'react-icons/fa';

export default function VerifikasiDiagnosis() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleModal = (patient) => {
    setSelectedPatient(patient);
    setIsModalOpen(!isModalOpen);
  };

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const dataPasien = [
    {
      id: 1,
      nama: 'Olivia Rhye',
      diagnosisId: 22,
      hasilDokter: 'Lorem Ipsum dolor sit..',
      keluhan: [
        'Demam tinggi',
        'Sakit dada',
        'Sulit bernapas',
        'Tidak nafsu makan',
      ],
      diagnosisAI: 'Radang Paru-Paru',
    },
    {
      id: 2,
      nama: 'Phoenix Baker',
      diagnosisId: 23,
      hasilDokter: 'Lorem Ipsum dolor sit..',
      keluhan: [
        'Batuk berdahak',
        'Demam ringan',
        'Sakit tenggorokan',
        'Kelelahan',
      ],
      diagnosisAI: 'Infeksi Saluran Pernapasan Atas (ISPA)',
    },
    {
      id: 3,
      nama: 'Lana Steiner',
      diagnosisId: 24,
      hasilDokter: 'Lorem Ipsum dolor sit..',
      keluhan: ['Pusing', 'Mual', 'Gangguan pencernaan', 'Kelelahan'],
      diagnosisAI: 'Gastritis (Radang Lambung)',
    },
    {
      id: 4,
      nama: 'Demi Wilkinson',
      diagnosisId: 25,
      hasilDokter: 'Lorem Ipsum dolor sit..',
      keluhan: [
        'Sakit kepala sebelah',
        'Sensitivitas terhadap cahaya',
        'Mual',
        'Gangguan penglihatan',
      ],
      diagnosisAI: 'Migrain',
    },
    {
      id: 5,
      nama: 'Candice Wu',
      diagnosisId: 26,
      hasilDokter: 'Lorem Ipsum dolor sit..',
      keluhan: [
        'Nyeri sendi',
        'Bengkak di lutut',
        'Sulit bergerak',
        'Kekakuan di pagi hari',
      ],
      diagnosisAI: 'Arthritis (Radang Sendi)',
    },
    {
      id: 6,
      nama: 'Lana Steiner',
      diagnosisId: 24,
      hasilDokter: 'Lorem Ipsum dolor sit..',
      keluhan: [
        'Batuk berdahak',
        'Demam ringan',
        'Sakit tenggorokan',
        'Kelelahan',
      ],
      diagnosisAI: 'Infeksi Saluran Pernapasan Atas (ISPA)',
    },
    {
      id: 7,
      nama: 'Demi Wilkinson',
      diagnosisId: 25,
      hasilDokter: 'Lorem Ipsum dolor sit..',
      keluhan: [
        'Demam tinggi',
        'Sakit dada',
        'Sulit bernapas',
        'Tidak nafsu makan',
      ],
      diagnosisAI: 'Radang Paru-Paru',
    },
    {
      id: 8,
      nama: 'Candice Wu',
      diagnosisId: 26,
      hasilDokter: 'Lorem Ipsum dolor sit..',
      keluhan: [
        'Demam tinggi',
        'Sakit dada',
        'Sulit bernapas',
        'Tidak nafsu makan',
      ],
      diagnosisAI: 'Radang Paru-Paru',
    },
  ];

  const totalPages = Math.ceil(dataPasien.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = dataPasien.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className='flex min-h-screen'>
      <NavbarDoc toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

      <div
        className={`flex-1 p-6 bg-gray-50 transition-all duration-300 ${
          isSidebarOpen ? 'ml-64' : 'ml-0'
        } overflow-y-auto`}
        style={{ maxHeight: '100vh' }}
      >
        <div className='md:hidden flex justify-between items-center mb-6'>
          <h1 className='text-2xl font-bold text-blue-600 '>
            Verifikasi Diagnosis
          </h1>
          <button onClick={toggleSidebar}>
            <FaBars className='text-2xl text-gray-700' />
          </button>
        </div>

        <div className='flex justify-between items-center mb-6'>
          <h1 className='hidden sm:block text-3xl font-bold text-black'>
            Verifikasi Diagnosis
          </h1>
        </div>

        <div className='bg-white p-4 md:p-7 rounded-lg shadow-lg w-full max-w-6x2 mx-auto mb-6'>
          <h2 className='text-lg font-bold text-black mb-4 ml-7'>
            Daftar Verifikasi Pasien
          </h2>

          <div className='overflow-x-auto mb-auto'>
            <table className='min-w-full table-auto'>
              <thead>
                <tr>
                  <th className='px-2 md:px-4 py-4  text-sm font-semibold text-black text-center'>
                    No.
                  </th>
                  <th className='px-2 md:px-4 py-4  text-sm font-semibold text-black text-center'>
                    Nama Pasien
                  </th>
                  <th className='hidden sm:table-cell px-2 md:px-4 py-4  text-sm font-semibold text-black text-center'>
                    ID Diagnosis
                  </th>
                  <th className='hidden sm:table-cell px-2 md:px-4 py-4 text-sm font-semibold text-black text-center'>
                    Diagnosis AI
                  </th>
                  <th className='hidden sm:table-cell px-2 md:px-4 py-4 text-sm font-semibold text-black text-center'>
                    Diagnosis Dokter
                  </th>
                  <th className='px-2 md:px-4 py-4  text-sm font-semibold text-black text-center'>
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((pasien, index) => (
                  <tr key={pasien.id} className='border-b'>
                    <td className='px-2 py-8 text-black text-center'>
                      {indexOfFirstItem + index + 1}
                    </td>
                    <td className='px-2 md:px-4 py-8 text-black text-center '>
                      {pasien.nama}
                    </td>
                    <td className='hidden sm:table-cell px-2 md:px-4 py-8 text-black text-center'>
                      {pasien.diagnosisId}
                    </td>
                    <td className='hidden sm:table-cell px-2 md:px-4 py-8 text-black text-center'>
                      {pasien.diagnosisAI}
                    </td>
                    <td className='hidden sm:table-cell px-2 md:px-4 py-8 text-black text-center'>
                      {pasien.hasilDokter}
                    </td>
                    <td className='px-2 md:px-4 py-8 text-center'>
                      <button
                        className='text-white bg-blue-500 p-2 rounded-lg text-sm hover:bg-blue-700'
                        onClick={() => toggleModal(pasien)}
                      >
                        Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className='flex justify-between items-center mt-4'>
            <button
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className={`py-1 px-3 text-gray-600 bg-white border border-gray-300 rounded-md hover:bg-gray-200 flex items-center sm:text-sm ${
                currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''
              }`}
            >
              <FaChevronLeft className='mr-2' /> Previous
            </button>

            <ul className='flex space-x-1 sm:space-x-2 overflow-x-auto'>
              {[...Array(totalPages)].map((_, index) => {
                if (
                  index + 1 === currentPage ||
                  (index + 1 >= currentPage - 1 && index + 1 <= currentPage + 1)
                ) {
                  return (
                    <li key={index}>
                      <button
                        onClick={() => paginate(index + 1)}
                        className={`py-1 px-3 rounded-md border text-xs sm:text-sm ${
                          currentPage === index + 1
                            ? 'bg-blue-500 text-white'
                            : 'bg-white text-gray-700'
                        } hover:bg-blue-500 hover:text-white transition`}
                      >
                        {index + 1}
                      </button>
                    </li>
                  );
                }
                if (
                  index + 1 === currentPage - 2 ||
                  index + 1 === currentPage + 2
                ) {
                  return (
                    <li key={index} className='text-xs sm:text-sm'>
                      ...
                    </li>
                  );
                }
                return null;
              })}
            </ul>

            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className={`py-1 px-3 text-gray-600 bg-white border border-gray-300 rounded-md hover:bg-gray-200 flex items-center sm:text-sm ${
                currentPage === totalPages
                  ? 'cursor-not-allowed opacity-50'
                  : ''
              }`}
            >
              Next <FaChevronRight className='ml-2' />
            </button>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className='fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50'>
            <div className='bg-white rounded-lg p-4 sm:p-6 md:p-8 shadow-lg w-10/12 sm:w-5/6 md:w-2/3 lg:w-1/3 max-h-screen overflow-y-auto'>
              {' '}
              <div className='flex justify-between items-center mb-6'>
                <h2 className='text-lg sm:text-xl font-bold text-blue-600'>
                  Detail Pasien
                </h2>
                <button
                  onClick={() => toggleModal(null)}
                  className='text-gray-600 hover:text-gray-900'
                >
                  <FaTimes />
                </button>
              </div>
              {selectedPatient && (
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  {' '}
                  {/* Left Side */}
                  <div>
                    <div className='mb-4'>
                      <label className='block font-semibold text-black mb-2'>
                        Nama
                      </label>
                      <input
                        type='text'
                        className='border border-gray-300 rounded-md p-3 w-full text-black'
                        value={selectedPatient.nama}
                        readOnly
                      />
                    </div>
                    <div className='mb-4'>
                      <label className='block font-semibold text-black mb-2'>
                        Keluhan
                      </label>
                      <textarea
                        className='border border-gray-300 rounded-md p-3 w-full text-black h-32 resize-none'
                        value={
                          Array.isArray(selectedPatient.keluhan)
                            ? selectedPatient.keluhan.join('\n')
                            : 'No complaints'
                        }
                        readOnly
                      />
                    </div>
                    <div className='mb-4'>
                      <label className='block font-semibold text-black mb-2'>
                        Status
                      </label>
                      <select className='border border-gray-300 rounded-md p-3 w-full text-black'>
                        <option>Pilih Status</option>
                        <option>Confirmed</option>
                        <option>Pending</option>
                        <option>Rejected</option>
                      </select>
                    </div>
                  </div>
                  {/* Right Side */}
                  <div>
                    <div className='mb-4'>
                      <label className='block font-semibold text-black mb-2'>
                        ID Diagnosis
                      </label>
                      <input
                        type='text'
                        className='border border-gray-300 rounded-md p-3 w-full text-black'
                        value={selectedPatient.diagnosisId}
                        readOnly
                      />
                    </div>
                    <div className='mb-4'>
                      <label className='block font-semibold text-black mb-2'>
                        Diagnosis AI
                      </label>
                      <input
                        type='text'
                        className='border border-gray-300 rounded-md p-3 w-full text-black'
                        value={selectedPatient.diagnosisAI}
                        readOnly
                      />
                    </div>

                    <div className='mb-4'>
                      <label className='block font-semibold text-black mb-2'>
                        Diagnosis Dokter
                      </label>
                      <textarea
                        className='border border-gray-300 rounded-md p-3 w-full text-black h-24 resize-none'
                        placeholder='Tulisa hasil diagnosis dokter...'
                      />
                    </div>
                  </div>
                </div>
              )}
              <div className='flex justify-center mt-6'>
                <button
                  className='bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-700 text-base'
                  onClick={() => toggleModal(null)}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
