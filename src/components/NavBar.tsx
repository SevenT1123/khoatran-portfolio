import Link from 'next/link';
import React from 'react'
import Logo from './Logo';

const NavLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

export default function NavBar() {
  return (
    <nav className="h-18 fixed z-50 w-full">
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
      </div>
    </nav>
  )
}
