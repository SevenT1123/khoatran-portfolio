import React from 'react'
import Header from '@/components/Header';
import Link from 'next/link';
import Image from 'next/image';
import AboutCard from './AboutCard';

export default function AboutView() {
  const skills = [
    { name: 'C', icon: '/icons/c-icon.svg' },
    { name: 'C++', icon: '/icons/cpp-icon.svg' },
    { name: 'Python', icon: '/icons/python-icon.svg' },
    { name: 'Java', icon: '/icons/java-icon.svg' },
    { name: 'Reactjs', icon: '/icons/react-icon.svg' },
    { name: 'Vuejs', icon: '/icons/vue-icon.svg' },
    { name: 'HTML5', icon: '/icons/html-icon.svg' },
    { name: 'CSS', icon: '/icons/css-icon.svg' },
    { name: 'JavaScript', icon: '/icons/js-icon.svg' },
    { name: 'TypeScript', icon: '/icons/ts-icon.svg' },
    { name: 'Nodejs', icon: '/icons/nodejs-icon.svg' },
    { name: 'AWS', icon: '/icons/aws-icon.svg' },
    { name: 'Visual Studio Code', icon: '/icons/vscode-icon.svg' },
    { name: 'Visual Studio', icon: '/icons/vs-icon.svg' },
    { name: 'IntelliJ', icon: '/icons/intellij-icon.svg' },
    { name: 'Arduino', icon: '/icons/arduino-icon.svg' },
    { name: 'PlatformIO', icon: '/icons/platformio-icon.svg' },
    { name: 'STM32', icon: '/icons/stm32-icon.svg' },
    { name: 'Git', icon: '/icons/git-icon.svg' },
    { name: 'Docker', icon: '/icons/docker-icon.svg' },
    { name: 'AutoCAD', icon: '/icons/autocad-icon.svg' },
    { name: 'Solidworks', icon: '/icons/solidworks-icon.svg' },
    { name: 'Altium Designer', icon: '/icons/altium-icon.svg' },
  ];

  return (
    <section id="about" className="my-12">
        <Header title="About Me" as="h1"/>
        <div className="w-[90%] sm:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 text-white">
          <div>
            Glad you visit my website. I&apos;m Khoa Tran, a Computer Engineering student at University of Guelph, Ontario, Canada. 
            I&apos;m a member in University of Guelph <Link href="https://www.gryphonracing.org/" target="_blank" className="text-red-400 underline hover:text-yellow-400 transition-colors">Gryphon Racing</Link> for embedded and electrical tasks.<br/><br/>
            I&apos;m open to new challenges. Whether I have a background in it or not, I&apos;m willing to learn new languages, frameworks, and concepts. Creating applications with high accessibility for clients is my goal. I&apos;m also making applications related to my hobbies.<br/><br/>
            I have over 2 years of experience in C-based languages such as C, C++, which I used for embedded systems and audio programming starting from 2023. I gained real-time operating system development, data acquisition, and CAN communication system experience from developing <Link href="https://github.com/GryphonRacingFSAE/GRC26" target="_blank" className="text-red-400 underline hover:text-yellow-400 transition-colors">custom Dashboard and IMU-GPS module</Link> for Gryphon Racing.<br/><br/>
            I&apos;m heading up to apply my skills in web development and embedded systems to create an accessible data logger for all Gryphon Racing members not just for electrical subsection members.
          </div>
          <Image className="justify-self-center self-center" src="/photo/khoatran_pfp.png" alt="khoatran-photo" width={400} height={400}/>
        </div>

        <Header title="Skills" as="h2"/>
        <div className="w-[70%] sm:w-[50%] mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill) => (
            <AboutCard key={skill.name} name={skill.name} icon={skill.icon} />
          ))}
        </div>
      </div>
    </section>
  )
}
