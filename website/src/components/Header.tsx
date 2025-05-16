'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Menu, X, Sun, Moon } from 'lucide-react'
import '../styles/header.css'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Header() {
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const headerRef = useRef(null)
  const lastScroll = useRef(0)

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    if (stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      setTheme('dark')
    }

    gsap.fromTo(
      headerRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out' }
    )

    gsap.from('.desktop-nav a', {
      opacity: 0,
      y: 10,
      stagger: 0.1,
      delay: 0.6,
      duration: 0.4,
      ease: 'power1.out',
    })

    const handleScroll = () => {
      const currentScroll = window.scrollY
      const headerEl = headerRef.current
      if (!headerEl) return

      if (currentScroll > lastScroll.current && currentScroll > 60) {
        headerEl.classList.add('hide')
      } else {
        headerEl.classList.remove('hide')
      }

      lastScroll.current = currentScroll
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    console.log(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };
  
  const toggleMenu = () => {
    setOpen(!open)

    if (!open) {
      gsap.fromTo(
        '.mobile-nav a',
        { y: 10, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 0.3,
          ease: 'power2.out',
        }
      )
    }
  }
  const bounceClick = (e: React.MouseEvent) => {
    gsap.fromTo(e.currentTarget, { scale: 1 }, { scale: 1.1, yoyo: true, repeat: 1, duration: 0.15 })
  }

  return (
    <header ref={headerRef} className="header">
      <div className="container header-flex">
        {/* Logo */}
        <Link href="/" className="logo-container">
          <img src="/assets/logo.webp" alt="Gala Inmobiliaria" className="logo" />
        </Link>
        {/* Navigation + Actions */}
        <div className="nav-actions">
          <nav className="desktop-nav">
            <Link href="/propiedades">Propiedades</Link>
            <Link href="/nosotros">Nosotros</Link>
            <Link href="/contacto">Contáctanos</Link>
            <Link href="/pagos" className="btn-nav">Pagos Virtual</Link>
          </nav>
          {/* Theme Toggle */}
          <button onClick={toggleTheme} aria-label="Cambiar tema" className="theme-toggle">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          {/* Mobile Toggle */}
          <button className="mobile-toggle" onClick={toggleMenu} aria-label="Menú móvil">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Navigation */}
      <div className={`mobile-nav ${open ? 'open' : ''}`}>
        <Link href="/propiedades" onClick={toggleMenu}>Propiedades</Link>
        <Link href="/nosotros" onClick={toggleMenu}>Nosotros</Link>
        <Link href="/contacto" onClick={toggleMenu}>Contáctanos</Link>
        <Link href="/pagos" onClick={toggleMenu} className="btn-nav">Pagos Virtual</Link>
      </div>
    </header>
  )
}
