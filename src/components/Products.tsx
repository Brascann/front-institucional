import Image from 'next/image'

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
        <div className="products" style={{ marginTop: '18px' }}>
          {products.map((product, index) => (
            <div key={index} className="product">
              <img src={product.image} alt={product.name} />
              <h5>{product.name}</h5>
              <p className="muted">{product.description}</p>
              <a className="btn" href={product.link}>
                {product.isShowAll ? 'VER TODOS' : 'QUERO SABER MAIS'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
