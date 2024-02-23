import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import { slideUp, opacity } from './anim';

const Preloader = () => {

  const [index, setIndex] = useState(0);

  const words = ["Hello", "Bonjour", "Ciao", "Olà", "やあ", "مرحبا", "Guten tag", "Hallo"]


  useEffect(()=> {
    if (index == words.length -1 ) return;
    setTimeout(()=> {
      setIndex(index +1);
    }, index == 0 ? 1000: 150)
  }, [index]);




  return (
    <motion.div className="introduction"
    variants={slideUp} initial="initial" exit="exit"
    >
      <motion.p variants={opacity} initial="initial" animate="enter">
        <span></span>
        {words[index]}
      </motion.p>


    </motion.div>
  )
}

export default Preloader