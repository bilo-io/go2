import { combineReducers } from 'redux';

import {
    CREATE_JOURNEY,
    REMOVE_JOURNEY,
    SELECT_ITINERARY,
    UPDATE_MESSAGE
} from './action-types';

const initialState = {
    loadingJourney: false,
    journeys: {
        journey: undefined,
        journeyId: undefined,
    },
    itineraries: {
        itinerary: undefined,
        itineraryIndex: undefined,
    },
    test: {
        message: 'Hello'
    }
}

function setMessage(state = initialState, action) {
    switch (action.type) {
        case 'UPDATE_MESSAGE':
            return {
                ...state,
                test: {
                    message: action.message
                }
            }
        default: return state;
    }
}

function updateJourney(state = initialState, action) {
    switch (action.type) {
        case CREATE_JOURNEY:
            let hasJourney = action.journey && action.journey.itineraries && action.journey.itineraries.length > 0;
            if (!hasJourney) break;
            return {
                ...state,
                journeys: {
                    journey: { ...action.journey },
                    journeyId: action.journey.id,
                    itinerary: (hasJourney ? action.itineraries[0] : undefined),
                    itineraryIndex: (hasJourney ? 0 : undefined)
                }
            }
        case REMOVE_JOURNEY:
            return {
                ...state,
                journeys: {
                    journey: undefined,
                    journeyId: undefined,
                    itinerary: undefined,
                    itineraryIndex: undefined
                }
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
                itineraries: {
                    itinerary: action.itinerary,
                    itineraryIndex: action.itineraryIndex
                }
            }
        default:
            return state;
    }
}

const reducer = combineReducers({
    updateJourney,
    selectItineraries,
    setMessage
})

export default reducer;