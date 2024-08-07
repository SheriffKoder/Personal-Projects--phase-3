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
  title: "Sheriff Koder - Web Developer",
  description: "Sherif Khodeir's Web developer's portfolio website containing his projects, information about him and contact methods.",
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
