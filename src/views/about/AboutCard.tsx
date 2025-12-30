import React from 'react'
import Image from 'next/image';

interface AboutCardProps {
    name: string;
    icon: string;
}

export default function AboutCard({ icon, name}: AboutCardProps) {
  return (
<div className="flex flex-col items-center justify-center p-6 rounded-xl bg-[var(--khoa-dark-crimson)] border border-white/10 hover:border-red-500/50 transition-all duration-300 group">
      <div className="text-4xl mb-3 text-white group-hover:scale-110 transition-transform duration-300">
        <Image src={icon} alt="icon" width={60} height={60}/>
      </div>
      <h3 className="text-sm font-medium text-gray-300 group-hover:text-white">
        {name}
      </h3>
    </div>
  )
}
