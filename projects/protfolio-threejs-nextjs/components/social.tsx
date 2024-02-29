import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { socials } from '@/constants/constants'

const SocialIcons = () => {
  return (
    <>
    {
    socials.map((social, index)=> (
        <Link href={social.link} className="relative social_icon_box_container">

            <Image src={social.icon} height={24} width={24} alt={social.name+" icon"}
            className="social_icon_box">
            </Image>
        </Link>
    ))
    }
    </>
  )
}

export default SocialIcons