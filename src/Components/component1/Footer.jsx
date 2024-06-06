import React from 'react';

// Define a functional component named Footer
export default function Footer() {
  return (
    // Footer section with dark background and white text
    <footer className="bg-dark text-center text-white">
      {/* Container for the footer content */}
      <div className="container p-4 pb-0">
        {/* Contact information */}
        <p>Contact us: info@wemovie.com | Follow us on
          {/* Social media icons */}
          <a className="text-white ms-2"><i className="fab fa-facebook"></i></a>
          <a className="text-white ms-2"><i className="fab fa-twitter"></i></a>
          <a className="text-white ms-2"><i className="fab fa-instagram"></i></a>
        </p>
      </div>
      {/* Copyright information */}
      <div className="text-center p-4 " style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 Copyright
      </div>
    </footer>
  );
}
