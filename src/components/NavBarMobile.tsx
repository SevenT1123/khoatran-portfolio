import React from 'react'
import Link from 'next/link';
import { NavLinks } from './NavBar';

interface MobileNavProps {
    navOpen: boolean;
}

export default function NavBarMobile({navOpen}: MobileNavProps) {
    const showMobileNav = navOpen ? 'translate-x-0' : 'translate-x-full';
  return (
    <>
      <div className={`fixed inset-0 transform right-0 z-50 bg-black opacity-50 w-full h-screen transition-all duration-500 bg-[var(--khoa-dark-crimson)] ${showMobileNav} lg:hidden`}>
      </div>

      <ul className={`fixed flex items-center justify-center text-white flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w[60%] bg-[var(--khoa-dark-crimson)] space-y-1 z-80 right-0 top-0 ${showMobileNav} lg:hidden`}>
        {NavLinks.map((link) => {
            return (
                <li key={link.href}>
                    <Link href={link.href} className="flex items-center justify-center text-xl font-medium text-white py-4 px-6 rounded-lg hover:bg-black hover:text-white transition-all duration-300 border-b border-black w-full text-center" >{link.name}</Link>
                </li>
            )
        })}
      </ul>
    </ >
  )
}
