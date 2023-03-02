import React from 'react'
import './css/index.css'
import Twitter from '../../../../public/img/Twitter.png'
import Gmail from '../../../../public/img/gmail.png'
import Insta from '../../../../public/img/insta.png'

function Footer() {
  return (
    <div className='container-footer-div'>
        <div className="main-container">
          <div className="contacts-div">
            <a href="https://twitter.com/MoSamirAlDeep">
              <img className="twitter-icon" src={Twitter} alt="Twitter icon" />
            </a>
            <div className='Contacts'>
              <a href="mailto: apps.main@hotmail.com">
                <img className="twitter-icon" src={Gmail} alt="Email icon" />
              </a>
            </div>
            <a href="https://instagram.com/mohamedeldeep">
              <img className='twitter-icon' src={Insta} alt="Instagram icon" />
            </a>
          </div>
          <div className="text">
            <a className='github-link' href="https://github.com/MohamedAlDeep">
              <h3>Github Profile</h3>  
            </a>
          </div>
        </div>
    </div>
  )
}

export default Footer
