import { assets, blog_data } from '@/Assets/assets';
import React from 'react';
import Image from 'next/image';

const BlogItems = ({ title, description, category, image }) => {
  return (
    <div className='max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px_#000000] hover:translate-y-[-2px] transition duration-300 ease-in-out'>
      {/* Image section */}
      <Image 
        src={image} 
        alt='' 
        width={400} 
        height={400} 
        className='border-b border-black' 
      />
      
      {/* Category */}
      <p className='ml-5 mt-5 px-2 inline-block bg-black text-white text-sm'>{category}</p>
      
      {/* Content section */}
      <div className="p-5">
        <h5 className='mb-2 text-lg font-medium'>{title}</h5>
        <p className='mb-3 text-sm tracking-tight text-grey-700'>{description}</p>
        <div className='inline-flex items-center py-2 font-semibolld text-center'>
          Read More <Image src={assets.arrow} alt='' width={12} className='ml-2' />
        </div>
      </div>
    </div>
  );
}

export default BlogItems;
