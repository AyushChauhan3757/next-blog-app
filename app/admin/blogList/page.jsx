"use client";
import React from 'react';

const Page = () => {
    return (
        <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16'>
            <h1>All Blogs</h1>
            <div className='relative h-[80vh] max-w-[850px] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide'></div>
            <table className='w-full text-sm text-gray-500'>
                <thead className='text-sm text bg-gray-700 text-left uppercase bg-gray-50'>
                    <tr>
                        <th scope='col' className='hidden sm:block px-6 py-3'>
                            Author Name
                        </th>
                    </tr>
                </thead>
            </table>
        </div>
    );
};

export default Page;