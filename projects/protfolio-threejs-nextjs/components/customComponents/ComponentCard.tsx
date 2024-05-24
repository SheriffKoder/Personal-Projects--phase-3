import React, {ReactNode} from "react"


type Props = {
    children? : React.ReactNode,
}

const ComponentCard = ({children}: Props) => {
  return (
    <div className="rounded-[17px] border ProjectCard_bg
    flex flex-row p-2 gap-1 fadeIn_animation opacity-0
    h-[200px] w-[200px] md2:gap-[2rem]
    items-center justify-center relative"
    >
        {children}
    </div>
  )
}

export default ComponentCard