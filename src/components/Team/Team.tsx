import Image from 'next/image'
import styles from './Team.module.css'

export default function Team() {
  const teamMembers = [
    {
      name: 'Fabrício Pamplona',
      role: 'Cientista e Sócio',
      description: '<strong>Referência</strong> no uso medicinal de derivados da Cannabis. Participou do <strong>primeiro estudo mundial de Cannabis!</strong>',
      subtitle: 'É um dos sócios.',
      image: '/brascann_images/fabricio.png',
      linkedin: '#'
    },
    {
      name: 'Fabrício Pamplona',
      role: 'Cientista e Sócio',
      description: '<strong>Referência</strong> no uso medicinal de derivados da Cannabis. Participou do <strong>primeiro estudo mundial de Cannabis!</strong>',
      subtitle: 'É um dos sócios.',
      image: '/brascann_images/fabricio.png',
      linkedin: '#'
    },
    {
      name: 'Fabrício Pamplona',
      role: 'Cientista e Sócio',
      description: '<strong>Referência</strong> no uso medicinal de derivados da Cannabis. Participou do <strong>primeiro estudo mundial de Cannabis!</strong>',
      subtitle: 'É um dos sócios.',
      image: '/brascann_images/fabricio.png',
      linkedin: '#'
    },
    {
      name: 'Fabrício Pamplona',
      role: 'Cientista e Sócio',
      description: '<strong>Referência</strong> no uso medicinal de derivados da Cannabis. Participou do <strong>primeiro estudo mundial de Cannabis!</strong>',
      subtitle: 'É um dos sócios.',
      image: '/brascann_images/fabricio.png',
      linkedin: '#'
    }
  ]

  return (
    <section className={styles.teamSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>NOSSA <strong>EQUIPE</strong></h2>
        <div className={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image 
                  src={member.image} 
                  alt={member.name}
                  width={120}
                  height={120}
                  className={styles.memberImage}
                />
              </div>
              <h3 className={styles.memberName}>{member.name}</h3>
              <p className={styles.memberRole}>{member.role}</p>
              <div className={styles.divider}></div>
              <p className={styles.memberDescription} dangerouslySetInnerHTML={{ __html: member.description }}></p>
              <p className={styles.memberSubtitle}>{member.subtitle}</p>
              <a href={member.linkedin} className={styles.linkedinLink}>
                SAIBA MAIS
                <svg className={styles.linkedinIcon} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
