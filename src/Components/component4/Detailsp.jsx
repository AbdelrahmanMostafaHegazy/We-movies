import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Detailsp() {
  // State to store person details
  const [person, setMovie] = useState({});
  // Get the detailspId from the URL params
  let { detailspId } = useParams();

  useEffect(() => {
    // Fetch person details based on detailspId
    const getProducts = async () => {
      const prodResponse = await axios.get("https://api.themoviedb.org/3/trending/person/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR2kArrFYlDYF7UV-44Zl3L5UI9sH1UgIXv9N4SrIzcIZb070ZVCbCgfR7A");
      const products = prodResponse.data.results;
      const person = products.find(element => element.id.toString() === detailspId.toString());
      setMovie(person);
    };
    getProducts();
  }, [detailspId]);

  console.log(detailspId);
  console.log(person);

  const style2 = { marginTop: '15px' };

  return (
    <div style={{ fontFamily: 'cursive' }}>
      <section className="container">
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <br />
            <br />
            {/* Display person's profile image */}
            <img src={"http://image.tmdb.org/t/p/w500" + person.profile_path} alt="" />
          </div>

          <div className='col-md-1 col-sm-12'></div>

          <div className="col-md-6 col-sm-12 text-white" style={{ position: "relative", left: "0%" }}>
            <br />
            <br />
            {/* Display person's name */}
            <h3>{person.name}</h3>

            <div>
              {/* Display person's genres */}
              {person.genres &&
                person.genres.map((genre) => (
                  <button className='btn btn-primary text-dark' style={{ marginTop: '29px', marginRight: '10px' }} key={genre.id}>{genre.name}</button>
                ))}
            </div>

            <div style={{ marginTop: '60px' }}>
              {/* Display other details about the person */}
              <h5 style={style2}>known for department: {person.known_for_department}</h5>
              <h5 style={style2}>Popularity: {person.popularity}</h5>
              <h5 style={style2}>media type: {person.media_type}</h5>
            </div>
          </div>
        </div>
      </section>
      <br /><br />
    </div>
  );
}
