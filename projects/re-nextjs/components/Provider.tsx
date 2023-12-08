// import React from 'react'

"use client"
//02.01
import { SessionProvider } from "next-auth/react"


const Provider = ({children, session}: any) => {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
}

export default Provider