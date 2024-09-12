import { Outfit } from "next/font/google";
import "./globals.css";

// Define the font to be used
const outfit = Outfit({ subsets: ['latin'], weight: ["400", "500", "600", "700"] })

export const metadata = {
  title: "Blog App",
  description: "Created By Ayush Chauhan & Devraj Kohli",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={outfit.className}>{children}</body>
    </html>
  );
}
