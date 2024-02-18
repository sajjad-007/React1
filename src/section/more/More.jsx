import React from 'react'
import './more.css'
import MoreImg from "../../assets/images/more_img.png"
import Images from '../../component/Images'
import Heading from '../../component/Heading'
import Button from '../../component/Button'
let H2 ="No more messy distribution lists"
let para ="Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page. You can also use the shop features for all demos.."

const More = () => {
  return (
    <section id="more">
        <div className="container">
            <div className="more_button_wrapper">
                <Button href='#' className="button_item active" text="Artificial Intelligence" />
                <Button href='#' className="button_item " text="Header Builder"/>
                <Button href='#' className="button_item " text="Safe and Private"/>
                <Button href='#' className="button_item " text="Mobility Soluitons"/>
            </div>
            <div className="more_wrapper">
                <div className="more_image">
                    <picture>
                        <Images source={MoreImg} alt="not found"/>
                    </picture>
                </div>
                <div className="more_content goalmessi">
                    <Heading headingstyle="h2_heading" SecondHead="No more messy distribution lists." para={para} parastyle="paragraph"/>
                    <Button href="#" className='commonbtn'text='get started '/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default More