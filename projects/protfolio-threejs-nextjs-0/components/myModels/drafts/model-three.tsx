"use client"
import { useEffect, useMemo, useState, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { useVideoTexture, useTexture } from '@react-three/drei'

export default function App() {
  return (
    <Canvas orthographic>
      <Scene />
    </Canvas>
  )
}

function Scene() {
  const [texState, setTexState] = useState(true)
  const videoTex = useVideoTexture('10.mp4')
  return (
    <group>
      <mesh
        position={[-200, 0, 0]}
        scale={[300, 300, 300]}
        onClick={() => {
          setTexState(!texState)
        }}>
        <planeGeometry />
        <ToggleableVideoMaterial texState={texState} />
      </mesh>
      <mesh position={[200, 0, 0]} scale={[300, 300, 300]}>
        <planeGeometry />
        <meshBasicMaterial map={videoTex} toneMapped={false} />
      </mesh>
    </group>
  )
}
const ToggleableTexture = (imageActive) => {
  const tex1 = useTexture('10.jpg')
  const tex2 = useVideoTexture('10.mp4')

  const activeTexture = useMemo(() => {
    if (imageActive) return tex1
    return tex2
  }, [imageActive, tex1, tex2])

  return activeTexture
}

function ToggleableVideoMaterial({ texState }) {
  const texture = ToggleableTexture(texState)
  const materialRef = useRef()
  useEffect(() => {
    console.log('swap')
    if (materialRef.current) {
      materialRef.current.needsUpdate = true
    }
  }, [texture])
  return <meshBasicMaterial ref={materialRef} map={texture} toneMapped={false} />
}
