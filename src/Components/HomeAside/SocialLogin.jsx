import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';


const SocialLogin = () => {
  return (
    <div className='mt-3'>
      <h1 className='font-semibold my-3 text-xl'>Login with</h1>
      <div className='space-y-2'>
        <button className='btn w-full btn-outline btn-secondary'> <FaGoogle size={24} /> Login with Google</button>
        <button className='btn w-full btn-outline btn-primary '> <FaGithub  size={24}/> Login with Github</button>
      </div>
    </div>
  );
};

export default SocialLogin;