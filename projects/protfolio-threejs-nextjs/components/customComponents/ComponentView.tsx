import React, {ReactNode} from "react"


type Props = {
    children? : React.ReactNode,
}

const ComponentView = ({children}: Props) => {
  return (
    <div className="w-full h-full"
    >
        {children}
    </div>
  )
}

export default ComponentView;