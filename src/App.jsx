import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AcademyCarousel from './components/AcademyCarousel'
import TestimonialCarousel from './components/TestimonialCarousel'
import SubscribeSection from './components/SubscribeSection'
function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <AcademyCarousel/>
      <TestimonialCarousel/>
      <SubscribeSection/>
    </div>
  )
}

export default App
