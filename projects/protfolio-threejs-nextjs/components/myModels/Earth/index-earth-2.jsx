"use client"

// this is a low poly sphere earth model


import { useEffect, useRef, useState } from 'react'
import { Canvas, useLoader, useFrame } from '@react-three/fiber'

import { TextureLoader } from 'three/src/loaders/TextureLoader.js'
import { OrbitControls, Point } from '@react-three/drei'
import { PointLight, SphereGeometry } from 'three'
import { useHelper } from '@react-three/drei'
import { useControls } from 'leva'
import { EarthLightScene } from './EarthLights'

function Shape () {

        // const [color, normal, aoMap] = useLoader(TextureLoader, [
    //     "./earth3d/color.jpg",
    //     "./earth3d/normal.jpg",
    //     "./earth3d/occlusion.jpg"
    
    // ]);

    const mesh = useRef<SphereGeometry>(null);

    useFrame((state, delta) => {
        
        //speed of rotation with x/y axis
        mesh.current.rotation.x += delta * 0.002;
        mesh.current.rotation.y += delta * 0.003;
        


    });

    // const spotLightRef = useRef<SpotLight>(null!);
    // useHelper(mesh, SphereGeometry, "red");
   
// useControls({
//         position_x: {value: 0.0, min: -20, max: 20, 
//             onChange: (value) => {
//                 setPosition_x((pos)=>(value))}},
//         position_y: {value: -13.5, min: -20, max: 20,
//             onChange: (value) => {
//                 setPosition_y((pos)=>(value))}},
//         position_z: {value: 1, min: -20, max: 20,
//             onChange: (value) => {
//                 setPosition_z((pos)=>(value))}},
//         rotation_x: {value: 0.0, min: -10, max: 10,
//             onChange: (value) => {
//                 setRotation_x((pos)=>(value))}},
//         rotation_y: {value: 4.2, min: -10, max: 10,
//             onChange: (value) => {
//                 setRotation_y((pos)=>(value))}},
//         rotation_z: {value: 0.7, min: -10, max: 10,
//             onChange: (value) => {
//                 setRotation_z((pos)=>(value))}},
//         scale: {value: 12, min: 0, max: 15,
//             onChange: (value) => {
//                 setScale((pos)=>(value))}},
//         x: {value: 1, min: -50, max: 50,
//             onChange: (value) => {
//                 setX((pos)=>(value))}},
//         y: {value: 64, min: -50, max: 70,
//             onChange: (value) => {
//                 setY((pos)=>(value))}},
//         z: {value: 64, min: -50, max: 70,
//             onChange: (value) => {
//                 setZ((pos)=>(value))}},


//     });

    const [position_x, setPosition_x] = useState(0.0);
    const [position_y, setPosition_y] = useState(-13.5);
    const [position_z, setPosition_z] = useState(1);
    const [rotation_x, setRotation_x] = useState(0);
    const [rotation_y, setRotation_y] = useState(4.2);
    const [rotation_z, setRotation_z] = useState(0.7);
    const [scale, setScale] = useState(12);
    const [x, setX] = useState(1);
    const [y, setY] = useState(64);
    const [z, setZ] = useState(64);


    //use the texture loader type of loader
    const texture_1 = useLoader(TextureLoader, "/assets/tech/css.png")
    const texture_2 = useLoader(TextureLoader, "/assets/tech/docker.png")
    const texture_3 = useLoader(TextureLoader, "/assets/tech/figma.png")


    // const color2 = useLoader(TextureLoader, "/assets/earth/color2.jpeg")
    const color = useLoader(TextureLoader, "/models/color5.jpg")
    // const aoMap = useLoader(TextureLoader, "/assets/earth/occlusion.jpg")
    const normal = useLoader(TextureLoader, "/models/normal.jpg")


    return (
        <mesh scale={scale} ref={mesh}
        position={[position_x, position_y, position_z]}
        rotation={[rotation_x, rotation_y, rotation_z]}
        >

        {/* <mesh ref={mesh}> */}

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
            <sphereGeometry args={[x, y, z]}/>
            {/* <sphereGeometry args={[1, 64, 64]}/> */}


            <meshLambertMaterial map={color} normalMap={normal} transparent={false}/>

            {/* to */}
            {/* <pointLight position={[0,0.3,2.2]} intensity={10.8} /> */}

        </mesh>
    )
}




export default function Cube2() {


    // useControls({
    //     camera_x: {value: 0, min: -20, max: 20, 
    //         onChange: (value) => {
    //             setCamera_x((pos)=>(value))}},
    //     camera_y: {value: 0, min: -20, max: 20,
    //         onChange: (value) => {
    //             setCamera_y((pos)=>(value))}},
    //     camera_z: {value: 15, min: -20, max: 20,
    //         onChange: (value) => {
    //             setCamera_z((pos)=>(value))}},
    //     fov: {value: 25, min: -50, max: 50,
    //         onChange: (value) => {
    //             setFOV((pos)=>(value))}},
       


    // });

    const [camera_x, setCamera_x] = useState(0);
    const [camera_y, setCamera_y] = useState(0);
    const [camera_z, setCamera_z] = useState(15);
    const [fov, setFOV] = useState(25);
    

    //simulate pointLight movement
//     const [PointLightZ, setPointLightZ] = useState(0.2);
//     const [PointLightIntensity, setPointLightIntensity] = useState(4);
//    useEffect(()=> {

//     if (PointLightZ < 2.2) {
//         setTimeout(()=> {
//             setPointLightZ((prev)=> prev + 0.05);
//         }, 5);

//     }
    
//     if (PointLightIntensity < 10.8) {
//         setTimeout(()=> {
//             setPointLightIntensity((prev)=> prev + 0.04);
//         }, 5);

//     }

//    },[PointLightZ, PointLightIntensity]);

    return (
    <div className='w-full h-full'>
        <Canvas
        camera={{
            position: [camera_x, camera_y, camera_z], fov:fov,
            // near: 0.1,
            // far: 200,
        }}
        >
       
            <Shape/>

            {/* <ambientLight intensity={1.5}/> */}
            {/* <directionalLight position={[0,1,3]}/> */}

            
            <ambientLight intensity={0.1}/>
            {/* <directionalLight intensity={3.5} position={[3, 4.5, -3.5]}/> */}

            {/* <ambientLight intensity={0.1}/>
            <directionalLight intensity={3.5} position={[1, 0, 0.25]}/> */}

            {/* <ambientLight intensity={0.1}/>
            <directionalLight intensity={3.5} position={[1, 0, -0.25]}/> */}

            {/* <spotLight intensity={39.4} position={[0, 1.6, -1.1]} distance={16.4} angle={0.84}/> */}


            {/* // */}
            {/* <pointLight position-x={0} position-y={0.3} position-z={PointLightZ} intensity={PointLightIntensity} /> */}

            {/* <pointLight position-x={0} position-y={0.3} position-z={.2} intensity={4} /> */}
            {/* to */}
            {/* <pointLight position={[0,0.3,2.2]} intensity={10.8} /> */}


            <EarthLightScene/>

            {/* <OrbitControls/> */}
        </Canvas>
    </div>
    );
    
};