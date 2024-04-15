import React from 'react';
import { Link } from 'react-router-dom';
import { logo } from '../assets';

const Navbar = () => {
  const headerNavLinks = [
    { href: '/', title: 'Home' },
    { href: '/blog', title: 'Blog' },
    { href: '/tags', title: 'Tags' },
    { href: '/projects', title: 'Projects' },
    { href: '/about', title: 'About' },
  ];

  return (
    <div className='w-full h-[80px] z-10 bg-white'>
      <div className='flex justify-between items-center px-45 w-full h-full md:max-w-[1240px] m-auto'>
        <div className='flex items-center'>
          <Link to='/'>
            <img src={logo} alt='logo' className='sm:ml-10 ss:ml-10 md:ml-3 w-full h-[55px]' />
            {/* <h1 className='font-light font-jbmono sm:ml-10'>Ivan Graciarena</h1> */}
          </Link>
        </div>
        <div className='flex items-center space-x-4 leading-5 sm:space-x-6'>
          {headerNavLinks
            .filter((link) => link.href !== '/')
            .map((link) => (
              <Link
                to={link.href}
                key={link.title}
                href={link.href}
                className='hidden font-medium font-jbmono sm:ml-10 sm:block'
              >
                {link.title}
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
