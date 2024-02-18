import React from 'react'
import './plan.css'
import { CiSquareCheck } from "react-icons/ci";
import Heading from '../../component/Heading';
import PlanCart from '../../component/PlanCart';



const Plan = () => {
  return (
    <section id="plan">
        <div className="container">
            <div className="plan_heading">
                <Heading headingstyle="h2_heading" SecondHead="Build the right plan for your team."/>
                <div className="plan_swap">
                    <h4>monthly</h4>
                    <div className="paln_switch_swap"></div>
                    <h4>yearly</h4>
                </div>
            </div>
            <div className="plan_item">
               <PlanCart write="Intro" textstyle="hello"/>
               <PlanCart write="Pro"/>
               <PlanCart write="Exclusive"/>
            </div>
        </div>
    </section>
  )
}

export default Plan