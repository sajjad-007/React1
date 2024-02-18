import React from 'react'
import Lists from './Lists'
import { CiSquareCheck } from "react-icons/ci";
import Button from './Button';

const PlanCart = ({write}) => {
  return (
    <div className="plan_item_box">
    <h4>{write}</h4>
   <div className="plan_package">
    <ul className="plan_package_name">
        <Lists icon={<CiSquareCheck/>} text="Hosting Space"/>
        <Lists icon={<CiSquareCheck/>} text='Emails'/>
        <Lists icon={<CiSquareCheck/>} text='Pricing Feature'/>
        <Lists icon={<CiSquareCheck/>} text='Bonus Plugins'/>
        <Lists icon={<CiSquareCheck/>} text='Exclusive Support'/>
    </ul>
    <ul className="plan_package_value">
        <Lists text="300GB"/>
        <Lists text="Not Avai."/>
        <Lists text="Unlimited"/>
        <Lists text="Not Avai."/>
        <Lists text="Not Avai."/>
    </ul>
    </div>
    <div className="plan_btn">
        <Button href="#" className="commonbtn" text="get started"/>
    </div>
</div>
  )
}

export default PlanCart