import Hero from "@/components/Home/Hero";
import StarsCanvas from "@/components/Home/StarsCanvas";
import Image from "next/image";

//this is the home page components wrapper
export default function Home() {
  return (
    <div className="relative z-0">
      <Hero/>
      <StarsCanvas/>
    </div>


  );
}
