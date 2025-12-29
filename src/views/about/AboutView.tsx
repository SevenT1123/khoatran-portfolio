import React from 'react'
import Header from '@/components/Header';

export default function AboutView() {
  return (
    <section id="about" className="my-12">
        <Header title="About Me" as="h1"/>
        <div className="w-[90%] sm:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-20">
        </div>
    </section>
  )
}
