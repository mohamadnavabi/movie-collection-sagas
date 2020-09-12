import { call, put, takeLatest } from 'redux-saga/effects';
import * as types from './user.types';
import { loginUser } from '../../api/methods/user';
import { receiveLogin } from './user.action';
import notify from '../../utils/notify';

// login user
function* startLogin(action) {
    try {
        const payload = action.payload;
        const response = yield call(loginUser, payload);

        // if uncorrected login! send an error to the user
        console.log(response)
        if (response.hasOwnProperty('non_field_errors')) {
            response.non_field_errors.map(x => notify(x))
        }

        yield put(receiveLogin(response));
    } catch (error) {
        yield put(receiveLogin(error));
    }
}

export function* watchStartlogin() {
    yield takeLatest(types.START_LOGIN, startLogin);
}