import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Body from '../component1/Body';

export default function People() {
  // State to store person data
  const [person, setPerson] = useState([]);

  // Function to fetch person data
  const getPerson = async () => {
    const response = await axios.get(`https://api.themoviedb.org/3/trending/person/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR2kArrFYlDYF7UV-44Zl3L5UI9sH1UgIXv9N4SrIzcIZb070ZVCbCgfR7A`);
    setPerson(response.data.results);
  };

  // Fetch person data on component mount
  useEffect(() => {
    getPerson();
  }, []);

  console.log(person);

  // Style for cards
  const style3 = { backgroundColor: 'rgb(19, 23, 34)' };

  return (
    <div className='bg' style={{ fontFamily: 'cursive' }}>
      {/* Body component */}
      <Body />
      <br /><br />
      <section className='container'>
        <div className='row'>
          {/* Map through person data and display cards */}
          {person && person.map((item) => {
            return (
              <div className='col-md-3 col-sm-6 mb-2'>
                <div className='card cardHover p-3 text-center text-white border-0' style={style3}>
                  {/* Link to person details page */}
                  <Link to={`/detailsp/${item.id}`} className='card cardHover p-3 text-center text-white border-0' style={style3}>
                    <img src={"http://image.tmdb.org/t/p/w500" + item.profile_path} alt="..." />
                  </Link>
                </div>
                <div className='text-center text-white'>
                  <h4>{item.name}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
