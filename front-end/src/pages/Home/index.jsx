import React from 'react'
import Hero from '../../components/HeroSection'
import CategoriesSection from '../../components/CategoriesSection'
import MenProducts from '../../components/MenProducts'
import WomenProducts from '../../components/womenProducts'
import HotEnds from '../../components/HotDeal'
import SearchedProducts from '../../components/SearchedProducts'
import Logos from '../../components/Logos'

const Home = () => {
  return (
    <>
      <Hero/>
      <CategoriesSection/>
      <MenProducts/>
      <WomenProducts/>
      <HotEnds/>
      <SearchedProducts/>
      <Logos/>
      
    </>
  )
}

export default Home
