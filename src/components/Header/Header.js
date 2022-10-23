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
            <li><Link className='mx-4 px-4 py-2' to='/news'>News</Link></li>
            <li><Link className='mx-4 px-4 py-2' to='/destination'>Destination</Link></li>
            <li><Link className='mx-4 px-4 py-2' to='/blog'>Blog</Link></li>
            <li><Link className='mx-4 px-4 py-2 bg-orange-400 rounded-md' to='/login'>Log In</Link></li>
            <li><Link className='mx-4 px-4 py-2' to='/profile'>{user?.displayName}</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;