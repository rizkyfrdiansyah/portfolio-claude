import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Projects from './components/Projects'

// App adalah komponen utama: ia menyusun semua bagian halaman secara berurutan.
function App() {
  return (
    <>
      <Header />
      <main id="top">
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
