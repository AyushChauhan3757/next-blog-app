import React from 'react';
import { assets } from '@/Assets/assets';
import Image from 'next/image';
import Link from 'next/link';

const Head = () => {

    return (
        <div>
            {/* --- Defining Flex --- */}
            <div className='flex justify-between items-center'>
                {/* --- Logo --- */}
                <Link href='/'><Image src={assets.logo} width={180} alt='' className='w-[130px] sm:w-auto'/></Link>

                {/* --- Getting Started - Link To Admin --- */}
                <Link href="../admin" className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-4px_4px_0px_#000000] hover:shadow-[-8px_8px_0px_#000000] hover:translate-y-[-2px] transition duration-300 ease-in-out active:shadow-[-4px_4px_0px_#000000] active:translate-y-[2px]'>
                    Get Started 
                    <Image src={assets.arrow} alt='' /> 
                </Link>
            </div>
        </div>
    );
};

export default Head;