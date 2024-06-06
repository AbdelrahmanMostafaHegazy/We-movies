import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../images/sawx.jpg';
import img2 from '../images/the other zoey.jpg';
import img3 from '../images/old dads.jpg';

// Define an array of movies
const movies = [
  { id: 1, title: 'Saw X', img: img1, genre: 'Horror', year: 2023 },
  { id: 2, title: 'The Other Zoey', img: img2, genre: 'Romance', year: 2023 },
  { id: 3, title: 'Old Dads', img: img3, genre: 'Comedy', year: 2023 },
  // Add more movies as needed
];

export default function Home() {
  // State to keep track of selected genre
  const [selectedGenre, setSelectedGenre] = useState('All');

  // Function to handle genre change
  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value);
  };

  // Filter movies based on selected genre
  const filteredMovies = selectedGenre === 'All' ? movies : movies.filter(movie => movie.genre === selectedGenre);

  // Inline styles
  const somemargin = { marginLeft: '100px' };
  const somepadding = { paddingLeft: '60px', paddingRight: '60px' };

  return (
    <div className="container text-white" style={{ paddingBottom: '50px' }}>

      {/* Header Section */}
      <div className="row mt-5">
        <div className="col-12">
          <h1 className="text-center fs-1">We Movie</h1>
          <div style={somemargin}>
            <h2><b>Movies</b></h2>
            <p>Movies move us like nothing else can, whether they’re scary, funny,
              dramatic, romantic or anywhere in-between. So many titles, so much to experience.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Movie Section */}
      <div className="row my-5">
        <div className="col-12 text-center">
          <h2>Featured Movie</h2>
          <div className="card bg-dark text-white mx-auto" style={{ maxWidth: '700px' }}>
            <img src={img1} className="card-img" alt="Saw X" />
            <div className="card-img-overlay d-flex flex-column justify-content-end">
              <h5 className="card-title">Saw X</h5>
              <p className="card-text">Experience the terror of Saw X, the latest installment in the legendary horror franchise.</p>
              <button className="btn btn-primary">Watch Now</button>
            </div>
          </div>
        </div>
      </div>

      {/* Browse Movies Section */}
      <div className="row my-5">
        <div className="col-12 text-center">
          <h2>Browse Movies</h2>
          <div className="form-group">
            <label htmlFor="genreSelect">Filter by Genre:</label>
            {/* Dropdown to select genre */}
            <select id="genreSelect" className="form-select w-25 mx-auto" value={selectedGenre} onChange={handleGenreChange}>
              <option value="All">All</option>
              <option value="Horror">Horror</option>
              <option value="Romance">Romance</option>
              <option value="Comedy">Comedy</option>
              {/* Add more genres as needed */}
            </select>
          </div>
          {/* Display filtered movies */}
          <div className="row mt-4">
            {filteredMovies.map(movie => (
              <div className="col-md-4 mb-4" key={movie.id}>
                <div className="card bg-dark text-white h-100">
                  <img src={movie.img} className="card-img-top" alt={movie.title} />
                  <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="card-text">Genre: {movie.genre}</p>
                    <p className="card-text">Year: {movie.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* More to Watch Section */}
      <div className="col-12 text-center">
        <h2>There’s even more to watch.</h2>
        <h4>
          We Movie has an extensive library of feature films, documentaries, TV
          shows, anime, award-winning We Movie originals, and more. Watch as
          much as you want, anytime you want.
        </h4>
        <button className="btn btn-primary fs-5 mt-3" style={somepadding}>Join Now</button>
      </div>

      {/* User Reviews Section */}
      <div className="row my-5">
        <h2 className='mb-4 text-center'>User Reviews</h2>
        <div className="col-12 text-center">
          {/* Sample user reviews */}
          <div className="card text-light bg-dark mb-3" style={{ maxWidth: '18rem', display: 'inline-block', margin: '0 10px' }}>
            <div className="card-header">John Doe</div>
            <div className="card-body">
              <h5 className="card-title">Great Movies!</h5>
              <p className="card-text">I loved the selection of movies available. Highly recommend!</p>
            </div>
          </div>
          <div className="card text-light bg-dark mb-3" style={{ maxWidth: '18rem', display: 'inline-block', margin: '0 10px' }}>
            <div className="card-header">Jane Smith</div>
            <div className="card-body">
              <h5 className="card-title">Amazing Experience</h5>
              <p className="card-text">The user interface is so intuitive and easy to use. Great job!</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
