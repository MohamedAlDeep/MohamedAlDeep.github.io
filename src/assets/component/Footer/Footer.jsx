import React from 'react'
import './css/index.css'
import Twitter from '../../../../public/img/Twitter.png'
import Gmail from '../../../../public/img/gmail.png'

function Footer() {
  return (
    <div className='container-footer-div'>
        <a href="https://twitter.com/MoSamirAlDeep">
          <img className="twitter-icon" src={Twitter} alt="Twitter icon" />
        </a>
        <div className='Contacts'>
          <a href="mailto: mohamedsamir22446688@gmail.com">
            <img className="twitter-icon" src={Gmail} alt="Email icon" />
          </a>
        </div>
    </div>
  )
}

export default Footer