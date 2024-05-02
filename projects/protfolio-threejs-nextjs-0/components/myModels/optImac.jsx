/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/3d/computer/opt-imac.glb -o components/myModels/optImac.jsx -r public 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useTexture } from '@react-three/drei';
import { Decal } from '@react-three/drei';

export function OptImac(props) {



  const { nodes, materials } = useGLTF('/3d/computer/opt-imac.glb')

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.067}>
        <group position={[0, -0.033, 0.375]} rotation={[-0.087, 0, 0]}>
          <group position={[-4.311, -0.369, -2.59]} rotation={[1.509, 0.098, 0.002]} scale={0.156}>
            {/* <mesh geometry={nodes.Circle001_0.geometry} material={materials['PwrBtnOutline.004']} /> */}
            {/* <mesh geometry={nodes.Circle001_1.geometry} material={materials['PwrBtnIcon.004']} /> */}
          </group>
          <group position={[0, -0.624, -0.383]}>
            <mesh geometry={nodes.Cube001_0.geometry} material={materials['GlassBlack.004']} />
            {/* <mesh geometry={nodes.Cube001_1.geometry} material={materials['DisplayImage.004']} /> */}
            {/* <mesh geometry={nodes.Cube001_1001.geometry} material={materials.myWallpaper}/> */}

            <mesh geometry={nodes.Cube001_1001.geometry} >
            
            <meshBasicMaterial
                    map={props.myWallpaper}
                    polygonOffset
                    polygonOffsetFactor={-1}
                    transparent
                    />                        
            </mesh>
        
          </group>
          {/* expensive */}
          <mesh geometry={nodes.Cube003_0.geometry} material={materials['MetalDiffuse.004']} /> 
          {/* <mesh geometry={nodes['56-apple-512_0'].geometry} material={materials['AppleLogoBack.004']} position={[-0.012, 0.013, 2.056]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={2.068} /> */}
          <mesh geometry={nodes.Circle_0.geometry} material={materials['AppleLogoFront.004']} position={[0, -0.9, -2.796]} rotation={[Math.PI / 2, 0, 0]} scale={0.321} />
          {/* <mesh geometry={nodes.Cube_0.geometry} material={materials['DiskSDVent.004']} position={[0, -0.366, 3.462]} scale={[4.052, 1, 0.016]} /> */}
          {/* <mesh geometry={nodes.Cube002_0.geometry} material={materials['PlugProng.004']} position={[0, -0.383, -1.955]} rotation={[-0.138, 0, 0]} scale={[-0.028, -0.087, -0.028]} /> */}
          {/* <mesh geometry={nodes.iMacIO_0.geometry} material={materials['RearIO.004']} position={[3.24, -0.293, -2.503]} rotation={[-1.681, 0.051, 3.139]} scale={0.384} /> */}
          {/* <mesh geometry={nodes.Plane004_0.geometry} material={materials['DiskSDVent.004']} position={[4.977, -0.515, 0.357]} rotation={[0, 1.571, 0]} scale={[1.237, 0.03, 1]} /> */}
        </group>
        <mesh geometry={nodes.Plane_0.geometry} material={materials['MetalDiffuse.004']} position={[0, -0.073, 0.688]} />
      </group>
    </group>
  )
}

useGLTF.preload('/3d/computer/opt-imac.glb')
