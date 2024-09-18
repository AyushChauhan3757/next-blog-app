import { assets } from '@/Assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SideBar = () => {
    return (
        <div className='flex flex-col bg-slate-100'>
            <div className='px-2 sm:pl-14 py-3 border border-black hover:scale-105 transition duration-300 ease-in-out'>
                <Image src={assets.logo} width={120} alt='' />
            </div>
            <div className='w-28 sm:w-80 h-[100vh] relative py-12 border border-black'>
                <div className='w-[50%] sm:w-[80%] absolute right-0'>
                    <Link href='/admin/addProduct' className='flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-4px_4px_0px_#000000] hover:shadow-[-8px_8px_0px_#000000] hover:translate-y-[-2px] transition duration-300 ease-in-out'>
                        <Image src={assets.add_icon} alt='' width={28} />
                        <p>Add Blogs</p>
                    </Link>
                    <Link href='/admin/blogList' className='mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-4px_4px_0px_#000000] hover:shadow-[-8px_8px_0px_#000000] hover:translate-y-[-2px] transition duration-300 ease-in-out'>
                        <Image src={assets.blog_icon} alt='' width={28} />
                        <p>Blog List</p>
                    </Link>
                    <Link href='/admin/subscriptions' className='mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-4px_4px_0px_#000000] hover:shadow-[-8px_8px_0px_#000000] hover:translate-y-[-2px] transition duration-300 ease-in-out'>
                        <Image src={assets.email_icon} alt='' width={28} />
                        <p>Subcriptions</p>
                    </Link>
                </div>                
            </div>
        </div>
    );
};

export default SideBar;