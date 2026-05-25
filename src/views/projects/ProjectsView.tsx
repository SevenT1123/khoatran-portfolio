import React from 'react'
import Header from '@/components/Header';
import Link from 'next/link';
import Image from 'next/image';
import ProjectsCard from './ProjectsCard';

export default function ProjectsView() {
    const projects = [
    {
        title: "GRC26 IMU-GPS Module",
        date: "April 2026 - Present",
        image: "/projects/grc26-imu-gps.png",
        imageWidth: 1920,
        imageHeight: 1080,
        description: "Designed and developed a custom IMU-GPS module for University of Guelph Gryphon Racing FSAE team. The module collects the car's dynamics data, including GPS coordinates, acceleration, angular velocity, speed, and course. The module then transmits the car's dynamic data to CAN bus for the Remote Transmitter Module to transmit data to Remote Receiver Module to display on the dashboard for dynamics analysis. The module was developed using C++, FreeRTOS for real-time task management, and CAN communication protocol. The module is currently in development for GRC27 with Remote Logger Module and Web Dashboard for data analysis.",
        contributor: {
          name: "Zohair Salman",
          role: "PCB and schematic design",
          linkedin: "https://www.linkedin.com/in/zohairsalman/"
        },
        tech: ["C++", "CAN 2.0B", "Real-time Operating System"],
        github: "https://github.com/GryphonRacingFSAE/GRC26/tree/khoa/imu_gps"
    },
    {
        title: "GRC26 Car Dashboard",
        date: "March 2026 - May 2026",
        image: "/projects/grc26-dashboard.png",
        imageWidth: 1920,
        imageHeight: 1080,
        description: "Designed and developed a custom dashboard for University of Guelph Gryphon Racing FSAE team. The dashboard displays real-time data from the car's CAN bus, including RPM, coolant temperature, battery voltage, throttle position meter and brake position meter. The dashboard was developed using C++, LVGL library for UI, and FreeRTOS for real-time task management. The dashboard is currently used in the team's 2026 car, GRC26.",
        tech: ["C++", "LVGL", "CAN 2.0B", "Real-time Operating System"],
        github: "https://github.com/GryphonRacingFSAE/GRC26"
    },
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
        image: "/projects/seventvst3.png",
        imageWidth: 1024, 
        imageHeight: 768, 
        description: "Developed a single oscillator digital virtual synthesizer featuring 7 wave types, unisons, ADSR envelope and filters. Developed using C++ and JUCE Framework",
        tech: ["C++", "DSP", "JUCE Framework", "Visual Studio"],
        github: "https://github.com/SevenT1123/SevenT.vst3"
    },
    {
        title: "University of Guelph Gryphon Racing Website Redesign",
        date: "October 2025",
        image: "/projects/gryphonracingorg.png",
        imageWidth: 1920,
        imageHeight: 1080,
        description: "Redesigned the official University of Guelph Gryphon Racing Team website to improve visual and accessibility. The website was deployed and developed by the team's alumnae. I updated team's leader profiles and redesign the frontend.",
        tech: ["Vue.js", "TypeScript", "HTML/CSS"],
        github: "https://github.com/GryphonRacingFSAE/Website",
        link: "https://www.gryphonracing.org/"
    },
    {
        title: "Controlling ESP32 GPIOs Through Website",
        date: "June 2025",
        image: "/projects/esp32webapp.png",
        imageWidth: 1920,
        imageHeight: 1080,
        description: "Developed a demo project controlling ESP32 from website. Website sends state and read state from ESP32 GPIOs simultaneously from AWS. ESP32 sends states to AWS using WebSocket.h. The website is currently down",
        tech: ["ESP32", "AWS", "React.js", "Node.js", "IoT"],
        github: "https://github.com/SevenT1123/ESP32S3-WebSocket-AWS-Public"
    }
  ];

  return (
    <section id="projects" className="py-12 bg-[var(--khoa-mahogany)] min-h-screen">
      <Header title="Portfolio" as="h1" />
      
      <div className="relative w-[90%] sm:w-[70%] lg:w-[50%] mx-auto mt-10">
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-0.5 bg-gray-400"></div>
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
