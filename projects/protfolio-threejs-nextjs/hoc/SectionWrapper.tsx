
import React from "react";
import {motion} from "framer-motion";
import { staggerContainer } from "@/utils/motion";


//use: apply to all components exported with a SectionWrapper Wrap
const SectionWrapper = ({Component, idName}:{
  Component: React.FC,
  idName: string,
}) => {


  return (
    
    function HOC() {

        return (
            <motion.section
            className=""
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{once:true, amount: 0.25}}>    
            {/* //animate for 0.25sec amount */}

                <span className="hash-span" id={idName}>
                    &nbsp;
                </span>
                <Component/>
            </motion.section>
        )
    } 
  )
}

export default SectionWrapper