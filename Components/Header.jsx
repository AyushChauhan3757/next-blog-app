import { assets } from '@/Assets/assets';
import Image from 'next/image';
import React from 'react';
import Head from './Head';

const Header = () => {
    return (
        // Defining Padding for the Header
        <div className='py-5 px-5 md:px-12 lg:px-28'>
            {/* --- Calling Head --- */}
            <Head />

            <div className='text-center my-8'>
                {/* --- Top Section --- */}
                <h1 className='text-3xl sm:text-5xl font-semibold'>Latest Blogs</h1>
                
                <p className='mt-10 max-w-[740px] m-auto text-xs sm:text-base'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati praesentium repudiandae iusto recusandae odit molestias harum, natus alias sed provident velit rem quod!.</p>

                {/* --- NewsLetter Subscription --- */}
                <form className='flex justify-between max-w-[500px] scale-75 sm: scale-100 mx-auto mt-10 border border-black shadow-[-4px_4px_0px_#000000] hover:shadow-[-8px_8px_0px_#000000] hover:translate-y-[-2px] transition duration-300 ease-in-out'>

                    <input type='email' placeholder='Enter Your Email' className='pl-4 outline-none '/>

                    <button type='submit' className='border-1 border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white'>Subscribe</button>

                </form>
            </div>
        </div>
    );
};

export default Header;