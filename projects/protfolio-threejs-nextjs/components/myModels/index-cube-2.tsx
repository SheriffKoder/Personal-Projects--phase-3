"use client"

//cube with scroll animations


import { useEffect, useRef } from 'react'
import { Canvas, useLoader, useFrame } from '@react-three/fiber'

import { TextureLoader } from 'three/src/loaders/TextureLoader.js'
import { OrbitControls, ScrollControls, useScroll } from '@react-three/drei'
// import { OrbitControls, ScrollControls } from '@react-three/drei'

//mouse controls
import { useMotionValue, useSpring, useTransform } from 'framer-motion';
import { motion } from "framer-motion-3d";  //sep lib





// scroll movements 2
function Shape () {

// function Shape () {



    const mesh = useRef(null);
    //////////////////////////////////////////////////////
    // auto-rotation
    /*
    useFrame((state, delta) => {
        mesh.current.rotation.x += delta * 0.1;
        mesh.current.rotation.y += delta * 0.1;
        mesh.current.rotation.z += delta * 0.1;
    });
    */
    //////////////////////////////////////////////////////


    //////////////////////////////////////////////////////
    // scroll movements 1 - using scrollControls and useScroll from drei
    
    const data = useScroll();   //useScroll is reading everything in the scroll controls

    useFrame((state, delta) => {
        const { offset } = data;
        mesh.current.rotation.x = offset * 5;
        mesh.current.rotation.y = offset * 5;
        mesh.current.rotation.z = offset * 5;
    })
    
    //////////////////////////////////////////////////////









    //use the texture loader type of loader
    const texture_1 = useLoader(TextureLoader, "/assets/tech/css.png")
    const texture_2 = useLoader(TextureLoader, "/assets/tech/docker.png")
    const texture_3 = useLoader(TextureLoader, "/assets/tech/figma.png")

    return (

        // auto-rotation // scroll movements 1
        <mesh scale={1} ref={mesh}>

            {/* width height depth */}
            <boxGeometry args={[2,2,2]}/>
            {/* <meshStandardMaterial color={"red"} /> */}

            {/* with attach can use different textures for different faces */}
            <meshStandardMaterial map={texture_1} attach="material-0"/>
            <meshStandardMaterial map={texture_2} attach="material-1"/>
            <meshStandardMaterial map={texture_3} attach="material-2"/>
            <meshStandardMaterial map={texture_1} attach="material-3"/>
            <meshStandardMaterial map={texture_2} attach="material-4"/>
            <meshStandardMaterial map={texture_3} attach="material-5"/>



            {/* add more resolution to the circle edges */}
            {/* <sphereGeometry args={[1, 64, 64]}/> */}
            {/* <meshStandardMaterial map={color} normalMap={normal} aoMap={aoMap}/> */}

        </mesh>
    )
}


export default function Cube() {



    return (



    <div className={`w-full h-full  bg-[#1f1f1f]`}>

        <Canvas
        >   

            {/* there is damping (smoothness) applied by default anyway 
            each page is worth 100vh*/}
            <ScrollControls pages={5} damping={0.1}> 


                <Shape/>

                <ambientLight intensity={2}/>
                <directionalLight position={[0,1,3]}/>
                <OrbitControls
                    enableZoom={true}   //true by default
                    enablePan={true}    //true by default with right click
                />

            </ScrollControls>
        </Canvas>

        </div>
    );
    
};