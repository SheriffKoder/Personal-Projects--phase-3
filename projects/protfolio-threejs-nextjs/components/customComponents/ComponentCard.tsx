import Link from "next/link";
import React, {ReactNode, useState} from "react"


type Props = {
    children? : React.ReactNode,
}

const ComponentCard = ({children}: Props) => {

  const [clicked, setClicked] = useState(false);

  const modalCSS = `
  fixed pt-[3.5rem] top-0 left-0 right-0 bottom-0 flex ambientBackground 
  items-center justify-center w-full h-full flex z-[1]
  bg-black`;
  const cardCSS = `rounded-[17px] border ProjectCard_bg
  flex flex-row p-2 gap-1 fadeIn_animation opacity-0
  md2:gap-[2rem] w-[calc(90vw-4rem)] h-[calc(90vw-4rem)] md1:w-[200px] md1:h-[200px]
  items-center justify-center relative`;


  return (
    <div className={cardCSS}>          
      <div className="w-full h-full grid place-items-center cursor-pointer">
        <span className="pointer-events-none">{children}</span>
      </div>

    </div>
  )
}

export default ComponentCard