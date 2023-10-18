import React from 'react'
import './Navbar.css'

const Navbar=() =>{
  return (
     
    <nav>
            <div className="left">
                Anish's Portfolio
            </div>
            <div className="right">
                <ul>
                    <li><a href='/'>Home </a> </li>
                    <li><a href='/project'>Projects</a> </li>
                    <li><a href='/Certificate'>Certificates</a> </li>
                    <li><a href='/about'>About</a></li>
                    <li><a href='/Contact'>Contact Me</a> </li>


                </ul>
            </div>
        </nav>
        
  )
}

 
export default Navbar
