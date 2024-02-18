import { useState } from 'react'
import Navbar from './section/navbar/Navbar'
import Banner from './section/banner/Banner'
import Logo from './section/logo/Logo'
import Tool from './section/tool/Tool'
import Goal from './section/goal/Goal'
import Plan from './section/plan/Plan'
import Build from './section/builds/Build'
import Demo from './section/demo/Demo'
import More from './section/more/More'
import Footer from './section/footer/Footer'
import Ready from './section/ready/Ready'

function App() {

  return (
   <div>
    <Navbar/> 
    <Banner />
    <Logo/>
    <Tool/>
    <Goal/>
    <More/>
    <Plan/>
    <Demo/>
    <Build/>
    <Ready/>
    <Footer/>
   </div>
  )
}

export default App
