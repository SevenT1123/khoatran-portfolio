import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Logo() {
  return (
    <Link href="/">
        <div className='w-20 h-20'>
            <Image src="/sevent_white.png" alt="logo_white" width={250} height={250}></Image>
        </div>
    </Link>
  )
}
