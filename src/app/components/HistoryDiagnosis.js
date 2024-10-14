import React, { useState } from 'react';
import {
  FaVideo,
  FaVideoSlash,
  FaMicrophoneSlash,
  FaVolumeMute,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa';
import Image from 'next/image';

const generateDummyData = (numPatients) => {
  const names = [
    'John Doe',
    'Emily Kazuhara',
    'Michael Johnson',
    'Emily Davis',
    'James Brown',
  ];

  const specialties = [
    'Cardiologist',
    'Dermatologist',
    'Neurologist',
    'Pediatrician',
    'Psychiatrist',
  ];

  const dummyPatients = [];
  for (let i = 0; i < numPatients; i++) {
    dummyPatients.push({
      id: i + 1,
      name: names[i % names.length],
      specialty: specialties[i % specialties.length],
      diagId: 1000 + i + 1,
      status: i % 2 === 0 ? 'Join Meeting' : 'No Meeting Scheduled',
    });
  }
  return dummyPatients;
};

export default function HistoryDiagnosis() {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dataDump = generateDummyData(12);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = dataDump.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(dataDump.length / itemsPerPage);

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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='bg-white p-6 rounded-lg shadow-md flex flex-col min-h-full'>
      <h2 className='text-xl font-semibold mb-4 text-black'>
        History Diagnosis
      </h2>

      <div className='overflow-x-auto mb-auto'>
        <table className='min-w-full table-auto'>
          <thead>
            <tr>
              <th className='px-4 py-4 text-left text-sm font-semibold text-black'>
                No.
              </th>
              <th className='px-4 py-4 text-left text-sm font-semibold text-black'>
                Nama Dokter
              </th>
              <th className='px-4 py-4 text-left text-sm font-semibold text-black'>
                ID Diagnosis
              </th>
              <th className='px-4 py-4 text-left text-sm font-semibold text-black'>
                Hasil Diagnosis AI
              </th>
              <th className='px-4 py-4 text-left text-sm font-semibold text-black'>
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((entry, index) => (
              <tr key={entry.id} className='border-b'>
                <td className='px-4 py-8 text-black'>
                  {indexOfFirstItem + index + 1}
                </td>
                <td className='px-4 py-8 text-black'>
                  <div className='flex items-center'>
                    <Image
                      src='/assets/images/placeholder1.jpg'
                      alt='avatar'
                      className='w-12 h-12 rounded-full'
                      width={64}
                      height={64}
                    />
                    <div className='ml-3 md:px-4'>
                      <p className='text-sm font-medium'>{entry.name}</p>
                      <p className='text-xs text-gray-500'>{entry.specialty}</p>
                    </div>
                  </div>
                </td>
                <td className='px-4 py-8 text-black'>{entry.diagId}</td>
                <td className='px-4 py-8 text-black'>
                  Lorem Ipsum dolor sit amet consectetur adipiscing elit
                </td>
                <td className='px-4 py-8'>
                  {entry.status === 'Join Meeting' ? (
                    <button
                      onClick={openModal}
                      className='text-white bg-blue-500 p-2 rounded-lg text-sm flex items-center hover:bg-blue-700'
                    >
                      <FaVideo className='mr-2' /> Join Meeting
                    </button>
                  ) : (
                    <span className='text-gray-500 text-sm'>
                      No Meeting Scheduled
                    </span>
                  )}
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
            currentPage === totalPages ? 'cursor-not-allowed opacity-50' : ''
          }`}
        >
          Next <FaChevronRight className='ml-2' />
        </button>
      </div>

      {isModalOpen && (
        <div className='fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50'>
          <div className='bg-white w-[90%] max-w-4xl rounded-lg shadow-lg p-6'>
            <div className='bg-blue-600 text-white py-4 px-6 rounded-t-lg flex justify-between items-center'>
              <h2 className='text-xl font-semibold'>Join Meeting</h2>
              <button onClick={closeModal}>
                <FaTimes className='text-xl' />
              </button>
            </div>

            <div className='bg-pink-100 p-8 mt-6 rounded-lg flex flex-col items-center'>
              <Image
                src='/assets/images/placeholder1.jpg'
                alt='avatar'
                className='w-48 h-48 rounded-full'
                width={96}
                height={96}
              />
              <p className='text-lg font-medium mt-4'>Lala</p>
            </div>

            <div className='flex justify-center space-x-6 mt-6 mb-4'>
              <button className='bg-red-500 hover:bg-red-600 p-4 rounded-full text-white text-2xl'>
                <FaVideoSlash />
              </button>
              <button className='bg-gray-500 hover:bg-gray-600 p-4 rounded-full text-white text-2xl'>
                <FaMicrophoneSlash />
              </button>
              <button className='bg-gray-500 hover:bg-gray-600 p-4 rounded-full text-white text-2xl'>
                <FaVolumeMute />
              </button>
              <button className='bg-blue-500 hover:bg-blue-600  p-4 rounded-full text-white text-2xl'>
                Join Meeting
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
