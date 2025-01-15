import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function FavoritesList() {
    const favorites = useSelector((state) => state.films.favorites);
    const films = useSelector((state) => state.films.films);
    const dispatch = useDispatch();

    const favoriteFilms = films.filter(film => favorites.includes(film.id));

    return (
        <div>
            <h2>Favori Filmler</h2>
            <ul>
                {favoriteFilms.map((film) => (
                    <li key={film.id}>
                        {film.name}
                        <button onClick={() => dispatch({ type: 'TOGGLE_FAVORITE', payload: film.id })}>
                            Favorilerden Çıkar
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FavoritesList;
