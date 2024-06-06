import React from 'react';
import Body from './Body'; // Importing the Body component

import axios from 'axios'; // Importing axios for making HTTP requests
import { useState, useEffect } from 'react'; // Importing useState and useEffect hooks from React

import { Link } from 'react-router-dom'; // Importing Link from react-router-dom for navigation

// Define a functional component named Items
export default function Items() {
  // State to store the list of films
  const [films, setFilms] = useState([]);

  // Function to fetch films from the API
  const getFilms = async () => {
    const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR2kArrFYlDYF7UV-44Zl3L5UI9sH1UgIXv9N4SrIzcIZb070ZVCbCgfR7A`);
    setFilms(response.data.results);
  }

  // Fetch films when the component mounts
  useEffect(() => {
    getFilms();
  }, []); // Empty dependency array ensures the effect runs only once after the initial render

  console.log(films);

  // Inline style for background color
  const style1 = { backgroundColor: 'rgb(19, 23, 34)' };

  return (
    <div>
      <section className='container'>
        <div className='row'>
          {/* Render the Body component */}
          <Body />
          {/* Map over films array and render each film */}
          {films && films.map((item) => {
            return (
              <div className='col-md-3 col-sm-6 mb-2'>
                <div className='card cardHover p-3 text-center text-white border-0' style={style1}>
                  {/* Link to the details page of each film */}
                  <Link to={'/details/' + item.id} className='card cardHover p-3 text-center text-white border-0' style={style1}>
                    <img src={"http://image.tmdb.org/t/p/w500" + item.poster_path} alt="..." />
                  </Link>
                  <h4>{item.title}</h4>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
