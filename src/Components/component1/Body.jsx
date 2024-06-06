import React from 'react';

// Define a functional component named Body
export default function Body() {
  return (
    // Return JSX representing the body of your component
    <div className="p-3 mb-2 ">
      {/* Container for the text */}
      <p className='tex text-light fs-2 fw-light container ' >
        {/* Horizontal line */}
        <hr className='Border border-1 w-25' />
        Trending
        <br />
        Movies
        <br />
        To Watch Now
        {/* Horizontal line */}
        <hr className='line Border border-1 ' />
      </p>
    </div>
  );
}
