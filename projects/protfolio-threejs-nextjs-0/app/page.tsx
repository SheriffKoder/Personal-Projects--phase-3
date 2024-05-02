import Hero from "@/components/Hero/Hero";
import Image from "next/image";

//this is the home page components wrapper
export default function Home() {
  return (
    <div className="relative z-0">
      <Hero/>

      {/* background-color but not over the hero overlay */}
      <div className="earth_ambient min-h-[80vh]">
      </div>
    </div>


  );
}
