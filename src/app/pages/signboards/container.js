import { connect } from 'react-redux';
import component from './component';
import {
    setStopId,
    setLineId,
    fetchStopTimetable,
    fetchLineTimetable
} from './actions';

const mapStateToProps = (state, ownProps) => {
    return {
        stopId: state.stopId,
        lineId: state.lineId
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
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

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Signboards);