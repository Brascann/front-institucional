import Image from 'next/image'
import styles from './Products.module.css'

export default function Products() {
  const products = [
    {
      name: 'GLIDE+',
      description: 'Acalma artrite e dor articular moderada',
      image: '/brascann_images/Glide-BOHECO.png',
      link: '#'
    },
    {
      name: 'COMBAT',
      description: 'Oque falar aqui????!!!',
      image: '/brascann_images/COMBAT_BOHECO.png',
      link: '#'
    },
    {
      name: 'GOTAS',
      description: 'Uso controlado conforme prescrição',
      image: '/brascann_images/glide_e_COMBAT.png',
      link: '#',
      isShowAll: true
    }
  ]

  return (
    <section id="produtos">
      <div className="container">
        <h2>PRODUTOS PARA TODAS AS CATEGORIAS</h2>
        <div className={styles.productsGrid}>
          {products.map((product, index) => (
            <div key={index} className={styles.product}>
              <img src={product.image} alt={product.name} />
              <h5 className={styles.productTitle}>{product.name}</h5>
              <p className={`muted ${styles.productDescription}`}>{product.description}</p>
              <a className={styles.productBtn} href={product.link}>
                {product.isShowAll ? 'VER TODOS' : 'QUERO SABER MAIS'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
