import React from 'react'

const Icon = ({icon,iconstyle}) => {
  return (
    <a href="#" className={iconstyle}>
        {icon}
    </a>
  )
}

export default Icon