"use client"

// this is a low poly sphere earth model


import { useRef } from 'react'
import { Canvas, useLoader, useFrame } from '@react-three/fiber'

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

    //use the texture loader type of loader
    const texture_1 = useLoader(TextureLoader, "/assets/tech/css.png")
    const texture_2 = useLoader(TextureLoader, "/assets/tech/docker.png")
    const texture_3 = useLoader(TextureLoader, "/assets/tech/figma.png")


    const color2 = useLoader(TextureLoader, "/assets/earth/color2.jpeg")
    const color = useLoader(TextureLoader, "/assets/earth/color5.jpg")
    const aoMap = useLoader(TextureLoader, "/assets/earth/occlusion.jpg")
    const normal = useLoader(TextureLoader, "/assets/earth/normal.jpg")


    return (
        <mesh scale={1} ref={mesh}>

            {/* width height depth */}
            {/* <boxGeometry args={[2,2,2]}/> */}
            {/* <meshStandardMaterial color={"red"} /> */}

            {/* with attach can use different textures for different faces */}
            {/* <meshStandardMaterial map={texture_1} attach="material-0"/>
            <meshStandardMaterial map={texture_2} attach="material-1"/>
            <meshStandardMaterial map={texture_3} attach="material-2"/>
            <meshStandardMaterial map={texture_1} attach="material-3"/>
            <meshStandardMaterial map={texture_2} attach="material-4"/>
            <meshStandardMaterial map={texture_3} attach="material-5"/> */}

            {/* add more resolution to the circle edges */}
            <sphereGeometry args={[1, 64, 64]}/>

            <meshStandardMaterial map={color} normalMap={normal}/>

        </mesh>
    )
}


export default function Cube2() {



    return (
    <div className='w-full h-full'>
        <Canvas
        >
       
            <Shape/>

            <ambientLight intensity={1.5}/>
            <directionalLight position={[0,1,3]}/>

            {/* 
            <ambientLight intensity={0.1}/>
            <directionalLight intensity={3.5} position={[3, 4.5, -3.5]}/> */}

            {/* <ambientLight intensity={0.1}/>
            <directionalLight intensity={3.5} position={[1, 0, 0.25]}/> */}

            {/* <ambientLight intensity={0.1}/>
            <directionalLight intensity={3.5} position={[1, 0, -0.25]}/> */}


            <OrbitControls/>
        </Canvas>
    </div>
    );
    
};