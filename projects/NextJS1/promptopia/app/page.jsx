
//import React from 'react' //with next js no need to specify the react import

//01.02
import { Feed } from "@components/Feed";

//01
const Home = () => {
  return (
    <section className="w-full flex-center flex-col">

        <h1 className="head_text text-center">
            Discover & Share
            <br/>
            <span className="orange_gradient text-center">
                AI-Powered Prompts
            </span>
        </h1>

        <p className="desc text-center">
            Promptopia is an open-source AI prompting tool for modern world to
            discover, create and share creative prompts
        </p>

        {/* the feed component, not created yet so will leave a comment */}
        {/* feed */}
        {/* //01.02 */}
        <Feed />

    </section>
  )
}

export default Home;



/*
tailwind allows to use utility classes shortcuts like
w-full for full width etc.

class-name << tailwind
class_name << custom css

max-md: hidden
hide on large devices but break content on smaller devices



** what can i use from tailwind while developing
** css: orange_gradient, main/gradient




*/