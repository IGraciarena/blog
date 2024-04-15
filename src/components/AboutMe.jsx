import React from 'react';

const AboutMe = () => {
  return (
    <div className='w-full bg-[#f9f9f9] '>
      <div className='max-w-[1240px] mx-auto'>
        <div className='divide-y divide-gray-700'>
          <div className='space-y-2 pb-8 pt-6 md:space-y-5'>
            <h2 className='text-3xl font-extrabold font-jbmono leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14'>
              Hi! This is Ivan Graciarena...
            </h2>
          </div>
          <div className='p-8'>
          <p className='text-gray-600 leading-7 tracking-tighter text-lg font-jbmono'>
              I am a Software Engineer and would like to invite you to check out my personal
              blog, you will find lots of great material about software related stuffs.
              <br />
              Nothing more to say, hope you found this usefull, down below you will found my socials
              if you want to reach me out.
              <br />
              <br />
              Cheers!
              <br />
              <br />
              Ivan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
