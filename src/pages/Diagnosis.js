import React, { useState } from 'react';
import { TbEyeSearch } from 'react-icons/tb';
import Navbar from '../app/components/Navbar';
import Footer from '../app/components/Footer';

export default function Diagnosis() {
  const [symptoms, setSymptoms] = useState([
    'Sesak napas',
    'Suara serak',
    'Batuk terus-menerus',
    'Nyeri dada',
    'Tubuh lemas',
    'Sakit Kepala',
  ]);

  const aiDiagnosis = {
    namaPenyakit: 'Demam Berdarah',
    gejala: [
      'Demam tinggi',
      'Sakit dada',
      'Sulit bernapas',
      'Tidak nafsu makan',
    ],
  };

  const [newSymptom, setNewSymptom] = useState('');
  const [isAddSymptomModalOpen, setIsAddSymptomModalOpen] = useState(false);
  const [isResultModalOpen, setIsResultModalOpen] = useState(false);

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
    <div className='flex flex-col min-h-screen'>
      <Navbar />

      <section className='flex-grow py-16 bg-white text-center'>
        <div className='max-w-4xl mx-auto px-4 lg:px-0'>
          <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-8'>
            Periksa Kesehatanmu dengan Prediksi AI Akurat!
          </h1>

          <div className='bg-gray-50 p-8 rounded-lg shadow-sm'>
            <div className='flex justify-center items-center mb-6'>
              <input
                type='text'
                placeholder='Cari Gejala (Tekan Enter)'
                className='w-full max-w-md p-4 border border-gray-300 rounded-lg focus:outline-none text-black'
                value={newSymptom}
                onChange={(e) => setNewSymptom(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAddSymptom(e)}
              />
            </div>

            <div className='flex flex-wrap justify-center gap-4 mb-6'>
              {symptoms.map((symptom, index) => (
                <div
                  key={index}
                  onDoubleClick={() => handleDeleteSymptom(symptom)}
                  className='border border-blue-400 text-black px-6 py-2 rounded-full cursor-pointer hover:bg-blue-50 transition'
                >
                  {symptom}
                </div>
              ))}

              <div
                className='border border-blue-400 text-blue-400 px-6 py-2 rounded-full cursor-pointer hover:bg-blue-100 transition'
                onClick={() => setIsAddSymptomModalOpen(true)}
              >
                + Tambah Gejala
              </div>
            </div>

            <button
              className='bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition'
              onClick={() => setIsResultModalOpen(true)}
            >
              <TbEyeSearch className='inline-block mr-2' />
              Lihat Hasil Gejala
            </button>
          </div>
        </div>
      </section>

      <Footer />

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
