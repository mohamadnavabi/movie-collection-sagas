import * as types from './movie.types';

// Initial State
const INITIAL_STATE: types.MovieState = {
  movies: [],
  categoryMovies: [],
  searchedMovie: []
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.RECEIVE_MOVIES:
      return {
        ...state,
        movies: action.payload
      }
    case types.RECEIVE_CATEGORY_MOVIES:
      return {
        ...state,
        categoryMovies: action.payload
      }
    case types.CLEAR_CATEGORY_MOVIES:
      return {
        ...state,
        categoryMovies: []
      }
    case types.RECEIVE_SEARCH_MOVIE:
      return {
        ...state,
        searchedMovie: action.payload
      }
    case types.CLEAR_SEARCH_MOVIE:
      return {
        ...state,
        searchedMovie: []
      }
    default:
      return state;
  }
}

export default userReducer;
