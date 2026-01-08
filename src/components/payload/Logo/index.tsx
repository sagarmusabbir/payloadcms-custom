import React from 'react'
import logo from '@/assets/logo.svg' // Make sure you have your correct images referenced here
import logoDark from '@/assets/logo-dark.svg' // Make sure you have your correct images referenced here
import Image from 'next/image'

function Logo() {
  return (
    <div>
      <Image className="h-20 object-contain dark:invert" src={logo} alt="" />
    </div>
  )
}

export default Logo
export { Logo }
