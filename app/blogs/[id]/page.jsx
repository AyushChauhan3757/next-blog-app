'use client'
import { assets, blog_data } from '@/Assets/assets';
import Footer from '@/Components/Footer';
import Head from '@/Components/Head';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Page = ({ params }) => {

    // Storing the blog data in a variable
    const [data, setData] = useState(null);
    const fetchBlogData = async () => {
       const response = await axios.get('/api/blog',{
        params:{
            id:params.id
        }
       })
       setData(response.data);
    }

    useEffect(() => {
        fetchBlogData();
    },[])

    return (
        data ? 
        <>
            <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
                {/* --- Calling Head --- */}
                <Head />
                {/* --- Blog Section --- */}
                <div className='text-center my-24'>
                    {/* Title */}
                    <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>{data.title}</h1>
                    {/* Author Info */}
                    {/* Need To Add Profile Section */}
                    <div className='transtion-all duration-300 hover:scale-125  hover:underline'>
                        <Image src={data.authorImg} width={60} height={60} alt='' className='mx-auto mt-6 border border-white rounded-full ' />
                        <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>
                    </div>
                </div>
            </div>
            {/* --- Blog Content --- */}
            <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
                {/* --- Blog Image --- */}
                <Image src={data.image} width={1280} height={720} alt='' className='border-4 border-white transtion-all duration-300 hover:scale-110' />
                {/* --- Blog Description --- */}
                <h1 className='my-8 text-[26px] font-semibold'>Description</h1>
                <p className='my-8 text-[18px]'>{data.description}</p>
                {/* --- Share Section --- */}
                <div className='my-24'>
                    <p className='text-black font-semibold my-4'>Share This Article On Social Media.</p>
                    <div className='flex'>
                        <Link className='transition-all duration-300 hover:scale-110' href="https://www.facebook.com"><Image src={assets.facebook_icon} alt='' width={50} /></Link>
                        <Link className='transition-all duration-300 hover:scale-110' href="https://www.twitter.com"><Image src={assets.twitter_icon} alt='' width={50} /></Link>
                        <Link className='transition-all duration-300 hover:scale-110' href="https://www.googleplus.com"><Image src={assets.googleplus_icon} alt='' width={50} /></Link>
                    </div>
                </div>
            </div>
            {/* --- Calling Footer --- */}
            <Footer />
        </> :
        <>
            <div className='text-center my-8'>
                {/* --- Error Section --- */}
                <h1 className='text-3xl sm:text-5xl font-semibold'>Blog Not Found.</h1>
                
                <p className='mt-10 max-w-[740px] m-auto text-xs sm:text-base'>Sorry, the blog you are searching for is not found.</p>

            </div>
            <Footer />
        </>
    );
};

export default Page;