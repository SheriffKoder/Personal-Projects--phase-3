import Hero from "@/components/Home/Hero";
import StarsCanvas from "@/components/Home/StarsCanvas";
import Image from "next/image";

//this is the home page components wrapper
export default function Home() {
  return (
    <div className="relative z-0">
      <StarsCanvas/>
      <Hero/>
      <div className="earth_ambient min-h-[80vh]">
      </div>
    </div>


  );
}
