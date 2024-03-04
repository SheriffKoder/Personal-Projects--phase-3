import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { socials } from '@/constants/constants'

const SocialIcons = ({radius, size, background, size2, padding}:{
  radius: string,
  size: string,
  background: string,
  size2: number,
  padding: string
}) => {

  const ref = React.useRef<HTMLImageElement>(null)
  return (
    <>
    {
    socials.map((social, index)=> (
        <Link href={social.link} className={`relative social_icon_box_container h-[${size}] w-[${size}`}
        key={social.name+" icon"}>

            <Image src={social.icon} height={size2} width={size2} alt={social.name+" icon"}
            className="social_icon_box"
            style={{backgroundColor: background, borderRadius: radius, padding: padding}}
           

            ref={ref}>
            </Image>
        </Link>
    ))
}
    </>
  )
}

export default SocialIcons