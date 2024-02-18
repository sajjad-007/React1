import React from 'react'
import './banner.css'
import Headlogo from '../../assets/images/banner_image.png'
import Heading from '../../component/Heading'
import Images from '../../component/Images'

const Banner = () => {
  return (
    <section id="banner">
        <div className="container">
            <div className="banner_wrapper">
                <div className="banner_content">
                    <Heading SecondHead='Professional task manager tool to grow'/>
                    <Heading parastyle='paragraph effect' para='Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime.'/>
                    <form action="">
                        <input type="text" placeholder="Join with us using your gmail address" />
                        <button className="commonbtn">Sign up</button>
                    </form>
                </div>
                <div className="banner_image">
                    <picture>
                        <Images source={Headlogo} alt='found'/>
                    </picture>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner