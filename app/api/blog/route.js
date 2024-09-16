import connectDB from "@/lib/config/db";
import { writeFile } from "fs/promises";
import { Buffer } from "buffer"; // Ensure Buffer is imported
import path from 'path'; // Import path to resolve absolute paths

const { NextResponse } = require("next/server");

// Load DB
const loadDB = async () => {
    await connectDB();
};

loadDB();

// API Route - GET
export async function GET(request) {
    return NextResponse.json({ message: "API Working" });
}

// API Route - POST
export async function POST(request) {
    try {
        // Get form data
        const formData = await request.formData();
        const timestamp = Date.now();

        // Get image data
        const image = formData.get('image');
        if (!image) {
            return NextResponse.json({ error: "Image not found" }, { status: 400 });
        }

        // Convert image data to buffer
        const imageByteData = await image.arrayBuffer();
        const buffer = Buffer.from(imageByteData);

        // Define absolute file path and name
        const filePath = path.join(process.cwd(), 'public', `${timestamp}_${image.name}`);

        // Save image to public folder
        await writeFile(filePath, buffer);

        // Construct the image URL for response
        const imageURL = `/${timestamp}_${image.name}`;
        return NextResponse.json({ imageURL });

    } catch (error) {
        console.error("Error details:", error); // Detailed error logging
        return NextResponse.json({ error: "Failed to upload image" }, { status: 500 });
    }
}
