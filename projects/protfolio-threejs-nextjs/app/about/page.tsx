import Introduction from '@/components/About/Introduction'
import TransitionEffect from '@/components/TransitionEffect'
import React from 'react'

const page = () => {
  return (

    <>
        <TransitionEffect/>
        <div className="pt-[8rem] ambientBackground min-h-[99vh]">
            
            <Introduction/>

            {/* education */}
            {/* career */}
            {/* learning path */}


        </div>
    </>
  )
}

export default page