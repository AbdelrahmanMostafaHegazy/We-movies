import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Importing the Body component from the component1 directory
import Body from '../component1/Body';

// Define a functional component named TvShows
export default function TvShows() {
  // State to store the list of TV shows
  const [show, setShow] = useState([]);

  // Function to fetch TV shows from the API
  const getShow = async () => {
    const response = await axios.get(`https://api.themoviedb.org/3/trending/tv/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR2kArrFYlDYF7UV-44Zl3L5UI9sH1UgIXv9N4SrIzcIZb070ZVCbCgfR7A`);
    setShow(response.data.results);
  }

  // Fetch TV shows when the component mounts
  useEffect(() => {
    getShow();
  }, []); // Empty dependency array ensures the effect runs only once after the initial render

  // Logging the list of TV shows to the console
  console.log(show);

  // Inline style for background color
  const style1 = { backgroundColor: 'rgb(19, 23, 34)' };

  return (
    <div className="bg" style={{ fontFamily: 'cursive' }}>
      {/* Rendering the Body component */}
      <Body />
      <br /><br />

      <section className='container'>
        <div className='row'>
          {
            // Mapping over the list of TV shows and rendering each show
            show && show.map((item) => {
              return (
                <div className='col-md-3 col-sm-6 mb-2'>
                  <div className='card cardHover p-3 text-center text-white border-0' style={style1}>
                    {/* Link to the details page of each TV show */}
                    <Link to={`/detailstvshow/${item.id}`} className='card cardHover p-3 text-center text-white border-0' style={style1}>
                      <img src={"http://image.tmdb.org/t/p/w500" + item.poster_path} alt="..." />
                    </Link>
                  </div>

                  {/* Displaying the name of each TV show */}
                  <div className='text-center text-white'>
                    <h4>{item.name}</h4>
                  </div>
                </div>
              )
            })
          }
        </div>
      </section>
    </div>
  );
}
