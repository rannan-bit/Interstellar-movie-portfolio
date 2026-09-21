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
import Music from './components/Music';
import Awards from './components/Awards';
import Overview from './components/Overview';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Banner />
      <Overview/>
      <Story />
      <Science />
      <Cast />
      <Endurance />
      <Gallery />
      <Music/>
      <Trailer />
      <Rating />
      <Awards/>
      <Footer />

    </>
  )
}

export default App
