

// a component fills the screen and displays words after each other
// then disappears
// used as an intro to the website

import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import { slideLeft, opacity } from './anim';

const Preloader = () => {

  const [index, setIndex] = useState(0);
  const words = ["Hello", "Bonjour", "Ciao", "Olà", "やあ", "مرحبا", "Guten tag", "Hallo"]


  // will display word[index] which is 0 initially
  // at 0 we should wait 1000ms to update the index to 1
  // then for the next words will wait shorter to change index

  useEffect(()=> {
    if (index == words.length-1) {
      if (window !== undefined) {
        window.scrollTo(0,0);
        }
      return sessionStorage.setItem("visited", "true");
    };

    setTimeout(()=> {
      setIndex(index +1);
    }, index == 0 ? 1000: 250)
  }, [index]);



  // the exit position transition animation by "slideLeft" variant
  // the entry animation by "opacity" variant
  // this component will have a wait cursor


  return (
    <motion.div className="introduction cursor-wait"
    variants={slideLeft} initial="initial" exit="exit"
    >
      <motion.p variants={opacity} initial="initial" animate="enter">
        <span></span>
        {
          words[index]
        }
      </motion.p>


    </motion.div>
  )
}

export default Preloader