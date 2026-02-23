'use client'

import { FormEvent, useState } from 'react'

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
        <div className="newsletter-wrapper" style={{ display: 'flex', gap: '30px', alignItems: 'center', flexWrap: 'wrap' }}>
          <div className="newsletter-form-container" style={{ flex: 1, minWidth: '260px' }}>
            <h3>INSCREVA-SE PARA RECEBER NOVIDADES</h3>
            <p className="muted">E-mail</p>
            <form 
              onSubmit={handleSubmit}
              className="newsletter-form"
              style={{ display: 'flex', gap: '8px', maxWidth: '420px', width: '100%' }}
            >
              <input 
                type="email" 
                placeholder="Seu e-mail" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="newsletter-input"
                style={{ 
                  flex: 1, 
                  padding: '12px', 
                  borderRadius: '6px', 
                  border: '1px solid #ddd',
                  fontSize: '14px'
                }} 
              />
              <button 
                type="submit"
                className="newsletter-button"
                style={{ 
                  background: 'var(--green)', 
                  color: '#fff', 
                  padding: '12px 20px', 
                  borderRadius: '6px', 
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: '14px',
                  whiteSpace: 'nowrap'
                }}
              >
                Inscreva-se
              </button>
            </form>
          </div>

          <div className="newsletter-info" style={{ minWidth: '200px' }}>
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
