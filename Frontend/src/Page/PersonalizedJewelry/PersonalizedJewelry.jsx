import React from 'react'
import PersonalizedJewelryForm from '../../components/PersonalizedJewelryForm/PersonalizedJewelryForm'
import HeroSection2 from '../../components/HeroSection2/HeroSection2'
import PersonalizedImage from '../../components/PersonalizedImage/PersonalizedImage'

const PersonalizedJewelry = () => {
  return (
    <div>
        <HeroSection2/>
        <PersonalizedJewelryForm />
        <PersonalizedImage/>
    </div>
  )
}

export default PersonalizedJewelry