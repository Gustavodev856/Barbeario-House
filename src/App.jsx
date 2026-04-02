import './App.css'
import About from './pages/About'
import HomeScreen from './pages/HomeScreen'
import Localizacao from './pages/Localizacao'
import Services from './pages/Services'

function App() {
  return (
    <>
      <HomeScreen />
      <About/>
      <Services />
      <Localizacao/>
    </>
  )
}

export default App