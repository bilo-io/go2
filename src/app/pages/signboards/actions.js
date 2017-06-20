import {
    SET_STOP_ID,
    SET_LINE_ID,
    FETCH_STOP_TIMETABLE,
    FETCH_LINE_TIMETABLE,
} from './action-types';


export const setStopId = (stopId) => {
    return {
        type: SET_STOP_ID,
        stopId
    }
}

export const fetchStopTimetable = (stopId) => {
    return dispatch({
        type: FETCH_STOP_TIMETABLE,
        stopId
    })
}

export const setLineId = (lineId) => {
    return {
        type: SET_LINE_ID,
        lineId
    }
}

export const fetchLineTimetable = (lineId) => {
    return {
        type: FETCH_LINE_TIMETABLE,
        lineId
    }
}

