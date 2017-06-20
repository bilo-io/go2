import {
    FETCH_STOP_TIMETABLE,
    FETCH_LINE_TIMETABLE,
} from './action-types';


export const fetchStopTimetable = (stopId) => {
    return {
        type: FETCH_STOP_TIMETABLE,
        stopId
    }
}

export const fetchLineTimetable = (lineId) => {
    return {
        type: FETCH_LINE_TIMETABLE,
        lineId
    }
}

