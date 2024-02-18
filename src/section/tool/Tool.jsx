import React from 'react'
import './tool.css'
import Heading from '../../component/Heading'
import ToolCart from '../../component/ToolCart' 
import { IoIosAlarm } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { FaStamp } from "react-icons/fa";
let para = "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere."



const Tool = () => {
  return (
    <section id="tool">
      <div className="container">
        <div className="tool_heading">
          <Heading headingstyle="h2_heading" SecondHead='The best solutions in one tool'/>
          <Heading parastyle='paragraph effect' para='Nam libero tempore, cum soluta nobis est eligendi optcumque nihil impedit quo minus id quod maxime placeat facere possimus'/>
        </div>
        <div className="tool_main">
          <ToolCart heading='Set Daily Alarms' para={para} tool_change="red" icon={<IoIosAlarm />}/>
          <ToolCart heading='Advanced Search' para={para} tool_change="green" icon={<FaSearch />}/>
          <ToolCart heading='Share Blog Posts' para={para} tool_change="yellow" icon={<FaTelegramPlane />}/>
          <ToolCart heading='Archive Content' para={para} tool_change="blue" icon={<FaBook/>}/>
          <ToolCart heading='Secure Checkout' para={para} tool_change="blueviolet" icon={<FaMoneyCheckAlt />}/>
          <ToolCart heading='Faster Response Time' para={para} tool_change="red" icon={<FaStamp />}/>
        </div>
      </div>
    </section>
  )
}

export default Tool