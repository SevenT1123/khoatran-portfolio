import React from 'react';
import { LuExternalLink, LuGithub } from 'react-icons/lu';

interface ProjectProps {
  title: string;
  date: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
}

export default function ProjectCard({ title, date, description, tech, link, github }: ProjectProps) {
  return (
    <div className="relative pl-8 sm:pl-12 pb-12 group">
      {/* Vertical Line Segment */}
      <div className="absolute left-0 top-0 h-full w-0.5 bg-gray-700 group-last:h-8"></div>
      
      {/* Timeline Dot */}
      <div className="absolute left-[-9px] top-0 w-5 h-5 rounded-full bg-[var(--khoa-red)] border-4 border-[var(--khoa-mahogany)] z-10 group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_rgba(191,1,27,0.6)]"></div>

      {/* Content Card */}
      <div className="bg-[var(--khoa-dark-crimson)] p-6 rounded-xl border border-white/5 transition-all duration-300 hover:border-[var(--khoa-red)] shadow-xl -mt-2">
        <span className="text-[var(--khoa-red)] font-bold text-xs tracking-widest uppercase">{date}</span>
        <h3 className="text-white text-xl font-bold mt-1 mb-3">{title}</h3>
        <p className="text-gray-300 text-sm leading-relaxed mb-4">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((t) => (
            <span key={t} className="text-[10px] uppercase font-bold px-2 py-1 bg-black/40 text-gray-400 rounded border border-white/5">
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {github && <a href={github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[var(--khoa-red)] transition-colors"><LuGithub size={20} /></a>}
          {link && <a href={link} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[var(--khoa-red)] transition-colors"><LuExternalLink size={20} /></a>}
        </div>
      </div>
    </div>
  );
}