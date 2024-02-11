import React from 'react'

// import Cube from '@/components/earth';
import dynamic from 'next/dynamic';

//lazy loading because for high textures
const Cube1 = dynamic(()=> import("@/components/myModels/index-cube-1"), {
  ssr:false,
  loading: () => <p>Loading...</p>
});

const Cube2 = dynamic(()=> import("@/components/myModels/index-cube-2"), {
  ssr:false,
  loading: () => <p>Loading...</p>
});

const Cube3 = dynamic(()=> import("@/components/myModels/index-cube-3"), {
  ssr:false,
  loading: () => <p>Loading...</p>
});

const Lights = dynamic(()=> import("@/components/myModels/drafts/lights"), {
  ssr:false,
  loading: () => <p>Loading...</p>
});

const page = () => {
  return (
    <div className="w-[100vw] h-[100vh] bg-[#9c9c9c]">

        {/* <Cube1/> */}
        {/* <Cube2/> */}
        {/* <Cube3/> */}
        <Lights />

 
    </div>
  )
}

export default page