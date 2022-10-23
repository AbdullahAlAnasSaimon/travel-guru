import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Logo from '../../images/logo.png';

const Header = () => {
  const {user} = useContext(AuthContext);
  return (
    <div className='sticky top-0 bg-gray-100/50 backdrop-blur-sm border-b-2 border-gray-100'>
      <div className='flex justify-between items-center w-10/12 mx-auto py-3'>
        <div className='w-24'>
          <Link to='/home'><img src={Logo} alt="company-logo" /></Link>
        </div>
        <nav>
          <ul className='flex'>
            <li><Link className='mx-2 px-3 py-2 hover:bg-orange-200 rounded-md duration-200 ease-in-out' to='/news'>News</Link></li>
            <li><Link className='mx-2 px-3 py-2 hover:bg-orange-200 rounded-md duration-200 ease-in-out' to='/destination'>Destination</Link></li>
            <li><Link className='mx-2 px-3 py-2 hover:bg-orange-200 rounded-md duration-200 ease-in-out' to='/blog'>Blog</Link></li>
            <li><Link className='mx-2 px-3 py-2 hover:bg-orange-500 rounded-md duration-200 ease-in-out bg-orange-400 rounded-md' to='/login'>Log In</Link></li>
            <li><Link className='mx-2 px-3 py-2 hover:bg-orange-200 rounded-md duration-200 ease-in-out' to='/profile'>{user?.displayName}</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;