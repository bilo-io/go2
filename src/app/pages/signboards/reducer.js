import {
    SET_STOP_ID,
    SET_LINE_ID,
    FETCH_STOP_TIMETABLE,
    FETCH_LINE_TIMETABLE
} from './action-types';

const initialState = {
    loading: false,
    stopId: undefined,
    stopTimetable: undefined,
    lineId: undefined,
    lineTimetable: undefined
}

const signboardsReducer = (state = initialState, {type,...action}) => {
    console.log({action});
    switch (type) {
        case SET_STOP_ID:
            return {
                ...state,
                stopId: action.stopId
            }
        case SET_LINE_ID:
            return {
                ...state,
                lineId: action.lineId
            }
        case FETCH_STOP_TIMETABLE:
            return {
                ...state,
                stopId: action.stopId,
            }
        case FETCH_LINE_TIMETABLE:
            return {
                ...state,
                lineId: action.lineId,
            }
        default:
            return state;
    }
}

export default signboardsReducer;