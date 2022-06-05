import React from 'react'
import './about.css'
import ME from '../../assets/hero_aria.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {FaSitemap} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_img">
            <img src={ME} alt="" className='img' />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon'/>
                <h5>Experience</h5>
                <small>3+ Years Working</small>
            </article>
            <article className='about_card'>
              <FiUsers className='about_icon'/>
                <h5>Clients</h5>
                <small>30+ Clients</small>
            </article>
            <article className='about_card'>
              <FaSitemap className='about_icon'/>
                <h5>Projects</h5>
                <small>45+ Completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In molestias fugit nemo atque, illum adipisci ea temporibus deserunt ducimus expedita illo, cum doloremque corporis accusamus, officiis dolor unde velit voluptatibus!
          </p>
          <a href="#" className="btn btn_sm btn_primary">See more...</a>
        </div>
      </div>
    </section>
  )
}

export default About