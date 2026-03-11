'use client'

import Image from 'next/image'
import styles from './History.module.css'

export default function History() {
  return (
    <section className={styles.history} id="historia">
      <div className={styles.container}>
        <div className={styles.imageSection}>
          <Image 
            src="/brascann_images/our-history.png" 
            alt="BrasCann Farmacêutica" 
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        
        <div className={styles.contentSection}>
          <h2 className={styles.title}>
            CONHEÇA <strong>NOSSA HISTÓRIA</strong>
          </h2>
          
          <div className={styles.divider}></div>
          <div className={styles.divText}>
            <p className={styles.text}>
              Fundada com a missão de integrar a sabedoria da natureza às mais modernas tecnologias, a BrasCann se destaca no desenvolvimento de <strong>medicamentos naturais</strong>.
            </p>
            
            <p className={styles.text}>
              Seu <strong>compromisso com a saúde</strong> integral e a transparência conquista a <strong>confiança</strong> de milhares de pessoas.
            </p>
          </div>
          
          <button className={styles.btn}>
            MAIS SOBRE A BRASCANN
          </button>
        </div>
      </div>
    </section>
  )
}
