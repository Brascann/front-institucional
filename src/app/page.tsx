import Header from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero'
import History from '@/components/History/History'
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
        <History />
        <Team />
        <Products />
      </main>
      <Footer />
    </>
  )
}
