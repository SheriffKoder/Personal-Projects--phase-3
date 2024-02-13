
"use client"

import {ReactLenis} from "@studio-freight/react-lenis"

function SmoothScroll ({children}) {
    

    return (
        <ReactLenis root options={{
            lerp: 0.75,  //slower movement
            duration: 1,  //in sec
            smoothTouch: true,
            
        }}>
            {children}
        </ReactLenis>
    )
}

export default SmoothScroll;


/*
wrap the children in the layout between SmoothScroll

*/
