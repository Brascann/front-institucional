'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

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

  return (
    <header className={isScrolled ? 'scrolled' : ''}>
      <div className="nav">
        <div className="brand" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Image 
            src="/public/hist-bg.png" 
            alt="BrasCann Logo" 
            width={24} 
            height={24}
            style={{ filter: isScrolled ? 'none' : 'brightness(0) invert(1)' }}
          />
          <span>BrasCann</span>
        </div>
        <nav className="links">
          <a href="#about">Sobre nós</a>
          <a href="#produtos">Produtos</a>
          <a href="#duvidas">Dúvidas</a>
        </nav>
      </div>
    </header>
  )
}
