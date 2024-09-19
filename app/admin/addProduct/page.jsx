'use client';
import { assets } from '@/Assets/assets';
import axios from 'axios';
import Image from 'next/image';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Page = () => {
    const [image, setImage] = useState(null);
    const [data, setData] = useState({
        title: "",
        description: "",
        category: "Startup",
        author: "",
        authorImg: "/author_img.png"
    });

    // --- Function to handle input change ---
    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    // --- Function to handle form submission ---
    const onSubmitHandler = async (e) => {
        // Prevent default form submission
        e.preventDefault();

        // Create a new FormData object
        const formData = new FormData();
        // Append data to the form data object
        formData.append('title', data.title);
        formData.append('description', data.description);
        formData.append('category', data.category);
        formData.append('author', data.author);
        formData.append('authorImg', data.authorImg);
        formData.append('image', image);

        // Send a POST request to the server
        const response = await axios.post('/api/blog', formData);

        // Check if the request was successful
        if (response.data.success) {
            toast.success(response.data.msg);
            // Reset the form
            setImage(false);
            setData({
                title: "",
                description: "",
                category: "Startup",
                author: "",
                authorImg: "/author_img.png"
            });

        } else {
            toast.error("Failed To Add Blog");
        }
    };

    return (
        <>
            {/* --- Form To Get Data --- */}
            <form onSubmit={onSubmitHandler} className='pt-5 px-5 sm:pt-12 sm:pl-16'>
                <p className='text-xl'>Upload Thumbnail</p>
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

                <p className='text-xl mt-4'>Blog Author</p>
                <input 
                    name='author' 
                    onChange={onChangeHandler} 
                    value={data.author} 
                    className='w-full sm:w-[500px] mt-4 px-4 py-3 border' 
                    type='text' 
                    placeholder='Type Here' 
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
                    Add Blog
                </button>
            </form>
        </>
    );
};

export default Page;
