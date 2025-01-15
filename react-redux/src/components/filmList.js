import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function FilmList() {
    const films = useSelector((state) => state.films.films);
    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch({ type: 'REMOVE_FILM', payload: id });
    };

    const handleToggleFavorite = (id) => {
        dispatch({ type: 'TOGGLE_FAVORITE', payload: id });
    };

    return (
        <div>
            <h2>Film Listesi</h2>
            <ul>
                {films.map((film) => (
                    <li key={film.id}>
                        {film.name}
                        <button onClick={() => handleRemove(film.id)}>Sil</button>
                        <button onClick={() => handleToggleFavorite(film.id)}>
                            {film.isFavorite ? 'Favorilerden Çıkar' : 'Favorilere Ekle'}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FilmList;
