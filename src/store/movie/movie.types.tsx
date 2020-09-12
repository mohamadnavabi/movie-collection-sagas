// Action Types
export const FETCH_MOVIES = 'FETCH_MOVIES';
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES';

export const FETCH_CATEGORY_MOVIES = 'FETCH_CATEGORY_MOVIES'
export const RECEIVE_CATEGORY_MOVIES = 'RECEIVE_CATEGORY_MOVIES'

export const FETCH_SEARCH_MOVIE = 'FETCH_SEARCH_MOVIE'
export const RECEIVE_SEARCH_MOVIE = 'RECEIVE_SEARCH_MOVIE'

export const CLEAR_CATEGORY_MOVIES = 'CLEAR_CATEGORY_MOVIES'
export const CLEAR_SEARCH_MOVIE = 'CLEAR_SEARCH_MOVIE'


// State Types
export interface MovieState {
  movies: object[],
  categoryMovies: object[],
  searchedMovie: object[]
}