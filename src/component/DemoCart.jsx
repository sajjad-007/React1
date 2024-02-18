import React from 'react'

const DemoCart = ({point,symbol,para}) => {
  return (
    <div className="demo_number_items">
        <span className="count_number">{point}<span>{symbol}</span></span>
        <p className="paragraph">{para}</p>
    </div>
  )
}

export default DemoCart