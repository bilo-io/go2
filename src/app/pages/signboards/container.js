import { connect } from 'react-redux';
import Signboards from './component';

const mapStateToProps = (state, ownProps) => {
    return {
        message: state.message
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: (message) => {
            dispatch(console.log('Hello'))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Signboards);