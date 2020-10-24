import {FETCH_PAGES_START, FETCH_PAGES_SUCCESS, FETCH_PAGES_FAILURE, SET_EDIT_PAGE} from '../actions/types';

const INITIAL_STATE = {
    pages: [],
    isFetching: false,
    errorMessage: '',
    editPage: []
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
        case SET_EDIT_PAGE:
            return {
                ...state,
                editPage: action.payload
            }
        default:
            return state
    }
}

export default pagesReducer;
