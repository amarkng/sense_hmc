import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';

export default function SignIn() {
  const [role, setRole] = useState('');
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();

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
    } else {
      alert('Please select a role before logging in.');
    }
  };

  return (
    <div className='flex h-screen'>
      <div
        className='hidden md:flex w-1/2 bg-cover'
        style={{
          backgroundImage: `url('/assets/images/reglog.png')`,
        }}
      ></div>

      <div className='flex flex-col justify-center items-center w-full md:w-1/2 bg-white p-8'>
        <div className='w-full max-w-md'>
          <h2 className='text-2xl font-bold text-center text-gray-800'>
            Bergabunglah dengan{' '}
            <span className='text-blue-600'>SymptoSense!</span>
          </h2>
          <p className='mt-2 text-center text-gray-600'>
            Daftarkan dirimu dan mulai pantau kesehatanmu dengan bantuan AI.
          </p>

          <form className='mt-8' onSubmit={handleLogin}>
            <div className='mb-4'>
              <label className='block text-sm font-medium text-gray-700'>
                Email
              </label>
              <input
                type='email'
                placeholder='Enter your email'
                className='mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600'
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
                  className='mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600'
                />
                <Link
                  href='#'
                  className='absolute inset-y-0 right-0 pr-3 flex items-center text-sm text-gray-500'
                >
                  Forgot?
                </Link>
              </div>
            </div>

            <div className='mb-4'>
              <label className='block text-sm font-medium text-gray-700'>
                Select Your Role
              </label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className='mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600'
              >
                <option value=''>Choose a role</option>
                <option value='doctor'>Doctor</option>
                <option value='patient'>Patient</option>
              </select>
            </div>

            <button className='w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition'>
              Masuk
            </button>
          </form>

          {/* <div className='my-6 text-center text-gray-600'>or</div>

          <button className='w-full bg-white border border-gray-300 text-gray-600 p-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-100 transition'>
            <FaGoogle className='text-xl' />
            <span>Continue with Google</span>
          </button> */}

          <p className='mt-6 text-center text-gray-600'>
            Want to create an account?{' '}
            <Link href='/SignUp' className='text-blue-600'>
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
