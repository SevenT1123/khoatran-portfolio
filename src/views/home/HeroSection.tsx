"use client"
import Image from 'next/image'
import React from 'react'
import AnimatedIntro from './AnimatedIntro'
import LinkButton from './LinkButton'
import { LuArrowRight } from 'react-icons/lu'
import DarkVeil from './DarkVeil'

export default function HeroSection() {
  return (
    <section id="home" className='h-screen relative flex justify-center items-center overflow-hidden flex-col'>
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <DarkVeil />
        </div>
        <div className='absolute z-10 flex flex-col items-center'>
            {/*glowing image*/}
            <div className='w-37 h-37.5 relative'>
              <div className='absolute inset-0 rounded-full bg-linear-to-r from-[#9d0722] to-[#bf011b] blur-lg animate-pulse opacity-100'></div>
              <Image src="/photo/khoatran_pfp.png" alt="image" className="rounded-full object-cover" fill/>
            </div>
            <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl my-6 font-bold tracking-wide text-transparent bg-clip-text bg-linear-to-r from-red-700 to-white">Hi, I&apos;m Khoa Tran</h1>
            <AnimatedIntro/>
            <LinkButton href="/projects"text="Visit my work here" icon={LuArrowRight} rounded/>
        </div>
    </section>
  )
}

