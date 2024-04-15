import React from 'react';
import { Link } from 'react-router-dom';
import { logo } from '../assets';

const Navbar = () => {
  // const [toggle, setToggle] = useState(false);
  // const handleClick = () => setToggle(!toggle);

  return (
    <div className='w-full h-[80px] z-10 bg-white fixed drop-shadow-lg relative'>
      <div className='flex justify-between items-center w-full h-full md:max-w-[1240px] m-auto'>
        <div className='flex items-center'>
          <Link to='/'>
            <img src={logo} alt='logo' className='sm:ml-10 ss:ml-10 md:ml-3 w-full h-[55px]' />
            <h1 className='font-light font-jbmono sm:ml-10'>Ivan Graciarena</h1>
          </Link>
        </div>
        {/* TODO: I have to add the link to redirect to the blog */}
      </div>
    </div>
  );
};

export default Navbar;
