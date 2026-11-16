import About from './components/About'
import Background from './components/Background'
import Contact from './components/Contact'
import Education from './components/Education'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Honors from './components/Honors'
import Nav from './components/Nav'
import Skills from './components/Skills'

export default function App() {
  return (
    <div className="relative min-h-screen text-white">
      <Background />
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Honors />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
