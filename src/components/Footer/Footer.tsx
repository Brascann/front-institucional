'use client'

import { FormEvent, useState } from 'react'
import Image from 'next/image'
import styles from './Footer.module.css'

export default function Footer() {
  // const [email, setEmail] = useState('')

  // const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault()
  //   console.log('Email inscrito:', email)
  //   alert('Obrigado por se inscrever!')
  //   setEmail('')
  // }
  
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerMain}>
          {/* Left side: Logo, Social, Newsletter */}
          <div className={styles.footerLeft}>
            <div className={styles.footerLogo}>
              <Image 
                src="/icons/logo-leaf.svg" 
                alt="BrasCann Logo" 
                width={32} 
                height={32}
              />
              <div>
                <h2 className={styles.footerLogoTitle}>BrasCann</h2>
                <p className={styles.footerLogoSubtitle}>FARMACÊUTICA</p>
              </div>
            </div>
            
            <div className={styles.footerSocial}>
              <a href="#" aria-label="Facebook" className={styles.socialIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M14.5 8.5h-2a2 2 0 0 0-2 2v7m0-4h4"/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className={styles.socialIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="4" y="4" width="16" height="16" rx="4"/>
                  <circle cx="12" cy="12" r="3"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className={styles.socialIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="4" y="4" width="16" height="16" rx="2"/>
                  <path d="M8 11v5m0-8v.5M12 16v-5m0 0a2 2 0 0 1 4 0v5"/>
                </svg>
              </a>
            </div>

            {/* <div className="footer-newsletter">
              <h3 style={{ fontSize: '12px', fontWeight: 400, letterSpacing: '0.5px', marginBottom: '15px' }}>
                INSCREVA-SE PARA RECEBER NOVIDADES
              </h3>
              <form onSubmit={handleSubmit} className="footer-newsletter-form">
                <input 
                  type="email" 
                  placeholder="E-mail" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="footer-newsletter-input"
                />
                <button type="submit" className="footer-newsletter-button">
                  Inscreva-se
                </button>
              </form>
            </div> */}
          </div>

          {/* Right side: Navigation columns */}
          <div className={styles.footerNav}>
            <div className={styles.footerNavColumn}>
              <a href="#historia">NOSSA HISTÓRIA</a>
              <a href="#profissionais">PROFISSIONAIS</a>
              <a href="#avaliacoes">AVALIAÇÕES</a>
              <a href="#contato">CONTATO</a>
            </div>
            <div className={styles.footerNavColumn}>
              <a href="#produtos">PRODUTOS</a>
              <a href="#gotas">GOTAS</a>
              <a href="#capsulas">CÁPSULAS</a>
              <a href="#creme">CREME</a>
            </div>
          </div>
        </div>

        {/* Bottom section: Copyright and policies */}
        <div className={styles.footerBottom}>
          <div className={styles.footerCopyright}>
            BRANDABRANDING2024® | BrasCann®<br className={styles.footerMobileBreak}/>
            BrasCann Farmacêutica LTDA. CNPJ 45426107/0001-34
          </div>
          <div className={styles.footerPolicies}>
            <a href="#privacidade">Política de Privacidade</a>
            <span className={styles.footerSeparator}>|</span>
            <a href="#termos">Termos de Uso</a>
            <span className={styles.footerSeparator}>|</span>
            <a href="#envios">Política de Envios, Trocas e Devoluções</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
