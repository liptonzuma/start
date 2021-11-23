import React from 'react'
import ReactDom from 'react-dom'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Second from './components/Second'
import 'font-awesome/css/font-awesome.css'

import './index.css'
import Choose from './components/Choose'
import Features from './components/Features'
import Testimonial from './components/Testimonial'
import Team from './components/Team'
import Blog from './components/Blog'

function App() {
  return (
    <div className="w-100">
      <Navbar/>
      <HeroSection/>
      <Second/>
      <Choose/>
      <Features/>
      <Team/>
      <Testimonial/>
      <Blog/>
    </div>
  )
}

ReactDom.render(<App/>,document.querySelector('#root'))


