'use client'

import { FormEvent, useState } from 'react'
import styles from './Newsletter.module.css'

export default function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Adicione aqui a lógica para enviar o e-mail
    console.log('Email inscrito:', email)
    alert('Obrigado por se inscrever!')
    setEmail('')
  }

  return (
    <section className="white">
      <div className="container">
        <div className={styles.newsletterWrapper}>
          <div className={styles.newsletterFormContainer}>
            <h3>INSCREVA-SE PARA RECEBER NOVIDADES</h3>
            <p className="muted">E-mail</p>
            <form 
              onSubmit={handleSubmit}
              className={styles.newsletterForm}
            >
              <input 
                type="email" 
                placeholder="Seu e-mail" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={styles.newsletterInput}
              />
              <button 
                type="submit"
                className={styles.newsletterButton}
              >
                Inscreva-se
              </button>
            </form>
          </div>

          <div className={styles.newsletterInfo}>
            <h4>Atendimento</h4>
            <p className="muted">
              Oferecemos todo suporte. Entre em contato com nossa equipe.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
