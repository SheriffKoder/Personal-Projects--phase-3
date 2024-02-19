"use client"

import React from 'react'
import { motion } from 'framer-motion'

const quote = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity:1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.08,
        }
    }
}


const singleWord = {
    initial: {
        opacity: 0,
        y: 50,
    },
    animate: {
        opacity:1,
        y:0,
        transition: {
            duration: 2,
        }
    }
}

//1:04:59 https://www.youtube.com/watch?v=Yw7yWHigGKI
const SingleWordUp = ({text, className}) => {
  return (
    
        <motion.div variants={quote} initial="initial" animate="animate"
        className={`${className}`}>
        {
            text.split(" ").map((word, index) =>
                <motion.span key={word+"-"+index} className="inline-block"
                variants={singleWord} >
                    {word}&nbsp;

                </motion.span>
            )
        }
       </motion.div>

    
  )
}

export default SingleWordUp;