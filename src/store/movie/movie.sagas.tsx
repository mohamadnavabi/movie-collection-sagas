import { call, put, takeLatest } from 'redux-saga/effects';
import * as types from './movie.types';
import { getMovies, getMovieWithCategory, searchMovie } from '../../api/methods/movies';
import { receiveMovies, receiveMovieWithCategory, clearCategoryMovies, clearSearchMovies, receiveSearchMovies } from './movie.action';

/*
* Fetch all movies start
*/
function* fetchMovies(action) {
    try {
        const payload = action.payload;
        const response = yield call(getMovies, payload);
        yield put(receiveMovies(response));
    } catch (error) {
        yield put(receiveMovies(error));
    }
}

export function* watchFetchMovies() {
    yield takeLatest(types.FETCH_MOVIES, fetchMovies);
}


/*
* Fetch category movies start
*/
function* fetchMovieWithCategory(action) {
    try {
        const payload = action.payload;
        const response = yield call(getMovieWithCategory, payload);
        yield put(receiveMovieWithCategory(response));
    } catch (error) {
        yield put(receiveMovieWithCategory(error));
    }
}

export function* watchMovieWithCategory() {
    yield takeLatest(types.FETCH_CATEGORY_MOVIES, fetchMovieWithCategory);
}


/*
* Fetch search movies start
*/
function* fetchSearchedMovies(action) {
    try {
        const payload = action.payload;
        if (payload.searchFor.length >= 1) {
            const response = yield call(searchMovie, payload);
            yield put(receiveSearchMovies(response));
        } else {
            yield put(clearSearchMovies());
        }
    } catch (error) {
        yield put(receiveSearchMovies(error));
    }
}

export function* watchSearchedMovies() {
    yield takeLatest(types.FETCH_SEARCH_MOVIE, fetchSearchedMovies);
}
