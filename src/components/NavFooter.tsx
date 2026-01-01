import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/your-username', 
    icon: <FaGithub /> 
  },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/your-username', 
    icon: <FaLinkedin /> 
  },
];

export default function NavFooter() {
  return (
    <footer className="border-t border-red-900 py-10">
        <div className="flex flex-col items-center justify-center space-y-6 px-4 text-center text-white">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-6 max-w-4xl mx-auto">
                {socialLinks.map((social) => (
                    <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-400 hover:text-[var(--khoa-red)] transition-all duration-300 hover:scale-110" aria-label={social.name}>
                        {social.icon}
                    </a>
                ))}
            </div>
        
            <div className="px-4 text-center text-sm text-white">
                &copy; {new Date().getFullYear()} Khoa Tran - Portfolio
            </div>
        </div>
    </footer>
  )
}
