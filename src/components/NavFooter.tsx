import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function NavFooter() {
  return (
    <footer className="border-t border-red-900 py-10">
        <div className="flex flex-col items-center justify-center space-y-6 px-4 text-center text-white">
            <div className="flex space-x-8">
                <a href="https://github.com/SevenT1123" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-[var(--khoa-red)] transition-colors duration-300" aria-label="GitHub"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/khoanatran70/" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-[var(--khoa-red)] transition-colors duration-300" aria-label="LinkedIn"><FaLinkedin /></a>
            </div>
        
            <div className="px-4 text-center text-sm text-white">
                &copy; {new Date().getFullYear()} Khoa - Portfolio
            </div>
        </div>
    </footer>
  )
}
