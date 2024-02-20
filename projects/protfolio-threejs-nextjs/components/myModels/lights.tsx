"use client"

import { OrbitControls, Plane, TorusKnot, useHelper, useTexture } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { useRef } from "react";
import { DirectionalLight, DirectionalLightHelper, Mesh, PointLight, PointLightHelper, RectAreaLight, SpotLight, SpotLightHelper } from "three";
import { RectAreaLightHelper } from "three/examples/jsm/Addons.js";


export const LightScene = () => {

   


    //get values from the UI
    const { x, y, z, intensity } = useControls({
        intensity: {value: 1, min: 0, max: 20},
        x: {value: 1, min: -5, max: 5},
        y: {value: 1, min: -5, max: 5},
        z: {value: 1, min: -5, max: 5},
    });


    // 2
    //basic and matcap are not affected if no lights
    // const {intensity} = useControls({intensity: {value: 1, min: 0, max: 5}});

    // 3
    const directionalLightRef = useRef<DirectionalLight>(null!);
    //helper gui options
    useHelper(directionalLightRef, DirectionalLightHelper, 2, "red");
   

    // 4
    // const pointLightRef = useRef<PointLight>(null!);
    // useHelper(pointLightRef, PointLightHelper, 2, "red");
   
    // 5
    // const spotLightRef = useRef<SpotLight>(null!);
    // useHelper(spotLightRef, SpotLightHelper, "red");
   
    // const { x, y, z, intensity, distance, angle } = useControls({
    //     intensity: {value: 1, min: 0, max: 50},
    //     x: {value: 1, min: -5, max: 5},
    //     y: {value: 1, min: -15, max: 15},
    //     z: {value: 1, min: -15, max: 15},
    //     distance: {value: 5, min: 0, max: 20},
    //     angle: {value: Math.PI/6, min: 0.1, max: 2 }

    // });


    //6
    // const rectLightRef = useRef<RectAreaLight>(null!);
    // useHelper(rectLightRef, RectAreaLightHelper, "red");
   
    // const { x, y, z, intensity, width, height, color } = useControls({
    //     intensity: {value: 1, min: 0, max: 30},
    //     x: {value: 1, min: -4, max: 5},
    //     y: {value: 1, min: -4, max: 5},
    //     z: {value: 1, min: -4, max: 5},
    //     width: { value: 3, min: -10, max: 10 }, 
    //     height: { value: 3, min: -10, max: 10 }, 
    //     color: '#fff',

    // });





    return (
        <>

            {/* all light */}
            {/* <ambientLight intensity={intensity}/> */}

            {/* 2 */}
            {/* <hemisphereLight args={["#fff", "#333"]} intensity={intensity} /> */}

            {/* 3 */}
            {/* directional from above */}
            <directionalLight position={[x,y,z]} intensity={intensity} 
            ref={directionalLightRef}/>

            {/* 4 */}
            {/* like the directional but less bright */}
            {/* <pointLight position={[x,y,z]} intensity={intensity} 
            ref={pointLightRef}/> */}

            {/* 5 */}
            {/* spot light*/}
            {/* <spotLight position={[x,y,z]} intensity={intensity} distance={distance} angle={angle}
            ref={spotLightRef}/> */}

            {/* 5 */}
            {/* light from a square shape, like a bright window source */}
            {/* <rectAreaLight position={[x,y,z]} intensity={intensity}
            color={color} width={width} height={height}
            ref={rectLightRef}/> */}

            {/* like the a far away sun that lights are parallel */}
            {/* <Plane scale={10} rotation-x={-Math.PI /2} position-y={-2} /> */}
        </>
    )
}


const Objects = () => {

    const matcap = useTexture("./matcap.png");

    const torusKnotBasicRef = useRef<Mesh>();
    const torusKnotStandardRef = useRef();
    const torusKnotLambertRef = useRef();
    const torusKnotMatcapRef = useRef();

    //for scene rotation
    useFrame(()=> {
        [
            torusKnotBasicRef,
            torusKnotStandardRef,
            torusKnotLambertRef,
            torusKnotMatcapRef

        ].forEach((ref)=> {
            ref.current.rotateX(0.001);
            ref.current.rotateZ(0.002);
            ref.current.rotateY(0.003);

        })
    });


    return (<>

            {/* like the a far away sun that lights are parallel */}
            <Plane scale={10} rotation-x={-Math.PI /2} position-y={-2} />

            <TorusKnot position={[-2,0,-2]} ref={torusKnotBasicRef}>
                <meshBasicMaterial color={"red"}/>
            </TorusKnot>

            <TorusKnot position={[-2,0,2]} ref={torusKnotStandardRef}>
                <meshStandardMaterial color={"green"}/>
            </TorusKnot>

            <TorusKnot position={[2,0,2]} ref={torusKnotLambertRef}>
                <meshLambertMaterial color={"blue"}/>
            </TorusKnot>

            <TorusKnot position={[2,0,-2]} ref={torusKnotMatcapRef}>
                <meshMatcapMaterial matcap={matcap}/>
            </TorusKnot>
        </>
    )
}





const Lights = () => {


  return (
    <Canvas
    camera={{position: [4,7,0]}}>
        {/* <pointLight position={[5,5,5]} intensity={1} /> */}
        {/* <pointLight position={[-3, -3, 2]} intensity={1} /> */}
        <OrbitControls />

        <LightScene/>
        <Objects/>


    </Canvas>
  )
}

export default Lights;