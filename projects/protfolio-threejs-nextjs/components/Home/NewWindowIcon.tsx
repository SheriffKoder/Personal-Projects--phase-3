import React from 'react'


const NewWindowIcon = ({color}:{color:string}) => {
    return (
      <svg height="14" viewBox="0 0 24 24" width="14" strokeWidth="1.5" fill="transparent" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 3L15 3M21 3L12 12M21 3V9" stroke={color}  strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H11" stroke={color}  strokeLinecap="round"/>
      </svg>
    )
  }
export default NewWindowIcon

