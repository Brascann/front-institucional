export default function Hero() {
  return (
    <section 
      className="hero" 
      style={{ backgroundImage: "url('/brascann_images/Capa-g.png')" }}
    >
      <div className="hero-grid" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        width: '100%',
        height: '100%'
      }}>
        {/* Div esquerda com conteúdo */}
        <div className="hero-content-wrapper" style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'left',
          width: '100%',
          margin: '0 auto',
          padding: '0 10rem',
          height: '100%'
        }}>
          <div>
            <h1 className="hero-title" style={{
              fontSize: '60px',
              lineHeight: '1.2',
              letterSpacing: '4px',
              fontWeight: 300,
              margin: '0 0 40px',
              color: '#fff',
              fontFamily: 'var(--font-family)'
            }}>
              BEM-ESTAR SAÚDE<br />
              E <strong style={{ fontWeight: 700 }}>ALTA TECNOLOGIA.</strong>
            </h1>
            <a 
              className="cta hero-cta" 
              href="#produtos"
              style={{
                display: 'inline-block',
                background: 'var(--green)',
                padding: '20px 48px',
                color: '#fff',
                borderRadius: '4px',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '16px',
                letterSpacing: '1.5px'
              }}
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
