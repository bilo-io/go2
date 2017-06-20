import { connect } from 'react-redux';
import component from './component';
import {
    setStopId,
    setLineId,
    fetchStopTimetable,
    fetchLineTimetable
} from './actions';

const mapStateToProps = (state) => {
    return {
        stopId: state.signboards.stopId,
        lineId: state.signboards.lineId
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setStopId: (val) => dispatch(setStopId(val)),
        setLineId: (val) => dispatch(setLineId(val)),
        fetchStopTimetable: (stopId) =>  dispatch(fetchStopTimetable(stopId)),
        fetchLineTimetable: (lineId) =>  dispatch(fetchLineTimetable(lineId))
    }
}

const Signboards = connect(
    mapStateToProps,
    mapDispatchToProps
)(component);

export default Signboards;

