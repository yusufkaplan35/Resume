import React from 'react'
import Header from './components/header'
import Footer from './components/footer'
import Banner from './components/banner'
import About from './components/about'
import WhatIDo from './components/what-i-do'
import Resume from './components/resume'
import Portfolio from './components/portfolio'
import Testimonals from './components/testimonals'
import Contact from './components/contact'

const App = () => {
  return (
    <>
      <Header/>
      <main>
          <Banner/>
          <About/>
          <WhatIDo/>
          <Resume/>
          <Portfolio/>
          <Testimonals/>
          <Contact/>
      </main>
      <Footer/>
    </>
  )
}

export default App