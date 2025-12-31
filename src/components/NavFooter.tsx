import React from 'react'

export default function NavFooter() {
  return (
    <footer className="border-t border-red-900 py-10">
        <div className="px-4 text-center text-sm text-white">
            &copy; {new Date().getFullYear()} Khoa - Portfolio
        </div>
    </footer>
  )
}
