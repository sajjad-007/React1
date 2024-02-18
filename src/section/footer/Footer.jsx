import React from 'react'
import './footer.css'
import Images from '../../component/Images'
import FootImg from "../../assets/images/nav_logo.png"

const Footer = () => {
  return (
    <footer id="footer">
    <div className="container">
        <div className="footer__main__wrapper">
            <div className="footer__logo">
                <div className="footer__img">
                    <picture>
                        <Images source={FootImg} alt="not found"/>
                    </picture>
                </div>
                <p className="paragraph paragraph--modifier-footer">Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page.</p>
            </div>
            <div className="footer__menu">
                <div className="footer__menu__feature">
                    <h4 className="footer__menu__heading">Feature </h4>
                    <ul className="footer__menu__item">
                        <li className="footer__menu__list">
                            <a href="#" className="footer__menu__anchor">home</a>
                        </li>
                        <li className="footer__menu__list">
                            <a href="#" className="footer__menu__anchor">about</a>
                        </li>
                        <li className="footer__menu__list">
                            <a href="#" className="footer__menu__anchor">service</a>
                        </li>
                        <li className="footer__menu__list">
                            <a href="#" className="footer__menu__anchor">blog</a>
                        </li>
                        <li className="footer__menu__list">
                            <a href="#" className="footer__menu__anchor">style</a>
                        </li>
                    </ul>
                </div>
                <div className="footer__menu__products">
                    <h4 className="footer__menu__heading">products </h4>
                    <ul className="footer__menu__item">
                        <li className="footer__menu__list">
                            <a href="#" className="footer__menu__anchor">Task Management</a>
                        </li>
                        <li className="footer__menu__list">
                            <a href="#" className="footer__menu__anchor">Company growth</a>
                        </li>
                        <li className="footer__menu__list">
                            <a href="#" className="footer__menu__anchor">Time tracking</a>
                        </li>
                    </ul>
                </div>
                <div className="footer__menu__support">
                    <h4 className="footer__menu__heading">support </h4>
                    <ul className="footer__menu__item">
                        <li className="footer__menu__list">
                            <a href="#" className="footer__menu__anchor">Customer service</a>
                        </li>
                        <li className="footer__menu__list">
                            <a href="#" className="footer__menu__anchor">Accessibility</a>
                        </li>
                        <li className="footer__menu__list">
                            <a href="#" className="footer__menu__anchor">Contact us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="footer__rights">
            <div className="footer__copyrights">
                <p className="paragraph paragraph--lineheight-footer">@20201 Innovate.All rights reserved.</p>
            </div>
            <div className="footer__policy">
                <p className="paragraph paragraph--lineheight-footer">Privacy policy</p>
                <p className="paragraph paragraph--lineheight-footer">Terms & condition</p>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer