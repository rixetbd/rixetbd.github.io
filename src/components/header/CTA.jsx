import React from 'react'
import CV from '../../documents/Rabiul_CV.pdf'

const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className="btn btn_primary">let's Talk</a>
    </div>
  )
}

export default CTA