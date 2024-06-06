import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Define a functional component named DetailsTvShow
export default function DetailsTvShow() {
  // State to store the details of the TV show
  const [show, setMovie] = useState({});
  // Retrieve the TV show ID from the URL parameters
  let { detailsTvShowId } = useParams();

  useEffect(() => {
    // Function to fetch TV shows from the API
    const getProducts = async () => {
      // Fetching TV shows trending for the day
      const prodResponse = await axios.get("https://api.themoviedb.org/3/trending/tv/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR2kArrFYlDYF7UV-44Zl3L5UI9sH1UgIXv9N4SrIzcIZb070ZVCbCgfR7A");
      const products = prodResponse.data.results;
      // Finding the TV show with the specified ID
      const show = products.find(element => element.id.toString() === detailsTvShowId.toString());
      // Setting the state with the found TV show
      setMovie(show);
    }
    getProducts();
  }, [detailsTvShowId]); // Dependency array to re-run the effect when the TV show ID changes

  // Inline style for margin top
  const style2 = { marginTop: '15px' };

  return (
    <div style={{ fontFamily: 'cursive' }}>
      <section className="container">
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <br />
            <br />
            {/* Displaying the TV show poster */}
            <img src={"http://image.tmdb.org/t/p/w500" + show.poster_path} alt="" />
          </div>

          <div className='col-md-1 col-sm-12'></div>

          <div className="col-md-6 col-sm-12 text-white" style={{ position: "relative", left: "0%" }}>
            <br />
            <br />
            {/* Displaying the TV show name */}
            <h3>{show.name}</h3>

            <div>
              {/* Displaying genres */}
              {show.genres &&
                show.genres.map((genre) => (
                  <button className='btn btn-primary text-dark' style={{ marginTop: '29px', marginRight: '10px' }} key={genre.id}>{genre.name}</button>
                ))}
            </div>

            <div style={{ marginTop: '60px' }}>
              {/* Displaying additional details */}
              <h5 style={style2}>Media type: {show.media_type}</h5>
              <h5 style={style2}>Popularity: {show.popularity}</h5>
              <h5 style={style2}>Vote Average: {show.vote_average}</h5>
              <h5 style={style2}>Vote Count: {show.vote_count}</h5>
              <h5 style={style2}>First air date: {show.first_air_date}</h5>
            </div>
          </div>
        </div>
      </section>
      <br /><br />
    </div>
  );
}
