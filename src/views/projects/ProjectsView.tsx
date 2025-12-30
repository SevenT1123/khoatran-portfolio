import React from 'react'
import Header from '@/components/Header';
import Link from 'next/link';
import Image from 'next/image';
import ProjectsCard from './ProjectsCard';

export default function ProjectsView() {
    const projects = [
    {
        title: "Khoa Tran's Portfolio Website",
        date: "2025",
        description: "Personal website developed using Next.js and TailwindCSS for frontend.",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "HTML", "Nodejs"],
        github: "https://github.com/SevenT1123/khoatran-portfolio",
        link: "comming soon"
    },
    {
        title: "SevenT.vst3",
        date: "2024 - Present",
        description: "Developed a single oscillator digital virtual synthesizer featuring 7 wave types, unisons, ADSR envelope and filters. Developed using C++ and JUCE Framework",
        tech: ["C++", "DSP", "JUCE Framework", "Visual Studio"],
        github: "https://github.com/SevenT1123/SevenT.vst3"
    },
    {
        title: "University of Guelph Gryphon Racing Website Redesign",
        date: "2025",
        description: "Redesigned the official University of Guelph Gryphon Racing Team website to improve visual and accessibility.",
        tech: ["Vue.js", "TypeScript", "HTML/CSS"],
        link: "https://www.gryphonracing.org/"
    },
    {
        title: "Controlling ESP32 GPIOs Through Website",
        date: "June 2025",
        description: "Developed a demo project controlling ESP32 from website. Website sends state and read state from ESP32 GPIOs simultaneously from AWS. ESP32 sends states to AWS using WebSocket.h. The website is currently down",
        tech: ["ESP32", "AWS", "React.js", "Node.js", "IoT"],
        github: "https://github.com/SevenT1123/ESP32S3-WebSocket-AWS-Public"
    }
  ];

  return (
    <section id="projects" className="py-12 bg-[var(--khoa-mahogany)] min-h-screen">
      <Header title="My Projects" as="h1" />
      
      <div className="w-[90%] sm:w-[70%] lg:w-[50%] mx-auto mt-10">
        <div className="flex flex-col">
          {projects.map((project, index) => (
            <ProjectsCard 
              key={index}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
