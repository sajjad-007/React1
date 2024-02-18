import React from 'react'
import './build.css'
import Images from '../../component/Images'
import BuilImg from "../../assets/images/build_img.jpg"
import Heading from '../../component/Heading'
import { FaAngleLeft, FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import Icon from '../../component/Icon'
let para ="This is my heane As a leading digital platform in Paris, we look to engage with our clients beyond the conventional design and development agency relationship, becoming a partner to the people and companies we work with."

const Build = () => {
  return (
    <section id="build">
        <div className="container">
            <div className="build_heading">
                <Heading headingstyle='h2_heading' SecondHead="Build the right plan for your team."/>
            </div>
            <div className="build_wrapper">
                <div className="build_big_img">
                    <picture>
                        <Images source={BuilImg} alt='not found'/>
                    </picture>
                </div>
                <div className="build_content">
                    <Heading para={para} parastyle="paragraph"/>
                    <h4>Jonathon</h4>
                    <div className="build_icon">
                        <Icon iconstyle='iconstyle1' icon={<FaFacebook />}/>
                        <Icon iconstyle='iconstyle2' icon={<FaYoutube />}/>
                        <Icon iconstyle='iconstyle3' icon={<FaTwitter />}/>
                    </div>
                    <div className="build_btn">
                        <div className="build_btn_box">
                            <Icon  icon={<FaAngleLeft />}/>
                        </div>
                        <div className="build_btn_box">
                            <Icon  icon={<FaAngleRight />}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Build