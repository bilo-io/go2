import { connect } from 'react-redux';
import { setSomeMessage } from './actions';
import Journeys from './component';

const mapStateToProps = (state, ownProps) => {
    return {
        message: state.message
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: (message) => {
            dispatch(setSomeMessage(message))
        }
    }
}

const VisibleMessage = connect(
    mapStateToProps,
    mapDispatchToProps
)(Journeys)

export default Journeys;