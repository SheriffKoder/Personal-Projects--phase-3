"use client"

// this is the earth7.glb centered on page


import React from "react"
import { lazy, Suspense } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
// import { Preload, useGLTF} from "@react-three/drei";
import { OrbitControls, Preload, useGLTF, Stats, Circle} from "@react-three/drei";

import Loader3d from "../../utils/loader3d";
import { Camera } from "three";

// import * as THREE from "three";
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// const scene = new THREE.Scene();
// //FOV, aspect ratio, near/far clipping panes
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);

// const loader = new GLTFLoader();
// loader.load("./3d/planet/scene.gltf", (gtlf)=> {
//     scene.add(gtlf.scene);
// }, undefined, ((err)=> {console.log(err)}));


// const controls = new OrbitControls( camera, renderer.domElement );

import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { useState, useRef, useEffect } from "react";

const Earth = () => {

    const gltf = useLoader(GLTFLoader, "./3d/earth2/earth7.glb");    //gltf.scene
    // const {scene} = useGLTF("./3d/earth4/scene.gltf");


    // const myModel = new GLTFLoader().load("./3d/planet/scene.gltf", (model) => {
    //     model.scene.scale.set(0.03, 0.03, 0.03);
    // });

    let rotation = {
        x: 0,
        y: 0,
    }
    const earth_ref = useRef(null);

    useFrame((state, delta) => {


        //speed of rotation with x/y axis
        earth_ref.current.rotation.x += delta * 0.002;
        earth_ref.current.rotation.y += delta * 0.002;
      });

      
    return (

        <mesh ref={earth_ref} scale={1}>
            {/* <hemisphereLight intensity={0.15}
            groundColor="black"/>

            <pointLight intensity={1} /> */}

            {/* <spotLight
            position={[-20, 50, 10]}
            angle={0.12}
            penumbra={1}
            intensity={1}
            castShadow
            shadow-mapSize={1024} /> */}
{/* 
            <primitive
                object={scene}
                scale={2}
                position={[0, 0, 0]}
                rotation={[0, 0, 0]}
            /> */}
            <primitive
            object={gltf.scene}
            scale={1}
            // position={[0, -1, 0]}      //7,11,0
            rotation={[0.4, -1.8, 0.2]} //-0.15, -2.7
            />

        </mesh>


    )
}


//2:30:00



const EarthCanvas = () => {

    // const [rotateSpeed,setRotateSpeed] = useState(0.3);

    useEffect(()=> {

        // setTimeout(()=> {
        //     setRotateSpeed(0.24);
        // }, 5000);

    },[])


    return (

        
        <Canvas
          
        >



            {/* to move the model with mouse */}

            <Suspense fallback={<Loader3d/>}>
               

  
       


            <Earth/>
           


            {/* <directionalLight
            position={[1.3, 1.0, 4.4]}
            castShadow
            intensity={Math.PI * 1.8}
            /> */}


            <ambientLight intensity={1}/>

            </Suspense>

        </Canvas>

    )
}

export default EarthCanvas