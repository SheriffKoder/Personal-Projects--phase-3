"use client"

import { useEffect, useRef } from 'react'
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { Decal, Preload, useGLTF} from "@react-three/drei";

import { TextureLoader } from 'three/src/loaders/TextureLoader.js'
import { OrbitControls } from '@react-three/drei'
import { useTexture } from '@react-three/drei';

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
    const gltf3 = useLoader(GLTFLoader, "./3d/computer/iphone3.glb");    //gltf.scene

    const texture_1 = useTexture("/assets/brickwall.jpg");

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

          


            {/* computer screen */}
            <mesh position={[0,0.5,0.39]} rotation-x={-0.0858}>
                <planeGeometry args={[16/3.55,9/3.5]} 
                
                />
                <meshNormalMaterial />

                <Decal
                debug
                position={[0,0,0]}
                rotation={[0,0,0]}
                scale={1}
                polygonOffsetFactor={-1}
                >

                <meshBasicMaterial map={texture_1} />

                </Decal>

            </mesh>


         

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
       
            <Shape/>

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