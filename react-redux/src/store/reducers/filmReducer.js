const initialState = {
  films: [],
  favorites: [],
};

function filmReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_FILM':
      return { ...state, films: [...state.films, action.payload] };
    case 'REMOVE_FILM':
      return { ...state, films: state.films.filter(film => film.id !== action.payload) };
    case 'TOGGLE_FAVORITE':
      const isFavorite = state.favorites.includes(action.payload);
      return {
        ...state,
        favorites: isFavorite
            ? state.favorites.filter(id => id !== action.payload)
            : [...state.favorites, action.payload],
      };
    default:
      return state;
  }
}

export default filmReducer;
