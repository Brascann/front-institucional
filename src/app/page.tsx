import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Team from '@/components/Team'
import Products from '@/components/Products'
import Footer from '@/components/Footer'

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
