import React from 'react'

const ToolCart = ({heading,para,tool_change,icon}) => {
  return (
    <div className="tool_menu">
                <div className="tool_menu_item">
                    <div className="tool_menu_icon">
                        <div className={`tool_icon_box ${tool_change}`}>
                            {icon}
                        </div>
                        <h4>{heading}</h4>
                    </div>
                    <div className="tool_menu_cont">
                        <p className="paragraph">
                            {para}
                        </p>
                        <a href="#">read more</a>
                    </div>
                </div>
                
    </div>
  )
}

export default ToolCart