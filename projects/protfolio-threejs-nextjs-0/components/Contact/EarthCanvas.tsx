"use client"
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
    const earth_ref = useRef({rotation});

    useFrame((state, delta) => {


        //speed of rotation with x/y axis
        earth_ref.current.rotation.x -= delta /(-1*600);
        earth_ref.current.rotation.y -= delta /(-2*600);
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
            ref={earth_ref}
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

    // const [rotateSpeed,setRotateSpeed] = useState(0.3);

    useEffect(()=> {

        // setTimeout(()=> {
        //     setRotateSpeed(0.24);
        // }, 5000);

    },[])


    return (

        
        <Canvas
            shadows
            frameloop="demand"
            gl={{preserveDrawingBuffer: true}}
            camera={{
                position: [0, 0, 15], fov:25,
                // near: 0.1,
                // far: 200,
            }}
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
            autoRotate={true}
            autoRotateSpeed={0.8}
            enableZoom={true}
            maxPolarAngle={Math.PI /2}
            minPolarAngle={Math.PI /2}
            // target={[0, 0, 0]}

            />

            {/* <OrbitControls 
            target={[1, 0, 0]}
            autoRotate 
            /> */}

            {/* add some shadow or low light area on the earth model on the left */}
            <directionalLight
            position={[1.3, 1.0, 4.4]}
            castShadow
            intensity={Math.PI * 1.8}
            />


            {/* trying to make a spotlight without spot intensity */}
            {/*
            <directionalLight
            position={[0.2, -0.02, -0.23  ]}
            castShadow
            intensity={Math.PI * 2.5}
            />

            <directionalLight
            position={[0.1, -0.02, -0.23  ]}
            castShadow
            intensity={Math.PI * 1.5}
            />
         

            <directionalLight
            position={[0.0, -0.02, -0.4  ]}
            castShadow
            intensity={Math.PI * 0.5}
            />

            <directionalLight
            position={[-0.1, -0.02, -0.23  ]}
            castShadow
            intensity={Math.PI * 0.5}
            />

            <directionalLight
            position={[-0.2, -0.5, -0.1  ]}
            castShadow
            intensity={Math.PI * 0.5} 
            />
            */}
            {/* /////////////////////////////////////////// */}






            {/* <directionalLight
            position={[0.2, -0.01, -0.25  ]}
            castShadow
            intensity={Math.PI * 2}
            /> */}

            {/* <hemisphereLight intensity={0.2 }
            groundColor="blue"/> */}

            {/* <pointLight intensity={1} color="black"/> */}

            {/* <ambientLight intensity={0.1}/> */}

            {/* <spotLight 
            intensity={1}  
            castShadow 
            // penumbra={0.5} 
            color="#ffffff20f" 
            decay={1.7} 
            distance={0}
            position={[0,0.000001,0]}
            /> */}

            {/* <spotLight
            position={[-20, 50, 10]}
            angle={0.12}
            penumbra={1}
            intensity={1}
            castShadow
            shadow-mapSize={1024} />

            {/* <Preload all /> */}

            </Suspense>

        </Canvas>

    )
}

export default EarthCanvas