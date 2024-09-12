import { blog_data } from '@/Assets/assets';
import React from 'react';
import Image from 'next/image';

const BlogItems = () => {
  return (
    <div className='max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px_#000000]'>
      {/* Image section */}
      <Image 
        src={blog_data[0].image} 
        alt={blog_data[0].title} 
        width={400} 
        height={400} 
        className='border-b border-black' 
      />
      
      {/* Category */}
      <p className='ml-5 mt-5 px-2 inline-block bg-black text-white text-sm'>
        {blog_data[0].category}
      </p>
      
      {/* Content section */}
      <div className="p-5">
        <h5 className='mb-2 text-lg font-medium'>{blog_data[0].title}</h5>
      </div>
    </div>
  );
}

export default BlogItems;
