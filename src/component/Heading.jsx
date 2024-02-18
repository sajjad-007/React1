import React from 'react'

const Heading = ({SecondHead,headingstyle,para,parastyle}) => {
  return (
    <div>
        <h2 className={headingstyle}>{SecondHead}</h2>
        <p className={parastyle}>{para}</p>
    </div>
  )
}

export default Heading