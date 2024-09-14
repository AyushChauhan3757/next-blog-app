import { assets, blog_data } from '@/Assets/assets';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BlogItems = ({ title, description, category, image, id }) => {
  
  return (
    <div className='max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px_#000000] hover:translate-y-[-2px] transition duration-300 ease-in-out'>
      <Link href={`/blogs/${id}`}>
        {/* Image section */}
        <Image src={image} alt='' width={400} height={400} className='border-b border-black' />
      </Link>
      {/* Category */}
      <p className='ml-5 mt-5 px-2 inline-block bg-black text-white text-sm'>{category}</p>
      
      {/* Content section */}
      <div className="p-5">
        <h5 className='mb-2 text-lg font-medium'>{title}</h5>
        <p className='mb-3 text-sm tracking-tight text-grey-700'>{description}</p>
        {/* Read More */}
        <Link href={`/blogs/${id}`} className='inline-flex items-center py-2 font-semibolld text-center hover:underline'>
          Read More <Image src={assets.arrow} alt='' width={12} className='ml-2' />
        </Link>
      </div>
    </div>
  );
}

export default BlogItems;
