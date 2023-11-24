// import React from 'react'

import Hero from "@components/Home/Hero";
import HomeText from "@components/Home/HomeText";
import Home_Rec from "@components/Home/Home_Rec";
import Feed from "@/components/Feed";

//01.01
const Home = () => {
  return (
    <section className="w-full flex-center flex-col">

      {/* <h1 className="head_text text-center">
        Discover & Share
      </h1>

      <h3>
        AI-Powered Prompts
      </h3>

      <p className="desc text-center">
          Promptopia is an open-source AI prompting tool for modern world to 
          discover, create and share creative prompts
      </p> */}


      <Hero />
      <HomeText />
      <Home_Rec/>

      {/* <Feed /> */}


    </section>

  )
}

export default Home;