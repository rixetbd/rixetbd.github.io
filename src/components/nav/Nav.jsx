import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BiUser} from 'react-icons/bi'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {GrCertificate} from 'react-icons/gr'
import {GrContact} from 'react-icons/gr'

const Nav = () => {
  return (
    <nav>
      <a href=""><AiOutlineHome /></a>
      <a href="#about"><BiUser /></a>
      <a href="#experience"><BiBook /></a>
      <a href="#service"><RiServiceLine /></a>
      <a href="#testimonials"><GrCertificate /></a>
      <a href="#contact"><GrContact /></a>
    </nav>
  )
}

export default Nav