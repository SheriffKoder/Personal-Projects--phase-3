import React from 'react'

// import Cube from '@/components/earth';
import dynamic from 'next/dynamic';

//lazy loading because for high textures
const Cube = dynamic(()=> import("@/components/earth"), {
  ssr:false,
  loading: () => <p>Loading...</p>
})

const page = () => {
  return (
    <div className="w-[100vw] h-[100vh]">

        <Cube/>
 
    </div>
  )
}

export default page