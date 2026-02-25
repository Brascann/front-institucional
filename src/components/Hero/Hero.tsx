import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section 
      className={`${styles.hero} hero`}
      style={{ backgroundImage: "url('/brascann_images/Capa-g.png')" }}
    >
      <div className={styles.heroGrid}>
        {/* Div esquerda com conteúdo */}
        <div className={styles.heroContentWrapper}>
          <div>
            <h1 className={styles.heroTitle}>
              BEM-ESTAR SAÚDE<br />
              E <strong>ALTA TECNOLOGIA.</strong>
            </h1>
            <a 
              className={styles.heroCta}
              href="#produtos"
            >
              CONHEÇA NOSSOS PRODUTOS
            </a>
          </div>
        </div>

        {/* Div direita vazia */}
        <div style={{ height: '100%' }}></div>
      </div>
    </section>
  )
}
