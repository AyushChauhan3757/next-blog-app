"use client"
import { blog_data } from '@/Assets/assets';
import React, { useEffect, useState } from 'react';

const Page = ({ params }) => {

    // Storing the blog data in a variable
    const [data, setData] = useState(null);
    const fetchBlogData = () => {
        for (let i = 0; i < blog_data.length; i++) {
            if (blog_data[i].id === Number(params.id)) {
                setData(blog_data[i]);
                console.log(blog_data[i]);
                break;
            }
        } 
    }

    useEffect(() => {
        fetchBlogData();
    },[]);

    return (
        <div>
            {params.id}
        </div>
    );
};

export default Page;