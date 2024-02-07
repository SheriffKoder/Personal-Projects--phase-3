"use client"

import { useEffect, useRef } from 'react'
import { Canvas, useLoader, useFrame } from '@react-three/fiber'

import { TextureLoader } from 'three/src/loaders/TextureLoader.js'
// import { OrbitControls, ScrollControls, useScroll } from '@react-three/drei'
import { OrbitControls, ScrollControls } from '@react-three/drei'

//mouse controls
import { useMotionValue, useSpring, useScroll, useTransform } from 'framer-motion';
import { motion } from "framer-motion-3d";  //sep lib





// scroll movements 2
function Shape ({progress}) {

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
    /*
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
    */
    //////////////////////////////////////////////////////


    //////////////////////////////////////////////////////
    // scroll movements 1 - using scrollControls and useScroll from drei
    /*
    const data = useScroll();   //useScroll is reading everything in the scroll controls

    useFrame((state, delta) => {
        const { offset } = data;
        mesh.current.rotation.x = offset * 5;
        mesh.current.rotation.y = offset * 5;
        mesh.current.rotation.z = offset * 5;
    })
    */
    //////////////////////////////////////////////////////









    //use the texture loader type of loader
    const texture_1 = useLoader(TextureLoader, "/assets/tech/css.png")
    const texture_2 = useLoader(TextureLoader, "/assets/tech/docker.png")
    const texture_3 = useLoader(TextureLoader, "/assets/tech/figma.png")

    return (

        // auto-rotation // scroll movements 1
        // <mesh scale={1} ref={mesh}>

        // mouse movements
        //add motion. to make the mouse dependent rotation values understandable
        // <motion.mesh scale={1} ref={mesh} rotation-y={mouse.y} rotation-x={mouse.x}>

        <motion.mesh scale={1} ref={mesh} rotation-y={progress} rotation-x={progress}>


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

        </motion.mesh>
    )
}


export default function Cube() {


    //////////////////////////////////////////////////////
    // scroll movements 2 - using framerMotion, useScroll from framerMotion
    //useTransform from framerMotion

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
      target: container,  //track the scroll inside the length of that container
      offset: ["start start", "end end"]    
      //the offset will be the middle of the cube in the start of window's y axis
        //stop tracking at the middle of the cube at the end of the window's y axis
    });

    //transform the value which is between 0-1 to 0-5 for more rotation
    const progress = useTransform(scrollYProgress, [0,1], [0,5]);

    //smoother animation
    const smoothProgress = useSpring(progress, {damping: 50});


    //////////////////////////////////////////////////////


    return (
    // scroll movements 2 styles, simulating a page of 500vh, with a div of 100vh that is sticky and contains the cube
    <div className={`w-full h-[500vh]`}>
        <div className="sticky top-0 h-[100vh]">


    {/* <div className={`w-full h-full`}> */}

        <Canvas
        >   

            {/* // scroll movements 1 */}
            {/* there is damping (smoothness) applied by default anyway 
            each page is worth 100vh*/}
            {/* <ScrollControls pages={5} damping={0.1}>  */}


                {/* //mouse movements 2 */}
                {/* <Shape progress={scrollYProgress}/> */}
                <Shape progress={smoothProgress}/>

                {/* <Shape/> */}

                <ambientLight intensity={2}/>
                <directionalLight position={[0,1,3]}/>
                <OrbitControls
                    enableZoom={true}   //true by default
                    enablePan={true}    //true by default with right click
                />

            {/* </ScrollControls> */}
        </Canvas>

        </div>
    </div>
    );
    
};