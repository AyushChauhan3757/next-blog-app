import { assets } from '@/Assets/assets';
import Image from 'next/image';
import React from 'react';

const Header = () => {
    return (
        // Defining Padding for the Header
        <div className='py-5 px-5 md:px-12 lg:px-28'>
            {/* --- Defining Flex --- */}
            <div className='flex justify-between items-center'>
                {/* --- Logo --- */}
                <Image src={assets.logo} width={180} alt='' className='w-[130px] sm:w-auto'/>
                <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]'>Get Started <Image src={assets.arrow}/> </button>
            </div>

            <div className='text-center my-8'>
                <h1 className='text-3xl sm:text-5xl font-semibold'>Latest Blogs</h1>
                
                <p className='mt-10 max-w-[740px] m-auto text-xs sm:text-base'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati praesentium repudiandae iusto recusandae odit molestias harum, natus alias sed provident velit rem quod!.</p>

                <form className='flex justify-between max-w-[500px] scale-75 sm: scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]'>

                    <input type='email' placeholder='Enter Your Email' className='pl-4 outline-none '/>

                    <button type='submit' className='border-1 border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white'>Subscribe</button>

                </form>
            </div>
        </div>
    );
};

export default Header;