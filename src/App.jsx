import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'
import Carousel from './components/Carousal'
import CardsCarousel from './components/CardsCarousel'
import ServicesCarousel from './components/ServicesCarousel'
import DiscountSection from './components/DiscountSection'
import CounterSection from './components/CounterSection'
import LatestNews from './components/LatestNews'
import ProductList from './components/PopularProducts/ProductList'
import ProductCard from './components/PopularProducts/ProductCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Footer/>
    </>
  )
}

export default App
