import React from 'react';

const Login = () => {
  return (
    <form className='w-5/12 mx-auto border-2 border-gray-300 p-8'>
      <h2 className='text-2xl font-bold text-gray-700'>Log In</h2>
      <div className='my-5'>
        <input className='border-b-2 w-full p-2 focus:border-orange-500 outline-0 duration-200 ease-in-out' type="email" name='email' placeholder='Email Address' required/>
      </div>
      <div className='my-5'>
        <input className='border-b-2 w-full p-2 focus:border-orange-500 outline-0 duration-200 ease-in-out' type="password" name='password' placeholder='Password' required/>
      </div>
      <button type="submit">Log In</button>
    </form>
  );
};

export default Login;