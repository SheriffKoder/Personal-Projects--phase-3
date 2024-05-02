"use client"

import {
    ContactShadows,
    Environment,
    Lightformer,
    Float
  } from "@react-three/drei";


// cube with mouse movement animation

import { useEffect, useRef, useState } from 'react'
import { Canvas, useLoader, useFrame } from '@react-three/fiber'

import { TextureLoader } from 'three/src/loaders/TextureLoader.js'
import { OrbitControls, ScrollControls, useScroll } from '@react-three/drei'

//mouse controls
import { useMotionValue, useSpring, useTransform } from 'framer-motion';
import { motion } from "framer-motion-3d";  //sep lib


import * as THREE from "three";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { useTexture } from '@react-three/drei';
import { useControls } from "leva";

import {SpringBall} from "../myModels/SpringBall";


// scroll movements 2
function Shape () {


    return (
        <>
       
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

  //1,1.3,0.4
  //1,0.5,0.5
  useControls({
    luminanceThreshold: {value: 1, min: -2, max: 3, 
        onChange: (value) => {
          setLuminanceThreshold((pos)=>(value))}},
    intensity: {value: 0.5, min: 0, max: 4,
        onChange: (value) => {
          setIntensity((pos)=>(value))}},
    radius: {value:0.5, min: 0, max: 2,
        onChange: (value) => {
          setRadius((pos)=>(value))}},
    red_red: {value: 10, min: 0, max: 20, 
        onChange: (value) => {
          setRed_red((pos)=>(value))}},
    red_green: {value: 0.3, min: 0, max: 20,
        onChange: (value) => {
          setRed_green((pos)=>(value))}},
    red_blue: {value: 1, min: 0, max: 20,
        onChange: (value) => {
          setRed_blue((pos)=>(value))}},
          args_x: {value: 0.9, min: 0, max: 10,
              onChange: (value) => {
                setArgs_x((pos)=>(value))}},
          args_y: {value: 1, min: 0, max: 10,
              onChange: (value) => {
                setArgs_y((pos)=>(value))}},
          args_z: {value: 3, min: 0, max: 10,
              onChange: (value) => {
                setArgs_z((pos)=>(value))}},
          args_n: {value:1, min: 0, max: 15,
              onChange: (value) => {
                setArgs_n((pos)=>(value))}},

});


const [luminanceThreshold, setLuminanceThreshold] = useState(1);
const [intensity, setIntensity] = useState(1.3);
const [radius, setRadius] = useState(0.4);

const [red_red, setRed_red] = useState(10);
const [red_green, setRed_green] = useState(0.3);
const [red_blue, setRed_blue] = useState(1);
const [args_x, setArgs_x] = useState(0.9);
const [args_y, setArgs_y] = useState(1);
const [args_z, setArgs_z] = useState(3);
const [args_n, setArgs_n] = useState(1);

const shiningRed = new THREE.Color(red_red, red_green, red_blue);
const shiningWhite = new THREE.Color(0.5, 0.0, 0.1);
const shiningBlue = new THREE.Color(0.3, 1, 10);



    return (

    <div className={`w-full h-full `}>

        <Canvas
        shadows camera={{ position: [0, 3, 9], fov: 42 }}
        >   

        <group>
            {/* <Float> */}

            {/* <Shape/> */}
            {/* <SpringBall color={shiningRed} scale={0.3}/> */}
            <mesh
            //   position={[0, 0.51, 0]}
              rotation={[0,0,0.4]}
            >
              <ringGeometry args={[args_x, args_y, args_z, args_n]} />
                <meshStandardMaterial
                  color={shiningRed}
                  // toneMapped={false}
                  // roughness={0.1}
                  side={2}
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
              side={2}
            />
        </mesh>




            {/* <color attach="background" args={["#15151a"]} /> */}
            <EffectComposer>
                <Bloom
                mipmapBlur
                luminanceThreshold={luminanceThreshold}
                intensity={intensity}
                radius={radius}
                />
            </EffectComposer>
            {/* </Float> */}

            {/* ground shadows */}
            {/* <ContactShadows position-y={-1.9} opacity={0.4} blur={2}/> */}



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