import React, { useState } from 'react';
import { FaVideo } from 'react-icons/fa';

const generateDummyData = (numPatients) => {
  const names = [
    'John Doe',
    'Jane Smith',
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

  const dataDump = generateDummyData(12);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = dataDump.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(dataDump.length / itemsPerPage);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
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
              <th className='px-4 py-2 text-left text-sm font-semibold text-black'>
                No.
              </th>
              <th className='px-4 py-2 text-left text-sm font-semibold text-black'>
                Nama Dokter
              </th>
              <th className='px-4 py-2 text-left text-sm font-semibold text-black'>
                ID Diagnosis
              </th>
              <th className='px-4 py-2 text-left text-sm font-semibold text-black'>
                Hasil Diagnosis AI
              </th>
              <th className='px-4 py-2 text-left text-sm font-semibold text-black'>
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((entry, index) => (
              <tr key={entry.id} className='border-b'>
                <td className='px-4 py-2 text-black'>
                  {indexOfFirstItem + index + 1}
                </td>
                <td className='px-4 py-2 text-black'>
                  <div className='flex items-center'>
                    <img
                      src={`https://via.placeholder.com/40`}
                      alt='avatar'
                      className='w-10 h-10 rounded-full'
                    />
                    <div className='ml-3'>
                      <p className='text-sm font-medium'>{entry.name}</p>
                      <p className='text-xs text-gray-500'>{entry.specialty}</p>
                    </div>
                  </div>
                </td>
                <td className='px-4 py-2 text-black'>{entry.diagId}</td>
                <td className='px-4 py-2 text-black'>
                  Lorem Ipsum dolor sit amet consectetur adipiscing elit
                </td>
                <td className='px-4 py-2'>
                  {entry.status === 'Join Meeting' ? (
                    <button className='text-white bg-blue-500 p-2 rounded-lg text-sm flex items-center hover:bg-blue-700'>
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

      {/* Pagination Controls */}
      <div className='flex justify-between items-center'>
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 text-sm font-semibold text-white bg-blue-500 hover:bg-blue-700 rounded-lg ${
            currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          Previous
        </button>
        <span className='text-sm font-semibold text-gray-700'>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 text-sm font-semibold text-white bg-blue-500 hover:bg-blue-700 rounded-lg ${
            currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
