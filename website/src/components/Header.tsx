'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Sun, Moon } from 'lucide-react'
import '../styles/header.css'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolling, setScrolling] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    // Cargar tema guardado o respetar preferencia del sistema
    const stored = localStorage.getItem('theme')
    if (stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      setTheme('dark')
    }
  }, [])

  const toggleTheme = () => {
    const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    console.log(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };
  

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`header ${scrolling ? 'scrolled' : ''}`}>
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
          <button className="mobile-toggle" onClick={() => setOpen(!open)} aria-label="Menú móvil">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Navigation */}
      <div className={`mobile-nav ${open ? 'open' : ''}`}>
        <Link href="/propiedades" onClick={() => setOpen(false)}>Propiedades</Link>
        <Link href="/nosotros" onClick={() => setOpen(false)}>Nosotros</Link>
        <Link href="/contacto" onClick={() => setOpen(false)}>Contáctanos</Link>
        <Link href="/pagos" onClick={() => setOpen(false)} className="btn-nav">Pagos Virtual</Link>
      </div>
    </header>
  )
}
