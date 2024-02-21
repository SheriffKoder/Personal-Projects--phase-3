"use client"

// this is the earth7.glb centered on page


import React from "react"
import { lazy, Suspense } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
// import { Preload, useGLTF} from "@react-three/drei";
import { OrbitControls, Preload, useGLTF, Stats, Circle} from "@react-three/drei";

// import Loader3d from "../../utils/loader3d";
import { Camera } from "three";
import { useControls } from "leva";


import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { useState, useRef, useEffect } from "react";
import { Laptop2 } from "@/components/myModels/Laptop2";
import { LightScene } from "@/components/myModels/lights";

import { Laptop2_body, Laptop2_screen } from "@/components/myModels/Laptop2-cut";
import { useSpring, useMotionValue } from 'framer-motion';
import { motion } from "framer-motion-3d";  //sep lib


const Model = ({openLid}: {openLid: boolean}) => {

    // useControls({
    //         position_x: {value: 0.0, min: -20, max: 20, step: 0.01,
    //             onChange: (value) => {
    //                 setPosition_x((pos)=>(value))}},
    //         position_y: {value: 0, min: -20, max: 20,step: 0.01,
    //             onChange: (value) => {
    //                 setPosition_y((pos)=>(value))}},
    //         position_z: {value: 0, min: -20, max: 20,step: 0.01,
    //             onChange: (value) => {
    //                 setPosition_z((pos)=>(value))}},
    //         rotation_x: {value: 0, min: -10, max: 10,step: 0.01,
    //             onChange: (value) => {
    //                 setRotation_x((pos)=>(value))}},
    //         rotation_y: {value: 0, min: -10, max: 10,step: 0.01,
    //             onChange: (value) => {
    //                 setRotation_y((pos)=>(value))}},
    //         rotation_z: {value: 0, min: -10, max: 10, step: 0.01,
    //             onChange: (value) => {
    //                 setRotation_z((pos)=>(value))}},
    //         scale: {value: 1, min: 0, max: 20,
    //             onChange: (value) => {
    //                 setScale((pos)=>(value))}},
         


    //     });

    // const [position_x, setPosition_x] = useState(0.0);
    // const [position_y, setPosition_y] = useState(-2);
    // const [position_z, setPosition_z] = useState(0);
    // const [rotation_x, setRotation_x] = useState(0);
    // const [rotation_y, setRotation_y] = useState(1.55);
    // const [rotation_z, setRotation_z] = useState(0);
    // const [scale, setScale] = useState(19);
    

    const mesh = useRef(null);

    //////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////
    const springOptions = {
        damping: 90,
    }
    const mouse = {
        // position_x: useSpring(useMotionValue(0.1), springOptions),
        position_y: useSpring(useMotionValue(-3.8), springOptions),
        position_z: useSpring(useMotionValue(-0.47), springOptions),
        rotation_x: useSpring(useMotionValue(1.5), springOptions),
        rotation_y: useSpring(useMotionValue(0.02), springOptions),
        rotation_z: useSpring(useMotionValue(0.02), springOptions),


    };

    //slight rotation to back on page entry
    const rotation_0 = () => {

        mouse.position_y.set(0);
        mouse.position_z.set(0);
        mouse.rotation_x.set(0);
        mouse.rotation_y.set(0);
        mouse.rotation_z.set(0);

   

    }

    useEffect(()=> {
        setTimeout(()=> {
            if (openLid) {
                rotation_0();
            }
            console.log("models lid", openLid);
        }, 1000);
    },[openLid])
 
      
    return (

        <group rotation={[0,0.025,0.002]}>

            <motion.group scale={1} ref={mesh}
            position={[0, mouse.position_y, mouse.position_z]}
            rotation={[mouse.rotation_x, mouse.rotation_y, mouse.rotation_z]}>
             
                <mesh scale={19}
                position={[0, -2, 0]}
                rotation={[0.1, 1.55, 0]}
                >              
                    <Laptop2_screen/>
                </mesh>

            </motion.group>


            <mesh scale={19}
            position={[0, -2, 0]}
            rotation={[0.1, 1.55, 0]}
            >

                <Laptop2_body/>


            </mesh>


            
        </group>       


    )
}


//2:30:00



const LaptopCanvas = ({openLid}: {openLid: boolean}) => {

   const [camera_x, setCamera_x] = useState(0);
    const [camera_y, setCamera_y] = useState(0);
    const [camera_z, setCamera_z] = useState(15);
    const [fov, setFOV] = useState(25);
    

    //1:04:00 JMS 3D - pass isMobile, scale={isMobile ? x : y}
    const [isMobile, setIsMobile] = useState(false);

    useEffect(()=> {

        // Add a listener for changes to the screen size
        const mediaQuery = window.matchMedia("(max-width:500px)");

        // set the initial value of the isMobile state variable
        setIsMobile(mediaQuery.matches);

        // Define a callback function to handle changes to the media query
        const handleMediaQueryChange = (e) => {
            setIsMobile(e.matches);
        }

        // add the callback function as a listener for changes to the media query
        mediaQuery.addEventListener("change", handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        }
    }, []);


    return (

        
        <Canvas
        camera={{
            position: [camera_x, camera_y, camera_z], fov:fov,
            // near: 0.1,
            // far: 200,
        }}>

            <Model openLid={openLid}/>
            {/* <LightScene/> */}

            <ambientLight intensity={0.1}/>
            <directionalLight position={[0, 5, 2.7]} intensity={2}/>
            {/* <OrbitControls/> */}


        </Canvas>

    )
}

export default LaptopCanvas