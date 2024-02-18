import Education from '@/components/About/Education'
import Introduction from '@/components/About/Introduction'
import TransitionEffect from '@/components/TransitionEffect'
import React from 'react'

const page = () => {
  return (

    <>
        <TransitionEffect/>
        <div className="pt-[8rem] ambientBackground min-h-[99vh] flex flex-col gap-14 px-4 lg:px-[7rem]">
            
            <Introduction/>
            <Education/>
            {/* education */}
            {/* career */}
            {/* learning path */}


        </div>
    </>
  )
}

export default page