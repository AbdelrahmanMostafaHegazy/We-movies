import React from 'react';
import Navbar from "./Components/component1/Navbar";
import Items from './Components/component1/Items';
import { Route, Routes } from 'react-router-dom';
import Details from './Components/component3/Details';
import TvShows from './Components/component2/TvShows';
import People from './Components/component4/People';
import Home from './Components/component3/Home';
import Detailsp from './Components/component4/Detailsp';
import DetailsTvShow from './Components/component2/DetailsTvShow';
import Footer from './Components/component1/Footer';

export default function App() {
  return (
    <div className="bg">
      {/* Navbar component */}
      <Navbar />
      <>
        {/* Routes for different pages */}
        <Routes>
          <Route path='/' element={<Home />} /> {/* Home page */}
          <Route path='/items' element={<Items />} /> {/* Items page */}
          {/* Details page */}
          <Route path='/details' element={<Details />} />
          <Route path="/details/:id" element={<Details />} /> {/* Individual detail page */}
          <Route path='/tvshows' element={<TvShows />} /> {/* TV Shows page */}
          {/* DetailsTvShow page */}
          <Route path='/detailstvshow' element={<DetailsTvShow />} />
          <Route path="/detailstvshow/:detailsTvShowId" element={<DetailsTvShow />} /> {/* Individual detail page */}
          <Route path='/people' element={<People />} /> {/* People page */}
          {/* Detailsp page */}
          <Route path='/detailsp' element={<Detailsp />} />
          <Route path="/detailsp/:detailspId" element={<Detailsp />} /> {/* Individual detail page */}
        </Routes>
        {/* Footer component */}
        <Footer />
      </>
    </div>
  );
}
