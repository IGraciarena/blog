import React from 'react';

const AboutMe = () => {
  return (
    <div className='w-full bg-[#f9f9f9] py-[50px]'>
      <div className='max-w-[1240px] mx-auto'>
        <div className='p-8'>
          <h2 className='font-bold text-5xl font-jbmono'>Hi! This is Ivan Graciarena...</h2>
        </div>
        <div className='p-8'>
          <p className='text-gray-600 leading-7 tracking-tighter text-lg font-jbmono'>
            I&apos; m a Software Engineer and would like to invite you to check out my personal
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
  );
};

export default AboutMe;
