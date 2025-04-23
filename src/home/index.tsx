import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Companies from './components/Companies'
import Integration from './components/Integration'
import Contact from './components/Contact'
import Contact2 from './components/Contact2'
import Explore from './components/Explore'
import Explore2 from './components/Explore2'
import Resources from './components/Resources'
import Client from './components/Client'
import ActionBox from './components/ActionBox'
import Footer from './components/Footer'

const Home = () => {
  return (
    <>
      <div className='main-section'>
        <Header />
        <Hero />
      </div>
      <Companies />
      <Integration />
      <Contact />
      <Contact2 />
      <Explore />
      <Explore2 />
      <Resources />
      <Client />
      <ActionBox />
      <Footer />
    </>
  )
}

export default Home