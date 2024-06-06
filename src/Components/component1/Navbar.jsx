import React from 'react';
import { Link } from 'react-router-dom';

// Define a functional component named Navbar
export default function Navbar() {
  return (
    // Navigation bar
    <nav className="nv navbar navbar-expand-lg bg-body-tertiar">
      <div className="container">
        {/* Link to the homepage */}
        <Link className="navbar-brand text-light fs-1" to="/">WE Movie</Link>

        {/* Button to toggle the navigation menu on small screens */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        {/* Navigation menu */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul className="navbar-nav">
            {/* Home link */}
            <li className="nav-item">
              <Link className="nav-link active text-light" aria-current="page" to="/">Home</Link>
            </li>

            {/* Movie link */}
            <li className="nav-item ">
              <Link className="nav-link text-light" to="/items">Movie</Link>
            </li>

            {/* TV Shows link */}
            <li className="nav-item ">
              <Link className="nav-link text-light" to="/tvshows">TV Shows</Link>
            </li>

            {/* People link */}
            <li className="nav-item ">
              <Link className="nav-link  text-light" to="/people">People</Link>
            </li>

            {/* Social media icons (commented out for now) */}
            {/* <div>
              <FaFacebook size={28} color='white' style={{cursor:'pointer',marginLeft:'40px'}} className='mt-2'/>
              <FaInstagram size={28} color='white' style={{cursor:'pointer'}} className='mt-2 ms-2'/>
              <FaTwitter size={28} color='white' style={{cursor:'pointer'}} className='mt-2 ms-2'/>
              <FaSpotify size={28} color='white' style={{cursor:'pointer'}} className='mt-2 ms-2'/>
            </div> */}

          </ul>
        </div>
      </div>
    </nav>
  );
}
