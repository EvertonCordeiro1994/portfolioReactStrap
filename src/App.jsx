import Navbar from './components/layout/Navbar'
import Home from './components/pages/Home'
import Sobre from './components/pages/Sobre'
import Cursos from './components/pages/Cursos'
import Ferramentas from './components/pages/Ferramentas'
import Projetos from './components/pages/Projetos'
import Contato from './components/pages/Contato'
import Footer from './components/layout/Footer'


function App() {

  return (
    <>
      <Navbar/>
      <Home/>
      <Sobre/>
      <Cursos/>
      <Ferramentas/>
      <Projetos/>
      <Contato/>
      <Footer/>
    </>
  )
}

export default App
