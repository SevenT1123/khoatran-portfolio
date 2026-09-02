"use client"
import Image from 'next/image'
import React from 'react'
import LinkButton from './LinkButton'
import { LuArrowRight } from 'react-icons/lu'

export default function HeroSection() {
  return (
    <section id="home" className='h-screen relative flex justify-center items-center overflow-hidden flex-col'>
        <div className='absolute z-10 flex flex-col items-center'>
            <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl my-6 font-bold tracking-wide text-transparent bg-clip-text bg-linear-to-r from-red-600 to-white">Khoa Tran</h1>
            <a className="text-center text-xl sm:text-xl md:text-2xl lg:text-4xl font-semibold text-white mb-6">SevenT.vst3 Demo</a>
            <div className="w-1920 max-w-2xl aspect-video mb-6">
                <iframe
                  className="w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/7wpr-dfgW2I?si=oM5X43f8tHE0KRzg"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
            </div>
            <LinkButton href="https://github.com/SevenT1123/SevenT.vst3"text="Check out my synthesizer" icon={LuArrowRight} rounded/>
        </div>
    </section>
  )
}

