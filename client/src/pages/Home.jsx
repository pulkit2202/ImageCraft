import React from 'react'
import Header from '../components/Header'
import Step from '../components/Step'
import Description from '../components/Description'
import Testimonial from '../components/Testimonial'
import GenerateBtn from '../components/GenerateBtn'

const Home = () => {
  return (
    <div>
        <Header/>
        <Step/>
        <Description/>
        <Testimonial/>
        <GenerateBtn/>
    </div>
  )
}

export default Home