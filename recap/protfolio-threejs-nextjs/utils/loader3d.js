import React from 'react'

import { Html, useProgress } from "@react-three/drei";


const Loader3d = () => {

  const { progress } = useProgress();

  return (
    <Html className="">
      <span className="">
        hi
      </span>

      <p style={{fontSize:14, color: "#f1f1f1", fontWeight: 800, marginTop: 0}}>
        {progress.toFixed(2)}%</p>



    </Html>

    )
}

export default Loader3d;