import React, { useEffect, useState,useRef } from 'react'
import { motion } from "framer-motion";
import { slideUp, opacity } from './anim';

const Preloader = () => {

  const [index, setIndex] = useState(0);
  const introRef = useRef<HTMLDivElement>(null);

  const words = ["Hello", "Bonjour", "Ciao", "Olà", "やあ", "مرحبا", "Guten tag", "Hallo"]

  // if (introRef.current !== null) {
  //   introRef.current.style.cursor = "wait"
  // };


  useEffect(()=> {
    if (index == words.length -1 ) {
      return;
    };

    setTimeout(()=> {
      setIndex(index +1);
    }, index == 0 ? 1000: 150)
  }, [index]);






  return (
    <motion.div className="introduction cursor-wait"
    variants={slideUp} initial="initial" exit="exit" ref={introRef}
    >
      <motion.p variants={opacity} initial="initial" animate="enter">
        <span></span>
        {words[index]}
      </motion.p>


    </motion.div>
  )
}

export default Preloader