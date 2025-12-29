import React from 'react'
import Typewriter from 'typewriter-effect'

export default function AnimatedIntro() {
  return (
    <div className="text-lg sm:text-2xl h-30 px-8 text-center font-medium text-white">
        Hi, I&apos;m Khoa Tran. I&apos;m into
        <span className="text-red-500 font-bold">
          <Typewriter
            options={{
              strings: ['Embedded Programming', 'Electrical Engineering', 'Signal Processing', 'IoT Development'],
              autoStart: true,
              loop: true,
              delay: 75,
              deleteSpeed: 50,
              wrapperClassName: "inline-block py-6",
            }}
          />
        </span>
    </div>
  )
}
