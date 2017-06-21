import {
    SET_STOP_ID,
    SET_LINE_ID,
    FETCH_STOP_TIMETABLE,
    FETCH_STOP_TIMETABLE_SUCCESS,
    FETCH_STOP_TIMETABLE_FAILURE,
    FETCH_LINE_TIMETABLE,
    FETCH_LINE_TIMETABLE_SUCCESS,
    FETCH_LINE_TIMETABLE_FAILURE
} from './action-types';

const initialState = {
    loading: false,
    stopId: undefined,
    stopTimetable: undefined,
    lineId: undefined,
    lineTimetable: undefined
}

const signboardsReducer = (state = initialState, { type, ...action }) => {
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
                loading: true
            }
        case FETCH_STOP_TIMETABLE_SUCCESS:
            return {
                ...state,
                loading: false,
                stopId: action.stopId,
                stopTimetable: action.stopTimetable
            }
        case FETCH_STOP_TIMETABLE_FAILURE:
            return {
                ...state,
                loading: false,
                stopId: action.stopId,
                stopTimetable: []
            }
        case FETCH_LINE_TIMETABLE:
            return {
                ...state,
                lineId: action.lineId,
                loading: true
            }
        default:
            return state;
    }
}

export default signboardsReducer;