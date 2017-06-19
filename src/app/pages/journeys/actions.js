import {
    CREATE_JOURNEY,
    REMOVE_JOURNEY,
    SELECT_ITINERARY
} from './action-types';


export function createJourneyFromId(id) {
    return { type: CREATE_JOURNEY,  id}
}

export function createJourneyFromBody(body)  {
    return { type: CREATE_JOURNEY, body}
}

export function selectItinerary(index) {
    return { type: SELECT_ITINERARY, index}
}