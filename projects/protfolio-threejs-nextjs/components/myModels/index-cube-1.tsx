"use client"

// cube with mouse movement animation

import { useEffect, useRef } from 'react'
import { Canvas, useLoader, useFrame } from '@react-three/fiber'

import { TextureLoader } from 'three/src/loaders/TextureLoader.js'
import { OrbitControls, ScrollControls, useScroll } from '@react-three/drei'

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
    // mouse movements using useSpring, window client, useEffect
    
    //use spring for a smooth scroll
    
    const springOptions = {
        damping: 20,
    }
    const mouse = {
        x: useSpring(useMotionValue(0), springOptions),
        y: useSpring(useMotionValue(0), springOptions),
    };

    const manageMouseMove = (e) => {

        const { innerWidth, innerHeight } = window;
        const { clientX, clientY } = e;

        const x = -0.5 + (clientX / innerWidth); //0 -- 1   //-0.5 to stay at center when mouse is at center
        const y = -0.5 + (clientY / innerHeight);    //0 vv 1

        mouse.x.set(y);     //set given from the useMotionValue object
        mouse.y.set(x);

    }

    useEffect(() => {
        window.addEventListener("mousemove", manageMouseMove);

        return () => window.removeEventListener("mouse", manageMouseMove)
    },[]);
    
    //////////////////////////////////////////////////////








    //use the texture loader type of loader
    const texture_1 = useLoader(TextureLoader, "/assets/tech/css.png")
    const texture_2 = useLoader(TextureLoader, "/assets/tech/docker.png")
    const texture_3 = useLoader(TextureLoader, "/assets/tech/figma.png")

    return (

       // mouse movements
        //add motion. to make the mouse dependent rotation values understandable
        <motion.mesh scale={1} ref={mesh} rotation-y={mouse.y} rotation-x={mouse.x}>


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


        </motion.mesh>
    )
}


export default function Cube() {



    return (

    <div className={`w-full h-full bg-[#1f1f1f]`}>

        <Canvas
        >   

                <Shape/>


                <ambientLight intensity={2}/>
                <directionalLight position={[0,1,3]}/>
                <OrbitControls
                    enableZoom={true}   //true by default
                    enablePan={true}    //true by default with right click
                />

        </Canvas>

        </div>
    );
    
};