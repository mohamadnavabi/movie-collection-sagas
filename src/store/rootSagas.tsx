import { all, fork } from 'redux-saga/effects';
import { watchFetchCategories } from './category/category.sagas';
import {
    watchFetchMovies,
    watchMovieWithCategory,
    watchSearchedMovies
} from './movie/movie.sagas';
import { watchStartlogin } from './user/user.sagas';

export default function* rootSaga() {
    yield all([
        fork(watchFetchCategories),
        fork(watchFetchMovies),
        fork(watchMovieWithCategory),
        fork(watchSearchedMovies),
        fork(watchStartlogin),
    ]);
}
