import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function AddFilm() {
    const [name, setName] = useState('');
    const dispatch = useDispatch();

    const handleAdd = () => {
        const newFilm = { id: Date.now(), name, isFavorite: false };
        dispatch({ type: 'ADD_FILM', payload: newFilm });
        setName('');
    };

    return (
        <div>
            <h2>Film Ekle</h2>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Film adı"
            />
            <button onClick={handleAdd}>Ekle</button>
        </div>
    );
}

export default AddFilm;
