import React from 'react';
import Image from 'next/image';
import { LuExternalLink, LuGithub } from 'react-icons/lu';

interface ProjectProps {
  title: string;
  date: string;
  description: string;
  tech: string[];
  image: string;
  imageWidth: number;   
  imageHeight: number;  
  index: number;
  link?: string;
  github?: string;
}

export default function ProjectCard({ 
  title, date, description, tech, image, imageWidth, imageHeight, index, link, github 
}: ProjectProps) {
  const isEven = index % 2 === 0;

  return (
    <div className={`relative flex flex-col md:flex-row items-center justify-between mb-24 w-full ${!isEven ? 'md:flex-row-reverse' : ''}`}>
      
      {/* 1. Image Container (Relative to source size) */}
      <div className="w-full md:w-[45%] flex justify-center z-10">
        <div className="group overflow-hidden rounded-lg border border-white/10 shadow-lg bg-[var(--khoa-dark-crimson)]">
          <Image 
            src={image} 
            alt={title} 
            width={imageWidth} 
            height={imageHeight} 
            className="w-full h-auto object-contain transition-all duration-500 group-hover:scale-105"
          />
        </div>
      </div>

      {/* 2. Central Node (The Dot) */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center z-20">
        <div className="w-4 h-4 rounded-full bg-[var(--khoa-red)] border-4 border-[var(--khoa-mahogany)] shadow-[0_0_10px_rgba(191,1,27,0.8)]"></div>
      </div>

      {/* 3. Text Content Card */}
      <div className="w-full md:w-[45%] mt-8 md:mt-0 z-10">
        <div className="bg-[var(--khoa-dark-crimson)] p-6 md:p-8 rounded-2xl border border-white/5 shadow-xl transition-all hover:border-[var(--khoa-red)]">
          <span className="text-[var(--khoa-red)] font-bold text-xs tracking-widest uppercase mb-2 block">
            {date}
          </span>
          <h3 className="text-white text-2xl font-bold mb-3">{title}</h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-6">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {tech.map((t) => (
              <span key={t} className="text-[10px] uppercase font-bold px-2 py-1 bg-black/30 text-gray-400 rounded border border-white/10">
                {t}
              </span>
            ))}
          </div>

          <div className="flex gap-4 border-t border-white/5 pt-4">
            {github && <a href={github} target="_blank" className="text-white hover:text-[var(--khoa-red)] transition-colors"><LuGithub size={20} /></a>}
            {link && <a href={link} target="_blank" className="text-white hover:text-[var(--khoa-red)] transition-colors"><LuExternalLink size={20} /></a>}
          </div>
        </div>
      </div>
    </div>
  );
}