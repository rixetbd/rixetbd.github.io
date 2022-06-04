import React from 'react'
import {FaFacebookSquare} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocial = () => {
  return (
    <div className="header_social">
        <a href="https://www.facebook.com/rixet.rabiul/" target="_blank"><FaFacebookSquare/></a>
        <a href="https://www.linkedin.com/in/rixetbd/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/rixetbd" target="_blank"><BsGithub/></a>
        <a href="https://www.instagram.com/rixetbd/" target="_blank"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocial