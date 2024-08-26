import React from 'react';
import Logo from '../assets/images/enhanced_image.jpg'; // Import the logo image
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="Logo" /> {/* Use the imported logo image */}
        </div>
        <div className="links">
          <Link className='link' to="/home"> {/* Update the link path */}
            <h6>Home</h6>
          </Link>
          <Link className='link' to="/projects"> {/* Update the link path */}
            <h6>Projects</h6>
          </Link>
          <Link className='link' to="/contact"> {/* Update the link path */}
            <h6>Contact</h6>
          </Link>
          <Link className='link' to="/about"> {/* Update the link path */}
            <h6>About</h6>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
