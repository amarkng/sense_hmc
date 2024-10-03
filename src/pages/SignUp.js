import { useState } from 'react';
import { useRouter } from 'next/router';
import { FaGoogle } from 'react-icons/fa';
import Link from 'next/link';

export default function SignUp() {
  const [role, setRole] = useState('');
  const [selectedFile, setSelectedFile] = useState(null); // State untuk menyimpan file yang diunggah
  const router = useRouter();

  const handleSignUp = (e) => {
    e.preventDefault();

    if (!role) {
      alert('Please select a role before signing up.');
      return;
    }

    if (role === 'doctor') {
      router.push({
        pathname: '/doctor-dashboard',
        query: { role: 'doctor' },
      });
    } else if (role === 'patient') {
      router.push({
        pathname: '/patient-dashboard',
        query: { role: 'patient' },
      });
    }
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  return (
    <div className='flex h-screen'>
      <div
        className='hidden md:flex w-1/2 bg-cover'
        style={{
          backgroundImage: `url('/assets/images/reglog.png')`,
        }}
      ></div>

      <div className='flex flex-col justify-center items-center w-full md:w-1/2 bg-white p-6'>
        <div className='w-full max-w-md'>
          <h2 className='text-2xl font-bold text-center text-gray-800'>
            Buat akun di <span className='text-blue-600'>SymptoSense!</span>
          </h2>
          <p className='mt-2 text-center text-gray-600'>
            Daftarkan dirimu untuk pengalaman kesehatan yang lebih baik dengan
            AI.
          </p>

          <form className='mt-8' onSubmit={handleSignUp}>
            <div className='mb-4'>
              <label className='block text-sm font-medium text-gray-700'>
                Nama
              </label>
              <input
                type='text'
                placeholder='Enter your name'
                className='mt-1 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600'
              />
            </div>

            <div className='mb-4'>
              <label className='block text-sm font-medium text-gray-700'>
                Email
              </label>
              <input
                type='email'
                placeholder='Enter your email'
                className='mt-1 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600'
              />
            </div>

            <div className='mb-4'>
              <label className='block text-sm font-medium text-gray-700'>
                Password
              </label>
              <div className='relative'>
                <input
                  type='password'
                  placeholder='Enter your password'
                  className='mt-1 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600'
                />
              </div>
            </div>

            <div className='mb-4'>
              <label className='block text-sm font-medium text-gray-700'>
                Select Your Role
              </label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className='mt-1 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600'
              >
                <option value=''>Choose a role</option>
                <option value='doctor'>Doctor</option>
                <option value='patient'>Patient</option>
              </select>
            </div>

            {/* Conditional File Upload */}
            {role === 'doctor' && (
              <div className='mb-4'>
                <label className='block text-sm font-medium text-gray-700'>
                  Upload STR (Surat Tanda Registrasi)
                </label>
                <input
                  type='file'
                  accept='image/*'
                  onChange={handleFileChange}
                  required
                  className='mt-1 w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:bg-blue-600 file:text-white hover:file:bg-blue-700'
                />
              </div>
            )}

            {role === 'patient' && (
              <div className='mb-4'>
                <label className='block text-sm font-medium text-gray-700'>
                  Upload KTP
                </label>
                <input
                  type='file'
                  accept='image/*'
                  onChange={handleFileChange}
                  required
                  className='mt-1 w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:bg-blue-600 file:text-white hover:file:bg-blue-700'
                />
              </div>
            )}

            <button className='w-full bg-blue-600 text-white p-2 rounded-lg font-semibold hover:bg-blue-700 transition'>
              Daftar
            </button>
          </form>

          {/* <div className='my-6 text-center text-gray-600'>or</div>

          <button className='w-full bg-white border border-gray-300 text-gray-600 p-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-100 transition'>
            <FaGoogle className='text-xl' />
            <span>Continue with Google</span>
          </button> */}

          <p className='mt-6 text-center text-gray-600'>
            Already Have An Account?{' '}
            <Link href='/SignIn' className='text-blue-600'>
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
