import { TOGGLE_DASHBOARD_DRAWER } from '../actions/types';

const INITIAL_STATE = {
    drawer: true
}

const backPanelReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TOGGLE_DASHBOARD_DRAWER:
            return {
                ...state,
                drawer: !state.drawer
            };
        default:
            return state;
    }
}

export default backPanelReducer;
