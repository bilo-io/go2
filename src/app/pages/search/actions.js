import {
    ADD_ITEM,
    SET_SEARCH_QUERY,
    FETCH_GOOGLE_RESULTS,
    FETCH_GOOGLE_RESULTS_SUCCESS,
    FETCH_GOOGLE_RESULTS_FAILURE
} from './action-types';

export const addItem = (item) => {
    return {
        type: ADD_ITEM,
        item
    }
}

export const setSearchQuery = (searchQuery) => {
    return {
        type: SET_SEARCH_QUERY,
        searchQuery
    }
}

export const searchGoogle = (searchQuery) => {
    return {
        type: FETCH_GOOGLE_RESULTS,
        loading: true,
        searchQuery,
        results: []
    }
}

export const setGoogleResults = (json) => {
    return {
        type: FETCH_GOOGLE_RESULTS_SUCCESS,
        loading: false,
        results: json
    }
}

export const errorOnResults = (error) => {
    return {
        type: FETCH_GOOGLE_RESULTS_ERROR,
        loading: false,
        results: error
    }
}