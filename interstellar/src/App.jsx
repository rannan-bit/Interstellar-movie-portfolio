import { useState } from 'react'
import "./App.css";
import Header from './components/Header'
import Banner from './components/Banner'
import Story from './components/Story'
import Cast from './components/Cast'
import Gallery from './components/Gallery'
import Trailer from './components/Trailer'
import Rating from './components/Rating'
import Endurance from './components/Endurance'
import Science from './components/Science'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Banner/>
    <Story/>
    <Science/>
    <Cast/>
    <Endurance/>
    <Gallery/>
    <Trailer/>
    <Rating/>
    <Footer/>

    </>
  )
}

export default App
