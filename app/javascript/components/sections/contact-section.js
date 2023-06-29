import React, { Component } from 'react'
import ContactInterface from './contact/contact-interface'

export default class ContactSection extends Component {

  render() {
    return (
      <footer data-name='contact' className='full-page' style={{ display: 'table' }}>
        <div className='full-page-display'>
          <img src='/api/v1/images/contact-background-3.png' id='contact-background' />
          <div id='social-links'>
            <a
              href='https://linkedin.com/in/liam-barstad' className='social-link'
              target='_blank'
            ><img src='/api/v1/images/linkedin.png' className='social-link-image'/></a>
            <a
              href='https://github.com/liambarstad' className='social-link'
              target='_blank'
            ><img src='/api/v1/images/github.png' className='social-link-image'/></a>
            <a
              href='/api/v1/information/liam-barstad-resume.pdf' className='social-link'
            ><img src='/api/v1/images/cv.png' className='social-link-image'/></a>
          </div>
          <ContactInterface />
          <br />
          <p className='contact-detail'>
            "Sometimes it's the people no one imagines anything of, who do the things that no one can imagine"
            -- Alan Turing
          </p>
          <div id='optimized'>
            <p>Want to see the man behind the curtain?</p>
            <a href='/man_behind_the_curtain'>
              See how this site was optimized
            </a>
          </div>
        </div>
      </footer>
    )
  }
}
