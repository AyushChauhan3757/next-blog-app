import connectDB from "@/lib/config/db";
import{ writeFile } from "fs/promises";

const { NextResponse } = require("next/server");

// Load DB
const loadDB = async () => {
    await connectDB();
}

loadDB();

// API Route - GET
export async function GET(request) {   
    return NextResponse.json({ message: "API Working" });
}

// API Route - POST
export async function POST(request) {
    // Get form data
    const formData = await request.formData();
    const timestamp = Date.now();

    // ERROR : Cannot send image URL
    
    // Get image data
    const image = formData.get('image');
    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    const path = `./public/${timestamp}_${image.name}`;
    // Save image to public folder
    await writeFile(path, buffer);
    const imageURL = `/${timestamp}_${image.name}`;
    console.log(imageURL);
    return NextResponse.json({ imageURL });
}