import React from 'react'
import './ready.css'

const Ready = () => {
  return (
    <section id="ready">
        <div className="container">
            <div className="ready_content">
                <h2 className="h2_heading">Ready to get started? Start your free trial.</h2>
            <p className="paragraph">Free 30 days trial   |   Exclusive Support   |   No Fees</p>
            <form action="">
                <input type="text" placeholder="Join with us using your gmail address"/>
                <button className="commonbtn">Try for free</button>
            </form>
            </div>
        </div>
    </section>
  )
}

export default Ready