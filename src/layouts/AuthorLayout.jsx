import React from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

const AuthorLayout = (authors) => {
  let author = {};

  if (author) {
    let arr = authors.authors.data.filter((author) => author.id == 1);
    author = arr[0];
  } else {
    author = {};
  }
  return (
    <>
      <div className='w-full bg-[#f9f9f9]'>
        <div className='max-w-[1240px] mx-auto'>
          <div className='divide-y divide-gray-700'>
            <div className='space-y-2 pb-8 pt-6 md:space-y-5'>
              <h1 className='text-3xl font-extrabold font-jbmono leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14'>
                About
              </h1>
            </div>
            <div className='space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0'>
              <div className='flex flex-col col-span-4 items-center space-x-2 pt-8'>
                <img
                  src={`http://localhost:1337${author.attributes.authorImage.data.attributes.url}`}
                  width={192}
                  height={192}
                  className='h-48 w-48 rounded-full'
                />
                <h3 className='pb-2 pt-4 text-2xl font-bold font-jbmono leading-8 tracking-tight'>
                  {author.attributes.authorName}
                </h3>
                <div className='font-jbmono'>{author.attributes.authorOccupation}</div>
                <div className='font-jbmono'>{author.attributes.authorCompany}</div>
              </div>
          <div className='p-8 col-span-4'>

              <ReactMarkdown className='text-gray-600 leading-7 tracking-tighter text-lg font-jbmono'>
                {author.attributes.authorBio}
              </ReactMarkdown>
          </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthorLayout;

