"use client"
import Link from 'next/link';
import Logo from './Logo';
import { LuMenu, LuX } from 'react-icons/lu';
import NavBarMobile from './NavBarMobile';
import React, { useEffect, useState } from 'react'

export const NavLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contacts', href: '/contacts' },
];

export default function NavBar() {
  const [navOpen, setNavOpen] = useState(false);
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const navHandler = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      }
      else {
        setNavBg(false);
      }
    }

    window.addEventListener("scroll", navHandler);

    return () => {
      window.removeEventListener("scroll", navHandler);
    }
  }, [])

  return (
    <nav className={`top-0 left-0 h-18 fixed z-50 w-full transition-all duration-300 ${navBg ? "bg-[var(--khoa-dark-crimson)] shadow-md" : ""}`}>
      <div className="flex items-center h-full justify-between w-[90%] mx-auto">
        {/*logo*/}
        <Logo />

        <ul className="hidden lg:flex space-x-10">
          {NavLinks.map((link) => {
            return (
              <li key={link.name}>
                <Link className="text-white mx-4 hover:text-crimson font-medium transition-colors duration-300" href={link.href}>{link.name}</Link>
              </li>
            )
          })}
        </ul>

        <button onClick={() => setNavOpen(!navOpen)}
        className="w-8 h-8 cursor-poiner text-white z-100 lg:hidden">
          {navOpen ? <LuX size={30} /> : <LuMenu size={30} />}
        </button>
        <NavBarMobile navOpen={navOpen} onClose={() => setNavOpen(false)}/>
      </div>
    </nav>
  )
}
