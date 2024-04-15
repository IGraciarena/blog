import React from 'react';
import { FaGithub, FaLinkedin, FaStackOverflow, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full bg-[#f9f9f9] py-8 px-2'>
      <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2  py-8'>
        <div className='col-span-4 pt-2 md:pt-2'>
          <p className='font-bold uppercase font-jbmono'>Subscribe To My Newsletter</p>
          <p className='py-4 font-jbmono'>
            The best articles, and resources sent to your inbox weekly.
          </p>
        </div>
          <form className='flex flex-col sm:flex-row'>
            <input
              className='w-full p-2 m-6 rounded-md font-jbmono'
              type='email'
              placeholder='Enter email'
            />
          </form>
          <button className='p-2 m-6 bg-[#00B86E] font-jbmono '>Subscribe</button>
      </div>

      <div className='flex flex-col max-w-[1240px] px-2 py-4 m-auto justify-between sm:flex-row text-center items-center'>
        <p className='font-jbmono'>Copyright © 2024 igraciarena.com</p>
        <div className='flex justify-between sm:w-[300px] pt-4 text-2xl gap-2'>
          <a href='https://github.com/IGraciarena' target='_blank' rel='noopener noreferrer'>
            <FaGithub />
          </a>
          <a href='https://twitter.com/IGraciarena' target='_blank' rel='noopener noreferrer'>
            <FaTwitter />
          </a>
          <a
            href='https://stackoverflow.com/users/14342806/ivan-graciarena'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaStackOverflow />
          </a>
          <a
            href='https://linkedin.com/in/ivan-graciarena'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
