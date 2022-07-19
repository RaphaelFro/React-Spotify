import AllAlbums from './albums'
import Albums from './tracks'
import App from './App'
import Artists from './artists'
import ReactDOM from 'react-dom'
import React from 'react'
import Discography from './discography'
import Genres from './genres'
import GenreAlbums from './genreAlbums'


import {
  Routes, Route, BrowserRouter
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Albums/:allAlbum" element={<AllAlbums />} />
        <Route path="/Artists/" element={<Artists />} />
        <Route path="/discography/:albumId" element={<Discography />} />
        <Route path="/Genres/" element={<Genres />} />

        {/* <Route path="/artist/:id" element={<Artists />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
