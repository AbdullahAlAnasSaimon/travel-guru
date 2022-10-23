import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <form className='w-4/12 mx-auto border-2 border-gray-300 p-8 my-5 rounded-lg'>
      <h2 className='text-3xl font-bold text-gray-700'>Log In</h2>
      <div className='my-5'>
        <input className='border-b-2 w-full p-2 focus:border-orange-500 outline-0 duration-200 ease-in-out' type="email" name='email' placeholder='Email Address' required/>
      </div>
      <div className='my-5'>
        <input className='border-b-2 w-full p-2 focus:border-orange-500 outline-0 duration-200 ease-in-out' type="password" name='password' placeholder='Password' required/>
      </div>
      <div className='flex justify-between items-center'>
        <div>
          <input className='' type="checkbox" name="remember" id="" />
          <label htmlFor="remember">Remember Me</label>
        </div>
        <div>
          <Link className='underline text-orange-400'>Forget Password</Link>
        </div>
      </div>
      <button className='bg-orange-400 hover:bg-orange-500 py-3 w-full my-8 rounded-md' type="submit">Log In</button>
      <p className='text-center'>Don't Have An Account? <Link to='/signup' className='underline text-orange-400'>Create An Account</Link></p>
    </form>
  );
};

export default Login;