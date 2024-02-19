import Hero from "@/components/Home/Hero";
import Tech from "@/components/Home/Tech";
import TransitionEffect from "@/components/TransitionEffect";
import Image from "next/image";

//this is the home page components wrapper
export default function Home() {
  return (
      <>
      {/* <TransitionEffect/> */}
      <div className="w-full ambientBackground">
        <Hero/>
        <Tech/>
      </div>
      </>

  );
}
