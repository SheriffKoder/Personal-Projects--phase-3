import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./customComponents.css"
import Nav from "@/components/Nav";

// import StarsCanvas from "@/components/Contact/StarsCanvas";
// import SmoothScroll from "@/components/Scroll/SmoothScroll";
import Footer from "@/components/footer";
import ResumeOverlay from "@/components/Home/ResumeOverlay";


// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sherif Khodeir - Web Developer",
  description: "Sherif Khodeir is a full-stack web developer dedicated to crafting exceptional, custom business portfolio websites with personalized content management systems (CMS). Employing powerful tools like React and Node, he brings visions to life. Explore his projects, connect through social media, and how to get in touch!",
};


// put in the body the header, footer and the children will be the home page.tsx or any other folder page.tsx
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (

     
    <html lang="en" className="">
      <body className={`relative overflow-x-hidden cursor-default font-poppins`}>
        
      {/* <StarsCanvas/> */}
        <ResumeOverlay/>      
        <Nav/>

        {/* all children lifted up beneath the nav length */}
        <main className="mt-[-3rem]">
        {children}
        </main>

        <Footer/>
      </body>
    </html>
  );
}
