import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <div className="nav-cont">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png" alt="logo" />
                <div className="nav-bar">
                    <a href="/">Home</a>
                    <a href="Search">Search</a>
                    <Link to='/albums/allAlbum' id="select">Albums</Link>
                    <Link to='/artists' id='select'>Artists</Link>
                    <Link to='/genres' id="select">Genres</Link>
                </div>
            </div>
        </div>
    );
}

export default Header;