import {
    CREATE_JOURNEY,
    REMOVE_JOURNEY,
    SELECT_ITINERARY
} from './action-types';

const initialState = {
    loading: false,
    journeys: {
        journey: undefined,
        journeyId: undefined,
        itinerary: undefined,
        itineraryIndex: undefined,
    }
}

const journeysReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_JOURNEY:
            let hasJourney = action.journey && action.journey.itineraries && action.journey.itineraries.length > 0;
            if (!hasJourney) break;
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

export default journeysReducer;