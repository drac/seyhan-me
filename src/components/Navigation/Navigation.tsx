"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

/**
 * This component represents the navigation bar of the application.
 * It provides links to different sections of the website.
 */
export default function Navigation() {
  const pathname = usePathname()

  // Defines the paths for different sections of the website.
  const path = {
    blog: '/',
    about: '/about',
    contact: '/contact'
  }

  // Determines which link should be active based on the current path.
  const isBlogActive = pathname === path.blog ? 'active' : ''
  const isAboutActive = pathname === path.about ? 'active' : ''
  const isContactActive = pathname === path.contact ? 'active' : ''

  return (
    <div className="terminal-nav">
      {/* Logo */}
      <div className="terminal-logo">
        <div className="logo terminal-prompt">
          <a href="/" className="no-style" aria-label="Seyhan Dzhamur">
            sdzhamur@home:~$
          </a>
        </div>
      </div>
      {/* Navigation */}
      <nav className="terminal-menu">
        <ul>
          <li><Link className={`menu-item ${isBlogActive}`} href={path.blog}>Blog</Link></li>
          <li><Link className={`menu-item ${isAboutActive}`} href={path.about}>About me</Link></li>
          <li><Link className={`menu-item ${isContactActive}`} href={path.contact}>Contact</Link></li>
        </ul>
      </nav>
    </div>
  )
}