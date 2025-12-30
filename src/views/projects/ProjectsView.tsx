import React from 'react'
import Header from '@/components/Header';
import Link from 'next/link';
import Image from 'next/image';
import ProjectsCard from './ProjectsCard';

export default function ProjectsView() {
    const projects = [
    {
        title: "Khoa Tran's Portfolio Website",
        date: "December 2025",
        image: "/projects/khoatran-portfolio.png",
        imageWidth: 1920,
        imageHeight: 1080,  
        description: "Personal website developed using Next.js and TailwindCSS for frontend.",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "HTML", "Nodejs"],
        github: "https://github.com/SevenT1123/khoatran-portfolio",
        link: "comming soon"
    },
    {
        title: "SevenT.vst3",
        date: "November 2024 - Present",
        image: "/projects/",
        imageWidth: 1024, 
        imageHeight: 768, 
        description: "Developed a single oscillator digital virtual synthesizer featuring 7 wave types, unisons, ADSR envelope and filters. Developed using C++ and JUCE Framework",
        tech: ["C++", "DSP", "JUCE Framework", "Visual Studio"],
        github: "https://github.com/SevenT1123/SevenT.vst3"
    },
    {
        title: "University of Guelph Gryphon Racing Website Redesign",
        date: "October 2025",
        image: "/projects/",
        imageWidth: 1920,
        imageHeight: 1080,
        description: "Redesigned the official University of Guelph Gryphon Racing Team website to improve visual and accessibility.",
        tech: ["Vue.js", "TypeScript", "HTML/CSS"],
        link: "https://www.gryphonracing.org/"
    },
    {
        title: "Controlling ESP32 GPIOs Through Website",
        date: "June 2025",
        image: "/projects/",
        imageWidth: 0,
        imageHeight: 0,
        description: "Developed a demo project controlling ESP32 from website. Website sends state and read state from ESP32 GPIOs simultaneously from AWS. ESP32 sends states to AWS using WebSocket.h. The website is currently down",
        tech: ["ESP32", "AWS", "React.js", "Node.js", "IoT"],
        github: "https://github.com/SevenT1123/ESP32S3-WebSocket-AWS-Public"
    }
  ];

  return (
    <section id="projects" className="py-12 bg-[var(--khoa-mahogany)] min-h-screen">
      <Header title="My Projects" as="h1" />
      
      <div className="relative w-[80%] sm:w-[70%] lg:w-[50%] mx-auto mt-10">
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-0.5 bg-gray-700"></div>
        <div className="flex flex-col">
          {projects.map((project, index) => (
            <ProjectsCard 
              key={index}
              index={index}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
