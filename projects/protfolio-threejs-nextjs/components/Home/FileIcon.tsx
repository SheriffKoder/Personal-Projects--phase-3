import React from 'react'


const FileIcon = ({color}:{color:string}) => {
    return (
      // <svg height="14" viewBox="0 0 24 24" width="14" fill={color} xmlns="http://www.w3.org/2000/svg"><path d="M22,16 L22,20 C22,21.1045695 21.1045695,22 20,22 L4,22 C2.8954305,22 2,21.1045695 2,20 L2,16 L4,16 L4,20 L20,20 L20,16 L22,16 Z M13,12.5857864 L16.2928932,9.29289322 L17.7071068,10.7071068 L12,16.4142136 L6.29289322,10.7071068 L7.70710678,9.29289322 L11,12.5857864 L11,2 L13,2 L13,12.5857864 Z" fillRule="evenodd"/></svg>
      <svg height="14" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
        <path d="m0 0h24v24h-24z" fill="#fff" opacity="0"/>
        <path d="m19.74 7.33-4.44-5a1 1 0 0 0 -.74-.33h-8a2.53 2.53 0 0 0 -2.56 2.5v15a2.53 2.53 0 0 0 2.56 2.5h10.88a2.53 2.53 0 0 0 2.56-2.5v-11.5a1 1 0 0 0 -.26-.67zm-10.74 4.67h3a1 1 0 0 1 0 2h-3a1 1 0 0 1 0-2zm6 6h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zm-.29-10a.79.79 0 0 1 -.71-.85v-3.15l3.74 4z" 
        fill={color}/>
      </svg>
    )
  }
export default FileIcon

