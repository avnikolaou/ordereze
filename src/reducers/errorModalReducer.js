import { TOGGLE_ERROR_MODAL } from "../actions/types";

const INITIAL_STATE = {
    showErrorModal: false
}

const errorModalReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TOGGLE_ERROR_MODAL:
            return {
                ...state,
                showErrorModal: !state.showErrorModal
            };
        default:
            return state;
    }
}

export default errorModalReducer;
