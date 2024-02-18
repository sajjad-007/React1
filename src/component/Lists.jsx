import React from 'react'

const Lists = ({children,icon,text,textstyle}) => {
  return (
    <li>
        {children}{icon} 
        <span>
          {text}
        </span>
    </li>
  )
}

export default Lists