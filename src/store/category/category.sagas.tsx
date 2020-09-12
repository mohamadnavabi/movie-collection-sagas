import { call, put, takeLatest } from 'redux-saga/effects';
import * as types from './category.types';
import { getCategories } from '../../api/methods/categories';
import { receiveCategories } from './category.action';

// Fetch all categories
function* fetchCategories(action) {
    try {
        const payload = action.payload;
        const response = yield call(getCategories, payload);
        yield put(receiveCategories(response));
    } catch (error) {
        yield put(receiveCategories(error));
    }
}

export function* watchFetchCategories() {
    yield takeLatest(types.FETCH_CATEGORIES, fetchCategories);
}