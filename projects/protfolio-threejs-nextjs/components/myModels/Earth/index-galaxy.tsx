"use client"

// this is a low poly sphere earth model


import { useEffect, useRef, useState } from 'react'
import { Canvas, useLoader, useFrame } from '@react-three/fiber'
import { Decal, Preload, useGLTF} from "@react-three/drei";

import { TextureLoader } from 'three/src/loaders/TextureLoader.js'
import { OrbitControls, Point } from '@react-three/drei'
import { PointLight, SphereGeometry } from 'three'
import { useHelper } from '@react-three/drei'
import { useControls } from 'leva'
// import { EarthLightScene } from './EarthLights'

function Shape (props) {


    const mesh = useRef(null);
// useControls({
//         position_x: {value: 0.0, min: -20, max: 20, 
//             onChange: (value) => {
//                 setPosition_x((pos)=>(value))}},
//         position_y: {value: 0, min: -20, max: 20,
//             onChange: (value) => {
//                 setPosition_y((pos)=>(value))}},
//         position_z: {value: 0, min: -20, max: 20,
//             onChange: (value) => {
//                 setPosition_z((pos)=>(value))}},
//         rotation_x: {value: 0.0, min: -10, max: 10,
//             onChange: (value) => {
//                 setRotation_x((pos)=>(value))}},
//         rotation_y: {value: 0, min: -10, max: 10,
//             onChange: (value) => {
//                 setRotation_y((pos)=>(value))}},
//         rotation_z: {value: 0, min: -10, max: 10,
//             onChange: (value) => {
//                 setRotation_z((pos)=>(value))}},
//         scale: {value: 12, min: 0, max: 15,
//             onChange: (value) => {
//                 setScale((pos)=>(value))}},
//         x: {value: 1, min: -50, max: 50,
//             onChange: (value) => {
//                 setX((pos)=>(value))}},
//         y: {value: 64, min: -50, max: 70,
//             onChange: (value) => {
//                 setY((pos)=>(value))}},
//         z: {value: 64, min: -50, max: 70,
//             onChange: (value) => {
//                 setZ((pos)=>(value))}},


//     });

    const [position_x, setPosition_x] = useState(0.0);
    const [position_y, setPosition_y] = useState(0);
    const [position_z, setPosition_z] = useState(0);
    const [rotation_x, setRotation_x] = useState(0);
    const [rotation_y, setRotation_y] = useState(0);
    const [rotation_z, setRotation_z] = useState(0);
    const [scale, setScale] = useState(1);
    const [x, setX] = useState(1);
    const [y, setY] = useState(64);
    const [z, setZ] = useState(64);


    return (
        <group scale={scale} ref={mesh}
        position={[position_x, position_y, position_z]}
        rotation={[rotation_x, rotation_y, rotation_z]}
        >

     



        </group>
    )
}




export default function Galaxy() {


    // useControls({
    //     camera_x: {value: 0, min: -20, max: 20, 
    //         onChange: (value) => {
    //             setCamera_x((pos)=>(value))}},
    //     camera_y: {value: 0, min: -20, max: 20,
    //         onChange: (value) => {
    //             setCamera_y((pos)=>(value))}},
    //     camera_z: {value: 15, min: -20, max: 20,
    //         onChange: (value) => {
    //             setCamera_z((pos)=>(value))}},
    //     fov: {value: 25, min: -50, max: 50,
    //         onChange: (value) => {
    //             setFOV((pos)=>(value))}},
       


    // });

    const [camera_x, setCamera_x] = useState(0);
    const [camera_y, setCamera_y] = useState(0);
    const [camera_z, setCamera_z] = useState(15);
    const [fov, setFOV] = useState(25);
    

    return (
    <div className='w-full h-full'>
        <Canvas
        camera={{
            position: [camera_x, camera_y, camera_z], fov:fov,
            // near: 0.1,
            // far: 200,
        }}
        >
       
            <Shape/>

            {/* <ambientLight intensity={1.5}/> */}
            <directionalLight position={[0,1,3]}/>

            
            <ambientLight intensity={0.5}/>

            {/* <EarthLightScene/> */}

            {/* <OrbitControls/> */}
        </Canvas>
    </div>
    );
    
};