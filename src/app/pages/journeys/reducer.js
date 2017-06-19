import { combineReducers } from 'redux';

import {
    CREATE_JOURNEY,
    REMOVE_JOURNEY,
    SELECT_ITINERARY
} from './action-types';

const initialState = {
    loadingJourney: false,
    journey: undefined,
    journeyId: undefined,
    itinerary: undefined,
    itineraryIndex: undefined
}

function updateJourney(state = initialState, action) {
    switch (action.type) {
        case CREATE_JOURNEY:
            let hasJourney = action.journey.itineraries.length > 0;
            return {
                ...state,
                journey: { ...action.journey },
                journeyId: action.journey.id,
                itinerary: (hasJourney ? action.itineraries[0] : undefined),
                itineraryIndex: (hasJourney ? 0 : undefined)
            }
        case REMOVE_JOURNEY:
            return {
                ...state,
                journey: undefined,
                journeyId: undefined,
                itinerary: undefined,
                itineraryIndex: undefined
            }
        default:
            return state;
    }
}

function selectItineraries(state = initialState, action) {
    switch (action.type) {
        case SELECT_ITINERARY:
            return {
                ...state,
                itinerary: action.itinerary,
                itineraryIndex: action.itineraryIndex
            }
        default:
            return state;
    }
}

const reducer = combineReducers(
    updateJourney,
    selectItineraries
)

export default reducer;