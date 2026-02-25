import Header from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero'
import About from '@/components/About/About'
import Team from '@/components/Team/Team'
import Products from '@/components/Products/Products'
import Footer from '@/components/Footer/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Team />
        <Products />
      </main>
      <Footer />
    </>
  )
}
