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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Journeys)