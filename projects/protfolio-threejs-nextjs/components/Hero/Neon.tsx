"use client"

import {
    ContactShadows,
    Environment,
    Lightformer,
    Float
  } from "@react-three/drei";


// cube with mouse movement animation

import { useEffect, useRef } from 'react'
import { Canvas, useLoader, useFrame } from '@react-three/fiber'

import { TextureLoader } from 'three/src/loaders/TextureLoader.js'
import { OrbitControls, ScrollControls, useScroll } from '@react-three/drei'

//mouse controls
import { useMotionValue, useSpring, useTransform } from 'framer-motion';
import { motion } from "framer-motion-3d";  //sep lib


import * as THREE from "three";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { useTexture } from '@react-three/drei';


// scroll movements 2
function Shape () {

// function Shape () {


const shiningRed = new THREE.Color(10, 0.3, 1);
const shiningWhite = new THREE.Color(0.5, 0.0, 0.1);
const shiningBlue = new THREE.Color(0.3, 1, 10);

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



    return (
        <>

        <mesh
        //   position={[0, 0.51, 0]}
          rotation={[0,0,0.4]}
        >
        <ringGeometry args={[0.9, 1, 3, 1]} />
          <meshStandardMaterial
            color={shiningRed}
            // toneMapped={false}
            // roughness={0.1}
          />

          
        </mesh>


        <mesh
          position={[0.1, 1.2, 0]}
          rotation={[0,0,1.44]}
        >
        <ringGeometry args={[0.9, 1, 3, 1]} />
          <meshStandardMaterial
            color={shiningBlue}
            // toneMapped={false}
            // roughness={0.1}
          />

          
        </mesh>

                
    
    
       
        </>
        
    )
}


function Shape2 () {

    const texture_1 = useTexture("/assets/brickwall.jpg");

        return (
            <>

            <mesh position={[0,0,-0.1]}>
                <planeGeometry args={[5,5]}/>
                <meshStandardMaterial
                // metalness={0.4}
                // roughness={0.4}
                // color={"#000000"}
                map={texture_1}
                    />
            </mesh>
    
    
    
            </>
            
        )
    }
    

export default function Neon() {



    return (

    <div className={`w-full h-full `}>

        <Canvas
        shadows camera={{ position: [0, 3, 9], fov: 42 }}
        >   

        <group>
            {/* <Float> */}

            <Shape/>

            {/* <color attach="background" args={["#15151a"]} /> */}
            <EffectComposer>
                <Bloom
                mipmapBlur
                luminanceThreshold={1}
                intensity={1.3}
                radius={0.4}
                />
            </EffectComposer>
            {/* </Float> */}

            {/* ground shadows */}
            <ContactShadows position-y={-1.9} opacity={0.4} blur={2}/>



        </group>

        {/* <Shape2/> */}

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