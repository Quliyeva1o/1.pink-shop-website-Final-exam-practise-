import React from 'react'
import Hero from '../../components/HeroSection'
import CategoriesSection from '../../components/CategoriesSection'
import MenProducts from '../../components/MenProducts'
import WomenProducts from '../../components/womenProducts'

const Home = () => {
  return (
    <>
      <Hero/>
      <CategoriesSection/>
      <MenProducts/>
      <WomenProducts/>
    </>
  )
}

export default Home
