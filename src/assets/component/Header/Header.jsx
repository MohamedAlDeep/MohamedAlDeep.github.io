import React from 'react'
import './css/index.css'
import github from '../../../../public/img/github.png';
import git from '../../../../public/img/git.png';

function Header() {
  return (
    <div className="container">
      <div className='main-div'>
        <a href="https://github.com/MohamedAlDeep/MohamedAlDeep.github.io">
          <img width="50px" className="github-icon" src={github} alt="Github Icon" />
          <img width="50px" className="github-icon" src={git} alt="Git Icon" />
        </a>
        <div className='text-container-grid'>
          <h3>Home</h3>
          <h3>Projects</h3>
        </div>
      </div>
    </div>
  )
}

export default Header