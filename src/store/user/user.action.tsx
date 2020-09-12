import * as types from './user.types';

export const fetchLogin = (username: string, password: string) => ({
    type: types.START_LOGIN,
    payload: { username, password }
})

export const receiveLogin = (user: any) => ({
    type: types.SUCCESS_LOGIN,
    payload: user
})
