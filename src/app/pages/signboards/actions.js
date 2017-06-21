import {
    SET_STOP_ID,
    SET_LINE_ID,
    FETCH_STOP_TIMETABLE,
    FETCH_STOP_TIMETABLE_SUCCESS,
    FETCH_STOP_TIMETABLE_FAILURE,
    FETCH_LINE_TIMETABLE,
    FETCH_LINE_TIMETABLE_SUCCESS,
    FETCH_LINE_TIMETABLE_FAILURE,
} from './action-types';

export const setStopId = (stopId) => {
    return {
        type: SET_STOP_ID,
        stopId
    }
}

export const setLineId = (lineId) => {
    return {
        type: SET_LINE_ID,
        lineId
    }
}

export const fetchStopTimetable = (stopId) => {
    return {
        type: FETCH_STOP_TIMETABLE,
        loading: true,
        stopId,
        stopTimetable: []
    }
}

export const receiveStopTimetable = (json) => {
    return {
        type: FETCH_STOP_TIMETABLE_SUCCESS,
        loading: false,
        
    }
}

export const fetchLineTimetable = (lineId) => {
    return {
        type: FETCH_LINE_TIMETABLE,
        loading: true,
        lineId,
        lineTimetable: []
    }
}