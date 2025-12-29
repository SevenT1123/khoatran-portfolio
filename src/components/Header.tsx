import React from 'react'

interface HeaderProps {
    title: string;
    as?: "h1" | "h2"; 
}

export default function Header({ title, as:Tag = "h1" }: HeaderProps) {
  const sizeClasses = {
    h1: "text-4xl md:text-5xl",
    h2: "text-3xl md:text-4xl",
  }
    return (
    <div className="py-14 md:py-20">
      <Tag className={`font-bold tracking-wide text-transparent bg-clip-text bg-linear-to-r from-red-700 to-white text-center mx-auto ${sizeClasses[Tag]}`}>
        {title}
      </Tag>
    </div>
  )
}
