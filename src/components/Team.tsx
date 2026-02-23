import Image from 'next/image'

export default function Team() {
  const teamMembers = [
    {
      name: 'Fabrício Pamplona',
      role: 'Cientista e Sócio — Referência no uso medicinal de derivados da Cannabis. Participou do primeiro estudo mundial de Cannabis!',
      image: '/brascann_images/fabricio.png'
    },
    {
      name: 'Equipe Clínica',
      role: 'Profissionais especializados no desenvolvimento e acompanhamento de tratamentos com base em evidências.',
      image: '/brascann_images/fabricio.png'
    },
    {
      name: 'Pesquisa & Desenvolvimento',
      role: 'Laboratório próprio e parcerias acadêmicas para validar segurança e eficácia.',
      image: '/brascann_images/fabricio.png'
    }
  ]

  return (
    <section className="clear-green">
      <div className="container">
        <h2>NOSSA EQUIPE</h2>
        <div className="team-grid" style={{ marginTop: '18px' }}>
          {teamMembers.map((member, index) => (
            <div key={index} className="member card">
              <img src={member.image} alt={member.name} />
              <div>
                <h4>{member.name}</h4>
                <p className="muted">{member.role}</p>
                <a 
                  href="#" 
                  style={{ 
                    display: 'inline-block', 
                    marginTop: '8px', 
                    color: 'var(--green)', 
                    fontWeight: 700, 
                    textDecoration: 'none' 
                  }}
                >
                  SAIBA MAIS
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
