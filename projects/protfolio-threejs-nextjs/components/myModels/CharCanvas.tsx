"use client"

import React from 'react'
import {Avatar} from "./Char"
import { OrbitControls } from '@react-three/drei'
import { AmbientLight } from 'three'
import { Canvas } from '@react-three/fiber'
import { LightScene } from './lights'

const Experience = () => {

    return (
    <>
        <group position={[0.4,-2.6,0]} rotation-y={-0.7} scale={2.6}>
        <Avatar/>
        </group>
    </>
  )
}



export const CharCanvas = () => {
    return (
        <Canvas
        shadows
        camera={{position: [0,2,5], fov: 30}}>


        <Experience/>
        {/* <ambientLight intensity={0.2}/> */}
        <OrbitControls/>
        {/* <LightScene/> */}
        <spotLight position={[-0.4, -0.3, 1.3]} distance={0} angle={0.88}/>
        <spotLight position={[1.2, 1.5, 1]} distance={7} angle={0.52} intensity={5}/>


        </Canvas>
    )
}




