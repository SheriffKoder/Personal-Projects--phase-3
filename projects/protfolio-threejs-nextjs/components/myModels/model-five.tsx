"use client"

import { useRef } from 'react'
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { Preload, useGLTF} from "@react-three/drei";

import { TextureLoader } from 'three/src/loaders/TextureLoader.js'
import { OrbitControls } from '@react-three/drei'

function Shape () {

        // const [color, normal, aoMap] = useLoader(TextureLoader, [
    //     "./earth3d/color.jpg",
    //     "./earth3d/normal.jpg",
    //     "./earth3d/occlusion.jpg"
    
    // ]);

    const mesh = useRef(null);
    useFrame((state, delta) => {
        // mesh.current.rotation.x += delta * 0.1;
        // mesh.current.rotation.y += delta * 0.1;
        // mesh.current.rotation.z += delta * 0.1;

    });

    // const gltf1 = useLoader(GLTFLoader, "./3d/computer/iphone.glb");    //gltf.scene
    const {scene} = useGLTF("./3d/computer/pc/scene.gltf");



    return (
        <mesh scale={0.6} ref={mesh}
        >

            <primitive
            object={scene}
            // rotation={[-0.3,-0.44,-0.09]}
            // position={[2,-1.8,0]}
            
            />

        </mesh>
    )
}


export default function PC() {



    return (
        <div className="absolute top-0 left-0 w-full h-full">
        <Canvas
                    camera={{
                        position: [0, 0, 15], fov:25,
                        // near: 0.1,
                        // far: 200,
                    }}
        >
       
            <Shape/>

            <ambientLight intensity={1}/>
            <directionalLight position={[0,1,3]}/>

            {/* 
            <ambientLight intensity={0.1}/>
            <directionalLight intensity={3.5} position={[3, 4.5, -3.5]}/> */}

            {/* <ambientLight intensity={0.1}/>
            <directionalLight intensity={3.5} position={[1, 0, 0.25]}/> */}

            {/* <ambientLight intensity={0.1}/>
            <directionalLight intensity={3.5} position={[1, 0, -0.25]}/> */}

            {/* <spotLight
                intensity={10}
                position={[3,0.2,2]}
            /> */}

            {/* <spotLight
                intensity={10}
                position={[0,0.3,2]}
            /> */}

            <OrbitControls/>
        </Canvas>
    </div>
    );
    
};