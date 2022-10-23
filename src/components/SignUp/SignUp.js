import React, { useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import {FaFacebook, FaGithub} from 'react-icons/fa';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const SignUp = () => {
  const {user, setUser, createUser} = useContext(AuthContext);


  const handleSignUp = event =>{
    event.preventDefault();
    const form = event.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    console.log(firstName, lastName, email, password, confirmPassword);

    createUser(email, password)
    .then(result =>{
      const user = result.user;
      console.log(user);
      setUser(user);
      form.reset();
    })
    .catch(error => console.log(error))
  }

  return (
    <form onSubmit={handleSignUp} className='w-4/12 mx-auto border-2 border-gray-300 p-8 my-5 rounded-lg'>
      <h2 className='text-3xl font-bold text-gray-700 mb-8'>Create An Account</h2>
      
      <div className='my-5'>
        <input className='border-b-2 w-full p-2 focus:border-orange-500 outline-0 duration-200 ease-in-out' type="text" name='firstName' placeholder='First Name'/>
      </div>
      <div className='my-5'>
        <input className='border-b-2 w-full p-2 focus:border-orange-500 outline-0 duration-200 ease-in-out' type="text" name='lastName' placeholder='Last Name'/>
      </div>
      <div className='my-5'>
        <input className='border-b-2 w-full p-2 focus:border-orange-500 outline-0 duration-200 ease-in-out' type="email" name='email' placeholder='Email Address' required/>
      </div>
      <div className='my-5'>
        <input className='border-b-2 w-full p-2 focus:border-orange-500 outline-0 duration-200 ease-in-out' type="password" name='password' placeholder='Password' required/>
      </div>
      <div className='my-5'>
        <input className='border-b-2 w-full p-2 focus:border-orange-500 outline-0 duration-200 ease-in-out' type="password" name='confirmPassword' placeholder='Confirm Password' required/>
      </div>
      <button className='bg-orange-400 hover:bg-orange-500 py-3 w-full my-8 rounded-md font-semibold' type="submit">Sign Up</button>
      <p className='text-center'>Don't Have An Account? <Link to='/login' className='underline text-orange-400'>Log In</Link></p>
      <hr className='border-t-2 border-gray-300 my-8' />
      <p className='font-bold text-gray-600 text-center bg-white -mt-12 w-3/12 mx-auto'>OR</p>
      <div>
        <button className='border-2 border-gray-700 hover:bg-gray-100 w-full my-2 py-2 rounded-md'><FcGoogle className='text-xl inline-block mr-3'/> Sign Up With Google</button>
        <button className='bg-blue-800 hover:bg-blue-700 text-white w-full my-2 py-3 rounded-md'><FaFacebook className='text-xl inline-block mr-3 text-blue-100'/>Sign Up With Facebook</button>
        <button className='bg-gray-900 hover:bg-gray-800 text-white w-full my-2 py-3 rounded-md'><FaGithub className='text-xl inline-block mr-3 text-white'/>Sign Up With Github</button>
      </div>
    </form>
  );
};

export default SignUp;