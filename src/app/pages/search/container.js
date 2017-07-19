import { connect } from 'react-redux';
import component from './component';
import {
    setSearchQuery,
    searchGoogle,
} from './actions';

const mapStateToProps = (state) => {
    return {
        searchQuery: state.search.searchQuery
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setSearchQuery: (val) => dispatch(setSearchQuery(val)),
        searchGoogle: (val) => dispatch(searchGoogle(val)),
    }
}

const Search = connect(
    mapStateToProps,
    mapDispatchToProps
)(component);

export default Search;

