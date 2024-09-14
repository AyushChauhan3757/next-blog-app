import { assets } from '@/Assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center'>
            {/* --- Logo --- */}
            <Image src={assets.logo_light} alt='' width={120} />
            {/* --- Copyright --- */}
            <p className='text-sm text-white'>All rights reserved. Copyright @blogger</p>
            {/* --- Links --- */}
            <div className='flex'>
                <Link className='transition-all duration-300 hover:scale-110' href="https://www.facebook.com"><Image src={assets.facebook_icon} alt='' width={40} /></Link>
                <Link className='transition-all duration-300 hover:scale-110' href="https://www.twitter.com"><Image src={assets.twitter_icon} alt='' width={40} /></Link>
                <Link className='transition-all duration-300 hover:scale-110' href="https://www.googleplus.com"><Image src={assets.googleplus_icon} alt='' width={40} /></Link>
            </div>
        </div>
    );
};

export default Footer;