"use client"

import { OrbitControls, Plane, TorusKnot, useHelper, useTexture } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { useEffect, useRef } from "react";
import { DirectionalLight, DirectionalLightHelper, Mesh, PointLight, PointLightHelper, RectAreaLight, SpotLight, SpotLightHelper } from "three";
import { RectAreaLightHelper } from "three/examples/jsm/Addons.js";

import { motion } from "framer-motion-3d";  //sep lib
import { useSpring, useMotionValue } from 'framer-motion';


export const EarthLightScene = () => {

    

    //////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////
    const springOptions = {
        damping: 140,
    }
    const mouse = {
        position_z: useSpring(useMotionValue(0), springOptions),

    };

    //slight rotation to back on page entry
    const moveLight = () => {

        mouse.position_z.set(4);
        // mouse.scale.set(1.5);
        // mouse.position_x.set(-1.2);

    }


    useEffect(()=> {
        moveLight();
    },[]);

    //get values from the UI
    // const { x, y, z, intensity } = useControls({
    //     intensity: {value: 10.8, min: 0, max: 20},
    //     x: {value: 0, min: 0, max: 5},
    //     y: {value: 0.3, min: 0, max: 5},
    //     z: {value: -2.3, min: -5, max: 5},
    // });


    // 2
    //basic and matcap are not affected if no lights
    // const {intensity} = useControls({intensity: {value: 1, min: 0, max: 5}});

    // 3
    // const directionalLightRef = useRef<DirectionalLight>(null!);
    //helper gui options
    // useHelper(directionalLightRef, DirectionalLightHelper, 2, "red");
   

    // 4
    // const pointLightRef = useRef<PointLight>(null!);
    // useHelper(pointLightRef, PointLightHelper, 2, "red");
   
    // 5
    // const spotLightRef = useRef<SpotLight>(null!);
    // useHelper(spotLightRef, SpotLightHelper, "red");
   
    // const { x, y, z, intensity, distance, angle } = useControls({
    //     intensity: {value: 1, min: 0, max: 50},
    //     x: {value: 1, min: -5, max: 5},
    //     y: {value: 1, min: -15, max: 15},
    //     z: {value: 1, min: -15, max: 15},
    //     distance: {value: 5, min: 0, max: 20},
    //     angle: {value: Math.PI/6, min: 0.1, max: 2 }

    // });


    //6
    // const rectLightRef = useRef<RectAreaLight>(null!);
    // useHelper(rectLightRef, RectAreaLightHelper, "red");
   
    // const { x, y, z, intensity, width, height, color } = useControls({
    //     intensity: {value: 1, min: 0, max: 30},
    //     x: {value: 1, min: 0, max: 5},
    //     y: {value: 1, min: 0, max: 5},
    //     z: {value: 1, min: 0, max: 5},
    //     width: { value: 3, min: 1, max: 10 }, 
    //     height: { value: 3, min: 1, max: 10 }, 
    //     color: '#fff',

    // });





    return (
        <>
            <motion.group position={[0,0,mouse.position_z]}>
            {/* all light */}
            {/* <ambientLight intensity={intensity}/> */}

            {/* 2 */}
            {/* <hemisphereLight args={["#fff", "#333"]} intensity={intensity} /> */}

            {/* 3 */}
            {/* directional from above */}
            {/* <directionalLight position={[x,y,z]} intensity={intensity} 
            ref={directionalLightRef}/> */}

            {/* 4 */}
            {/* like the directional but less bright */}
            {/* <pointLight position={[x,y,z]} intensity={intensity} 
            ref={pointLightRef}/> */}
            <pointLight position={[0,0.3,-2.3]} intensity={10.8} 
            />

            {/* 5 */}
            {/* spot light*/}
            {/* <spotLight position={[x,y,z]} intensity={intensity} distance={distance} angle={angle}
            ref={spotLightRef}/> */}

            {/* 5 */}
            {/* light from a square shape, like a bright window source */}
            {/* <rectAreaLight position={[x,y,z]} intensity={intensity}
            color={color} width={width} height={height} 
            ref={rectLightRef}/> */}

            {/* like the a far away sun that lights are parallel */}
            {/* <Plane scale={10} rotation-x={-Math.PI /2} position-y={-2} /> */}
            </motion.group>
        </>
    )
}





const EarthLights = () => {


  return (
    <Canvas
    camera={{position: [4,7,0]}}>
        {/* <pointLight position={[5,5,5]} intensity={1} /> */}
        {/* <pointLight position={[-3, -3, 2]} intensity={1} /> */}
        <OrbitControls />

        <EarthLightScene/>
        


    </Canvas>
  )
}

export default EarthLights;