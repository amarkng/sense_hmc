import React, { useState } from 'react';
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

  const [newSymptom, setNewSymptom] = useState('');

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
    <div>
      <Navbar />

      <section className='py-16 bg-white text-center'>
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
                onClick={handleAddSymptom}
                className='border border-blue-400 text-blue-400 px-6 py-2 rounded-full cursor-pointer hover:bg-blue-100 transition'
              >
                + Tambah Gejala
              </div>
            </div>

            <button className='bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition'>
              Lihat Hasil Gejala
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
