import React, {ReactNode} from "react"


type Props = {
    children? : React.ReactNode,
}

const ComponentCard = ({children}: Props) => {
  return (
    <div className="rounded-[17px] border ProjectCard_bg
    flex flex-row p-2 gap-1 fadeIn_animation opacity-0
    md2:gap-[2rem] w-[calc(90vw-4rem)] h-[calc(90vw-4rem)] md1:w-[200px] md1:h-[200px]
    items-center justify-center relative"
    >
        <span className="pointer-events-none">{children}</span>
    </div>
  )
}

export default ComponentCard