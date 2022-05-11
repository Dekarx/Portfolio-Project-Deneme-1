import React from "react"
import Typed from "react-typed"

function Header() {
  return (
    <div id="home" className="header-wrapper">
        <div className="main-info">
            <h1>Web development and websites promotions</h1>
            <Typed 
                className="typed-text"
                strings={["Web Design","Web Development","Facebook Ads SMM","Google Ads"]}
                typeSpeed={50}
                backSpeed={60}
                loop
            />
            <a href="" className="btn-main-offer">Contact Me</a>
        </div>
    </div>
  )
}

export default Header