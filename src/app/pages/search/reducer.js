import {
    SET_SEARCH_QUERY,
    FETCH_GOOGLE_RESULTS,
    FETCH_GOOGLE_RESULTS_SUCCESS,
    FETCH_GOOGLE_RESULTS_FAILURE
} from './action-types';

const initialState = {
    loading: false,
    results: undefined,
    searchQuery: undefined,
}

const searchReducer = (state = initialState, { type, ...action }) => {
    switch (type) {
        case SET_SEARCH_QUERY:
            return {
                ...state,
                searchQuery: action.searchQuery
            }
        case FETCH_GOOGLE_RESULTS:
            return {
                ...state,
                searchQuery: action.searchQuery,
                loading: true
            }
        case FETCH_GOOGLE_RESULTS_SUCCESS:
            return {
                ...state,
                loading: false,
                results: action.results
            }
        case FETCH_GOOGLE_RESULTS_FAILURE:
            return {
                ...state,
                loading: false,
                results: action.results
            }
        default:
            return state;
    }
}

export default searchReducer;