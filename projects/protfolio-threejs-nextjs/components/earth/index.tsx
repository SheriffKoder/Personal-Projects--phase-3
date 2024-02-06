"use client"

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

    return (
        <mesh scale={1} ref={mesh}>

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

        </mesh>
    )
}


export default function Cube() {



    return (
    <div className='w-full h-full'>
        <Canvas
        >
       
            <Shape/>

            <ambientLight intensity={2}/>
            <directionalLight position={[0,1,3]}/>
            <OrbitControls/>
        </Canvas>
    </div>
    );
    
};