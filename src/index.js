import React from 'react'
import ReactDom from 'react-dom'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Second from './components/Second'
import 'font-awesome/css/font-awesome.css'

import './index.css'

function App() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Second/>
    </div>
  )
}

ReactDom.render(<App/>,document.querySelector('#root'))


