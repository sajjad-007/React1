import React from 'react'
import './demo.css'
import Images from '../../component/Images'
import DemoImg from "../../assets/images/demo_pause_button.png"
import DemoCart from '../../component/DemoCart'

const Demo = () => {
  return (
    <section id="demo">
        <div className="container">
            <div className="demo_wrapper">
                <div className="demo_image">
                    <picture>
                        <Images source={DemoImg} alt="not found"/>
                    </picture>
                    <p>watch a demo</p>
                </div>
                <div className="demo_number">
                    <DemoCart point="20" symbol='%' para="We Are Ultra Faste Deal Service"/>
                    <DemoCart point="6.8" symbol='x' para="We Are Ultra Faste Deal Service"/>
                    <DemoCart point="86" symbol='%' para="We Are Ultra Faste Deal Service"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Demo