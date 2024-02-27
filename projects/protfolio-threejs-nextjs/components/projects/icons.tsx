

import React, { useRef, useState, useMemo, useLayoutEffect } from "react";
import { Decal, useGLTF } from "@react-three/drei";
import { Canvas } from '@react-three/fiber'
import { useControls } from "leva";
import * as THREE from "three"
import { useTexture } from '@react-three/drei';
import { RoundedBoxGeometry } from "three/examples/jsm/Addons.js";
import { degToRad } from "three/src/math/MathUtils.js";
import { OrbitControls } from "@react-three/drei";
import { LightScene } from "../myModels/lights";
import { Bloom, EffectComposer } from "@react-three/postprocessing";


export function Button (props) {
  const { nodes, materials } = useGLTF("/models/button.glb");

  const [luminanceThreshold, setLuminanceThreshold] = useState(2);
  const [intensity, setIntensity] = useState(0.2);
  const [radius, setRadius] = useState(0.35);
  const shiningBlue = new THREE.Color(0.3, 1, 13);


  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI, 0, 0]}
      position-y={-0.001} rotation-x={-Math.PI} position-z={-0.031}>

        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes[
              "basic-square-round-corners-podium_basic-square-round-corner003"
            ].geometry
          }
          material={materials["None.004"]}
        >
              <meshLambertMaterial color="#232323"/>


              {/* <meshLambertMaterial color={shiningBlue}/>

              <EffectComposer>
                <Bloom
                mipmapBlur
                luminanceThreshold={luminanceThreshold}
                intensity={intensity}
                radius={radius}
                />
              </EffectComposer> */}

        </mesh>

        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes[
              "basic-square-round-corners-podium_basic-square-round-corner003_1"
            ].geometry
          }
          material={materials.iconImage}
        >
              <meshLambertMaterial color="#232323"/>

        </mesh>
      </group>


    </group>
  
  );
}

export function Button2 (props) {
  const { nodes, materials } = useGLTF("/models/button.glb");
  const texture_1 = useTexture(props.image);

  const [buttonHeight, setButtonHeight] = useState(-0.01);

  const Click = () => {
    setButtonHeight(-0.005);
    setTimeout(()=> {
      setButtonHeight(-0.01);

    },200);
  }


  return (
    <group {...props} dispose={null} onPointerEnter={()=>{Click()}}>
      <group rotation={[-6.28, 0, -0]}
      position-y={-0.001} position-z={buttonHeight} scale={0.9}>

        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes[
              "basic-square-round-corners-podium_basic-square-round-corner003"
            ].geometry
          }
          material={materials["None.004"]}
        >

              <meshLambertMaterial color="#373737"/>
          </mesh>

        <mesh
        castShadow
        receiveShadow
        geometry={
        nodes[
          "basic-square-round-corners-podium_basic-square-round-corner003_1"
        ].geometry
        }
      // material={materials.iconImage}
        >

        <meshBasicMaterial transparent opacity={0} />
        <Decal
        // debug
        position={[0,0.02,0]}
        rotation={[-10,0, 0]}
        scale={[0.2,0.2,0.2]}
        >

        <meshBasicMaterial
        map={texture_1}
        // color="#ff0000"
        polygonOffset
        polygonOffsetFactor={-1}
        />

        </Decal>


      </mesh>



      </group>

    </group>
  
  );
}

useGLTF.preload("/models/button.glb");

const Experience = ({projects}: {
  projects: any
}) => {

    // useControls({
    //     position_x: {value: 0.0, min: -20, max: 20, 
    //         onChange: (value) => {
    //             setPosition_x((pos)=>(value))}},
    //     position_y: {value: 0, min: -20, max: 20,
    //         onChange: (value) => {
    //             setPosition_y((pos)=>(value))}},
    //     position_z: {value: 0, min: -20, max: 20,
    //         onChange: (value) => {
    //             setPosition_z((pos)=>(value))}},
    //     rotation_x: {value: 1.3, min: -10, max: 10,
    //         onChange: (value) => {
    //             setRotation_x((pos)=>(value))}},
    //     rotation_y: {value: 0, min: -10, max: 10,
    //         onChange: (value) => {
    //             setRotation_y((pos)=>(value))}},
    //     rotation_z: {value: 0.0, min: -10, max: 10,
    //         onChange: (value) => {
    //             setRotation_z((pos)=>(value))}},
    //     scale: {value: 3, min: 0, max: 15,
    //         onChange: (value) => {
    //             setScale((pos)=>(value))}},
    //     x: {value: 1, min: -50, max: 50,
    //         onChange: (value) => {
    //             setX((pos)=>(value))}},
    //     y: {value: 64, min: -50, max: 70,
    //         onChange: (value) => {
    //             setY((pos)=>(value))}},
    //     z: {value: 64, min: -50, max: 70,
    //         onChange: (value) => {
    //             setZ((pos)=>(value))}},


    // });

    const [position_x, setPosition_x] = useState(0);
    const [position_y, setPosition_y] = useState(0);
    const [position_z, setPosition_z] = useState(1);
    const [rotation_x, setRotation_x] = useState(1.3);
    const [rotation_y, setRotation_y] = useState(0);
    const [rotation_z, setRotation_z] = useState(0);
    const [scale, setScale] = useState(3);
    const [x, setX] = useState(1);
    const [y, setY] = useState(64);
    const [z, setZ] = useState(64);


    // console.log(projects.length);

    return (
    <>

        {/* position x depending on how many projects to fit the group always at center of view */}
        <group rotation-x={0.6} position-x={((projects.length-1)*-0.5)}>

          {/* <group 
          position={[position_x, position_y, position_z]} 
          rotation={[rotation_x, rotation_y, rotation_z]}
          scale={3}>
              <Button/>
          </group>

          <group 
          position={[position_x+1, position_y, position_z]} 
          rotation={[rotation_x, rotation_y, rotation_z]}
          scale={3}>
              <Button/>
          </group>


          <group 
          position={[position_x-1, position_y, position_z]} 
          rotation={[rotation_x, rotation_y, rotation_z]}
          scale={3}>
              <Button/>
          </group> */}

          {/* +index to move the buttons beside each other */}
          {
          projects.map((project, index)=>(

            <group key={index}
            position={[
              0+index, 
              0, 0]} 
            rotation={[1.3, 0, 0]}
            scale={3}>
                <Button image={project.icon}/>
                <Button2 image={project.icon}/>
            </group>
          
          
          ))
          }
        
        </group>
        
    
    </>
  )
}

export const ButtonCanvas = ({projects}: {
  projects: any
}) => {
    return (
        <Canvas
        shadows
        camera={{position: [0,2,5], fov: 10}}>


        <Experience projects={projects}/>
        {/* <ambientLight intensity={0.2}/> */}
        <OrbitControls/>
        {/* <LightScene/> */}
        {/* <LightScene/> */}
        {/* <spotLight position={[-0.4, -0.3, 1.3]} distance={0} angle={0.88} color={0xc4dcff} intensity={2.5}/>
        <spotLight position={[1.2, 1.5, 1]} distance={7} angle={0.52} intensity={10} color={0x007bff}/>
        <spotLight position={[1.2, 1.5, 1]} distance={7} angle={0.52} intensity={4}/> */}
        <directionalLight position={[0,0,1.3]} intensity={7} />
        <directionalLight position={[-5,3.3,1.3]} intensity={2} />
        <directionalLight position={[5,3.3,1.3]} intensity={2} />

        </Canvas>
    )
}