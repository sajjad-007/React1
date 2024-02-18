import React from 'react'
import './navbar.css'
import { MdKeyboardArrowRight } from "react-icons/md";
import Lists from '../../component/Lists';
import Button from '../../component/Button';
import Images from '../../component/Images';


const Navbar = () => {
  return (
    <nav id="navbar">
        <div className="container">
            <div className="nav_wrapper">
                <div className="nav_logo">
                    <picture>
                        <Images source="./images/nav_logo.png" alt="not found"/>
                    </picture>
                </div>
                <div className="nav_menu">
                    <ul>
                        <Lists>
                            <Button href='#' text="home" icon={<MdKeyboardArrowRight />}/>
                        </Lists>
                        <Lists>
                            <Button href='#' text="about" />
                        </Lists>
                        <Lists>
                            <Button href='#' text="service" />
                        </Lists>
                        <Lists>
                            <Button href='#' text="contact" />
                        </Lists>
                        <Lists>
                            <Button href='#' text="gmail" />
                        </Lists>
                        <Lists>
                            <Button href='#' text="address"/>
                        </Lists>
                    </ul>
                </div>
                <div className="nav_btn">
                    <Button href='#' className="commonbtn" text='contact us'/>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar