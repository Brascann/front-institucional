import Image from 'next/image'
import styles from './About.module.css'

export default function About() {
  const cardData = [
    {
      title: 'NOSSA ESSÊNCIA',
      icon: '/icons/icon-c.svg',
      description: 'Acreditamos que uma visão holística do corpo humano integrado a natureza é fundamental para a',
      highlight: 'promoção de uma vida saudável produtiva.'
    },
    {
      title: 'NOSSO OBJETIVO',
      icon: '/icons/icon-line.svg',
      description: 'Pesquisar, desenvolver e comercializar produtos e',
      highlight: 'medicamentos extraídos da NATUREZA'
    },
    {
      title: 'NOSSO COMPROMISSO',
      icon: '/icons/icon-c-inverted.svg',
      description: 'Oferecer',
      highlight: 'Bem-Estar e Saúde',
      description2: 'a partir de novas moléculas e formulações pesquisadas e de',
      highlight2: 'eficácia comprovada extraídas da natureza.'
    }
  ]

  return (
    <section className={`white ${styles.aboutSection}`} id="about">
      <div className="container">
        <div className={styles.aboutCardsGrid}>
          {cardData.map((card, index) => (
            <div key={index} className={styles.aboutCard}>
              <h3 className={styles.aboutCardTitle}>
                {card.title}
              </h3>
              
              <div className={styles.aboutCardIconWrapper}>
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={85}
                  height={85}
                  style={{ objectFit: 'contain' }}
                />
              </div>

              <p className={styles.aboutCardDescription}>
                {card.description}{' '}
                <span className={styles.aboutCardHighlight}>
                  {card.highlight}
                </span>
                {card.description2 && (
                  <>
                    {' '}{card.description2}{' '}
                    <span className={styles.aboutCardHighlight}>
                      {card.highlight2}
                    </span>
                  </>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
