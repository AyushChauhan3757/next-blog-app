'use client';
import { assets } from '@/Assets/assets';
import Image from 'next/image';
import React, { useState } from 'react';

const Page = () => {
    const [image, setImage] = useState(null);
    const [data, setdata] = useState({
        title: "",
        description: "",
        category: "Startup",
        author: "Devraj Kohli",
        authorImg: "/author_img.png"
    });

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setdata(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
        <>
            <form className='pt-5 px-5 sm:pt-12 sm:pl-16'>
                <p className='text-xl'>Upload thumbnail</p>
                <label htmlFor="image">
                    <Image 
                        className='mt-4' 
                        src={image ? URL.createObjectURL(image) : assets.upload_area} 
                        width={140} 
                        height={70} 
                        alt='Thumbnail'
                    />
                </label>
                <input 
                    onChange={(e) => setImage(e.target.files[0])} 
                    type='file' 
                    id='image' 
                    hidden 
                    required 
                />

                <p className='text-xl mt-4'>Blog Title</p>
                <input 
                    name='title' 
                    onChange={onChangeHandler} 
                    value={data.title} 
                    className='w-full sm:w-[500px] mt-4 px-4 py-3 border' 
                    type='text' 
                    placeholder='Type Here' 
                    required 
                />

                <p className='text-xl mt-4'>Blog Description</p>
                <textarea 
                    name='description' 
                    onChange={onChangeHandler} 
                    value={data.description} 
                    className='w-full sm:w-[500px] mt-4 px-4 py-3 border' 
                    placeholder='Write Your Blog Content Here' 
                    rows={6} 
                    required 
                />

                <p className='text-xl mt-4'>Blog Category</p>
                <select 
                    name='category' 
                    onChange={onChangeHandler} 
                    value={data.category} 
                    className='w-40 mt-4 px-4 py-3 border text-gray-500'
                >
                    <option value="Startup">Startup</option>
                    <option value="Technology">Technology</option>
                    <option value="Lifestyle">Lifestyle</option>
                </select>
                <br/>

                <button type='submit' className='mt-8 w-40 h-12 bg-black text-white'>
                    ADD Blog
                </button>
            </form>
        </>
    );
};

export default Page;
