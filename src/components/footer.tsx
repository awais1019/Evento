
import Link from 'next/link'
import React from 'react'

const routes=[
  {
    name: "Terms & Conditions",
    path: "/terms-conditions"
  },
  {
    name: "Privacy Policy",
    path: "/privacy-policy"
  }
]


export default function Footer() {
  return (
    <footer className='mt-auto flex items-center justify-between px-3 sm:px-9 h-16 border-t border-white/10 text-xs text-white/25'>
        <small className="text-center text-xs">
          &copy; {new Date().getFullYear()} Evento. All rights reserved.
        </small>
      <ul className='gap-x-3 sm:gap-x-6 flex'>
        {
          routes.map(route=>(
            <li className='hover:text-white transition' key={route.path}>
              <Link href={route.path}>{route.name}</Link>
            </li>
          ))
        }
      </ul>
    </footer>
  )
}
