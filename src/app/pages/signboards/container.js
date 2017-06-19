import { connect } from 'react-redux';
import Signboards from './component';
import {
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
        fetchStopTimetable: (stopId) =>  dispatch(fetchStopTimetable(stopId)),
        fetchLineTimetable: (lineId) =>  dispatch(fetchLineTimetable(lineId))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Signboards);