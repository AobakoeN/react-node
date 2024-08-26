import React from 'react'
import Logo from "../assets/images/enhanced_image.jpg"
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="container">
          <div className="logo">
            <img src=''></img>
          </div>
          <div className="links">
               <Link className='link' to={}>
               <h6>Projects</h6>
               </Link>
               <Link className='link' to={}>
               <h6>Contact</h6>
               </Link>
               <Link className='link' to={}>
               <h6>About</h6>
               </Link>
            
          </div>
        </div>
    </div>
  )
}

export default Navbar
