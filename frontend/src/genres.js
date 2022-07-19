import { useEffect, useState } from 'react'
import jQuery from 'jquery';
import './App.css';
import './genres.css';
import { Link } from 'react-router-dom'
import Header from './Header'

function Genres() {
  const [genres, setAlbums] = useState([]);

  useEffect(() => {
      jQuery.ajax({
        url: 'http://127.0.0.1:8080/backend/Genres.php',
        method: 'GET',
      }).then(response => {
        setAlbums(JSON.parse(response));
      }).catch(error => {
        console.log(error);
      })
  }, [])

  return (
      <>
      <Header></Header>
    <div className="Genres">
      {genres.map(genre => {
          return <div className='genre' key={genre.genre_name}>
          
          <p className="genres_link"><Link className='genreName' to={'../genreAlbums/'+genre.genre_id}><p className='genreName'>{genre.genre_name}</p></Link></p>
        </div>
      })}
    </div>
      </>
  );
}

export default Genres