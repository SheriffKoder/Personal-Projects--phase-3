import Contact from "@/components/Contact/Contact";
import Image from "next/image";

//this is the home page components wrapper
export default function Home() {
  return (
    <div className="relative z-0">
      <Contact/>

      {/* background-color but not over the hero overlay */}
      <div className="earth_ambient min-h-[80vh]">
      </div>
    </div>


  );
}
