"use client"

import { useEffect, useRef } from 'react'
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { ContactShadows, Environment, Float, Preload, useGLTF} from "@react-three/drei";

import { TextureLoader } from 'three/src/loaders/TextureLoader.js'
import { OrbitControls } from '@react-three/drei'
import { useTexture } from '@react-three/drei';

import {OptPhone} from "./optPhone";
import {OptImac, optImac} from "./optImac";

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

    const gltf1 = useLoader(GLTFLoader, "./3d/computer/imac.glb");    //gltf.scene
    const gltf2 = useGLTF("./3d/computer/imac/scene.gltf");

    // npx gltfjsx public/3d/computer/opt-iphone3.glb -o components/myModels/optPhone.jsx -r public
    const gltf3 = useLoader(GLTFLoader, "./3d/computer/iphone3.glb");    //gltf.scene

    const texture_1 = useTexture("/assets/brickwall.jpg");  //texture importing method fixes the brightness issue

    // console.log(useGLTF("./3d/computer/imac/scene.gltf"));

    // const {nodes, materials} = useGLTF("./3d/computer/imac/scene.gltf");
    // console.log(nodes);


    // gltf2.materials.DisplayImage.map.name = "./assets/tech/css.png";

    return (

        // to
        // <group rotation-y={-0} rotation-x={0} scale={1.5} position={[-1,0,0]}>
        //phone
        // <group rotation-y={-0} rotation-x={0} scale={1.5} position={[0,0,0]}>

        <group rotation-y={-0.5}>

            {/* computer, will use this as the optImac displays a glitchy apple logo */}
            <mesh scale={7} ref={mesh}>

                <primitive
                // object={gltf1.scene}
                object={gltf2.scene}

                //separate
                // rotation={[0,-0.5,0]}

                //group
                position={[0,0,0.0]}

                // to xx
                // rotation={[0,0,0]}
                // position={[-0.1,-0.03,0.8]}
                // position={[-0,-0.03,0.8]} //mobile
                />
            </mesh>


            {/* computer screen */}
            <mesh position={[0,0.5,0.39]} rotation-x={-0.0858}>
                <planeGeometry args={[16/3.55,9/3.5]} 
                
                />
                <meshStandardMaterial map={texture_1}/>

            </mesh>


            {/* phone */}
            {/* <mesh scale={1.5} ref={mesh}> */}

            {/* to */}
            {/* // <mesh scale={0.83} ref={mesh}>
                <primitive
                object={gltf3.scene}

                //separate here
                // rotation={[-0.3,-0.44,-0.09]}
                // position={[2,-1.8,2.2]}

                // phone 1 combined position
                // position={[2.8,-1.6,0.9]}     
                
                position={[1.1,-0.75,0.4]}                           
                rotation={[-0.1,3,0]}

                //to xx
                // rotation={[0,-0.2,0.01]}
                // position={[1.8,-1.5,10.5]}
                // position={[2.5,-1.5,10.5]}  //mobile

                />

            {/* </mesh> */}

            {/* <OptImac
            position={[0,0,0.0]}
            scale={7}
            /> */}

            <OptPhone
            scale={1.5}
            position={[1.8,-1,0.8]}                           
            rotation={[-0.1,3.15,0]} 
            myWallpaper={texture_1}
            />

        </group>

    )
}


export default function computer() {



    return (
        <div className="absolute top-0 left-0 w-full h-full">
        <Canvas
                    camera={{
                        position: [0, 0, 15], fov:25,
                        // near: 0.1,
                        // far: 200,
                    }}
        >

            {/* Environment lights, float like animation */}
            {/* <Environment preset="city" background blur={4}/> */}
            {/* <Float> */}
                <Shape/>
                
            {/* </Float> */}


            {/* ground shadows */}
            <ContactShadows position-y={-1.9} opacity={0.4} blur={2}/>


            <ambientLight intensity={2}/>
            <directionalLight position={[0,0,1]}
            intensity={1}/>

            {/* 
            <ambientLight intensity={0.1}/>
            <directionalLight intensity={3.5} position={[3, 4.5, -3.5]}/> */}

            {/* <ambientLight intensity={0.1}/>
            <directionalLight intensity={3.5} position={[1, 0, 0.25]}/> */}

            {/* <ambientLight intensity={0.1}/>
            <directionalLight intensity={3.5} position={[1, 0, -0.25]}/> */}

            <spotLight
                intensity={10}
                position={[-3,1,3]}
            />



            <OrbitControls/>
        </Canvas>
    </div>
    );
    
};