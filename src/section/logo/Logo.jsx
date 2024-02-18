import React from 'react'
import './logo.css'
import Images from '../../component/Images'
import Img from '../../assets/images/logo2.png'
import Img3 from '../../assets/images/logo3.png'
import Img4 from '../../assets/images/logo4.png'
import Img5 from '../../assets/images/logo5.png'
import Img6 from '../../assets/images/logo6.png'
import Img7 from '../../assets/images/logo7.png'

const Logo = () => {
  return (
    <section id="logo">
        <div className="container">
            <div className="logo_wrapper">
                <div className="logo_item">
                    <picture>
                        <Images source={Img} alt='not found'/>
                    </picture>
                </div>
                <div className="logo_item">
                    <picture>
                        <Images source={Img3} alt='not found'/>
                    </picture>
                </div>
                <div className="logo_item">
                    <picture>
                        <Images source={Img4} alt='not found'/>
                    </picture>
                </div>
                <div className="logo_item">
                    <picture>
                        <Images source={Img5} alt='not found'/>
                    </picture>
                </div>
                <div className="logo_item">
                    <picture>
                        <Images source={Img6} alt='not found'/>
                    </picture>
                </div>
                <div className="logo_item">
                    <picture>
                        <Images source={Img7} alt='not found'/>
                    </picture>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Logo