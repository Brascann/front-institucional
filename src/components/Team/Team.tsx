import Image from 'next/image'
import styles from './Team.module.css'

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
        <div className={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <div key={index} className={`${styles.member} card`}>
              <img src={member.image} alt={member.name} />
              <div>
                <h4 className={styles.memberName}>{member.name}</h4>
                <p className={`muted ${styles.memberRole}`}>{member.role}</p>
                <a href="#" className={styles.memberLink}>
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
