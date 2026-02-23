import Image from 'next/image'

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
    <section className="white" id="about" style={{ padding: '80px 0' }}>
      <div className="container">
        <div className="about-cards-grid">
          {cardData.map((card, index) => (
            <div key={index} className="about-card">
              <h3 style={{
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '3px',
                marginBottom: '35px',
                color: '#111',
                fontFamily: 'var(--font-family)'
              }}>
                {card.title}
              </h3>
              
              <div style={{ 
                width: '85px', 
                height: '85px', 
                margin: '0 auto 30px',
                position: 'relative'
              }}>
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={85}
                  height={85}
                  style={{ objectFit: 'contain' }}
                />
              </div>

              <p style={{
                color: '#444',
                fontSize: '15.5px',
                lineHeight: '1.65',
                margin: 0,
                fontFamily: 'var(--font-family)',
                fontWeight: 400
              }}>
                {card.description}{' '}
                <span style={{ 
                  color: 'var(--green)', 
                  fontWeight: 600 
                }}>
                  {card.highlight}
                </span>
                {card.description2 && (
                  <>
                    {' '}{card.description2}{' '}
                    <span style={{ 
                      color: '#111', 
                      fontWeight: 700 
                    }}>
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
