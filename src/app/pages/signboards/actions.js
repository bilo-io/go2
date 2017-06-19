import {
    FETCH_STOP_TIMETABLE,
    FETCH_LINE_TIMETABLE,
} from './action-types';


export function fetchStopTimetable(id) {
    return { type: FETCH_STOP_TIMETABLE, id }
}

export function fetchLineTimetable(id) {
    return { type: FETCH_LINE_TIMETABLE, id }
}

