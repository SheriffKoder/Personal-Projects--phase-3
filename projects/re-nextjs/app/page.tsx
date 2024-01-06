// import React from 'react'

//the home page component that uses other components

import Hero from "@components/Home/Hero";
import HomeText from "@components/Home/HomeText";
import Home_Rec from "@components/Home/Home_Rec";
import Home_Main from "@components/Home/Home_Main";

//01.01
const Home = () => {
  return (
    <section className="w-full flex flex-col">
      
      <Hero />
      <HomeText />
      <Home_Rec/>
      <Home_Main />

    </section>

  )
}

export default Home;