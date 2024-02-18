import React from 'react'
import './goal.css'
import Heading from '../../component/Heading'
import Button from '../../component/Button'
import { IconsManifest } from 'react-icons'
import Images from '../../component/Images'
let h2 = "Join with any business tasks and any goals"
let para ="Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus temporibus autem."
import GoalImg from "../../assets/images/goal__img.png"


const Goal = () => {
  return (
    <section id="goal">
        <div className="container">
            <div className="goal_wrapper">
                <div className="goal_image">
                    <picture>
                        <Images source={GoalImg} alt='not found'/>
                    </picture>
                </div>
                <div className="goal_content goalmessi">
                    <Heading headingstyle='h2_heading' SecondHead={h2} parastyle="paragraph" para={para}/>
                    <Button href="#" className="commonbtn" text="sign up"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Goal