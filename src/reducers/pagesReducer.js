import { FETCH_PAGES_START, FETCH_PAGES_SUCCESS, FETCH_PAGES_FAILURE } from '../actions/types';

const INITIAL_STATE = {
    pages: null,
    isFetching: false,
    errorMessage: ''
}

const pagesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_PAGES_START:
            return {
                ...state,
                isFetching: true
            }
        case FETCH_PAGES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                pages: action.payload
            }
        case FETCH_PAGES_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        default:
            return state
    }
}

export default pagesReducer;