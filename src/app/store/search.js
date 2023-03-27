import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        category: 'all',
        search: null,
        filter: 'relevance',
    },
    reducers: {
        setSearch: (state, action) => {
            state.search = action.payload;
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
        setCategory (state, action) {
            state.category = action.payload;
        }
    },
});
const { setCategory, setFilter, setSearch } = searchSlice.actions;

export const setCurrentCategory = (category) => async (dispatch) => {
    dispatch(setCategory(category));
};

export const setCurrentFilter = (filter) => async (dispatch) => {
    dispatch(setFilter(filter));
};

export const setCurrentSearch = (search) => async (dispatch) => {
    dispatch(setSearch(search));
}


export default searchSlice.reducer;
