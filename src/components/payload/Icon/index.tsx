import React from 'react'
import icon from '@/assets/icon.svg'
import Image from 'next/image'

function Icon() {
  return (
    <div>
      <Image className="w-10" src={icon} alt="" />
    </div>
  )
}

export default Icon
export { Icon }
