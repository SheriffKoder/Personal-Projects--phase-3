"use client"

import { useEffect, useRef } from 'react'
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { ContactShadows, Environment, Float, Preload, useGLTF} from "@react-three/drei";

import { TextureLoader } from 'three/src/loaders/TextureLoader.js'
import { OrbitControls } from '@react-three/drei'
import { useTexture } from '@react-three/drei';

// import {OptPhone} from "./optPhone";
import {OptPhone42} from "./optPhone42";
import {OptImac} from "./optImac";

// import { orbitType } from "@/constants/constants";
import { useSpring, useMotionValue } from 'framer-motion';
import { motion } from "framer-motion-3d";  //sep lib
// import { LightScene } from './drafts/EarthLights';

import { Plane, TorusKnot, useHelper } from "@react-three/drei";
import { useControls } from "leva";
import { DirectionalLight, DirectionalLightHelper, Mesh, PointLight, PointLightHelper, RectAreaLight, SpotLight, SpotLightHelper } from "three";
import { RectAreaLightHelper } from "three/examples/jsm/Addons.js";


function Shape ({orbitControl, texture_1_url, texture_2_url}) {





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

    //////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////
    const springOptions = {
        damping: 60,
    }
    const mouse = {
        rotation_y: useSpring(useMotionValue(-0.75), springOptions),
        scale: useSpring(useMotionValue(1), springOptions),
        position_x: useSpring(useMotionValue(0), springOptions),

    };

    //slight rotation to back on page entry
    const rotation_0 = () => {

        mouse.rotation_y.set(-0.5);
        // mouse.scale.set(1.5);
        // mouse.position_x.set(-1.2);

    }

    //project view
    const rotation_1 = () => {

        const { innerWidth, innerHeight } = window;

        console.log(innerWidth);

        mouse.rotation_y.set(0);
        mouse.scale.set(1.5);

        if (innerWidth >= 1537) {
            mouse.position_x.set(-1.2); 
        } else {
            mouse.position_x.set(0); 

        }

    }

    //back from project
    const rotation_2 = () => {

        mouse.rotation_y.set(-0.5);
        mouse.scale.set(1);
        mouse.position_x.set(0);

    }


    //adjust x if the user resized window from mobile to desktop to view the models properly
    //as the rotations are triggered from a clickable button that will not be triggered on resize
    const windowResizeListen = () => {
        const { innerWidth, innerHeight } = window;
        if (innerWidth >= 1537) {
            // mouse.position_x.set(-1.2); 
            mesh.current.position.x = -1.2;

        } else {
            // mouse.position_x.set(0); 
            mesh.current.position.x = 0;

        }
    }


    //make if for mobile, check window width
    useEffect(() => {

        if (orbitControl === "default") {
            rotation_0();
        } else if (orbitControl === "view") {
            rotation_1();
        } else if (orbitControl === "back") {
            rotation_2();
        }

        // rotation_0();
        window.addEventListener("resize", windowResizeListen);

        // window.addEventListener("mousemove", rotation_1);
        // window.addEventListener("wheel", rotation_3);


        return () => {
            // window.removeEventListener("mouse", rotation_1);
            // window.removeEventListener("wheel", rotation_3);

        };
    },[orbitControl]);
    //////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////


    // const gltf1 = useLoader(GLTFLoader, "./3d/computer/imac.glb");    //gltf.scene
    // const gltf2 = useGLTF("./3d/computer/imac/scene.gltf");

    // npx gltfjsx public/3d/computer/opt-iphone3.glb -o components/myModels/optPhone.jsx -r public
    // const gltf3 = useLoader(GLTFLoader, "./3d/computer/iphone3.glb");    //gltf.scene
    // const gltf4 = useLoader(GLTFLoader, "./3d/computer/iphone4.glb");    //gltf.scene

    // const img = "brickwall";
    const texture_1 = useTexture(`${texture_1_url}`);  //texture importing method fixes the brightness issue
    const texture_2 = useTexture(`${texture_2_url}`);  //texture importing method fixes the brightness issue

    // console.log(texture_1_url);
    // const texture_1 = useTexture("'"+texture_1_url+"'");  //texture importing method fixes the brightness issue
    // const texture_2 = useTexture("'"+texture_2_url+"'");  //texture importing method fixes the brightness issue



    // console.log(useGLTF("./3d/computer/imac/scene.gltf"));

    // const {nodes, materials} = useGLTF("./3d/computer/imac/scene.gltf");
    // console.log(nodes);


    // gltf2.materials.DisplayImage.map.name = "./assets/tech/css.png";
    // console.log(Orbit);
    return (

        // to
        // <group rotation-y={-0} scale={1.5} position={[-1,0,0]}>
        // {/* //phone view port */}
        // {/* // <group rotation-y={-0} rotation-x={0} scale={1.5} position={[0,0,0]}> */}

        // <group rotation-y={-0.5} scale={1} position={[0,0,0]} >
        // <group rotation-y={Orbit.rotation.y} scale={Orbit.scale} position-x={Orbit.position.x} >
        <motion.group ref={mesh} 
        rotation-y={mouse.rotation_y} scale={mouse.scale} position-x={mouse.position_x} >


            {/* computer, will use this as the optImac displays a glitchy apple logo */}
            {/* <mesh scale={7} ref={mesh}>

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
            </mesh> */}


            {/* computer screen */}
            {/* <mesh position={[0,0.5,0.39]} rotation-x={-0.0858}>
                <planeGeometry args={[16/3.55,9/3.5]} 
                
                />
                <meshStandardMaterial map={texture_1}/>

            </mesh> */}


            {/* phone */}
            {/* <mesh scale={1.5} ref={mesh}> */}

            {/* to */}
            {/* // <mesh scale={0.83} ref={mesh}>*/}
                {/* <primitive
                object={gltf4.scene}

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

            </mesh> */}

            <OptImac
            position={[0,0,0.0]}
            scale={7}
            myWallpaper={texture_1}
            />
{/* 
            <OptPhone
            scale={1.5}
            position={[1.8,-1,0.8]}                           
            rotation={[-0.1,3.15,0]} 
            myWallpaper={texture_2}
            /> */}

            <OptPhone42
            scale={1.5}
            position={[1.8,-1,0.8]}                           
            rotation={[-0.1,3.15,0]} 
            myWallpaper={texture_2}
            />



        </motion.group>

    )
}


export default function computer({orbitControl, texture_1_url, texture_2_url}) {

    // console.log(Orbit);


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
                <Shape orbitControl={orbitControl} texture_1_url={texture_1_url} texture_2_url={texture_2_url}/>
                
            {/* </Float> */}


            {/* ground shadows */}
            {/* <ContactShadows position-y={-1.9} opacity={0.4} blur={2}/> */}


            {/* <ambientLight intensity={2}/>
            <directionalLight position={[0,0,1]}
            intensity={1}/> */}

            
            {/* <ambientLight intensity={0.1}/> */}
            {/* <directionalLight intensity={3.5} position={[3, 4.5, -3.5]}/> */}

            {/* <ambientLight intensity={0.1}/>
            <directionalLight intensity={3.5} position={[1, 0, 0.25]}/> */}

            {/* <ambientLight intensity={0.1}/>
            <directionalLight intensity={3.5} position={[1, 0, -0.25]}/> */}

            {/* <spotLight
                intensity={10}
                position={[-3,1,3]}
            /> */}

            {/* <LightScene/> */}

                <directionalLight intensity={4} position={[3.15, 0.1, 4.5]}/>
                <spotLight
                intensity={23}
                position={[-2.3,1.85,3.7]}
                distance={8.8}
                angle={0.85}
            />


            {/* <OrbitControls
                enableZoom={true}   //true by default
                enablePan={true}    //true by default with right click
            /> */}
            </Canvas>
    </div>
    );
    
};