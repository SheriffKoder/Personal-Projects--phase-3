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

    //project view [zoom in]
    const rotation_1 = () => {

        if (typeof window !== "undefined") {
            const { innerWidth, innerHeight } = window;

            console.log(innerWidth);

            mouse.rotation_y.set(0);
            mouse.scale.set(1.5);

            // determine position-x based on viewport if mobile or desktop, 
            // it needs some difference to align as needed
            if (innerWidth >= 1537) {
                mouse.position_x.set(-1.2); 
            } else {
                mouse.position_x.set(0); 

            }
        }

    }

    //back from project [zoom out]
    const rotation_2 = () => {

        mouse.rotation_y.set(-0.5);
        mouse.scale.set(1);
        mouse.position_x.set(0);

    }


    // adjust x if the user resized window from mobile to desktop to view the models properly
    // as the rotations are triggered from a clickable button that will not be triggered on resize
    const windowResizeListen = () => {
        if (typeof window !== "undefined") {
            const { innerWidth, innerHeight } = window;
            if (innerWidth >= 1537) {
                // mouse.position_x.set(-1.2);
                mesh.current.position.x = -1.2;
            } else {
                // mouse.position_x.set(0);
                mesh.current.position.x = 0;
            }
        }
    }


    //make if for mobile, check window width
    // based on the received orbitControl prop from the Projects.jsx trigger the needed position animation
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

    // npx gltfjsx public/3d/computer/opt-iphone3.glb -o components/myModels/optPhone.jsx -r public
    // const gltf1 = useLoader(GLTFLoader, "./3d/computer/imac.glb");    //gltf.scene
    // const gltf2 = useGLTF("./3d/computer/imac/scene.gltf");

    const texture_1 = useTexture(`${texture_1_url}`);  //texture importing method fixes the brightness issue
    const texture_2 = useTexture(`${texture_2_url}`);  //texture importing method fixes the brightness issue

    return (


        <motion.group ref={mesh} 
        rotation-y={mouse.rotation_y} scale={mouse.scale} position-x={mouse.position_x}>

            <OptImac
            position={[0,0,0.0]}
            scale={7}
            myWallpaper={texture_1}
            />

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


            {/* used for light debugging */}
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