import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import NavbarPatient from '../app/components/NavbarPatient';
import HistoryDiagnosisP from '../app/components/HistoryDiagnosisP';
import { TbEyeSearch } from 'react-icons/tb';

export default function DiagnosisP() {
  const [symptoms, setSymptoms] = useState([
    'Sesak napas',
    'Suara serak',
    'Batuk terus-menerus',
    'Nyeri dada',
  ]);
  const aiDiagnosis = {
    namaPenyakit: 'Demam Berdarah',
    gejala: ['Sesak napas', 'Suara serak', 'Batuk terus-menerus', 'Nyeri dada'],
  };

  const [newSymptom, setNewSymptom] = useState('');
  const [isAddSymptomModalOpen, setIsAddSymptomModalOpen] = useState(false);
  const [isResultModalOpen, setIsResultModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleAddSymptom = (e) => {
    e.preventDefault();
    if (newSymptom.trim() !== '') {
      setSymptoms([...symptoms, newSymptom]);
      setNewSymptom('');
    }
  };

  const handleDeleteSymptom = (symptomToDelete) => {
    setSymptoms(symptoms.filter((symptom) => symptom !== symptomToDelete));
  };

  return (
    <div className='flex min-h-screen bg-gray-100'>
      <NavbarPatient
        toggleSidebar={toggleSidebar}
        isSidebarOpen={isSidebarOpen}
      />

      <div
        className={`flex-1 p-4 lg:p-8 bg-gray-100 transition-all duration-300 min-w-0 ${
          isSidebarOpen ? 'ml-64' : 'ml-0'
        }`}
      >
        {/* Hamburger for mobile */}
        <div className='md:hidden flex justify-between items-center mb-6'>
          <h1 className='text-2xl font-bold text-blue-600'>SymptoSense</h1>
          <button onClick={toggleSidebar}>
            <FaBars className='text-2xl text-gray-700' />
          </button>
        </div>

        <div className='flex justify-between items-center mb-6'>
          <h1 className='hidden sm:block text-2xl font-bold text-black'>
            Diagnosis
          </h1>
        </div>

        <section className='bg-white p-6 rounded-lg shadow mb-8 w-full max-w-full overflow-hidden'>
          <h2 className='text-md lg:text-xl font-bold mb-4 text-left text-black'>
            Cek Diagnosis dengan AI
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6'>
            {symptoms.map((symptom, index) => (
              <div
                key={index}
                onDoubleClick={() => handleDeleteSymptom(symptom)}
                className='border border-blue-400 text-black flex justify-center items-center min-w-[150px] min-h-[60px] px-6 py-4 rounded-full text-lg font-semibold cursor-pointer hover:bg-blue-50 transition'
              >
                {symptom}
              </div>
            ))}
            <button
              onClick={() => setIsAddSymptomModalOpen(true)}
              className='border border-blue-400 text-blue-600 flex justify-center items-center min-w-[150px] min-h-[60px] px-6 py-4 rounded-full text-lg font-semibold cursor-pointer hover:bg-blue-100 transition'
            >
              + Tambah Gejala
            </button>
          </div>

          {/* Result Button */}
          <div className='text-center'>
            <button
              className='bg-blue-600 text-white px-8 py-3 rounded-full flex items-center justify-center mx-auto hover:bg-blue-700 transition'
              onClick={() => setIsResultModalOpen(true)}
            >
              <TbEyeSearch className='mr-2' />
              Lihat Hasil Gejala
            </button>
          </div>
        </section>

        <section className='w-full max-w-full overflow-x-auto'>
          <HistoryDiagnosisP />
        </section>
      </div>

      {isAddSymptomModalOpen && (
        <div className='fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50'>
          <div className='bg-white rounded-lg w-11/12 sm:w-2/3 md:w-1/2 lg:w-1/3 p-6'>
            <div className='flex justify-between items-center mb-4'>
              <h2 className='text-xl font-bold text-blue-600'>Tambah Gejala</h2>
              <button
                onClick={() => setIsAddSymptomModalOpen(false)}
                className='text-gray-600'
              >
                ✕
              </button>
            </div>
            <input
              type='text'
              placeholder='Cari gejala penyakit...'
              className='w-full p-4 mb-4 border border-gray-300 rounded-lg text-black'
              value={newSymptom}
              onChange={(e) => setNewSymptom(e.target.value)}
            />
            <button
              onClick={handleAddSymptom}
              className='bg-blue-500 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-700'
            >
              Tambah Gejala
            </button>
          </div>
        </div>
      )}

      {isResultModalOpen && (
        <div className='fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50'>
          <div className='bg-white rounded-lg w-11/12 sm:w-2/3 md:w-1/2 lg:w-1/3 p-6'>
            <div className='flex justify-between items-center mb-4'>
              <h2 className='text-xl font-bold text-blue-600'>
                Hasil Diagnosis AI
              </h2>
              <button
                onClick={() => setIsResultModalOpen(false)}
                className='text-gray-600'
              >
                ✕
              </button>
            </div>
            <div className='text-left'>
              <p className=' text-lg text-black'>Nama Penyakit:</p>
              <p className='font-bold text-xl text-black mb-4'>
                {aiDiagnosis.namaPenyakit}
              </p>
              <p className='font-semibold text-lg text-black'>Gejala:</p>
              <ul className='list-disc list-inside'>
                {aiDiagnosis.gejala.map((gejala, index) => (
                  <li key={index} className='text-black'>
                    {gejala}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
