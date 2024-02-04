import Image from "next/image";
import Hero from "@/components/Home/Hero/Hero";
import StarsCanvas from "@/components/Home/Hero/StarsCanvas";

export default function Home() {
  return (
    <main>
      <h1>Here is the Home-page component</h1>

      <div className="relative z-0">
        <Hero />
        <StarsCanvas/>
      </div>
    </main>
  );
}
