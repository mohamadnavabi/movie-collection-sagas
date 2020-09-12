import * as types from './category.types';

export const fetchCategories = (token: string) => ({
    type: types.FETCH_CATEGORIES,
    payload: token
});

export const receiveCategories = (categories: any) => ({
    type: types.RECEIVE_CATEGORIES,
    payload: categories
});