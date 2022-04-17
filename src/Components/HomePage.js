import React from 'react'
import AboutUs from './homePageComponents/AboutUs'
import HomeImg from './homePageComponents/HomeImg'
import LogoBox from './homePageComponents/LogoBox'
import Page1Button from './homePageComponents/PageButtons'

export default function HomePage() {
  return (
    <>
    <div className='container-fluid'> 
    <HomeImg />
    <AboutUs />
    <Page1Button />
    <LogoBox />
    </div>
    </>
  )
}
