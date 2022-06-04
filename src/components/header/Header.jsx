import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/focus_pic.png'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header id='home'>
      <div className="container header_container">
        <h5>Hello, I'm</h5>
        <h1>Muhammad Rabiul</h1>
        <h5 className="text_light">Full Stack Developer</h5>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={ME} alt="" className="imgMe" />
        </div>

        <a href="#contact" className='scrooll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header