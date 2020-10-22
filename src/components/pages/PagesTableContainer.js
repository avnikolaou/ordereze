import { connect } from 'react-redux'
import { compose } from 'redux';
import WithSpinner from '../with-spinner/WithSpinner';
import PagesTable from './PagesTable';

const mapStateToProps = (state) => {
    return {
        isLoading: state.pages.isFetching
    }
}

const PagesTableContainer = compose(connect(mapStateToProps), WithSpinner)(PagesTable);

export default PagesTableContainer;
