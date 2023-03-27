import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import books from './books';
import search from './search';

const rootReducer = combineReducers({
    books: books,
    search: search
});

        
export function createStore() {
    return configureStore({
        reducer: rootReducer,
    });
}
