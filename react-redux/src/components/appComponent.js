import React from 'react';
import AddFilm from "./addFilm";
import FilmList from "./filmList";
import FavoritesList from "./favList";
import '../style.css';

function App() {
    return (
        <div className="container">
            <h1>Film Detay Sitesi</h1>
            <AddFilm/>
            <FilmList/>
            <FavoritesList/>
        </div>
    );
}

export default App;
