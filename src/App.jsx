import './App.css'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import Header from './components/Header'
import Slider from './components/Slider'

function App() {

  return (
    <main>
      <Header/>
      <Carousel/>
      <Slider />
      <Carousel/>
      <Slider />
      <Footer/>
    </main>
  )
}

export default App
