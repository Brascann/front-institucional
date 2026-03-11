'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './Header.module.css'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('.hero')
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom
        setIsScrolled(heroBottom <= 0)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial state
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.nav}>
          <div className={styles.brand}>
            <Image 
              src="/icons/iconBrascann.png" 
              alt="BrasCann Logo" 
              width={150} 
              height={30}
              className={styles.brandImg}
            />
          </div>
          
          {/* Desktop Navigation */}
          <nav className={`${styles.links} ${styles.desktopLinks}`}>
            <a href="#about">Sobre nós</a>
            <a href="#produtos">Produtos</a>
            <a href="#duvidas">Dúvidas</a>
          </nav>

          {/* Mobile Hamburger Button */}
          <button 
            className={styles.hamburgerBtn}
            onClick={toggleMobileMenu}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Mobile Sidebar Menu */}
      <div className={`${styles.mobileSidebar} ${isMobileMenuOpen ? styles.open : ''}`}>
        <button 
          className={styles.closeBtn}
          onClick={closeMobileMenu}
          aria-label="Fechar menu"
        >
          ×
        </button>
        <nav className={styles.mobileLinks}>
          <a href="#about" onClick={closeMobileMenu}>Sobre nós</a>
          <a href="#produtos" onClick={closeMobileMenu}>Produtos</a>
          <a href="#duvidas" onClick={closeMobileMenu}>Dúvidas</a>
        </nav>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div className={styles.sidebarOverlay} onClick={closeMobileMenu}></div>
      )}
    </>
  )
}
