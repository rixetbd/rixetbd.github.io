import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BiUser} from 'react-icons/bi'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {AiOutlineSafetyCertificate} from 'react-icons/ai'
import {BsChatSquareTextFill} from 'react-icons/bs'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''} href="#home"><AiOutlineHome /></a>
      <a onClick={() => setActiveNav('#about')}  className={activeNav === '#about' ? 'active': ''} href="#about"><BiUser /></a>
      <a onClick={() => setActiveNav('#experience')}  className={activeNav === '#experience' ? 'active': ''} href="#experience"><BiBook /></a>
      <a onClick={() => setActiveNav('#service')}  className={activeNav === '#service' ? 'active': ''} href="#service"><RiServiceLine /></a>
      <a onClick={() => setActiveNav('#testimonials')}  className={activeNav === '#testimonials' ? 'active': ''} href="#testimonials"><AiOutlineSafetyCertificate /></a>
      <a onClick={() => setActiveNav('#contact')}  className={activeNav === '#contact' ? 'active': ''} href="#contact"><BsChatSquareTextFill /></a>
    </nav>
  )
}

export default Nav