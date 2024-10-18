import React, { useState } from 'react';
import NavbarDoc from '../app/components/NavbarDoc';
import { FaChevronLeft, FaChevronRight, FaBars } from 'react-icons/fa';

export default function KonsultasiDokter() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const itemsPerPage = 6;

  const dataPasien = [
    {
      id: 1,
      nama: 'Olivia Rhye',
      diagnosisId: 22,
      hasilAI: 'Lorem Ipsum dolor sit..',
      hasilDokter: 'Lorem Ipsum dolor sit..',
      status: 'Start Meeting',
    },
    {
      id: 2,
      nama: 'Phoenix Baker',
      diagnosisId: 23,
      hasilAI: 'Lorem Ipsum dolor sit..',
      hasilDokter: 'Lorem Ipsum dolor sit..',
      status: 'Completed',
    },
    {
      id: 3,
      nama: 'Lana Steiner',
      diagnosisId: 24,
      hasilAI: 'Lorem Ipsum dolor sit..',
      hasilDokter: 'Lorem Ipsum dolor sit..',
      status: 'Completed',
    },
    {
      id: 4,
      nama: 'Demi Wilkinson',
      diagnosisId: 25,
      hasilAI: 'Lorem Ipsum dolor sit..',
      hasilDokter: 'Lorem Ipsum dolor sit..',
      status: 'Completed',
    },
    {
      id: 5,
      nama: 'Candice Wu',
      diagnosisId: 26,
      hasilAI: 'Lorem Ipsum dolor sit..',
      hasilDokter: 'Lorem Ipsum dolor sit..',
      status: 'Start Meeting',
    },
    {
      id: 6,
      nama: 'John Doe',
      diagnosisId: 27,
      hasilAI: 'Lorem Ipsum dolor sit..',
      hasilDokter: 'Lorem Ipsum dolor sit..',
      status: 'Completed',
    },
    {
      id: 7,
      nama: 'Jane Doe',
      diagnosisId: 29,
      hasilAI: 'Lorem Ipsum dolor sit..',
      hasilDokter: 'Lorem Ipsum dolor sit..',
      status: 'Start Meeting',
    },
    {
      id: 8,
      nama: 'Jane Doe',
      diagnosisId: 30,
      hasilAI: 'Lorem Ipsum dolor sit..',
      hasilDokter: 'Lorem Ipsum dolor sit..',
      status: 'Start Meeting',
    },
    {
      id: 9,
      nama: 'Jane Doe',
      diagnosisId: 31,
      hasilAI: 'Lorem Ipsum dolor sit..',
      hasilDokter: 'Lorem Ipsum dolor sit..',
      status: 'Start Meeting',
    },
    {
      id: 10,
      nama: 'Jane Doe',
      diagnosisId: 32,
      hasilAI: 'Lorem Ipsum dolor sit..',
      hasilDokter: 'Lorem Ipsum dolor sit..',
      status: 'Start Meeting',
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
        style={{ maxHeight: '100vh', overflowX: 'hidden' }}
      >
        <div className='md:hidden flex justify-between items-center mb-6'>
          <h1 className='text-2xl font-bold text-blue-600'>Konsultasi</h1>
          <button onClick={toggleSidebar}>
            <FaBars className='text-2xl text-gray-700' />
          </button>
        </div>

        <div className='flex justify-between items-center mb-6'>
          <h1 className='hidden sm:block text-3xl font-bold text-black'>
            Konsultasi
          </h1>
        </div>

        <div className='bg-white p-4 md:p-7 rounded-lg shadow-lg w-full max-w-6x2 mx-auto mb-6'>
          <h2 className='text-lg font-bold text-black mb-4 ml-7 '>
            Daftar Konsultasi Pasien
          </h2>

          <div className='overflow-x-auto mb-auto min-h-[350px]'>
            <table className='min-w-full table-auto'>
              <thead>
                <tr>
                  <th className='px-2 md:px-4 py-4 text-sm font-semibold text-black text-center'>
                    No.
                  </th>
                  <th className='px-2 md:px-4 py-4 text-sm font-semibold text-black text-center'>
                    Nama Pasien
                  </th>
                  <th className='px-2 md:px-4 py-4 text-sm font-semibold text-black text-center'>
                    ID Diagnosis
                  </th>
                  <th className='px-2 md:px-4 py-4 text-sm font-semibold text-black text-center'>
                    Hasil Diagnosis AI
                  </th>
                  <th className='px-2 md:px-4 py-4 text-sm font-semibold text-black text-center'>
                    Diagnosis Dokter
                  </th>
                  <th className='px-2 md:px-4 py-4 text-sm font-semibold text-black text-center'>
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
                    <td className='px-2 md:px-4 py-8 text-black text-center'>
                      {pasien.nama}
                    </td>
                    <td className='px-2 md:px-4 py-8 text-black text-center'>
                      {pasien.diagnosisId}
                    </td>
                    <td className='px-2 md:px-4 py-8 text-black text-center'>
                      {pasien.hasilAI}
                    </td>
                    <td className='px-2 md:px-4 py-8 text-black text-center'>
                      {pasien.hasilDokter}
                    </td>
                    <td className='px-2 md:px-4 py-8 text-center'>
                      <button
                        className={`text-white ${
                          pasien.status === 'Completed'
                            ? 'bg-green-500'
                            : 'bg-blue-500'
                        } p-2 rounded-lg text-sm hover:bg-blue-700`}
                      >
                        {pasien.status}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className='flex justify-between items-center mt-4 overflow-x-auto'>
            <button
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className={`py-1 px-3 text-gray-600 bg-white border border-gray-300 rounded-md hover:bg-gray-200 flex items-center sm:text-sm ${
                currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''
              }`}
              style={{ flexShrink: 0 }}
            >
              <FaChevronLeft className='mr-2' /> Previous
            </button>

            <ul className='flex space-x-1 sm:space-x-2'>
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
              style={{ flexShrink: 0 }}
            >
              Next <FaChevronRight className='ml-2' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
