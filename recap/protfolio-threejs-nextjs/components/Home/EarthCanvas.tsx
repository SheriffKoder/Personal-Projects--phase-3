"use client"
import React from "react"

import { lazy, Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
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


    const myModel = new GLTFLoader().load("./3d/planet/scene.gltf", (model) => {
        model.scene.scale.set(0.03, 0.03, 0.03);
    });

    return (

        <mesh>
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
            children-0-castShadow
            scale={10}
            position={[0, -13, 0]}      //7,11,0
            rotation={[-0.51, -1.6, 0.2]} //-0.15, -2.7
            />

        </mesh>


    )
}


//2:30:00



const EarthCanvas = () => {



    return (

        
        <Canvas
            shadows
            frameloop="demand"
            gl={{preserveDrawingBuffer: true}}
            camera={{position: [0, 0, 15], fov:25}}
        >



            {/* to move the model with mouse */}

            <Suspense fallback={<Loader3d/>}>
                {/* <OrbitControls
                autoRotate
                autoRotateSpeed={2}
                enableZoom={false}
                maxPolarAngle={Math.PI /2}
                minPolarAngle={Math.PI /2}
                />*/}
                <Earth/>

            {/* <Preload all /> */}

  
           
        
            <OrbitControls
            autoRotate
            autoRotateSpeed={0.3}
            enableZoom={true}
            maxPolarAngle={Math.PI /2}
            minPolarAngle={Math.PI /2}
            target={[0, 0, 0]}

            />

            {/* <OrbitControls 
            target={[1, 0, 0]}
            autoRotate 
            /> */}

            <directionalLight
            position={[1.3, 1.0, 4.4]}
            castShadow
            intensity={Math.PI * 2}
            />

            {/* <hemisphereLight intensity={1.8}
            groundColor="blue"/> */}

            {/* <pointLight intensity={1} /> */}

            {/* <spotLight
            position={[-20, 50, 10]}
            angle={0.12}
            penumbra={1}
            intensity={1}
            castShadow
            shadow-mapSize={1024} /> */}

            {/* <Preload all /> */}

            </Suspense>

        </Canvas>

    )
}

export default EarthCanvas