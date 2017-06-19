import {
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

const signboardsReducer = (state = initialState, action) => {
    console.log(action.type);
    console.log({state});
    
    switch (action.type) {
        case FETCH_STOP_TIMETABLE:
            return {
                ...state,
                stopId: state.stopId,
            }
        case FETCH_LINE_TIMETABLE:
            return {
                ...state,
                lineId: state.lineId,
            }
        default:
            return state;
    }
}

export default signboardsReducer;