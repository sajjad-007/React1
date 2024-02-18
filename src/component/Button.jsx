import React from 'react'

const Button = ({className,text,icon}) => {
  return (
    <a href="#" className={className}>{text}{icon}</a>
  )
}

export default Button