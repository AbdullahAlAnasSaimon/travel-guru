import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import {FaFacebook, FaGithub} from 'react-icons/fa';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
  const {setUser, logInUser, googleSignIn} = useContext(AuthContext);
  const [error, setError] = useState('');
  const googleProvider = new GoogleAuthProvider();


  const handleLogIn = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    logInUser(email, password)
    .then(result =>{
      const user = result.user;
      console.log(user);
      setUser(user);
      form.reset();
    })
    .catch(error => {
      setError(error.message);
    })
  }

  const SignInWithGoogle = () =>{
    googleSignIn(googleProvider)
    .then(result =>{
      const user = result.user;
      console.log(user)
    })
    .catch(error => {
      setError(error.message);
    })
  }

  return (
    <form onSubmit={handleLogIn} className='w-4/12 mx-auto border-2 border-gray-300 p-8 my-5 rounded-lg'>
      <h2 className='text-3xl font-bold text-gray-700 mb-8'>Log In</h2>
      <div className='my-5'>
        <input className='border-b-2 w-full p-2 focus:border-orange-500 outline-0 duration-200 ease-in-out' type="email" name='email' placeholder='Email Address' required/>
      </div>
      <div className='my-5'>
        <input id='password' className='border-b-2 w-full p-2 focus:border-orange-500 outline-0 duration-200 ease-in-out' type="password" name='password' placeholder='Password' required/>
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
      <p className='text-red-500 mt-5'>{error.slice(9, error.length - 1)}</p>
      <button className='bg-orange-400 hover:bg-orange-500 py-3 w-full my-8 rounded-md font-semibold' type="submit">Log In</button>
      <p className='text-center'>Don't Have An Account? <Link to='/signup' className='underline text-orange-400'>Create An Account</Link></p>
      <hr className='border-t-2 border-gray-300 my-8' />
      <p className='font-bold text-gray-600 text-center bg-white -mt-12 w-3/12 mx-auto'>OR</p>
      <div>
        <button type='button' onClick={SignInWithGoogle} className='border-2 border-gray-700 hover:bg-gray-100 w-full my-2 py-2 rounded-md'><FcGoogle className='text-xl inline-block mr-3'/>Log In With Google</button>
        <button type='button' className='bg-blue-800 hover:bg-blue-700 text-white w-full my-2 py-3 rounded-md'><FaFacebook className='text-xl inline-block mr-3 text-blue-100'/>Log In With Facebook</button>
        <button type='button' className='bg-gray-900 hover:bg-gray-800 text-white w-full my-2 py-3 rounded-md'><FaGithub className='text-xl inline-block mr-3 text-white'/>Log In With Github</button>
      </div>
    </form>
  );
};

export default Login;