import React from 'react'
import Header from '@/components/Header';
import Link from 'next/link';

export default function AboutView() {
  return (
    <section id="about" className="my-12">
        <Header title="About Me" as="h1"/>
        <div className="w-[90%] sm:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 text-white">
          <div>
            Glad you visit my website. I&apos;m Khoa Tran, a Computer Engineering student at University of Guelph, Ontario, Canada. 
            I&apos;m a member in University of Guelph <Link href="https://www.gryphonracing.org/" target="_blank" className="text-red-400 underline hover:text-yellow-400 transition-colors">Gryphon Racing</Link> for embedded and electrical tasks.<br/><br/>
            I&apos;m open to new challenges. Whether I have a background in it or not, I&apos;m willing to learn new languages, frameworks, and concepts. Creating applications with high accessibility for clients is my goal. I&apos;m also making applications related to my hobbies.<br/><br/>
            I have over 2 years of experience in C-based languages such as C, C++, which I used for embedded systems and audio programming starting from 2023. I gained web development experience using Vue.js, HTML, CSS, Typescript while redesigning Gryphon Racing Team&apos;s website in 2025.
          </div>
        </div>
    </section>
  )
}
