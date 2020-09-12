import * as types from './movie.types';

/* 
* Fetch all Movies start
*/
export const fetchMovies = (token: string) => ({
    type: types.FETCH_MOVIES,
    payload: token
});

export const receiveMovies = (movies: any) => ({
    type: types.RECEIVE_MOVIES,
    payload: movies
});

/* 
* Search Movies start
*/
export const searchMovies = (token: string, searchFor: string) => ({
    type: types.FETCH_SEARCH_MOVIE,
    payload: { token, searchFor }
});

export const receiveSearchMovies = (movies: any) => ({
    type: types.RECEIVE_SEARCH_MOVIE,
    payload: movies
});


/* 
* Fetch Movie Categories start
*/
export const fetchMovieWithCategory = (token: string, category: string) => ({
    type: types.FETCH_CATEGORY_MOVIES,
    payload: { token, category }
});

export const receiveMovieWithCategory = (movies: any) => ({
    type: types.RECEIVE_CATEGORY_MOVIES,
    payload: movies
});


/* 
* clear Movie Categories start
*/
export const clearCategoryMovies = () => ({
    type: types.CLEAR_SEARCH_MOVIE,
});