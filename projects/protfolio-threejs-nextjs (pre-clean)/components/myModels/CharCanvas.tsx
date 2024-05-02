"use client"

import React, {useState} from 'react'
import {Avatar} from "./Char"
import {Laptop2} from "./Laptop2";

import { useControls } from 'leva';
import { OrbitControls } from '@react-three/drei'
import { AmbientLight } from 'three'
import { Canvas } from '@react-three/fiber'
import { LightScene } from './lights'

const Experience = () => {

    // useControls({
    //     position_x: {value: 0.0, min: -20, max: 20, 
    //         onChange: (value) => {
    //             setPosition_x((pos)=>(value))}},
    //     position_y: {value: 0, min: -20, max: 20,
    //         onChange: (value) => {
    //             setPosition_y((pos)=>(value))}},
    //     position_z: {value: 0, min: -20, max: 20,
    //         onChange: (value) => {
    //             setPosition_z((pos)=>(value))}},
    //     rotation_x: {value: 0.0, min: -10, max: 10,
    //         onChange: (value) => {
    //             setRotation_x((pos)=>(value))}},
    //     rotation_y: {value: 0, min: -10, max: 10,
    //         onChange: (value) => {
    //             setRotation_y((pos)=>(value))}},
    //     rotation_z: {value: 0.0, min: -10, max: 10,
    //         onChange: (value) => {
    //             setRotation_z((pos)=>(value))}},
    //     scale: {value: 0.3, min: 0, max: 15,
    //         onChange: (value) => {
    //             setScale((pos)=>(value))}},
    //     x: {value: 1, min: -50, max: 50,
    //         onChange: (value) => {
    //             setX((pos)=>(value))}},
    //     y: {value: 64, min: -50, max: 70,
    //         onChange: (value) => {
    //             setY((pos)=>(value))}},
    //     z: {value: 64, min: -50, max: 70,
    //         onChange: (value) => {
    //             setZ((pos)=>(value))}},


    // });

    // const [position_x, setPosition_x] = useState(0.0);
    // const [position_y, setPosition_y] = useState(-13.5);
    // const [position_z, setPosition_z] = useState(1);
    // const [rotation_x, setRotation_x] = useState(0);
    // const [rotation_y, setRotation_y] = useState(4.2);
    // const [rotation_z, setRotation_z] = useState(0.7);
    // const [scale, setScale] = useState(12);
    // const [x, setX] = useState(1);
    // const [y, setY] = useState(64);
    // const [z, setZ] = useState(64);



    return (
    <>
     
        <group position={[0.1, 0.1, 0]} scale={0.4} rotation={[-0.3,0.1,0]}>
        
            <group scale={2.7} position={[-0.7,-0.95,1.5]} 
            rotation={[0,-2.1,0]}>
                <Laptop2/>
            </group>

            <group position={[0.2,-3.2,-0.2]} rotation-y={-0.7} scale={3}>
            <Avatar/>
        
            </group>

        </group>
    </>
  )
}



export const CharCanvas = () => {
    return (
        <Canvas
        shadows
        camera={{position: [0,2,5], fov: 10}}>


        <Experience/>
        {/* <ambientLight intensity={0.2}/> */}
        {/* <OrbitControls/> */}
        {/* <LightScene/> */}
        <spotLight position={[-0.4, -0.3, 1.3]} distance={0} angle={0.88} color={0xc4dcff} intensity={2.5}/>
        <spotLight position={[1.2, 1.5, 1]} distance={7} angle={0.52} intensity={10} color={0x007bff}/>
        <spotLight position={[1.2, 1.5, 1]} distance={7} angle={0.52} intensity={4}/>

        </Canvas>
    )
}

// #007bff


