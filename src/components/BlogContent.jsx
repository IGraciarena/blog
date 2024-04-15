import React from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { useParams } from 'react-router-dom';

const BlogContent = ({ blogs }) => {
  const { id } = useParams();
  let blog = {};
  console.log(blogs);
  if (blog) {
    let arr = blogs.data.filter((blog) => blog.id == id);
    blog = arr[0];
  } else {
    blog = {};
  }

  return (
    <div className='w-full pb-10 bg-[#f9f9f9]'>
      <div className='max-w-[1240px] mx-auto'>
        <div
          className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 ss:grid-cols-1
            md:gap-x-8 sm:gap-y-8 ss:gap-y-8 px-3.5 sm:pt-20 md:mt-0 ss:pt-20 text-black'
        >
          <div className='col-span-3 '>
            <img
              className='h-56 w-full object-cover'
              src={`http://localhost:1337${blog.attributes.blogImage.data.attributes.url}`}
            />
            <h1 className='font-bold text-2xl my-1 pt-5 font-jbmono'>
              {blog.attributes.blogTitle}
            </h1>
            <div className='pt-5'>
              <ReactMarkdown className='line-break font-jbmono'>
                {blog.attributes.blogContent}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
