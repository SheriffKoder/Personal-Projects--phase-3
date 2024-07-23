import React from 'react'

import { Html, useProgress } from "@react-three/drei";


const Loader3d = () => {

  const { progress } = useProgress();

  return (
    <Html className="" style={{
      textAlign: "center", 
      width: "200px",
      marginTop:"18rem", 
      position: "relative",
      bottom: "0",
      marginLeft: "-6rem", 


    }}>
      <span className="">
        Arriving Earth...
      </span>

      <p style={{fontSize:14, color: "#f1f1f1", fontWeight: 800, marginTop: 0}}>
        {progress.toFixed(2)}%</p>



    </Html>

    )
}

export default Loader3d;


/*
    width: "100vw", 
    marginLeft: "-6rem", 
    marginTop:"18rem", 
    backgroundImage: 'url("/images/earthFallback.png")', 
    // backgroundColor: "red",
    position: "absolute",
    bottom: "0",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",

*/