import React from 'react'
import Link from 'next/link'

import DropDownMenu from '@/components/customComponents/menu_dropDown/page'

const page = () => {
  return (
    <main className="flex items-center justify-center min-h-[100vh] relative">
        <DropDownMenu/>

        <div className="absolute bottom-[1rem] right-[1rem] flex flex-col items-center">
            <h1 className="pl-3 pr-1 py-1 border-[#387ca4] border-2 rounded-full text-sm transition-all hover:scale-[1.01]">
                Drop-down Menu
                <Link href="." className="ml-2 gradientRoundButton px-2 rounded-full">close</Link>
            </h1>
        </div>
    </main>
  )
}

export default page