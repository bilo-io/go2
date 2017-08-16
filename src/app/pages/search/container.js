import { connect } from 'react-redux';
import component from './component';
import {
    addItem,
    setSearchQuery,
    searchGoogle,
} from './actions';

const mapStateToProps = (state) => {
    return {
        items: state.items,
        searchQuery: state.searchQuery
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (val) => {dispatch(addItem(val))},
        setSearchQuery: (val) => dispatch(setSearchQuery(val)),
        searchGoogle: (val) => dispatch(searchGoogle(val)),
    }
}

const Search = connect(
    mapStateToProps,
    mapDispatchToProps
)(component);

export default Search;